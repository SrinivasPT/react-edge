import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Control } from '@lib/types';
import { useAppSelector } from '@store/hooks';
import Link from 'next/link';
import React from 'react';

enum RowActions {
    EDIT = 'EDIT',
    DELETE = 'DELETE',
}

interface IRowActionProps {
    control: Control;
    row: any;
}

const RowAction: React.FC<IRowActionProps> = ({ control, row }) => {
    const actionConfig = useAppSelector(state => state.form.actions);

    /**
     * Call the function passed from the parent page
     */
    const handleRowAction = (action: RowActions) => {
        actionConfig[action](control.id, action, row);
    };

    return (
        <div className="flex space-x-4 items-center">
            {control.actions.split(',').map((action, index) => {
                switch (action) {
                    case RowActions.EDIT:
                        return (
                            <Link href={`/${control.entityUrl}/${row.id}`} key={index}>
                                <FontAwesomeIcon
                                    className="cursor-pointer text-blue-500 hover:text-blue-700 w-5 h-5"
                                    icon={faCirclePlus}
                                    title="Edit Action"
                                />
                            </Link>
                        );
                    case RowActions.DELETE:
                        return (
                            <FontAwesomeIcon
                                key={index}
                                className="cursor-pointer text-red-500 hover:text-red-700 w-5 h-5"
                                icon={faCircleMinus}
                                title="Delete Action"
                                onClick={() => handleRowAction(RowActions.DELETE)}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default RowAction;
