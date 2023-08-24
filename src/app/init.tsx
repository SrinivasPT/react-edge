'use client';

import { useAllFormsQuery } from '@store/api/form-config-api';

const Init = (prop: any) => {
    const { isLoading, isSuccess, data } = useAllFormsQuery(null);

    if (isLoading) return <>Application is Loading...</>;

    if (isSuccess) return <div className="flex flex-wrap">{prop.children}</div>;

    return <>Default Component...</>;
};

export default Init;
