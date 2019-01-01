import axios from 'axios';
import queryString from 'query-string';
import {Id} from '../@types/models/member';

interface IWriteApiParams {
    title: string;
    body: string;
    tags: string[];
}

interface IPostListApiParams {
    tag: string;
    pane: string;
}

export const writePost = (
    {title, body, tags}: IWriteApiParams
) => axios.post('/api/posts', {title, body, tags});

export const getPost = (id: Id) => axios.get(`/api/posts/${id}`);

export const getPostList = (
    {tag, pane}: IPostListApiParams
) => axios.get(`/api/posts/?${queryString.stringify({tag, pane})}`);