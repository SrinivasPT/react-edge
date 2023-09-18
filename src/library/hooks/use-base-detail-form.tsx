// import { FormState } from '@lib/types';
// import { setFormDetail } from '@store/features/form-slice';
// import { useAppDispatch, useAppSelector } from '@store/hooks';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// type QueryFunction<TData, TParam> = (param: TParam) => { isSuccess: boolean; data: TData };
// type MutationFunction<T> = (data: T) => Promise<any>;

// interface DetailFormOptions<TData> {
//     fetchData: QueryFunction<TData, { masterId: string }>;
//     saveData?: MutationFunction<TData>;
//     deleteData?: MutationFunction<string>;
//     additionalActions?: any[];
// }

// const useDetailForm = <TData,>(id: string, options: DetailFormOptions<TData>) => {
//     const { fetchData, saveData, deleteData, additionalActions } = options;

//     const { isSuccess: isInitialDataLoaded, data: initialData, reset } = fetchData({ masterId: id });

//     const [isFormReady, setIsFormReady] = useState(false);
//     const dispatch = useAppDispatch();
//     const router = useRouter();

//     // Selector to get the form state from the store
//     const formData: FormState = useAppSelector((store: any) => store.form.data);

//     // Reset the form if the ID changes
//     useEffect(() => {
//         setIsFormReady(false);
//         dispatch(reset());
//     }, [id]);

//     // Set the form data once the initial data is loaded
//     useEffect(() => {
//         if (isInitialDataLoaded) {
//             dispatch(setFormDetail({ initialData }));
//             setIsFormReady(true);
//         }
//     }, [isInitialDataLoaded]);

//     const handleSave = async (event: any) => {
//         event.preventDefault();

//         if (saveData) {
//             try {
//                 const response: any = await saveData(formData);
//                 console.log('Operation successful:', response.data);
//             } catch (error) {
//                 console.error('Operation failed:', error);
//             }
//         }
//     };

//     const handleDelete = async (event: any) => {
//         event.preventDefault();

//         if (deleteData) {
//             try {
//                 const response: any = await deleteData(id);
//                 console.log('Operation successful:', response.data);
//             } catch (error) {
//                 console.error('Operation failed:', error);
//             }
//         }
//     };

//     const actions = [
//         { code: 'BACK', label: 'To List', handler: () => router.push('/path-to-list') },
//         { code: 'SAVE', label: 'Save', handler: handleSave },
//         { code: 'DELETE', label: 'Delete', handler: handleDelete },
//     ];

//     return { isFormReady, actions, handleSave, handleDelete };
// };

// export default useDetailForm;

// // --------------------------------------------------------------------------------
// import useDetailForm from './path-to-useDetailForm';
// import { useDeleteControlMutation, useGetControlByMasterIdQuery, useUpdateControlMutation } from '@store/api/control-master-api';

// const useControlMasterDetail = (id: string) => {
//     const { handleSave, handleDelete, ...rest } = useDetailForm(id, {
//         fetchData: useGetControlByMasterIdQuery,
//         saveData: useUpdateControlMutation().mutateAsync,
//         deleteData: useDeleteControlMutation().mutateAsync,
//         // additionalActions: [/* any additional actions specific to this form */]
//     });

//     // Any other specific logic to ControlMasterDetail can be added here

//     return { handleSave, handleDelete, ...rest };
// };

// export default useControlMasterDetail;
