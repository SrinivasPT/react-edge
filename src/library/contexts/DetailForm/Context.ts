import { DetailState, Entity } from "@library/types";
import { createContext, Dispatch } from "react";

interface FormDetailContextType<T extends Entity> {
    state: DetailState<T>;
    dispatch: Dispatch<any>;
}

export const FormDetailContext = createContext<
    FormDetailContextType<any> | undefined
>(undefined);
