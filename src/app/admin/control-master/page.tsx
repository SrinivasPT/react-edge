'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { isNil } from '@lib/utils/functions/general-functions';
import { useAllControlsQuery, useGetFilteredControlsQuery } from '@store/api/control-master-api';
import { setFilteredData } from '@store/features/form-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page = ({ params }: { params: { formId: string } }) => {
    const { isSuccess: isInitialDataLoaded, data: initialData } = useAllControlsQuery(null);
    const { isFormReady } = useFormDetail({ id: params.formId as string, entityName: 'controls', initialData, isInitialDataLoaded });
    const searchCriteria = useSelector((store: any) => store.form?.searchCriteria);
    const { data: filteredData } = useGetFilteredControlsQuery(searchCriteria);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isNil(searchCriteria)) dispatch(setFilteredData(filteredData));
    }, [searchCriteria]);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <SectionBuilder formId="control-master" sectionId="search-criteria" parentKey={`searchCriteria`} />
            <SectionBuilder formId="control-master" sectionId="list" parentKey={`data`} />
        </PageLayout>
    );
};

export default Page;
