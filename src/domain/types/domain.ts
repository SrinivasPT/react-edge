export interface Domain {
    code: string;
    label: string;
    description: string;
    order: number;
    parent: string;
}

export interface DomainList {
    [category: string]: Domain[];
}
