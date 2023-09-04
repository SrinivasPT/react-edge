import { ControlType, DataType } from './enums';

export interface Validation {
    required?: boolean;
    requiredExpression: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    minDate?: Date;
    maxDate?: Date;
}

export interface Access {
    visible?: boolean;
    visibleExpression: string;
    readonly?: boolean;
    readonlyExpression: string;
}

export interface CustomProperties {
    [key: string]: any;
}

export interface Control {
    id: string;
    type: ControlType;
    label: string;
    dataType: DataType;
    dataKey: string;

    // Button
    action: string;

    // Complex Controls
    controls: Control[];

    // Permissions
    access?: Access;

    // Validations
    validations?: Validation;

    // Non Mandatory properties
    entityAttribute?: string;
    placeholder?: string;
    width?: string;
    className?: string;
    domainCode?: string;
    parentId?: string;

    // Custom properties
    customProperties?: CustomProperties;
}

export interface Section {
    id: string;
    title: string;
    layout: string;
    controls: Control[];
}

export interface FormConfig {
    id: string;
    title: string;
    sections: Section[];
}

export interface TreeItem {
    id: string;
    label: string;
    children?: TreeItem[];
}

export type ContextMenuAction = {
    label: string;
    callback: () => void;
};

export interface ControlBuilderProps {
    control: Control;
    parentKey: string;
}

export interface SmartControlProps {
    formId: string;
    configKey: string;
    parentKey: string;
}
