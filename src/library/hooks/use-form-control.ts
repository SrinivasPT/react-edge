import { Control } from '@lib/types';
import { FormState } from '@lib/types/form-state';
import { isNil } from '@lib/utils/functions/general-functions';
import { onChange } from '@store/features/form-slice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function useFormControl(control: Control, parentKey: string) {
    const dispatch = useDispatch();
    const formData: FormState = useSelector((store: any) => store.form.data);

    const getDataKey = (control: Control, parentKey: string) => {
        if (isNil(control.dataKey)) return `${parentKey}.${control.id}`;
        if (control.dataKey === 'USE_PARENT') return parentKey;
        return control.dataKey;
    };

    const handleFieldChange = (value: any) => {
        const dataKey = getDataKey(control, parentKey);
        dispatch(onChange({ key: dataKey, value }));
    };

    const getValueFromFormData = (): any => {
        const dataKey = getDataKey(control, parentKey);
        return _.get(formData, dataKey, '');
    };

    return {
        value: getValueFromFormData(),
        handleChange: handleFieldChange,
        getDataKey,
    };
}

export default useFormControl;
