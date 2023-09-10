import { ControlBuilder } from '@lib/builders';
import { CheckControl } from '@lib/controls';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';
import RowAction from './row-action';
import useTable from './use-table';

const TableControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.debug(`Rendering InputControl for ${control.id}`);

    const { data, dataKey, isTableEditable, handleToggleEditTable, SelectAllControl, getSelectRowControl, handleSelectRow, isRowSelected } = useTable(
        control,
        parentKey
    );

    const getCellPadding = () => (isTableEditable ? 'px-1 py-1' : 'px-4 py-3');

    const editButtonStyles = isTableEditable ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600';

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">{control.label}</h2>
                {control?.isEditable && (
                    <button
                        onClick={handleToggleEditTable}
                        className={`transition duration-200 transform hover:scale-105 w-40 px-4 py-2 text-white rounded focus:outline-none ${editButtonStyles}`}
                    >
                        {isTableEditable ? 'Make Read Only' : 'Edit'}
                    </button>
                )}
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {control?.actions && <th className="pr-2">Actions</th>}
                        {control?.isEditable && (
                            <th className="pr-2">
                                <CheckControl control={SelectAllControl} parentKey="" />
                            </th>
                        )}
                        {control.controls.map((column, index) => (
                            <th key={index} className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    {data?.map((row: any, rowIndex: number) => (
                        <tr
                            key={rowIndex}
                            onClick={() => handleSelectRow(row.id)}
                            className={`cursor-pointer hover:bg-yellow-50 ${isTableEditable ? 'space-y-2' : ''} items-center ${
                                isRowSelected(row.id) ? 'bg-yellow-50' : ''
                            }`}
                        >
                            {control?.actions && (
                                <td className="flex justify-center items-center p-3">
                                    <RowAction control={control} row={row} />
                                </td>
                            )}
                            {control?.isEditable && (
                                <td className="flex justify-center items-center p-3">
                                    <CheckControl control={getSelectRowControl(row.guid)} parentKey="" />
                                </td>
                            )}
                            {control.controls.map((cellControl, colIndex) => (
                                <td key={colIndex} className={`${getCellPadding()}`}>
                                    {isTableEditable ? (
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
