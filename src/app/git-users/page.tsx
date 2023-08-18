'use client';

import { UserList } from '@domain/types/git';
import { initializeList } from '@store/features/git-user-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useGetGitUsersQuery } from '@store/service/git-api';
import { memo, useEffect } from 'react';

const Page = () => {
    const list = useAppSelector(state => state.gitUserSlice.list);
    const dispatch = useAppDispatch();

    const { data, isLoading, error } = useGetGitUsersQuery();

    useEffect(() => {
        dispatch(initializeList(data as UserList[]));
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <ul>
                    {list?.map(user => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default memo(Page);
