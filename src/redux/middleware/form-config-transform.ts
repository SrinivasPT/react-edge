import { Control } from '@lib/types';
import { Middleware } from '@reduxjs/toolkit';

export const formConfigMiddleware: Middleware<{}, any> = store => next => action => {
    const transformControl = (control: Control, controlMasterData: Record<string, any>): Control => {
        // Base transform for the current control
        let transformedControl =
            control.masterId && controlMasterData[control.masterId] ? { ...control, ...controlMasterData[control.masterId] } : { ...control };

        // Recursion for nested controls
        if (transformedControl.controls && transformedControl.controls.length > 0) {
            transformedControl = {
                ...transformedControl,
                controls: transformedControl.controls.map((childControl: Control) => transformControl(childControl, controlMasterData)),
            };
        }

        return transformedControl;
    };

    const transformSection = (section: any, controlMasterData: Record<string, any>) => {
        if (section.controls && section.controls.length > 0) {
            return {
                ...section,
                controls: section.controls.map((control: Control) => transformControl(control, controlMasterData)),
            };
        }
        return section;
    };

    const transformData = (data: any, controlMasterData: Record<string, any>) => {
        if (data.sections && data.sections.length > 0) {
            return {
                ...data,
                sections: data.sections.map((section: any) => transformSection(section, controlMasterData)),
            };
        }
        return data;
    };

    // Check if this action is a successful API response from formConfigApi.AllForms
    if (action.type?.endsWith('/fulfilled') && action.type?.startsWith('formConfig')) {
        // Ensure we have a payload and it's of expected structure
        if (action.payload && Array.isArray(action.payload)) {
            const controlMasterData: Record<string, any> = store.getState().control; // Adjust path according to your store structure

            // Transform the data
            const transformedData = action.payload.map((dataItem: any) => transformData(dataItem, controlMasterData));

            // Override the payload with the transformed data
            action.payload = transformedData;
        }
    }

    return next(action);
};
