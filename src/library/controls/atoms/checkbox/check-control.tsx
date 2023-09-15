import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';

const CheckControl: React.FC<ControlBuilderProps> = ({ control, parentKey, value }) => {
    logger.debug(`Rendering InputControl for ${control.id}`);

    const { value: valueFromState, handleChange } = useFormControl(control, parentKey);

    return (
        <input
            id={control.id}
            type="checkbox"
            className="w-4 h-4 rounded border border-gray-400 text-blue-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0"
            checked={value ?? valueFromState}
            onChange={event => handleChange(event)}
        />
    );
};

export default CheckControl;
