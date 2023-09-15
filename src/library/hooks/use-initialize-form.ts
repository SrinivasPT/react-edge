import { FormInit } from '@lib/types';
import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';

const useInitializeForm = ({ id, initialData, isInitialDataLoaded }: FormInit) => {
    const [isFormReady, setIsFormReady] = useState(false);
    const dispatch = useAppDispatch();

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

    return { isFormReady };
};

export default useInitializeForm;
