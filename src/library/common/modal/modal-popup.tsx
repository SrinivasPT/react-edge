import { FC, ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    title?: string;
    size?: 'small' | 'medium' | 'large';
    onClose?: () => void;
    footerButtons?: ReactNode;
    children?: ReactNode;
}

const sizeClass = {
    small: 'w-1/3 h-1/3 flex flex-col',
    medium: 'w-3/5 h-3/5 flex flex-col',
    large: 'w-9/10 h-4/5 flex flex-col', // increase width from w-4/5 to w-9/10
};

const ModalPopup: FC<ModalProps> = ({ isOpen, title, size, children, onClose, footerButtons }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity">
            <div className={`modal-content bg-white rounded-lg shadow-lg ${size && sizeClass[size]}`} style={{ width: '90%' }}>
                {title && (
                    <div className="border-b p-4">
                        <h2 className="text-xl">{title}</h2>
                        {onClose && (
                            <button className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300" onClick={onClose}>
                                &times;
                            </button>
                        )}
                    </div>
                )}
                <div className="p-4 overflow-x-auto overflow-y-auto max-h-[calc(60vh-2rem)]">{children}</div>
                {footerButtons && <div className="border-t p-4 flex justify-end space-x-4">{footerButtons}</div>}
            </div>
        </div>
    );
};

export default ModalPopup;
