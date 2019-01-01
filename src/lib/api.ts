import axios from 'axios';
import {Id} from '../@types/models/member';

interface IWriteApiParams {
    title: string;
    body: string;
    tags: string[];
}

export const writePost = (
    {title, body, tags}: IWriteApiParams
) => axios.post('/api/posts', {title, body, tags});

export const getPost = (id: Id) => axios.get(`/api/posts/${id}`);
