import { ButtonPallet } from '@lib/controls';
import FormActionsContext from '@lib/sections/form-actions-context';
import { isNil } from '@lib/utils/functions/general-functions';
import { useContext } from 'react';
import { LayoutBuilderProps } from './layout-builder';

const CardLayout: React.FC<LayoutBuilderProps> = ({ section, children }) => {
    const actions = useContext(FormActionsContext);
    if (isNil(section.title)) return <>{children}</>;

    return (
        <div className="block rounded-lg bg-white hover:shadow-md transition-shadow duration-300 ease-in-out w-full border mb-3">
            <div className="flex items-center justify-between border-b border-gray-200 ps-6 pt-2 bg-zinc-50">
                <h3 className="text-md font-semibold text-gray-700 uppercase">{section.title}</h3>
                {actions && (
                    <ButtonPallet
                        buttons={actions[section.id]}
                        // className="text-gray-700 bg-zinc-50 border rounded-lg px-2 py-1 hover:bg-zinc-100 transition-all duration-200 ease-in-out"
                    />
                )}
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
};

export default CardLayout;
