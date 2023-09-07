'use client';

import { SectionBuilder } from '@lib/builders';
import { Section } from '@lib/types';
import { useAppSelector } from '@store/hooks';

const Page = ({ params }: { params: { formId: string; sectionId: string } }) => {
    const formState = useAppSelector(state => state.form);
    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);

    return (
        <>
            <SectionBuilder formId="form" sectionId="section-header-free-form" parentKey={`data.sections[${sectionIndex}]`} />
            <SectionBuilder formId="form" sectionId="section-control-list-tabular" parentKey={`data.sections[${sectionIndex}].controls`} />
        </>
    );
};

export default Page;
