'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormConfig } from '@lib/hooks';
import { setInternalTemp } from '@store/features/form-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Page = ({ params }: { params: { formId: string; sectionId: string; controlId: string; complexControlId: string } }) => {
    const formState = useAppSelector((state: any) => state.form);
    const { getFullControlConfig } = useFormConfig();
    const dispatch = useAppDispatch();

    const sectionIndex = formState.data.sections.findIndex((section: any) => section.id === params.sectionId);
    const controlIndex = formState.data.sections[sectionIndex].controls.findIndex((control: any) => control.id === params.controlId);
    const complexControlIndex = formState.data.sections[sectionIndex].controls[controlIndex].controls.findIndex(
        (control: any) => control.masterId === params.complexControlId
    );
    const fullComplexControlConfig = getFullControlConfig(formState.data.sections[sectionIndex].controls[controlIndex].controls[complexControlIndex]);

    useEffect(() => {
        dispatch(setInternalTemp({ key: 'SET_CURRENT_CONTROL', value: fullComplexControlConfig }));
    }, []);

    if (controlIndex === undefined || controlIndex === -1) return <div>Unable to get the control</div>;

    return (
        <>
            <SectionBuilder
                formId="form"
                sectionId="control-free-form"
                dataKey={`data.sections[${sectionIndex}].controls[${controlIndex}.controls[${complexControlIndex}]]`}
            />
            <SectionBuilder formId="form" sectionId="control-master-free-form-readonly" dataKey={`internal.temp.${params.controlId}`} />
        </>
    );
};

export default Page;
