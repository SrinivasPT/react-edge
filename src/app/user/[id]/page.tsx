'use client';

import { User } from '@domain/types';
import { useGetUserByIdQuery } from '@store/api/user-api';
import { setFormDetail } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';

const UserDetail = ({ params }: { params: { id: string } }) => {
    const { data, isLoading, isError } = useGetUserByIdQuery({ id: params.id });
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFormDetail(data as User));
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data?.firstName} - {data?.lastName}
        </div>
    );
};

export default UserDetail;
