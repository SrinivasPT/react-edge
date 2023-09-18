import ButtonPallet, { IButtonPallet } from './button-pallet';

const PageTitleBar: React.FC<{ title: string; buttons: IButtonPallet[] }> = ({ title, buttons }) => {
    return (
        <div className="flex justify-between items-center py-2 px-6 text-black shadow-md bg-gray-300">
            <h1 className="text-xl font-semibold">{title}</h1>
            <ButtonPallet buttons={buttons} />
        </div>
    );
};

export default PageTitleBar;
