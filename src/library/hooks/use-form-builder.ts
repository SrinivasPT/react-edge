import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { IFormActions } from '@lib/sections/form-actions-context';
import { FormConfig, Section } from '@lib/types';
import { useAddFormMutation, useDeleteFormMutation, useUpdateFormMutation } from '@store/api/form-config-api';
import { addToArray, removeFlag, setFlag, setValue } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const useFormBuilder = () => {
    const params = useParams();
    const router = useRouter();
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

    const addControlsToSection = (formId: string, sectionId: string) => {
        const selectedRecords = internalState.table['internal-temp-all-master-controls-controlMaster'].selectedRecords;
        const selectedControls = selectedRecords.map((record: any) => ({ masterId: record }));

        const sectionIndex = formData?.sections?.findIndex((section: Section) => section.id === params.sectionId);
        dispatch(addToArray({ key: `data.sections[${sectionIndex}].controls`, value: selectedControls }));
        closeAddControlsModal();
    };

    const closeAddControlsModal = () => {
        dispatch(removeFlag({ key: 'showAddControls' }));
        dispatch(setValue({ key: `internal.table.internal-temp-all-master-controls-controlMaster.selectedRecords`, value: [] }));
    };

    const handleSave = async (event: any) => {
        // event.preventDefault();

        const mode = formData.id === 'new' ? 'add' : 'update';
        const payload: any = getPayload(mode);

        try {
            const response: any = await mutationFns[mode](payload);
            if (params.formId === 'new') router.push(`/admin/form-builder/${formData.id}`);
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
        'page-actions': [
            { controlId: '', code: 'save', label: 'Save', handler: handleSave },
            { controlId: '', code: 'delete', label: 'Reset', handler: handleDelete },
        ],
    };

    return { actions, handleSave, handleDelete, addControlsToSection, closeAddControlsModal };
};

export default useFormBuilder;
