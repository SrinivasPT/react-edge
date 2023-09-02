import { InputControl } from '@lib/controls';
import { ControlBuilderProps } from '@lib/types';

const TextControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    return (
        <>
            <label className="w-full">{control.label}</label>
            <InputControl control={{ ...control, className: 'border p-2 w-full' }} parentKey={parentKey} />
        </>
    );
};

export default TextControl;
