export interface SearchCriteria {
    [key: string]: string | number | null;
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

export interface SearchState {
    searchCriteria: SearchCriteria;
    uiState: UIState;
    adhocData: { [key: string]: any };
    searchResults: SearchResults;
    pagination: Pagination;
}

export interface DetailState {
    itemId: string | null;
    itemDetails: any;
    uiState: UIState;
    formChanges: { [key: string]: any };
    validationErrors: { [key: string]: string[] };
    adhocData: { [key: string]: any };
}

export type DispatchEvent = {
    type: string;
    payload?: any;
};
