'use client';

import { SectionBuilder } from '@lib/builders';
import useControlMasterList from '@lib/hooks/use-control-master-list';
import { PageLayout } from '@lib/layout';
import { isNil } from '@lib/utils/functions/general-functions';
import { useGetFilteredControlsQuery } from '@store/api/control-master-api';
import { setFilteredData } from '@store/features/form-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page = ({ params }: { params: { formId: string } }) => {
    const { isFormReady } = useControlMasterList();
    const searchCriteria = useSelector((store: any) => store.form?.searchCriteria);
    const { data: filteredData, refetch } = useGetFilteredControlsQuery(searchCriteria);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isNil(searchCriteria)) {
            refetch();
        }
    }, [searchCriteria, refetch]);

    useEffect(() => {
        if (filteredData) {
            dispatch(setFilteredData({ list: { controlMaster: filteredData } }));
        }
    }, [filteredData, searchCriteria, dispatch]);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout title="Control Master">
            <SectionBuilder formId="control-master" sectionId="search-criteria" parentKey={`searchCriteria`} />
            <SectionBuilder formId="control-master" sectionId="list" parentKey={`data`} />
        </PageLayout>
    );
};

export default Page;
