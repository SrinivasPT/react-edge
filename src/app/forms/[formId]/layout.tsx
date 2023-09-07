'use client';

import FormTreeControl from '@components/form-tree-control';
import { ButtonPallet } from '@lib/controls';
import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useParams } from 'next/navigation';

const Layout = ({ formId, children }: { formId: string; children: React.ReactNode }) => {
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
        { id: 'save', label: 'Save', onClickHandler: handleSave },
        { id: 'delete', label: 'Reset', onClickHandler: handleDelete },
    ];

    return (
        <PageLayout>
            <div className="flex">
                <div className="flex-none w-1/4 p-4">
                    <FormTreeControl formId={params.formId} />
                </div>
                <div className="flex-grow p-4">{children}</div>
            </div>
            <ButtonPallet buttons={buttons} />
        </PageLayout>
    );
};

export default Layout;
