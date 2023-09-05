export interface SearchCriteria {
    [key: string]: any;
}

export interface UIState {
    isLoading: boolean;
    isEditing: boolean;
    isError: boolean;
    isSaved: boolean;
    isSaveInProgress: boolean;
    errorMessage: string | null;
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
    selectedRecords?: Record<string, boolean>;
    isEditable?: boolean;
    selectAllRows?: boolean;
    parentDataKey?: string;
    selectedRowId?: any;
}

export interface InternalState {
    table: Record<string, TableInternalState>;
}

export interface FormState {
    data: { [key: string]: any };
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
    entityName: string;
    initialData: any;
    isInitialDataLoaded: boolean;
};

export type MutationFunctions = {
    add: any;
    update: any;
    delete: any;
};

export type InitialActionPayload = {
    key: string;
    initialData: any;
};
