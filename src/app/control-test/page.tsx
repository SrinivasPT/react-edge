'use client';

import { TreeControl } from '@lib/controls';
import { ContextMenuAction, Control, ControlType, DataType } from '@lib/types';

const page = () => {
    const actions: ContextMenuAction[] = [
        { label: 'Add Item', callback: () => console.log('Adding Item...') },
        { label: 'Remove Item', callback: () => console.log('Deleting Item...') },
    ];

    const control: Control = { id: '', type: ControlType.TREE, label: '', dataType: DataType.OBJECT, dataKey: '' };

    return (
        <>
            <div className="w-1/4 border">
                <TreeControl control={control} actions={actions} />
            </div>
            <div className="w-3/4 border"></div>
        </>
    );
};

export default page;
