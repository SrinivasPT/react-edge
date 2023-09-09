'use client';

import { SectionBuilder } from '@lib/builders';
import { Control, Section } from '@lib/types';
import { useAppSelector } from '@store/hooks';
import { Suspense } from 'react';

const Page = ({ params }: { params: { formId: string; sectionId: string; controlId: string } }) => {
    const formState = useAppSelector(state => state.form);

    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);
    const controlIndex = formState.data?.sections
        ?.find((section: Section) => section.id === params.sectionId)
        ?.controls?.findIndex((control: Control) => control.id === params.controlId);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SectionBuilder formId="form" sectionId="control-free-form" parentKey={`data.sections[${sectionIndex}].controls[${controlIndex}]`} />
        </Suspense>
    );
};

export default Page;
