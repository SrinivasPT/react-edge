export interface GitUser {
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

export interface GitUserList {
    id: number;
    login: string;
    avatarUrl: string;
    htmlUrl: string;
}
