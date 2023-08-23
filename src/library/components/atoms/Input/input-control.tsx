import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';

const InputControl: React.FC<{ control: Control }> = ({ control }) => {
    const { value, handleChange } = useFormControl(control.dataKey);

    return <input type="text" value={value} onChange={event => handleChange(event?.target.value)} placeholder={`Enter ${control.dataKey}`} />;
};

export default InputControl;
