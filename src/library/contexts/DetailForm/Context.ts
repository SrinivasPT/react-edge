"use client";

import { DetailState, DispatchEvent } from "@lib/types";
import { Dispatch, createContext } from "react";

interface FormDetailContextType {
    state: DetailState;
    dispatch: Dispatch<any>;
}

export const FormDetailContext = createContext({
    state: {
        itemId: "1000",
        itemDetails: {},
        uiState: {},
        formChanges: {},
        validationErrors: {},
        adhocData: {},
    },
    dispatch: (dispatchEvent: DispatchEvent) => {},
} as FormDetailContextType);

export const initialDetailState: DetailState = {
    itemId: "100111",
    itemDetails: {},
    uiState: {
        isLoading: true,
        isEditing: false,
        isError: false,
        errorMessage: null,
        isSaved: false,
        isSaveInProgress: false,
    },
    formChanges: {},
    validationErrors: {},
    adhocData: {},
};
