'use client';

import { SectionBuilder } from '@lib/builders';
import SmartControl from '@lib/builders/smart-control';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { Section } from '@lib/types';
import { useAddFormMutation, useDeleteFormMutation, useGetFormByIdQuery, useUpdateFormMutation } from '@store/api/form-config-api';
import { useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
    // Mutation functions
    const [addForm] = useAddFormMutation();
    const [updateForm] = useUpdateFormMutation();
    const [deleteForm] = useDeleteFormMutation();
    const [controlsSectionParent, setControlsSectionParent] = useState('data.sections[0].controls');

    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.id });

    const { isFormReady, handleSave, handleDelete } = useFormDetail({
        id: params.id,
        entityName: 'form',
        initialData,
        isInitialDataLoaded,
        mutationFns: { add: addForm, update: updateForm, delete: deleteForm },
    });

    const formState = useAppSelector(state => state.form);

    useEffect(() => {
        const index = formState.data?.sections?.findIndex((section: Section) => section.id === formState.internal.table.sections.selectedRowId);
        if (index >= 0) setControlsSectionParent(`data.sections[${index}].controls`);
    }, [formState.internal.table?.sections?.selectedRowId]);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.id}</h1>
            <SectionBuilder formId="form" sectionId="form" parentKey="data.sections[0]" />
            <SectionBuilder formId="form" sectionId="sections" parentKey="data.sections" />
            <SectionBuilder formId="form" sectionId="controls" parentKey={controlsSectionParent} />
            <SmartControl formId="form" configKey="sections[0].controls[0]" parentKey="data.sections[0]" />
            <SmartControl formId="form" configKey="sections[0].controls[1]" parentKey="data.sections[0]" />
            <button onClick={handleSave}>Save</button>
        </PageLayout>
    );
};

export default Page;
