import { useFormControl } from '@lib/hooks';
import { Control } from '@lib/types';
import { logger } from '@lib/utils';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const InputControl: React.FC<{ control: Control }> = ({ control }) => {
    logger.info(`Rendering InputControl for ${control.id}`);

    const { value: externalValue, handleChange: updateExternalValue } = useFormControl(control.dataKey);
    const [localValue, setLocalValue] = useState(externalValue);

    // Debounce the external updates
    // const debouncedUpdate = useCallback(
    //     _.debounce(value => updateExternalValue(value), 300),
    //     [updateExternalValue]
    // );

    // Update local state on user input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
        _.debounce(() => updateExternalValue(event.target.value), 300);
    };

    // Use an effect to ensure that the localValue is in sync with the externalValue
    useEffect(() => {
        setLocalValue(externalValue);
    }, []);

    return <input type="text" value={localValue} onChange={handleInputChange} placeholder={control.placeholder} />;
};

export default InputControl;

// import { useFormControl } from '@lib/hooks';
// import { Control } from '@lib/types';
// import { logger } from '@lib/utils';

// const InputControl: React.FC<{ control: Control }> = ({ control }) => {
//     logger.info(`Rendering InputControl for ${control.id}`);

//     const { value, handleChange } = useFormControl(control.dataKey);

//     return <input type="text" value={value} onChange={event => handleChange(event.target.value)} placeholder={control.placeholder} />;
// };

// export default InputControl;
