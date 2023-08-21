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

export interface FormState {
    detail: Entity;
    criteria: SearchCriteria;
    list: [];
    state: UIState;
    custom: { [key: string]: any };
    errors: { [key: string]: string[] };
}

export type DispatchEvent = {
    type: string;
    payload?: any;
};
