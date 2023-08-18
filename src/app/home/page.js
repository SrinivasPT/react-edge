'use client';
import { FormDetailActionTypes, FormDetailContext, formDetailReducer, initialDetailState } from '@lib/contexts';
import axios from 'axios';
import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import HelloWorld from './hello-world';

export default function Page() {
  const [state, dispatch] = useImmerReducer(formDetailReducer, initialDetailState);

  useEffect(() => {
    const initialize = async () => {
      const result = await axios.get('https://api.github.com/users/srinivaspt');
      dispatch({ type: FormDetailActionTypes.SET_FORM_DETAIL, payload: result.data });
    };
  }, []);

  return (
    <FormDetailContext.Provider value={{ state, dispatch }}>
      {state.uiState.isLoading && (
        <>
          <h1>Home</h1>
          <HelloWorld />
        </>
      )}
    </FormDetailContext.Provider>
  );
}
