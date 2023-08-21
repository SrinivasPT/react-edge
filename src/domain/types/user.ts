export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    address: Address;
    company: Company;
}

export interface Address {
    address: string;
    city: string;
    postalCode: string;
    state: string;
}

export interface Company {
    name: string;
    title: string;
    department: string;
    address: Address;
}
