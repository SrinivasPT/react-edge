import { IButtonPallet } from '@lib/controls/organisms/button-pallet/button-pallet';
import { createContext } from 'react';

export interface IFormActions {
    [key: string]: IButtonPallet[];
}

const FormActionsContext = createContext({} as IFormActions);
export default FormActionsContext;
