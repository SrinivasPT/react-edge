// import { useAddFormMutation, useDeleteFormMutation, useGetFormByIdQuery, useUpdateFormMutation } from '@store/api/form-config-api';
// import { useAppSelector } from '@store/hooks';

// const useFormOperations = (formId: string) => {
//     const [addForm] = useAddFormMutation();
//     const [updateForm] = useUpdateFormMutation();
//     const [deleteForm] = useDeleteFormMutation();

//     const { isSuccess: isInitialDataLoaded, data: initialData } = useGetFormByIdQuery({ id: formId });
//     const formState = useAppSelector(state => state.form);

//     const { isFormReady, handleSave, handleDelete } = useFormDetail({
//         id: params.formId,
//         entityName: 'form',
//         initialData,
//         isInitialDataLoaded,
//         mutationFns: { add: addForm, update: updateForm, delete: deleteForm },
//     });

//     const handleSave = () => {
//         // Save logic here
//     };

//     const handleDelete = () => {
//         // Delete logic here
//     };

//     return {
//         isInitialDataLoaded,
//         initialData,
//         formState,
//         handleSave,
//         handleDelete,
//     };
// };

// export default useFormOperations;
