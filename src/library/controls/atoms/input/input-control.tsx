'use client';

import { useFormControl } from '@lib/hooks';
import { InputControlProps } from '@lib/types';
import { logger } from '@lib/utils';

const InputControl: React.FC<InputControlProps> = ({ control, type, parentKey }) => {
    logger.debug(`Rendering InputControl for ${control.id}`);

    const { value, handleChange } = useFormControl(control, parentKey);

    return (
        <input
            type="text"
            value={value}
            className="border p-2 w-full" //{control.className}
            onChange={event => handleChange(event?.target.value)}
            placeholder={control?.placeholder}
            disabled={control?.readonly}
        />
    );
};

export default InputControl;
