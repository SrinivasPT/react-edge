'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { Section } from '@lib/types';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';
import AddControlsModal from '../../components/add-controls-modal';

const Page = ({ params }: { params: { formId: string } }) => {
    // General
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({ id: params.formId, entityName: 'form', initialData, isInitialDataLoaded });
    const formState = useAppSelector(state => state.form);

    // Page Specific
    const [controlsSectionParent, setControlsSectionParent] = useState('data.sections[0].controls');
    const [showAddControls, setShowAddControls] = useState(false);

    useEffect(() => {
        const index = formState.data?.sections?.findIndex((section: Section) => section.id === formState.internal.table.sections.selectedRowId);
        if (index >= 0) setControlsSectionParent(`data.sections[${index}].controls`);
    }, [formState.internal.table?.sections?.selectedRowId]);

    if (!isFormReady) return <div>Loading....</div>;

    const addControlsToSection = () => {};

    return (
        <>
            <h1>User Detail for ID: {params.formId}</h1>
            {/* <FormBuilderLayout formId={params.formId}> */}
            <SectionBuilder formId="form" sectionId="page-header-free-form" parentKey="data" />
            <SectionBuilder formId="form" sectionId="section-list-tabular" parentKey="data.sections" />
            <SectionBuilder formId="form" sectionId="section-control-list-tabular" parentKey={controlsSectionParent} />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowAddControls(true)}>Add Controls</button>
            {/* </FormBuilderLayout> */}
            <AddControlsModal isOpen={showAddControls} onClose={() => setShowAddControls(false)} onAdd={addControlsToSection} />
        </>
    );
};

export default Page;
