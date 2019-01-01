import axios from 'axios';

interface IWriteApiParams {
    title: string;
    body: string;
    tags: string[];
}

export const writePost = (
    {title, body, tags}: IWriteApiParams
) => axios.post('/api/posts', {title, body, tags});
