import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { IFormActions } from '@lib/sections/form-actions-context';
import { FormConfig, FormInit } from '@lib/types';
import { useAddFormMutation, useDeleteFormMutation, useUpdateFormMutation } from '@store/api/form-config-api';
import { reset, setFlag, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFormBuilder = ({ entityName, id, initialData, isInitialDataLoaded }: FormInit) => {
    const params = useParams();
    const [addForm] = useAddFormMutation();
    const [updateForm] = useUpdateFormMutation();
    const [deleteForm] = useDeleteFormMutation();
    const mutationFns = { add: addForm, update: updateForm, delete: deleteForm };
    const [showAddControls, setShowAddControls] = useState(false);

    const formData: FormConfig = useSelector((store: any) => store.form.data);
    const [isFormReady, setIsFormReady] = useState(false);
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

    const handleSave = async (event: any) => {
        // event.preventDefault();

        const mode = id === 'new' ? 'add' : 'update';
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
            const response: any = await mutationFns['delete'](id);
            console.log('Operation successful:', response.data);
        } catch (error) {
            console.error('Operation failed:', error);
        }
    };

    useEffect(() => {
        setIsFormReady(false);
        dispatch(reset());
    }, [id]);

    useEffect(() => {
        if (isInitialDataLoaded) {
            dispatch(setFormDetail({ initialData }));
            setIsFormReady(true);
        }
    }, [isInitialDataLoaded]);

    const getPayload = (mode: string) => {
        const { formId, sectionId, controlId } = params;
        const updateLevel = controlId ? 'CONTROL' : sectionId ? 'SECTION' : formId ? 'FORM' : 'Unknown';

        let sanitizedFormData = {};
        // if (!formData?.sections) sanitizedFormData = { ...formData, sections: [] };
        sanitizedFormData = { ...formData };
        return mode === 'add' ? { newConfig: sanitizedFormData } : { id: formData.id, changes: sanitizedFormData };
    };

    return { isFormReady, actions, handleSave, handleDelete, showAddControls };
};

export default useFormBuilder;
