import { FC, ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    title?: string;
    onClose?: () => void;
    footerButtons?: ReactNode;
    children?: ReactNode;
}

const ModalPopup: FC<ModalProps> = ({ isOpen, title, children, onClose, footerButtons }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity">
            <div className="modal-content bg-white rounded-lg shadow-lg max-w-lg w-full">
                {title && (
                    <div className="border-b p-4">
                        <h2 className="text-xl">{title}</h2>
                        {onClose && (
                            <button className="absolute top-4 right-4" onClick={onClose}>
                                &times;
                            </button>
                        )}
                    </div>
                )}
                <div className="p-4">{children}</div>
                {footerButtons && <div className="border-t p-4 flex justify-end space-x-4">{footerButtons}</div>}
            </div>
        </div>
    );
};

export default ModalPopup;
