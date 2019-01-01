export interface IPostInfo {
    title: string;
    markdown: string;
}

export interface IPostEditBody extends IPostInfo {
    tags: string;
}
