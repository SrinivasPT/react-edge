'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useSelectedUserQuery } from '@store/api/user-api';
import Link from 'next/link';

const UserDetail = ({ params }: { params: { id: string } }) => {
    const { isSuccess, data } = useSelectedUserQuery({ id: params.id });
    const { isFormReady } = useFormDetail({ entity: 'user', id: params.id, data, isSuccess });

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.id}</h1>
            <SectionBuilder formId="user-info-page" sectionId="basic" />
            <Link href="/user"> Back </Link>
        </PageLayout>
    );
};

export default UserDetail;
