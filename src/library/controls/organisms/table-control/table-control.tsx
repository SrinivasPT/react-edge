import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';

const TableControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.info(`Rendering InputControl for ${control.id}`);
    const { value: data } = useFormControl(control, parentKey);

    return (
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
                        {control.controls.map((column, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                                {row[column.id]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableControl;
