import { ControlBuilder } from '@lib/builders';
import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';
import { useState } from 'react';

const TableControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.info(`Rendering InputControl for ${control.id}`);
    const [isEditing, setIsEditing] = useState(false);
    const { value: data, dataKey } = useFormControl(control, parentKey);

    const getCellPadding = () => {
        return isEditing ? 'px-1 py-1' : 'px-6 py-4';
    };

    const editButtonStyles = isEditing ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600';

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">{control.label}</h2>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`transition duration-200 transform hover:scale-105 w-40 px-4 py-2 text-white rounded focus:outline-none ${editButtonStyles}`}
                >
                    {isEditing ? 'Make Read Only' : 'Edit'}
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {control.controls.map((column, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    {data.map((row: any, rowIndex: number) => (
                        <tr key={rowIndex} className={isEditing ? 'space-y-2' : ''}>
                            {control.controls.map((cellControl, colIndex) => (
                                <td key={colIndex} className={`${getCellPadding()} transition-colors duration-200 hover:bg-gray-50`}>
                                    {isEditing ? (
                                        <div className="w-full">
                                            <ControlBuilder
                                                control={{
                                                    ...cellControl,
                                                    className: 'border p-2 w-full transition-shadow duration-200 hover:shadow-md',
                                                }}
                                                parentKey={`${dataKey}[${rowIndex}]`}
                                            />
                                        </div>
                                    ) : (
                                        row[cellControl.id]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableControl;
