import { FormState } from '@lib/types/form-state';
import { onChange } from '@store/features/form-slice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function useFormControl(dataKey: string) {
    const dispatch = useDispatch();
    const formData: FormState = useSelector((store: any) => store.form.data);

    const handleFieldChange = (value: any) => {
        dispatch(onChange({ key: dataKey, value }));
    };

    const getValueFromFormData = (): any => {
        return _.get(formData, dataKey, '');
    };

    return {
        value: getValueFromFormData(),
        handleChange: handleFieldChange,
    };
}

export default useFormControl;
