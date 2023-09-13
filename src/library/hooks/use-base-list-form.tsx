import { setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useState } from 'react';

const useBaseListForm = (queryHook: any, queryArg?: any) => {
    const { isSuccess, data } = queryHook(queryArg);
    const [isFormReady, setIsFormReady] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setFormDetail({ initialData: data }));
            setIsFormReady(true);
        }
    }, [isSuccess, data, dispatch]);

    return { isFormReady };
};

export default useBaseListForm;
