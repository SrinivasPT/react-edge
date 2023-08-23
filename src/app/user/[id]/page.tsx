'use client';

import { User } from '@domain/types';
import { SectionBuilder } from '@lib/builders';
import { useSelectedUserQuery } from '@store/api/user-api';
import { setFormDetail } from '@store/features/form-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const UserDetail = ({ params }: { params: { id: string } }) => {
    const dispatch = useAppDispatch();
    const { isSuccess, data } = useSelectedUserQuery({ id: params.id });
    const { isLoading } = useAppSelector(state => state.form.flags);

    useEffect(() => {
        if (isSuccess) dispatch(setFormDetail({ key: 'user', value: data as User }));
    }, [isSuccess]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Detail for ID: {params.id}</h1>
            <SectionBuilder formId="user-info-page" sectionId="basic" />
        </div>
    );
};

export default UserDetail;
