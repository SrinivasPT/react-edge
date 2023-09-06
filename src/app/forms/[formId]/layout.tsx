'use client';

import FormTreeControl from '@components/form-tree-control';
import { PageLayout } from '@lib/layout';
import { useParams } from 'next/navigation';

const Layout = ({ formId, children }: { formId: string; children: React.ReactNode }) => {
    const params = useParams();

    return (
        <PageLayout>
            <div className="flex">
                <div className="flex-none w-1/4 p-4">
                    <FormTreeControl formId={params.formId} />
                </div>
                <div className="flex-grow p-4">{children}</div>
            </div>
        </PageLayout>
    );
};

export default Layout;
