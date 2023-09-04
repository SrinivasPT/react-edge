import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';
import { useState } from 'react';

const TableControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.info(`Rendering InputControl for ${control.id}`);
    const [isEditing, setIsEditing] = useState(false);
    const { value: data } = useFormControl(control, parentKey);

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">{control.label}</h2>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                    {isEditing ? 'Make Read Only' : 'Edit'}
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {control.controls.map((column, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row: any, index: number) => (
                        <tr key={index}>
                            {control.controls.map((control, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                                    {row[control.id]}
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
