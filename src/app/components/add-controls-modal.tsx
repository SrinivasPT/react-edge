import { ModalPopup } from '@lib/common/modal';
import AddControls from '../forms/[formId]/add-controls';

export interface AddControlsModal {
    isOpen: boolean;
    onAdd: () => void;
    onClose: () => void;
}

const AddControlsModal: React.FC<AddControlsModal> = ({ isOpen, onAdd, onClose }) => {
    return (
        <ModalPopup
            title="Add Controls"
            isOpen={isOpen}
            footerButtons={
                <>
                    <button onClick={onAdd}>Add Controls</button>
                    <button onClick={onClose}>Close</button>
                </>
            }
        >
            <AddControls />
        </ModalPopup>
    );
};

export default AddControlsModal;
