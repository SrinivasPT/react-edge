'use client';

import { User } from '@domain/types';
import { useAllUsersQuery } from '@store/api/user-api';

import { useAppDispatch } from '@store/hooks';
import _ from 'lodash';
import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
    const { isLoading, isFetching, data, error } = useAllUsersQuery(null);
    const dispatch = useAppDispatch();

    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string }>({
        key: '',
        direction: '',
    });

    const handleSort = (key: string) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = data?.slice().sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'age', label: 'Age' },
        { key: 'email', label: 'Email' },
        { key: 'birthDate', label: 'Birth Date' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        {columns.map(column => (
                            <th key={column.key} onClick={() => handleSort(column.key)} className="cursor-pointer p-2 text-left">
                                {column.label}
                                {sortConfig.key === column.key && <span>{sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'}</span>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData?.map((user: User) => (
                        <tr key={user.id}>
                            {columns.map(column => (
                                <td
                                    key={column.key}
                                    className={`border p-2 ${column.key === 'id' ? 'text-blue-600 hover:underline cursor-pointer' : ''}`}
                                >
                                    {/* For ID column, use a Link component */}
                                    {column.key === 'id' ? <Link href={`/user/${user.id}`}>{user.id}</Link> : _.get(user, column.key)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
