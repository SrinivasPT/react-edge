'use client';

import { SectionBuilder } from '@lib/builders';
import useControlMasterDetail from '@lib/hooks/use-control-master-detail';
import { PageLayout } from '@lib/layout';

const Page = ({ params }: { params: { controlId: string } }) => {
    const { isFormReady, actions } = useControlMasterDetail(params.controlId);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout title={`Control Master / ${params.controlId}`} buttons={actions}>
            <SectionBuilder formId="control-master" sectionId="edit" parentKey={`data`} />
        </PageLayout>
    );
};

export default Page;
