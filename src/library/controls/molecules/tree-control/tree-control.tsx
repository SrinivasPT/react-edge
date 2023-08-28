'use client';

import { useFormControl } from '@lib/hooks';
import { ContextMenuAction, Control, TreeItem } from '@lib/types';
import { useState } from 'react';
import TreeNode from './tree-node';

const TreeControl: React.FC<{ control: Control; actions: ContextMenuAction[] }> = ({ control, actions }) => {
    const { value, handleChange: updateExternalValue } = useFormControl(control.dataKey);
    const [selectedId, setSelectedId] = useState<string | null>();

    const handleTreeChange = (id: string) => {
        console.log(`TreeControl: handleTreeChange: id: ${id}`);
        setSelectedId(id);
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

    return (
        <div className="bg-white p-4">
            <ul className="list-item pl-5">
                <TreeNode key={data.id} item={data} handleChange={handleTreeChange} actions={actions} />
            </ul>
        </div>
    );
};

export default TreeControl;
