'use client';

import FormTreeControl from '@components/form-tree-control';
import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useParams } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();

    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId as string });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({
        id: params.formId as string,
        entityName: 'form',
        initialData,
        isInitialDataLoaded,
    });

    if (!isFormReady) return <div>Loading....</div>;

    /**
     * All the handlers will be coming from the hook - in this case useFromDetails. Keep this code only for UI
     */
    const buttons: IButtonPallet[] = [
        { code: 'save', label: 'Save', handler: handleSave },
        { code: 'delete', label: 'Reset', handler: handleDelete },
    ];

    return (
        <PageLayout title="Page Structure" buttons={buttons}>
            {/* <ButtonPallet title="Test Page Handle Me" buttons={buttons} /> */}
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
