'use client';

import useGenericForm from '@hooks/use-generic-form';
import { PageBuilder } from '@lib/builders';
import { PageLayout } from '@lib/layout';

const Page = () => {
    const { entityName, id, formConfig, isFormReady } = useGenericForm();

    if (!isFormReady) return <div>Loading...</div>;

    return (
        <PageLayout title={formConfig?.title}>
            <PageBuilder formId={entityName} />
        </PageLayout>
    );
};

export default Page;
