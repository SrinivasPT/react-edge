import { InputControl } from '@lib/controls';
import { Control } from '@lib/types';

const TextControl: React.FC<{ control: Control }> = ({ control }) => {
    return (
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 transition-colors duration-200 w-full">
            <label className="text-sm font-medium leading-5 text-gray-700 mb-2">{control.label}</label>
            <div className="relative">
                <InputControl control={{ ...control, className: 'border p-1 w-full' }} />
            </div>
        </div>
    );
};

export default TextControl;
