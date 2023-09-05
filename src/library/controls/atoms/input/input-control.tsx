'use client';

import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';

const InputControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.debug(`Rendering InputControl for ${control.id}`);

    const { value, handleChange } = useFormControl(control, parentKey);

    return (
        <input
            type="text"
            value={value}
            className={control.className}
            onChange={event => handleChange(event?.target.value)}
            placeholder={control.placeholder}
        />
    );
};

export default InputControl;
