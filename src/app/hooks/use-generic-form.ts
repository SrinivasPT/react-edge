import { useFormConfig } from '@lib/hooks';
import useInitializeForm from '@lib/hooks/use-initialize-form';
import { useGenericGetQuery } from '@store/api/generic-api';
import { useParams } from 'next/navigation';

const useGenericForm = () => {
    const params = useParams();
    const formConfig = useFormConfig().getFormConfig(params.entityName as string);

    // Get the data from the Redux Tool Kit Query (RTKQ)
    const { isSuccess: isInitialDataLoaded, data: initialData } = useGenericGetQuery({
        entity: params.entityName as string,
        id: params.id as string,
    });

    // Initialize the form using the above data
    const { isFormReady } = useInitializeForm({ id: params.formId as string, initialData, isInitialDataLoaded });

    return { entityName: params.entityName as string, id: params.id, formConfig, isFormReady };
};

export default useGenericForm;
