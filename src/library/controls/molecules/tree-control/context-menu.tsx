import { ContextMenuAction } from '@lib/types';

const ContextMenu: React.FC<{
    position: { x: number; y: number };
    onClose: () => void;
    actions: ContextMenuAction[];
}> = ({ position, onClose, actions }) => {
    return (
        <div className="absolute z-10 bg-white rounded-md shadow-lg p-2" style={{ top: position.y, left: position.x }}>
            {actions.map(action => (
                <div key={action.label} onClick={action.callback} className="cursor-pointer p-2 hover:bg-gray-200">
                    {action.label}
                </div>
            ))}
        </div>
    );
};

export default ContextMenu;
