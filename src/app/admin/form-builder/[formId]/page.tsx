'use client';

import AddControlsModal from '@components/add-controls-modal';
import { SectionBuilder } from '@lib/builders';
import { Section } from '@lib/types';
import { useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';

const Page = ({ params }: { params: { formId: string } }) => {
    const formState = useAppSelector(state => state.form);
    const [controlsSectionParent, setControlsSectionParent] = useState('data.sections[0].controls');
    const [showAddControls, setShowAddControls] = useState(false);

    useEffect(() => {
        const index = formState.data?.sections?.findIndex((section: Section) => section.id === formState.internal.table?.sections?.selectedRowId);
        if (index >= 0) setControlsSectionParent(`data.sections[${index}].controls`);
    }, [formState.internal.table?.sections?.selectedRowId]);

    const addControlsToSection = () => {};

    return (
        <>
            <SectionBuilder formId="form" sectionId="page-header-free-form" parentKey="data" />
            <SectionBuilder formId="form" sectionId="section-list-tabular" parentKey="data.sections" />
            <SectionBuilder formId="form" sectionId="section-control-list-tabular" parentKey={controlsSectionParent} />
            <button onClick={() => setShowAddControls(true)}>Add Controls</button>
            <AddControlsModal isOpen={showAddControls} onClose={() => setShowAddControls(false)} onAdd={addControlsToSection} />
        </>
    );
};

export default Page;
