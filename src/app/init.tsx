'use client';

import { useDomainQuery } from '@store/api/domain-api';
import { useAllFormsQuery } from '@store/api/form-config-api';

const Init = (prop: any) => {
    const { isLoading: isFormConfigLoading, isSuccess: isFormConfigSuccess } = useAllFormsQuery(null);
    const { isLoading: isDomainLoading, isSuccess: isDomainSuccess } = useDomainQuery(null);

    if (isFormConfigLoading || isDomainLoading) return <>Application is Loading...</>;

    if (isFormConfigSuccess && isDomainSuccess) return <div className="flex flex-wrap">{prop.children}</div>;

    return <>Default Component...</>;
};

export default Init;
