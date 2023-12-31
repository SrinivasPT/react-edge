export interface SearchCriteria {
    [key: string]: any;
}

export interface UIState {
    isLoading: boolean;
    isEditing: boolean;
    isError: boolean;
    isSaved: boolean;
    isSaveInProgress: boolean;
    [key: string]: boolean;
}

export interface Entity {
    id: string;
    [key: string]: any;
}

export interface SearchResults {
    results: [];
    totalCount: number;
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
}

export interface TableInternalState {
    selectedRecords?: any[];
    isEditable?: boolean;
    selectAllRows?: boolean;
    parentDataKey?: string;
    selectedRowId?: any;
}

export interface InternalState {
    table: Record<string, TableInternalState>;
    temp: {};
}

export interface FormState {
    searchCriteria: SearchCriteria;
    data: { [key: string]: any };
    actions: { [key: string]: (...args: any[]) => void };
    internal: InternalState;
    custom: { [key: string]: any };
    flags: UIState;
    errors: { [key: string]: string[] };
}

export type DispatchEvent = {
    type: string;
    payload?: any;
};

export type FormInit = {
    id: string;
    // entityName: string;
    initialData: any;
    isInitialDataLoaded: boolean;
    actions?: { [key: string]: () => void };
};

export type MutationFunctions = {
    add: any;
    update: any;
    delete: any;
};

export type InitialActionPayload = {
    initialData: any;
};
