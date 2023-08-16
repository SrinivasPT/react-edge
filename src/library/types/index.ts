export interface SearchCriteria {
    [key: string]: string | number | null;
}

export interface UIState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
}

export interface Entity {
    id: string;
    [key: string]: any;
}

export interface SearchResults<T extends Entity> {
    results: T[];
    totalCount: number;
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
}

export interface SearchState<T extends Entity> {
    searchCriteria: SearchCriteria;
    uiState: UIState;
    adhocData: { [key: string]: any };
    searchResults: SearchResults<T>;
    pagination: Pagination;
}

export interface DetailState<T extends Entity> {
    itemId: string | null;
    itemDetails: T;
    uiState: UIState;
    formChanges: { [key: string]: any };
    validationErrors: { [key: string]: string[] };
    adhocData: { [key: string]: any };
}
