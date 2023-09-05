'use client';

import { SectionBuilder } from '@lib/builders';
import { ModalPopup } from '@lib/common/modal';
import { TreeControl } from '@lib/controls';
import { useFormDetail } from '@lib/hooks';
import { CardLayout, PageLayout } from '@lib/layout';
import { ContextMenuAction, Control, ControlType, DataType, Section } from '@lib/types';
import { useGetFormByIdQuery } from '@store/api/form-config-api';
import { useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';
import AddControls from './add-controls';

const Page = ({ params }: { params: { formId: string } }) => {
    const [controlsSectionParent, setControlsSectionParent] = useState('data.sections[0].controls');
    const [showAddControls, setShowAddControls] = useState(false);
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: params.formId });

    const { isFormReady, handleSave, handleDelete } = useFormDetail({ id: params.formId, entityName: 'form', initialData, isInitialDataLoaded });

    const formState = useAppSelector(state => state.form);

    useEffect(() => {
        const index = formState.data?.sections?.findIndex((section: Section) => section.id === formState.internal.table.sections.selectedRowId);
        if (index >= 0) setControlsSectionParent(`data.sections[${index}].controls`);
    }, [formState.internal.table?.sections?.selectedRowId]);

    if (!isFormReady) return <div>Loading....</div>;

    const handleAddControls = () => {};

    const addControlsToSection = () => {};

    const treeControl = { id: '', type: ControlType.TREE, label: '', dataType: DataType.OBJECT, dataKey: '' } as Control;
    const actions: ContextMenuAction[] = [
        { label: 'Add Item', callback: () => console.log('Adding Item...') },
        { label: 'Remove Item', callback: () => console.log('Deleting Item...') },
    ];

    return (
        <PageLayout>
            <h1>User Detail for ID: {params.formId}</h1>

            <div className="flex">
                {/* Left Side - Tree Control */}
                <div className="flex-none w-1/4 p-4">
                    <CardLayout title="Page Structure">
                        <TreeControl control={treeControl} actions={actions} />
                    </CardLayout>
                </div>

                {/* Right Side - Rest of the Sections/Controls */}
                <div className="flex-grow p-4">
                    <SectionBuilder formId="form" sectionId="form" parentKey="data.sections[0]" />
                    <SectionBuilder formId="form" sectionId="sections" parentKey="data.sections" />
                    <SectionBuilder formId="form" sectionId="controls" parentKey={controlsSectionParent} />

                    {/* Uncomment if needed
                    <SmartControl formId="form" configKey="sections[0].controls[0]" parentKey="data.sections[0]" />
                    <SmartControl formId="form" configKey="sections[0].controls[1]" parentKey="data.sections[0]" />
                    */}

                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setShowAddControls(true)}>Add Controls</button>
                </div>
            </div>

            {addControlsModal()}
        </PageLayout>
    );

    function addControlsModal() {
        return (
            <ModalPopup
                title="Add Controls"
                isOpen={showAddControls}
                footerButtons={
                    <>
                        <button onClick={addControlsToSection}>Add Controls</button>
                        <button onClick={() => setShowAddControls(false)}>Close</button>
                    </>
                }
            >
                <AddControls />
            </ModalPopup>
        );
    }
};

export default Page;
