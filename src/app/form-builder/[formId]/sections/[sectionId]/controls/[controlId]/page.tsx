'use client';

import { SectionBuilder } from '@lib/builders';
import { Control, Section } from '@lib/types';
import { useAppSelector } from '@store/hooks';

const Page = ({ params }: { params: { formId: string; sectionId: string; controlId: string } }) => {
    const formState = useAppSelector(state => state.form);

    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);
    const controlIndex = formState.data?.sections
        ?.find((section: Section) => section.id === params.sectionId)
        ?.controls?.findIndex((control: Control) => control.id === params.controlId);

    return (
        <>
            <SectionBuilder formId="form" sectionId="control-free-form" parentKey={`data.sections[${sectionIndex}].controls[${controlIndex}]`} />
        </>
    );
};

export default Page;
