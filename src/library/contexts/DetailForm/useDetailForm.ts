import { DetailState, Entity } from "@library/types";
import { useContext } from "react";
import { FormDetailContext } from "./Context";

export function useDetailForm<T extends Entity>() {
    const context = useContext(FormDetailContext);

    if (!context) {
        throw new Error(
            "useFormDetails must be used within a FormDetailProvider"
        );
    }

    const { state, dispatch } = context;

    // Initialization
    const initializeForm = (initialState: DetailState<T>) => {
        dispatch({ type: "INITIALIZE_FORM", payload: initialState });
    };

    // Actions
    const setLoading = (isLoading: boolean) => {
        dispatch({ type: "SET_LOADING", payload: isLoading });
    };

    // ... define other actions similarly

    return {
        state,
        initializeForm,
        setLoading,
        // ... other actions
    };
}
