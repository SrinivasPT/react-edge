import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextMenuAction, TreeItem } from '@lib/types';
import { useEffect, useState } from 'react';
import ContextMenu from './context-menu';

type TreeNodeProps = {
    item: TreeItem;
    handleChange: (selectedId: string) => void;
    actions: ContextMenuAction[];
};

const TreeNode: React.FC<TreeNodeProps> = ({ item, handleChange, actions }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number } | null>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleRightClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenuPos({ x: event.clientX, y: event.clientY });
    };

    const handleCloseContextMenu = () => {
        setContextMenuPos(null);
    };

    const handleAddNode = () => {
        // Logic to add a child node to this item.
        console.log('Add node here');
        handleCloseContextMenu();
    };

    const handleDeleteNode = () => {
        // Logic to delete this node.
        console.log('Delete this node');
        handleCloseContextMenu();
    };

    const handleRenameNode = () => {
        // Logic to rename this node.
        const newName = prompt('Enter new name:', item.label);
        if (newName) {
            console.log(`Rename this node to: ${newName}`);
        }
        handleCloseContextMenu();
    };

    useEffect(() => {
        const handleGlobalClick = () => {
            if (contextMenuPos) {
                handleCloseContextMenu();
            }
        };

        window.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('click', handleGlobalClick);
        };
    }, [contextMenuPos]);

    return (
        <div className="my-1">
            <div className="flex items-center cursor-pointer" onClick={toggleExpand} onContextMenu={handleRightClick}>
                {item.children && item.children.length > 0 ? (
                    <span className={`mr-2 ${isExpanded ? 'text-blue-500' : 'text-gray-400'}`}>
                        <FontAwesomeIcon icon={isExpanded ? faCircleMinus : faCirclePlus} />
                    </span>
                ) : (
                    <span className="mr-2"></span>
                )}
                <span onClick={() => handleChange(item.id)}>{item.label}</span>
            </div>

            {isExpanded && item.children && (
                <ul className="list-item pl-8">
                    {item.children.map(child => (
                        <li key={child.id}>
                            <TreeNode item={child} handleChange={handleChange} actions={actions} />
                        </li>
                    ))}
                </ul>
            )}

            {contextMenuPos && <ContextMenu position={contextMenuPos} onClose={handleCloseContextMenu} actions={actions} />}
        </div>
    );
};

export default TreeNode;
