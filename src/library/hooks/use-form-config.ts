import { Control, FormConfig, Section } from '@lib/types';
import { useAllFormsQuery } from '@store/api/form-config-api';

export const useFormConfig = () => {
    const { data } = useAllFormsQuery(null);
    const formConfig = data;

    const getFormConfig = (formId: string): FormConfig | undefined => {
        return formConfig?.find(config => config.id === formId);
    };

    const getSectionConfig = (formId: string, sectionId: string): Section | undefined => {
        const formConfig = getFormConfig(formId);
        return formConfig?.sections.find(section => section.id === sectionId);
    };

    const getControlConfig = (formId: string, sectionId: string, controlId: string): Control | undefined => {
        const sectionConfig = getSectionConfig(formId, sectionId);
        return sectionConfig?.controls.find(control => control.id === controlId);
    };

    return {
        getFormConfig,
        getSectionConfig,
        getControlConfig,
    };
};

export default useFormConfig;
