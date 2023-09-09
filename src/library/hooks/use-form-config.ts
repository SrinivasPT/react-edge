import { Control, FormConfig, Section, SectionControl } from '@lib/types';
import { useAppSelector } from '@store/hooks';
import _ from 'lodash';

export const useFormConfig = () => {
    // const { data: config } = useAllFormsQuery();
    const formConfig = useAppSelector((state: any) => state.formConfig.queries['AllForms(null)']?.data);
    const controlMaster = useAppSelector((state: any) => state.controlMaster.queries['AllControls(null)']?.data);

    const getFormConfig = (formId: string): FormConfig | undefined => {
        // const config = allFormsQuery.data;
        return formConfig?.find((form: any) => form.id === formId);
    };

    const getSectionConfig = (formId: string, sectionId: string): Section | undefined => {
        const formConfig = getFormConfig(formId);
        return formConfig?.sections.find(section => section.id === sectionId);
    };

    // const getControlConfig = (formId: string, sectionId: string, controlId: string): Control | undefined => {
    //     const sectionConfig = getSectionConfig(formId, sectionId);
    //     const sectionControlConfig = sectionConfig?.controls.find(control => control.masterId === controlId);
    //     const masterControlConfig = controlMaster?.find(control => control.id === controlId);
    // };

    const getFullControlConfig = (control: SectionControl): Control => {
        const masterControlConfig = transformControl(control, controlMaster);

        const mergedControl = {
            ...masterControlConfig,
            ...control,
        };

        // Only add the controls node if it exists in the original control.
        if (control.controls) {
            mergedControl.controls = masterControlConfig.controls;
        }

        return mergedControl as Control;
    };
    const getControlConfigByKey = (formId: string, key: string) => {
        const formConfig = getFormConfig(formId);
        return _.get(formConfig, key);
    };

    const transformControl = (control: Control | SectionControl, controlMasterData: Record<string, any>): Control => {
        const masterControl = control.masterId ? controlMasterData.find((master: Control) => master.masterId === control.masterId) : undefined;
        const baseControl = masterControl ? { ...masterControl, ...control } : { ...control };

        const nestedControls = baseControl.controls?.length
            ? { controls: baseControl.controls.map((childControl: Control) => transformControl(childControl, controlMasterData)) }
            : {};

        return { ...baseControl, ...nestedControls };
    };

    return {
        getFormConfig,
        getSectionConfig,
        getFullControlConfig,
        getControlConfigByKey,
    };
};

export default useFormConfig;
