'use client';

import { SectionBuilder } from '@lib/builders';
import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useGetControlByIdQuery } from '@store/api/control-master-api';

const Page = ({ params }: { params: { controlId: string } }) => {
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetControlByIdQuery({ id: params.controlId });
    const { isFormReady } = useFormDetail({ id: params.controlId, entityName: 'controls', initialData, isInitialDataLoaded });
    if (!isFormReady) return <div>Loading....</div>;

    const buttons: IButtonPallet[] = [
        { id: 'save', label: 'Save', handler: () => console.log('save') },
        { id: 'delete', label: 'Reset', handler: () => console.log('delete') },
    ];

    return (
        <PageLayout title={`Control Master / ${params.controlId}`} buttons={buttons}>
            <SectionBuilder formId="control-master" sectionId="edit" parentKey={`data`} />
        </PageLayout>
    );
};

export default Page;
