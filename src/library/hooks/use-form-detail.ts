import { FormInit, FormState } from '@lib/types';
import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFormDetail = ({ entityName, id, initialData, isInitialDataLoaded, mutationFns }: FormInit) => {
    const dispatch = useAppDispatch();
    const formData: FormState = useSelector((store: any) => store.form.data);
    const [isFormReady, setIsFormReady] = useState(false);

    const handleSave = async (event: any) => {
        event.preventDefault();
        const mode = id ? 'update' : 'add';
        const payload = id ? { id, formData } : { formData };

        try {
            const response = await mutationFns[mode](payload);
            console.log('Operation successful:', response.data);
        } catch (error) {
            console.error('Operation failed:', error);
        }
    };

    const handleDelete = async (event: any) => {
        event.preventDefault();

        try {
            const response = await mutationFns['delete'](id);
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
            dispatch(setFormDetail({ key: entityName, initialData }));
            setIsFormReady(true);
        }
    }, [isInitialDataLoaded]);

    return { isFormReady, handleSave, handleDelete };
};

export default useFormDetail;
