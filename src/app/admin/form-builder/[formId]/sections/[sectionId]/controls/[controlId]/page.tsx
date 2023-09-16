'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormConfig } from '@lib/hooks';
import { Control, Section } from '@lib/types';
import { setInternalTemp } from '@store/features/form-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Page = ({ params }: { params: { formId: string; sectionId: string; controlId: string } }) => {
    // Here the control id is masterId
    const formState = useAppSelector((state: any) => state.form);
    const { getFullControlConfig } = useFormConfig();
    const dispatch = useAppDispatch();

    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);
    const controlIndex = formState.data?.sections
        ?.find((section: Section) => section.id === params.sectionId)
        ?.controls?.findIndex((control: Control) => control.masterId === params.controlId);

    const fullControlConfig = getFullControlConfig(formState.data?.sections[sectionIndex]?.controls[controlIndex]);

    useEffect(() => {
        dispatch(setInternalTemp({ key: params.controlId, value: fullControlConfig }));
    }, []);

    if (controlIndex === undefined || controlIndex === -1) return <>Unable to get the control</>;

    return (
        <>
            <SectionBuilder formId="form" sectionId="control-free-form" parentKey={`data.sections[${sectionIndex}].controls[${controlIndex}]`} />
            <SectionBuilder formId="form" sectionId="control-master-free-form-readonly" parentKey={`internal.temp.${params.controlId}`} />
        </>
    );
};

export default Page;
