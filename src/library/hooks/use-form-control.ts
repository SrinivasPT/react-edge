import { FormState } from '@lib/types/form-state';
import { onChange } from '@store/features/form-slice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function useFormControl(dataKey: string) {
    const dispatch = useDispatch();
    const form: FormState = useSelector((store: any) => store.form);

    const handleFieldChange = (value: any) => {
        dispatch(onChange({ dataKey, value }));
    };

    const getValueFromFormData = () => {
        return _.get(form, dataKey, '');
    };

    return {
        value: getValueFromFormData(),
        handleChange: handleFieldChange,
    };
}
