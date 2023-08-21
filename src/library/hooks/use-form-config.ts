import { Control, FormConfig, Section } from '@lib/types';
import { useSelector } from 'react-redux';

export const useFormConfig = () => {
    // const { data: allFormConfig } = useGetAllFormConfigQuery(null);
    const allFormConfig: FormConfig[] = useSelector((store: any) => store.formConfig);

    const getFormConfig = (formId: string): FormConfig | undefined => {
        return allFormConfig?.find(config => config.id === formId);
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
