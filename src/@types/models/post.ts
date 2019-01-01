export interface IPostInfo {
    title: string;
    markdown: string;
}

export interface IPostBody extends IPostInfo {
    tags: string;
}
