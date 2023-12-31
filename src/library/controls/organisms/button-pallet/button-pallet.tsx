import { toast } from 'react-toastify';

export interface IButtonPallet {
    controlId: string;
    code: string;
    label: string;
    handler: (event: any) => Promise<void> | any;
}

enum ButtonType {
    SAVE = 'SAVE',
    DELETE = 'DELETE',
    BACK = 'BACK',
    ERROR = 'ERROR',
}

const ButtonPallet: React.FC<{ buttons: IButtonPallet[] }> = ({ buttons }) => {
    const handleOnClick = (event: any, button: IButtonPallet) => {
        try {
            button.handler(button);
            sendToastMessage(button.code);
        } catch (error) {
            sendToastMessage('error');
        }
    };

    const sendToastMessage = (code: string) => {
        const messages: any = {
            [ButtonType.SAVE]: 'Information Saved Successfully',
            [ButtonType.DELETE]: 'Information Deleted Successfully',
            [ButtonType.ERROR]: 'Something went wrong',
        };

        const message = messages[code];
        if (message?.length > 0) toast.success(message);
    };

    return (
        <div className="flex space-x-2">
            {buttons?.map((button, index) => (
                <button
                    key={index}
                    className={
                        index === 0
                            ? 'bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white'
                            : 'bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded text-white'
                    }
                    onClick={event => handleOnClick(event, button)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonPallet;
