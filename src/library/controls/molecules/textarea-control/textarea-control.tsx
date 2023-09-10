import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';

const TextareaControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    const { value, handleChange } = useFormControl(control, parentKey);

    return (
        <>
            <label className="block mb-2 font-semibold" htmlFor={control.id}>
                {control.label}
            </label>
            <textarea
                id={control.id}
                value={value}
                rows={control.rows || 3} // Default to 3 rows if not specified
                className={`border p-2 w-full rounded-md ${control.className}`} // added rounded-md for smoother borders
                onChange={event => handleChange(event?.target.value)}
                placeholder={control.placeholder}
            />
        </>
    );
};

export default TextareaControl;
