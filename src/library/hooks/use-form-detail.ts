import { FormState } from '@lib/types';
import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFormDetail = ({ entity, id, data, isSuccess }: { entity: string; id: string; data: any; isSuccess: boolean }) => {
    const dispatch = useAppDispatch();
    const formData: FormState = useSelector((store: any) => store.form.data);
    const [isFormReady, setIsFormReady] = useState(false);

    useEffect(() => {
        setIsFormReady(false);
        dispatch(reset());
    }, [id]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setFormDetail({ key: entity, value: data }));
            setIsFormReady(true);
        }
    }, [isSuccess]);

    const printState = () => {
        console.log(formData);
    };

    return { isFormReady, printState };
};

export default useFormDetail;
