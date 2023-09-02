'use client';

import { SectionBuilder } from '@lib/builders';
import SmartControl from '@lib/builders/smart-control';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useGetFormByIdQuery } from '@store/api/form-config-api';

const Page = ({ params }: { params: { id: string } }) => {
    const { isSuccess, data } = useGetFormByIdQuery({ id: params.id });
    const { isFormReady, printState } = useFormDetail({ entity: 'form', id: params.id, data, isSuccess });

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.id}</h1>
            <SectionBuilder formId="form" sectionId="form" />
            <SectionBuilder formId="form" sectionId="sections" />
            <SmartControl formId="form" configKey="sections[2].controls[0]" parentKey="form.sections[1].controls[0].controls" />
            <button onClick={printState}>PRINT</button>
        </PageLayout>
    );
};

export default Page;
