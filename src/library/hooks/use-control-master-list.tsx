import { useAllControlsQuery } from '@store/api/control-master-api';
import useBaseListForm from './use-base-list-form';

const useControlMasterList = () => {
    const { isFormReady } = useBaseListForm(useAllControlsQuery, null);

    // Another example function
    const anotherFunction = (value: string) => {
        return `Hello, ${value}!`;
    };

    return {
        isFormReady,
        anotherFunction,
    };
};

export default useControlMasterList;
