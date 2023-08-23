'use client';

import { useAllFormsQuery } from '@store/api/form-config-api';

const Init = (prop: any) => {
    const { isLoading, isSuccess, data } = useAllFormsQuery(null);

    if (isLoading) return <div>Application is Loading...</div>;

    if (isSuccess) return <div>{prop.children}</div>;

    return <div>Default Component...</div>;
};

export default Init;
