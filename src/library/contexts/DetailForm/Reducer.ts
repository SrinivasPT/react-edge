import { DetailState } from "@lib/types";
import { produce } from "immer";
import { FormDetailActionTypes } from "./Actions";

export const formDetailReducer = (
    state: DetailState,
    action: any
): DetailState => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FormDetailActionTypes.SET_LOADING:
                draft.uiState.isLoading = action.payload;
                break;

            case FormDetailActionTypes.SET_ERROR:
                draft.uiState.isError = action.payload.error;
                draft.uiState.errorMessage = action.payload.message;
                break;

            case FormDetailActionTypes.SET_ITEM_DETAILS:
                draft.itemDetails = action.payload;
                draft.uiState.isLoading = false;
                break;

            default:
                break;
        }
    });
};
