import { Control } from '@lib/types';
import { FormState } from '@lib/types/form-state';
import { isNil } from '@lib/utils/functions/general-functions';
import { onChange } from '@store/features/form-slice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function useFormControl(control: Control, parentKey: string) {
    const dispatch = useDispatch();
    const form: FormState = useSelector((store: any) => store.form);
    // const formActions = useSelector((store: any) => store.form.actions);

    const getDataKey = () => {
        if (isNil(control.dataKey)) return `${parentKey}.${control.id}`;
        if (control.dataKey === 'USE_PARENT') return parentKey;
        return control.dataKey;
    };

    const handleFieldChange = (value: any) => {
        const dataKey = getDataKey();
        dispatch(onChange({ key: dataKey, value }));
    };

    const getValueFromFormData = (): any => {
        const dataKey = getDataKey();
        return _.get(form, dataKey, '');
    };

    // const saveFormAction = () => {
    //     formActions['saveFormFn']();
    // };

    return {
        value: getValueFromFormData(),
        dataKey: getDataKey(),
        handleChange: handleFieldChange,
        getDataKey,
        // saveFormAction,
        dispatch,
    };
}

export default useFormControl;
