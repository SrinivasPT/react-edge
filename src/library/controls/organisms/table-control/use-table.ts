import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { selectRow, toggleTableEditableStatus } from '@store/features/form-slice';
import _ from 'lodash';
import { useSelector } from 'react-redux';

export function useTable(control: Control, parentKey: string) {
    const { value: data, dataKey, dispatch } = useFormControl(control, parentKey);

    const getInternalStateKey = (dataKeyPath: string) => {
        // Remove the initial "data." and split by "."
        const parts = _.split(dataKeyPath.replace('data.', ''), '.');

        // Transform parts like "sections[0]" into "sections-0"
        const transformedParts = _.map(parts, part => {
            if (part.includes('[') && part.includes(']')) {
                const [main, index] = _.split(part, '[');
                return `${main}-${index.replace(']', '')}`;
            }
            return part;
        });

        return _.join(transformedParts, '-');
    };

    const isTableEditable = useSelector(state => _.get(state, `form.internal.table.${getInternalStateKey(dataKey)}.isEditable`, false));

    const handleToggleEditTable = () => {
        dispatch(toggleTableEditableStatus({ key: getInternalStateKey(dataKey) }));
    };

    const SelectAllControl = { dataKey: `internal.table.${getInternalStateKey(dataKey)}.selectAllRows` } as Control;

    const getSelectRowControl = (id: string) => ({ dataKey: `internal.table.${getInternalStateKey(dataKey)}.selectedRecords.${id}` } as Control);

    const handleSelectRow = (rowId: number) => dispatch(selectRow({ key: getInternalStateKey(dataKey), rowId }));

    return { data, dataKey, dispatch, isTableEditable, handleToggleEditTable, SelectAllControl, getSelectRowControl, handleSelectRow };
}

export default useTable;
