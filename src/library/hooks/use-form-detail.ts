import { reset, setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';

const useFormDetail = ({ entity, id, data, isSuccess }: { entity: string; id: string; data: any; isSuccess: boolean }) => {
    const dispatch = useAppDispatch();
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

    return { isFormReady };
};

export default useFormDetail;
