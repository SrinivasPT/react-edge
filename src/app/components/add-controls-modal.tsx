import { SectionBuilder } from '@lib/builders';
import { ModalPopup } from '@lib/common/modal';
import { useFormBuilder } from '@lib/hooks';
import { useAllControlsQuery } from '@store/api/control-master-api';
import { setInternalTemp } from '@store/features/form-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

export interface AddControlsModal {
    formId: string;
    sectionId: string;
}

const AddControlsModal: React.FC<AddControlsModal> = ({ formId, sectionId }) => {
    const { data, isSuccess } = useAllControlsQuery(null);
    const { addControlsToSection, closeAddControlsModal } = useFormBuilder();
    const formState = useAppSelector(state => state.form);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(setInternalTemp({ key: 'all-master-controls.controlMaster', value: data }));
    }, [isSuccess]);

    return (
        <ModalPopup
            title="Add Controls"
            size="large"
            isOpen={formState.flags?.showAddControls}
            footerButtons={
                <>
                    <button onClick={() => addControlsToSection(formId, sectionId)}>Add Controls</button>
                    <button onClick={closeAddControlsModal}>Close</button>
                </>
            }
        >
            <SectionBuilder formId="form" sectionId="add-master-controls" parentKey={`internal.temp.all-master-controls`} />
        </ModalPopup>
    );
};

export default AddControlsModal;
