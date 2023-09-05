'use client';

import { SectionBuilder } from '@lib/builders';
import { useFormDetail } from '@lib/hooks';
import { PageLayout } from '@lib/layout';
import { Section } from '@lib/types';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useAppSelector } from '@store/hooks';
import FormTreeControl from '../../../../components/form-tree-control';

const Page = ({ params }: { params: { formId: string; sectionId: string } }) => {
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId });
    const { isFormReady, handleSave, handleDelete } = useFormDetail({ id: params.formId, entityName: 'form', initialData, isInitialDataLoaded });
    const formState = useAppSelector(state => state.form);
    const sectionIndex = formState.data?.sections?.findIndex((section: Section) => section.id === params.sectionId);

    if (!isFormReady) return <div>Loading....</div>;

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.formId}</h1>

            <div className="flex">
                {/* Left Side - Tree Control */}
                <div className="flex-none w-1/4 p-4">
                    <FormTreeControl />
                </div>

                {/* Right Side - Rest of the Sections/Controls */}
                <div className="flex-grow p-4">
                    <SectionBuilder formId="form" sectionId="sections" parentKey={`data.sections[1].controls[0].controls[0]`} />
                    {/* <SectionBuilder formId="form" sectionId="sections" parentKey={`data.sections[${sectionIndex}].controls`} /> */}

                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </PageLayout>
    );
};

export default Page;
