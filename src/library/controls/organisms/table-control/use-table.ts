import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { toggleTableEditableStatus } from '@store/features/form-slice';
import _ from 'lodash';
import { useSelector } from 'react-redux';

export function useTable(control: Control, parentKey: string) {
    const { value, dataKey, dispatch } = useFormControl(control, parentKey);
    const isTableEditable = useSelector(state => _.get(state, `form.internal.table.${control.guid}.isEditable`, false));

    const handleToggleEditTable = () => {
        dispatch(toggleTableEditableStatus({ guid: control.guid }));
    };

    const SelectAllControl = { dataKey: `internal.table.${control.guid}.selectAllRows` } as Control;
    const getSelectRowControl = (id: string) => ({ dataKey: `internal.table.${control.guid}.selectedRecords.${id}` } as Control);

    return { value, dataKey, dispatch, isTableEditable, handleToggleEditTable, SelectAllControl, getSelectRowControl };
}

export default useTable;
