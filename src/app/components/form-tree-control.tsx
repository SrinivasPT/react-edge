import TreeNode from '@lib/controls/molecules/tree-control/tree-node';
import { useFormConfig } from '@lib/hooks';
import { CardLayout } from '@lib/layout';
import { Control, Section, TreeItem } from '@lib/types';
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const FormTreeControl = (params: any) => {
    const { getFullControlConfig } = useFormConfig();
    const formConfig = useFormConfig().getFormConfig(params.formId);
    const router = useRouter();
    const [data, setData] = useState(transformJson(formConfig));
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    useEffect(() => {
        setData(transformJson(formConfig));
    }, []);

    const handleChange = (action: string, item: TreeItem) => {
        console.log(`User performed action ${action} and the item is ${JSON.stringify(item)}`);

        if (action === 'SELECT') {
            switch (item.level) {
                case 'PAGE':
                    router.push(`/admin/form-builder/${params.formId}`);
                    break;
                case 'CONTROL':
                    router.push(`/admin/form-builder/${params.formId}/sections/${item.parentId}/controls/${item.id}`);
                    break;
                case 'SECTION':
                    router.push(`/admin/form-builder/${params.formId}/sections/${item.id}`);
                    break;
            }
        }

        if (action === 'ADD') {
            switch (item.level) {
                case 'PAGE':
                    // const sectionId = prompt('Please enter section id');
                    router.push(`/admin/form-builder/${params.formId}/sections/new`);
                    break;
                case 'SECTION':
                    router.push(`/admin/form-builder/${params.formId}/sections/${item.id}/controls/new`);
                    break;
            }
        }
    };

    function transformJson(input: any, parentId = null) {
        if (input.id && input.title && input.sections) {
            return {
                uniqueId: _.uniqueId(),
                id: input.id,
                label: input.title,
                level: 'PAGE',
                children: input.sections.map((section: Section) => transformJson(section, input.id)),
            };
        }

        if (input.id && input.title && input.controls) {
            return {
                uniqueId: _.uniqueId(),
                id: input.id,
                label: input.title,
                level: 'SECTION',
                children: input.controls.map((control: Control) => transformJson(getFullControlConfig(control), input.id)),
            };
        }

        if (input.id && input.label) {
            return {
                uniqueId: _.uniqueId(),
                id: input.masterId,
                label: input.label,
                level: 'CONTROL',
                parentId: parentId,
                children: [],
            };
        }
    }

    const getFormTree = () => {};

    return (
        <CardLayout title="Page Structure">
            <div className="bg-white">
                <ul className="list-item pl-1">
                    <TreeNode
                        key={data?.id}
                        item={data as TreeItem}
                        level={1}
                        handleChange={handleChange}
                        selectedItemId={selectedItemId}
                        setSelectedItemId={setSelectedItemId}
                    />
                </ul>
            </div>
        </CardLayout>
    );
};

export default FormTreeControl;
