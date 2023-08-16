import { DetailState, Entity } from "@library/types";
import { produce } from "immer";
import { FormDetailActionTypes } from "./Actions";

export const formDetailReducer = <T extends Entity>(
    state: DetailState<T>,
    action: any
): DetailState<T> => {
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
                break;

            default:
                break;
        }
    });
};
