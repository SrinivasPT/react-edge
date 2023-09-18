'use client';

import { useAllControlsQuery } from '@store/api/control-master-api';
import { useDomainQuery } from '@store/api/domain-api';
import { useAllFormsQuery } from '@store/api/form-config-api';

const Init = (prop: any) => {
    const { isLoading: isFormConfigLoading, isSuccess: isFormConfigSuccess } = useAllFormsQuery(null);
    const { isLoading: isDomainLoading, isSuccess: isDomainSuccess } = useDomainQuery(null);
    const { isLoading: isControlMasterLoading, isSuccess: isControlMasterSuccess } = useAllControlsQuery(null);

    if (isFormConfigLoading || isDomainLoading || isControlMasterLoading) return <>Application is Loading...</>;

    if (isFormConfigSuccess && isDomainSuccess && isControlMasterSuccess) return <div className="flex flex-wrap">{prop.children}</div>;

    return <>Default Component...</>;
};

export default Init;
