export enum ControlType {
    Text = 'TEXT',
    Select = 'SELECT',
    Checkbox = 'CHECKBOX',
    Radio = 'RADIO',
    Textarea = 'TEXTAREA',
    File = 'FILE',
    Number = 'NUMBER',
    Date = 'DATE',
    Time = 'TIME',
    DateTime = 'DATE_TIME',
    Email = 'EMAIL',
    Password = 'PASSWORD',
    Phone = 'PHONE',
    RichText = 'RICH_TEXT',
}

export enum DataType {
    String = 'STRING',
    Number = 'NUMBER',
    Boolean = 'BOOLEAN',
    Date = 'DATE',
}

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
    dataType: DataType;
    dataKey: string;

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
