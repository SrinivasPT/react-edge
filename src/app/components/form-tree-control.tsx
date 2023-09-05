import TreeNode from '@lib/controls/molecules/tree-control/tree-node';
import { CardLayout } from '@lib/layout';
import { TreeItem } from '@lib/types';

// export interface IFormTreeControl {
//     handleChange: (action: string, item: any) => void;
// }

const FormTreeControl = () => {
    const handleChange = (action: string, item: any) => {
        console.log(`User performed action ${action} and the item is ${JSON.stringify(item)}`);
    };

    const data: TreeItem = {
        id: '1',
        label: 'root',
        children: [
            { id: '2', label: 'child1', children: [{ id: '3', label: 'child3', children: [] }] },
            {
                id: '4',
                label: 'child4',
                children: [
                    { id: '5', label: 'child5', children: [] },
                    { id: '6', label: 'child6', children: [] },
                    { id: '7', label: 'child7', children: [] },
                ],
            },
        ],
    };
    // const actions: ContextMenuAction[] = [
    //     { label: 'Add Item', callback: () => console.log('Adding Item...') },
    //     { label: 'Remove Item', callback: () => console.log('Deleting Item...') },
    // ];

    return (
        <CardLayout title="Page Structure">
            <div className="bg-white p-4">
                <ul className="list-item pl-5">
                    <TreeNode key={data.id} item={data} level={1} handleChange={handleChange} />
                </ul>
            </div>
        </CardLayout>
    );
};

export default FormTreeControl;
