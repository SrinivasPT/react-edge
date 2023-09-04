import { useFormControl } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';

const ButtonControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    const { saveFormAction } = useFormControl(control, parentKey);

    const handleClick = (event: any) => {
        event.preventDefault();
        saveFormAction();
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
                PRINT
            </button>
        </div>
    );
};

export default ButtonControl;
