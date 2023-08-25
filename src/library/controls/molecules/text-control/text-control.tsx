import { InputControl } from '@lib/controls';
import { Control } from '@lib/types';

const TextControl: React.FC<{ control: Control }> = ({ control }) => {
    return (
        <>
            <label className="w-full">{control.label}</label>
            <InputControl control={{ ...control, className: 'border p-2 w-full' }} />
        </>
    );
};

export default TextControl;
