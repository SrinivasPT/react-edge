import { useDebounce, useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { logger } from '@lib/utils';
import { useEffect, useState } from 'react';

const InputControl: React.FC<{ control: Control }> = ({ control }) => {
    logger.info(`Rendering InputControl for ${control.id}`);

    const { handleChange } = useFormControl(control.dataKey);
    const [inputValue, setInputValue] = useState('');

    const debouncedValue = useDebounce(inputValue, 300);

    useEffect(() => {
        if (debouncedValue) handleChange(debouncedValue);
    }, [debouncedValue, handleChange]);

    return <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder={control.placeholder} />;
};

export default InputControl;
