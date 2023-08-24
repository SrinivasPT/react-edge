import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { logger } from '@lib/utils';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const InputControl: React.FC<{ control: Control }> = ({ control }) => {
    logger.info(`Rendering InputControl for ${control.id}`);

    const { value: externalValue, handleChange: updateExternalValue } = useFormControl(control.dataKey);
    const [localValue, setLocalValue] = useState(externalValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
        _.debounce(() => updateExternalValue(event.target.value), 300);
    };

    useEffect(() => {
        setLocalValue(externalValue);
    }, []);

    return <input type="text" value={localValue} onChange={handleInputChange} placeholder={control.placeholder} className={control.className} />;
};

export default InputControl;
