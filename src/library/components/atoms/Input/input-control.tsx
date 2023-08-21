import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';

const InputControl = (control: Control) => {
    const { value, handleChange } = useFormControl(control.dataKey);

    return <input type="text" value={value} onChange={handleChange} placeholder={`Enter ${control.dataKey}`} />;
};

export default InputControl;
