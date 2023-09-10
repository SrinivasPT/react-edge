import { toast } from 'react-toastify';

export interface IButtonPallet {
    id: string;
    label: string;
    handler: (event: any) => Promise<void> | any;
}

const ButtonPallet: React.FC<{ title: string; buttons: IButtonPallet[] }> = ({ title, buttons }) => {
    const handleOnClick = (event: any, button: IButtonPallet) => {
        try {
            button.handler(event);
            toast.success('Saved Successfully');
        } catch (error) {
            toast.error('Error In saving information');
        }
    };

    return (
        <div className="flex justify-between items-center py-2 px-6 bg-gray-600 text-white shadow-md">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex space-x-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
                        onClick={event => handleOnClick(event, button)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonPallet;
