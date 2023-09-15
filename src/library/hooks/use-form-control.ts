import { Control, ControlType } from '@lib/types';
import { FormState } from '@lib/types/form-state';
import { isNil } from '@lib/utils/functions/general-functions';
import { addToArray, onChange, removeFromArray } from '@store/features/form-slice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function useFormControl(control: Control, parentKey: string) {
    const dispatch = useDispatch();
    const form: FormState = useSelector((store: any) => store.form);

    const getDataKey = () => {
        if (isNil(control.dataKey)) return `${parentKey}.${control.id}`;
        if (control.dataKey === 'USE_PARENT') return parentKey;
        return control.dataKey;
    };

    const handleFieldChange = (value: any) => {
        const dataKey = getDataKey();

        if (control.controlTypeCode === ControlType.Checkbox) {
            const { id: selectedItem, checked } = value.target;
            checked ? dispatch(addToArray({ key: dataKey, value: selectedItem })) : dispatch(removeFromArray({ key: dataKey, value: selectedItem }));
            return;
        }
        dispatch(onChange({ key: dataKey, value }));
    };

    const getValueFromFormData = (): any => {
        const dataKey = getDataKey();
        return _.get(form, dataKey, '');
    };

    return {
        value: getValueFromFormData(),
        dataKey: getDataKey(),
        handleChange: handleFieldChange,
        getDataKey,
        dispatch,
    };
}

export default useFormControl;
