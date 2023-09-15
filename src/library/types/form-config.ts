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

export interface SectionControl {
    id: string;
    label: string;
    typeCode?: string;
    dataKey?: string;
    masterId: string;
    readonly?: boolean;
    controls?: SectionControl[];
}

export interface Control {
    id: string;
    masterId: string;

    label: string;
    controlTypeCode: ControlType;
    dataTypeCode: DataType;
    dataKey: string;

    // Text Are
    rows?: number;

    // Button
    buttons?: string;

    // Complex Controls
    controls?: Control[];

    // Permissions
    visible?: boolean;
    visibleExpression: string;
    readonly?: boolean;
    readonlyExpression: string;

    // Validations
    validations?: Validation;

    // Table
    isEditable?: boolean;
    actions: string;
    entityUrl?: string;
    selectColumn?: string;

    // Non Mandatory properties
    entityAttribute?: string;
    placeholder?: string;
    width: string;
    className?: string;
    domainCode?: string;
    parentId?: string;

    // Custom properties
    customProperties?: CustomProperties;
}

export interface Section {
    id: string;
    title: string;
    layoutTypeCode: string;
    dataKey?: string;
    access: Access;
    actions: string;
    readonly: string;
    controls: Control[];
}

export interface FormConfig {
    id: string;
    title: string;
    version: number;
    buttons: string;
    dataKey?: string;
    sections: Section[];
}

export interface TreeItem {
    uniqueId: string;
    id: string;
    label: string;
    level: string;
    parentId: string | null;
    children?: TreeItem[];
}

export type ContextMenuAction = {
    label: string;
    callback: () => void;
};

export interface ControlBuilderProps {
    control: Control;
    parentKey: string;
    value?: any;
}

export interface InputControlProps {
    control: Control;
    type: string;
    parentKey: string;
}

export interface SmartControlProps {
    formId: string;
    configKey: string;
    parentKey: string;
}
