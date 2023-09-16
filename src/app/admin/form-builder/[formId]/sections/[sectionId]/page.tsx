'use client';

import AddControlsModal from '@components/add-controls-modal';
import { SectionBuilder } from '@lib/builders';
import { Section } from '@lib/types';
import { addToArray } from '@store/features/form-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Page = ({ params }: { params: { formId: string; sectionId: string } }) => {
    const formState = useAppSelector(state => state.form);
    const dispatch = useAppDispatch();

    let sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);

    useEffect(() => {
        if (params.sectionId === 'new' && sectionIndex === -1) {
            dispatch(addToArray({ key: 'data.sections', value: { id: 'new', title: 'New Section', controls: [] } }));
        }
    }, [params.sectionId]);

    return (
        <>
            <SectionBuilder formId="form" sectionId="section-header-free-form" parentKey={`data.sections[${sectionIndex}]`} />
            <SectionBuilder formId="form" sectionId="section-control-list-tabular" parentKey={`data.sections[${sectionIndex}].controls`} />
            <AddControlsModal formId={params.formId} sectionId={params.sectionId} />
        </>
    );
};

export default Page;
