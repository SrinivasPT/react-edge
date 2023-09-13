import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { FormState } from '@lib/types';
import { useDeleteControlMutation, useGetControlByMasterIdQuery, useUpdateControlMutation } from '@store/api/control-master-api';
import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useControlMasterDetail = (id: string) => {
    const router = useRouter();
    // Get the data from the server
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetControlByMasterIdQuery({ masterId: id });

    // Once the data is loaded, and set in the form then make the form ready
    const [isFormReady, setIsFormReady] = useState(false);
    const dispatch = useAppDispatch();

    // Prepare the form actions
    const [updateControl] = useUpdateControlMutation();
    const [deleteControl] = useDeleteControlMutation();
    const mutationFns = { add: () => null, update: updateControl, delete: deleteControl };

    // Selector to get teh form state from the store
    const formData: FormState = useSelector((store: any) => store.form.data);

    // Reset the form is if the ID changes
    useEffect(() => {
        setIsFormReady(false);
        dispatch(reset());
    }, [id]);

    // Set the form data once the initial data is loaded
    useEffect(() => {
        if (isInitialDataLoaded) {
            dispatch(setFormDetail({ initialData: initialData[0] }));
            setIsFormReady(true);
        }
    }, [isInitialDataLoaded]);

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

    const actions: IButtonPallet[] = [
        { code: 'BACK', label: 'To List', handler: () => router.push('/admin/control-master') },
        { code: 'SAVE', label: 'Save', handler: () => console.log('save') },
        { code: 'DELETE', label: 'Reset', handler: () => console.log('delete') },
    ];

    return { isFormReady, actions, handleSave, handleDelete };
};

export default useControlMasterDetail;
