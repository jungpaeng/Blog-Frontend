export interface IPostInfo {
    title: string;
    markdown: string;
}

export interface IPostEditBody extends IPostInfo {
    tags: string;
}

export interface IPostBody {
    title: string;
    body: string;
    publishedDate: Date;
    tags: string[];
}
