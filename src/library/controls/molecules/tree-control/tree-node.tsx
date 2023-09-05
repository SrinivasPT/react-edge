import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TreeItem } from '@lib/types';
import { useEffect, useState } from 'react';
import ContextMenu from './context-menu';

type TreeNodeProps = {
    item: TreeItem;
    level: number;
    handleChange: (action: string, item: any) => void;
    // actions: ContextMenuAction[];
};

const TreeNode: React.FC<TreeNodeProps> = ({ item, level, handleChange }) => {
    const [isExpanded, setIsExpanded] = useState(level === 1);
    const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number } | null>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleRightClick = (event: React.MouseEvent, currentItem: TreeItem) => {
        event.preventDefault();
        setContextMenuPos({ x: event.clientX, y: event.clientY });

        // Use the 'currentItem' here or set it to a state if needed.
    };

    const handleCloseContextMenu = () => {
        setContextMenuPos(null);
    };

    const handleAddNode = (currentItem: TreeItem) => {
        // Logic to add a child node to this currentItem.
        // console.log('Add node here', currentItem);
        handleChange('ADD', currentItem);
        handleCloseContextMenu();
    };

    const handleDeleteNode = (currentItem: TreeItem) => {
        // Logic to delete this node.
        // console.log('Delete this node', currentItem);
        handleChange('DELETE', currentItem);
        handleCloseContextMenu();
    };

    const handleRenameNode = (currentItem: TreeItem) => {
        // Logic to rename this node.
        const newName = prompt('Enter new name:', currentItem.label);
        if (newName) {
            // console.log(`Rename this node to: ${newName}`);
            handleChange('RENAME', currentItem);
        }
        handleCloseContextMenu();
    };

    const contextMenuActions = [
        { label: 'Add', callback: () => handleAddNode(item) },
        { label: 'Delete', callback: () => handleDeleteNode(item) },
        { label: 'Rename', callback: () => handleRenameNode(item) },
    ];

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
            <div className="flex items-center cursor-pointer" onClick={toggleExpand} onContextMenu={e => handleRightClick(e, item)}>
                {item.children && item.children.length > 0 ? (
                    <span className={`mr-2 ${isExpanded ? 'text-blue-500' : 'text-gray-400'}`}>
                        <FontAwesomeIcon icon={isExpanded ? faCircleMinus : faCirclePlus} />
                    </span>
                ) : (
                    <span className="mr-2"></span>
                )}
                <span onClick={() => handleChange('SELECT', item)}>{item.label}</span>
            </div>

            {isExpanded && item.children && (
                <ul className="list-item pl-8">
                    {item.children.map(child => (
                        <li key={child.id}>
                            <TreeNode item={child} level={level + 1} handleChange={handleChange} />
                        </li>
                    ))}
                </ul>
            )}

            {contextMenuPos && <ContextMenu position={contextMenuPos} onClose={handleCloseContextMenu} actions={contextMenuActions} />}
        </div>
    );
};

export default TreeNode;
