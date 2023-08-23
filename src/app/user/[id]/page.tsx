'use client';

import { User } from '@domain/types';
import { SectionBuilder } from '@lib/builders';
import { useSelectedUserQuery } from '@store/api/user-api';
import { setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';

const UserDetail = ({ params }: { params: { id: string } }) => {
    // const formConfig = useAppSelector(state => state.config.queries?.allForms?.data) as FormConfig[];
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useSelectedUserQuery({ id: params.id });
    // const userFormConfig = _.find(formConfig, { name: 'user' }) as FormConfig;

    useEffect(() => {
        // dispatch(setFormConfig(formConfig['user'] as FormConfig));
        dispatch(setFormDetail({ key: 'user', payload: data as User }));
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Detail for ID: {params.id}</h1>
            {/* {data?.firstName} - {data?.lastName} */}
            <SectionBuilder formId="user-info-page" sectionId="basic" />
        </div>
    );
};

export default UserDetail;
