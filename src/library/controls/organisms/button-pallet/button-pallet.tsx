export interface IButtonPallet {
    id: string;
    label: string;
    handler: (event: any) => Promise<void>;
}

const ButtonPallet: React.FC<{ title: string; buttons: IButtonPallet[] }> = ({ title, buttons }) => {
    return (
        <div className="flex justify-between items-center py-2 px-6 bg-gray-600 text-white shadow-md">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex space-x-4">
                {buttons.map((button, index) => (
                    <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded" onClick={button.handler}>
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonPallet;
