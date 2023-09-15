import { SectionBuilder } from '@lib/builders';
import { ModalPopup } from '@lib/common/modal';
import { useAllControlsQuery } from '@store/api/control-master-api';
import { setInternalTemp } from '@store/features/form-slice';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';

export interface AddControlsModal {
    isOpen: boolean;
    onAdd: () => void;
    onClose: () => void;
}

const AddControlsModal: React.FC<AddControlsModal> = ({ isOpen, onAdd, onClose }) => {
    const { data, isSuccess } = useAllControlsQuery(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(setInternalTemp({ key: 'all-master-controls.controlMaster', value: data }));
    }, [isSuccess]);

    return (
        <ModalPopup
            title="Add Controls"
            size="large"
            isOpen={isOpen}
            footerButtons={
                <>
                    <button onClick={onAdd}>Add Controls</button>
                    <button onClick={onClose}>Close</button>
                </>
            }
        >
            <SectionBuilder formId="form" sectionId="add-master-controls" parentKey={`internal.temp.all-master-controls`} />
        </ModalPopup>
    );
};

export default AddControlsModal;
