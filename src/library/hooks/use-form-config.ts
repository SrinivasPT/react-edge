import { Control, FormConfig, Section } from '@lib/types';
import { useAppSelector } from '@store/hooks';
import _ from 'lodash';

export const useFormConfig = () => {
    // const { data: config } = useAllFormsQuery();
    const config = useAppSelector((state: any) => state.config.queries['AllForms(null)'].data);

    const getFormConfig = (formId: string): FormConfig | undefined => {
        // const config = allFormsQuery.data;
        return config?.find((form: any) => form.id === formId);
    };

    const getSectionConfig = (formId: string, sectionId: string): Section | undefined => {
        const formConfig = getFormConfig(formId);
        return formConfig?.sections.find(section => section.id === sectionId);
    };

    const getControlConfig = (formId: string, sectionId: string, controlId: string): Control | undefined => {
        const sectionConfig = getSectionConfig(formId, sectionId);
        return sectionConfig?.controls.find(control => control.id === controlId);
    };

    const getControlConfigByKey = (formId: string, key: string) => {
        const formConfig = getFormConfig(formId);
        return _.get(formConfig, key);
    };

    return {
        getFormConfig,
        getSectionConfig,
        getControlConfig,
        getControlConfigByKey,
    };
};

export default useFormConfig;
