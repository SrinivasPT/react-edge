'use client';

import FormTreeControl from '@components/form-tree-control';
import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CreateNewForm from './create-new-form';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();
    const router = useRouter();

    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId as string });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({
        id: params.formId as string,
        entityName: 'form',
        initialData,
        isInitialDataLoaded,
    });

    const formData = useSelector((store: any) => store.form.data);

    const handleSaveClick = (event: any) => {
        handleSave(event);
        if (params.formId === 'new') {
            router.push(`/admin/form-builder/${formData.id}`);
        }
    };

    /**
     * All the handlers will be coming from the hook - in this case useFromDetails. Keep this code only for UI
     */
    const buttons: IButtonPallet[] = [
        { code: 'save', label: 'Save', handler: handleSaveClick },
        { code: 'delete', label: 'Reset', handler: handleDelete },
    ];

    if (params.formId === 'new')
        return (
            <PageLayout title="Page Structure" buttons={buttons}>
                <CreateNewForm />
            </PageLayout>
        );

    if (!isFormReady) return <div>Loading....</div>;

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
