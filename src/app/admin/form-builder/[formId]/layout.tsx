'use client';

import FormTreeControl from '@components/form-tree-control';
import { useFormBuilder } from '@lib/hooks';
import useInitializeForm from '@lib/hooks/use-initialize-form';
import { PageLayout } from '@lib/layout';
import FormActionsContext from '@lib/sections/form-actions-context';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useParams } from 'next/navigation';
import CreateNewForm from './create-new-form';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();

    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId as string });
    const { isFormReady } = useInitializeForm({ id: params.formId as string, initialData, isInitialDataLoaded });
    const { actions } = useFormBuilder();

    if (!isFormReady) return <div>Loading....</div>;

    if (params.formId === 'new')
        return (
            <PageLayout title="Page Structure" buttons={actions['page-actions']}>
                <CreateNewForm />
            </PageLayout>
        );

    return (
        <FormActionsContext.Provider value={actions}>
            <PageLayout title="Page Structure" buttons={actions['page-actions']}>
                <div className="flex">
                    <div className="flex-none w-1/4 p-4">
                        <FormTreeControl formId={params.formId} />
                    </div>
                    <div className="flex-grow p-4">{children}</div>
                </div>
            </PageLayout>
        </FormActionsContext.Provider>
    );
};

export default Layout;
