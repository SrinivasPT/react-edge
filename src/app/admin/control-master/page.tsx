'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { useAllControlsQuery } from '@store/api/control-master-api';
import { Suspense } from 'react';

const Page = ({ params }: { params: { formId: string } }) => {
    const { isSuccess: isInitialDataLoaded, data: initialData } = useAllControlsQuery();
    const { isFormReady } = useFormDetail({ id: params.formId as string, entityName: 'controls', initialData, isInitialDataLoaded });

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SectionBuilder formId="control-master" sectionId="list" parentKey={`data`} />
        </Suspense>
    );
};

export default Page;
