'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { Section } from '@lib/types';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useAppSelector } from '@store/hooks';

const Page = ({ params }: { params: { formId: string; sectionId: string } }) => {
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({ id: params.formId, entityName: 'form', initialData, isInitialDataLoaded });
    const formState = useAppSelector(state => state.form);
    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <>
            <h1>User Detail for ID: {params.formId}</h1>
            {/* <FormBuilderLayout formId={params.formId}> */}
            <SectionBuilder formId="form" sectionId="section-header-free-form" parentKey={`data.sections[${sectionIndex}]`} />
            <SectionBuilder formId="form" sectionId="section-control-list-tabular" parentKey={`data.sections[${sectionIndex}].controls`} />
            <button onClick={handleSave}>Save</button>
            {/* </FormBuilderLayout> */}
        </>
    );
};

export default Page;
