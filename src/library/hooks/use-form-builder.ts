import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { IFormActions } from '@lib/sections/form-actions-context';
import { FormConfig } from '@lib/types';
import { useAddFormMutation, useDeleteFormMutation, useUpdateFormMutation } from '@store/api/form-config-api';
import { addToArray, removeFlag, setFlag } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const useFormBuilder = () => {
    const params = useParams();
    const [addForm] = useAddFormMutation();
    const [updateForm] = useUpdateFormMutation();
    const [deleteForm] = useDeleteFormMutation();
    const mutationFns = { add: addForm, update: updateForm, delete: deleteForm };

    const formData: FormConfig = useSelector((store: any) => store.form.data);
    const internalState = useSelector((store: any) => store.form.internal);
    const dispatch = useAppDispatch();

    const addSection = (action: IButtonPallet) => {
        console.log(`Add section called from section button pallet ${JSON.stringify(action)})}`);
    };

    const actions: IFormActions = {
        'section-list-tabular': [{ controlId: 'section-list-tabular', code: 'ADD', label: 'Add', handler: addSection }],
        'section-control-list-tabular': [
            {
                controlId: 'section-list-tabular',
                code: 'ADD',
                label: 'Add Controls',
                handler: () => dispatch(setFlag({ key: 'showAddControls' })),
            },
        ],
    };

    const addControlsToSection = (formId: string, sectionId: string) => {
        const selectedRecords = internalState.table['internal-temp-all-master-controls-controlMaster'].selectedRecords;
        const selectedControls = selectedRecords.map((record: any) => ({ masterId: record }));
        dispatch(removeFlag({ key: 'showAddControls' }));
        dispatch(addToArray({ key: `data.forms.${formId}.sections.${sectionId}.controls`, value: selectedControls }));
    };

    const handleSave = async (event: any) => {
        // event.preventDefault();

        const mode = formData.id === 'new' ? 'add' : 'update';
        const payload: any = getPayload(mode);

        try {
            const response: any = await mutationFns[mode](payload);
            console.log('Operation successful:', response.data);
        } catch (error) {
            console.error('Operation failed:', error);
        }
    };

    const handleDelete = async (event: any) => {
        event.preventDefault();

        try {
            const response: any = await mutationFns['delete'](formData.id);
            console.log('Operation successful:', response.data);
        } catch (error) {
            console.error('Operation failed:', error);
        }
    };

    const getPayload = (mode: string) => {
        const { formId, sectionId, controlId } = params;
        const updateLevel = controlId ? 'CONTROL' : sectionId ? 'SECTION' : formId ? 'FORM' : 'Unknown';

        let sanitizedFormData = {};
        // if (!formData?.sections) sanitizedFormData = { ...formData, sections: [] };
        sanitizedFormData = { ...formData };
        return mode === 'add' ? { newConfig: sanitizedFormData } : { id: formData.id, changes: sanitizedFormData };
    };

    return { actions, handleSave, handleDelete, addControlsToSection };
};

export default useFormBuilder;
