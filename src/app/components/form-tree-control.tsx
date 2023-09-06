import TreeNode from '@lib/controls/molecules/tree-control/tree-node';
import { useFormConfig } from '@lib/hooks';
import { CardLayout } from '@lib/layout';
import { Control, Section, TreeItem } from '@lib/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const FormTreeControl = (params: any) => {
    const formConfig = useFormConfig().getFormConfig(params.formId);
    const router = useRouter();
    // const data = transformJson(formConfig) as TreeItem;
    // const data = useMemo(() => transformJson(formConfig), [formConfig]);
    const [data, setData] = useState(transformJson(formConfig));

    useEffect(() => {
        setData(transformJson(formConfig));
    }, []);

    const handleChange = (action: string, item: TreeItem) => {
        console.log(`User performed action ${action} and the item is ${JSON.stringify(item)}`);

        if (action === 'SELECT') {
            switch (item.level) {
                case 'PAGE':
                    router.push(`/forms/${params.formId}`);
                    break;
                case 'CONTROL':
                    router.push(`/forms/${params.formId}/sections/${item.parentId}/controls/${item.id}`);
                    break;
                case 'SECTION':
                    router.push(`/forms/${params.formId}/sections/${item.id}`);
                    break;
            }
        }
    };

    function transformJson(input: any, parentId = null) {
        if (input.id && input.title && input.sections) {
            return {
                id: input.id,
                label: input.title,
                level: 'PAGE',
                children: input.sections.map((section: Section) => transformJson(section, input.id)),
            };
        }

        if (input.id && input.title && input.controls) {
            return {
                id: input.id,
                label: input.title,
                level: 'SECTION',
                children: input.controls.map((control: Control) => transformJson(control, input.id)),
            };
        }

        if (input.id && input.label) {
            return {
                id: input.id,
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
            <div className="bg-white p-4">
                <ul className="list-item pl-5">
                    <TreeNode key={data?.id} item={data as TreeItem} level={1} handleChange={handleChange} />
                </ul>
            </div>
        </CardLayout>
    );
};

export default FormTreeControl;
