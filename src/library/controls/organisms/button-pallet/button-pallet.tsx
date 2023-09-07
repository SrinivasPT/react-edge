export interface IButtonPallet {
    id: string;
    label: string;
    onClickHandler: (event: any) => Promise<void>;
}

const ButtonPallet: React.FC<{ buttons: IButtonPallet[] }> = ({ buttons }) => {
    return (
        <div className="flex space-x-4">
            {buttons.map((button, index) => (
                <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={button.onClickHandler}>
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonPallet;
