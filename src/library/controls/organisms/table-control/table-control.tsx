import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { logger } from '@lib/utils';

const TableControl: React.FC<{ control: Control }> = ({ control }) => {
    logger.info(`Rendering InputControl for ${control.id}`);
    const { value: externalValue, handleChange: updateExternalValue } = useFormControl(control.dataKey);

    const columns: any[] = [];
    const data: any[] = [];

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {col.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableControl;
