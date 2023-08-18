export interface User {
    id: number;
    name: string;
    login: string;
    email: string;
    twitterUsername: string;
    avatarUrl: string;
    htmlUrl: string;
    followers: string;
    type: string;
    siteAdmin: boolean;
}

export interface UserList {
    id: number;
    login: string;
    avatarUrl: string;
    htmlUrl: string;
}
