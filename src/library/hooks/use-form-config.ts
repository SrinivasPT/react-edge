import { Control, FormConfig, Section } from '@lib/types';
import { useAllFormsQuery } from '@store/api/form-config-api';

export const useFormConfig = () => {
    const allFormsQuery = useAllFormsQuery();

    const getFormConfig = (formId: string): FormConfig | undefined => {
        const config = allFormsQuery.data;
        return config?.find(config => config.id === formId);
    };

    const getSectionConfig = (formId: string, sectionId: string): Section | undefined => {
        const config = getFormConfig(formId);
        return config?.sections.find(section => section.id === sectionId);
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
