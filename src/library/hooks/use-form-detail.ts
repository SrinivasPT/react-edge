import { FormInit, FormState } from '@lib/types';
import { useAddFormMutation, useDeleteFormMutation, useUpdateFormMutation } from '@store/api/form-config-api';
import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFormDetail = ({ entityName, id, initialData, isInitialDataLoaded }: FormInit) => {
    const [addForm] = useAddFormMutation();
    const [updateForm] = useUpdateFormMutation();
    const [deleteForm] = useDeleteFormMutation();
    const mutationFns = { add: addForm, update: updateForm, delete: deleteForm };

    const formData: FormState = useSelector((store: any) => store.form.data);
    const [isFormReady, setIsFormReady] = useState(false);
    const dispatch = useAppDispatch();

    const handleSave = async (event: any) => {
        event.preventDefault();
        const mode = id === 'new' ? 'add' : 'update';
        const payload: any = formData;

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

    return { isFormReady, handleSave, handleDelete };
};

export default useFormDetail;
