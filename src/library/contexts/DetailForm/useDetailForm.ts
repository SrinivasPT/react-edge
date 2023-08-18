import { useContext } from "react";
import { FormDetailContext } from "./Context";

export function useDetailForm() {
    const context = useContext(FormDetailContext);

    if (!context) {
        throw new Error(
            "useFormDetails must be used within a FormDetailProvider"
        );
    }

    return {};
}
