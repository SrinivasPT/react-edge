'use client';

import { SectionBuilder } from '@lib/builders';
import { PageLayout } from '@lib/layout';
import useControlMasterDetail from '../../../hooks/use-control-master-detail';

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
