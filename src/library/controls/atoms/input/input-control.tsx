'use client';

import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { logger } from '@lib/utils';
import { useEffect, useState } from 'react';

const InputControl: React.FC<{ control: Control }> = ({ control }) => {
    logger.info(`Rendering InputControl for ${control.id}`);

    const { value: externalValue, handleChange: updateExternalValue } = useFormControl(control.dataKey);
    const [localValue, setLocalValue] = useState(externalValue);

    // const debouncedUpdateExternalValue = useCallback(
    //     _.debounce((value: string) => updateExternalValue(value), 100),
    //     [updateExternalValue]
    // );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
        updateExternalValue(event.target.value);
    };

    useEffect(() => {
        setLocalValue(externalValue);
    }, [externalValue]);

    return <input type="text" value={localValue} onChange={handleInputChange} placeholder={control.placeholder} className={control.className} />;
};

export default InputControl;
