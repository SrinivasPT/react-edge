// "use client";

// import { DetailState } from "@lib/types";
// import { useImmerReducer } from "use-immer";
// import { FormDetailContext } from "./Context";
// import { formDetailReducer } from "./Reducer";

// const FormDetailProvider: any = ({ children }: any) => {
//     const initialState: DetailState = {
//         itemId: "1001",
//         itemDetails: {},
//         uiState: {
//             isLoading: true,
//             isEditing: false,
//             isError: false,
//             errorMessage: null,
//             isSaved: false,
//             isSaveInProgress: false,
//         },
//         formChanges: {},
//         validationErrors: {},
//         adhocData: {},
//     };

//     const [state, dispatch] = useImmerReducer(formDetailReducer, initialState);

//     return (
//         <FormDetailContext.Provider value={{ state, dispatch }}>
//             {!state.uiState.isLoading && children}
//         </FormDetailContext.Provider>
//     );
// };

// export default FormDetailProvider;
