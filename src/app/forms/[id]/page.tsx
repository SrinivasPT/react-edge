'use client';

import { SectionBuilder } from '@lib/builders';
import SmartControl from '@lib/builders/smart-control';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { useAddFormMutation, useDeleteFormMutation, useGetFormByIdQuery, useUpdateFormMutation } from '@store/api/form-config-api';

const Page = ({ params }: { params: { id: string } }) => {
    // Mutation functions
    const [addForm] = useAddFormMutation();
    const [updateForm] = useUpdateFormMutation();
    const [deleteForm] = useDeleteFormMutation();

    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.id });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({
        id: params.id,
        entityName: 'form',
        initialData,
        isInitialDataLoaded,
        mutationFns: { add: addForm, update: updateForm, delete: deleteForm },
    });

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.id}</h1>
            <SectionBuilder formId="form" sectionId="form" parentKey="data.sections[0]" />
            <SectionBuilder formId="form" sectionId="sections" parentKey="data.sections[0].controls" />
            <SmartControl formId="form" configKey="sections[0].controls[0]" parentKey="data.sections[0]" />
            <SmartControl formId="form" configKey="sections[0].controls[1]" parentKey="data.sections[0]" />
            <button onClick={handleSave}>Save</button>
        </PageLayout>
    );
};

export default Page;
