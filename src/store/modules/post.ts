import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';
import * as api from '../../lib/api';
import {Id} from '../../@types/models/member';

// action tyles
const GET_POST = 'post/GET_POST';

// action creators
export const actionCreators = {
    getPost: createAction(GET_POST, api.getPost)
};

interface IPost {
    __v: Id;
    _id: Id;
    title: string;
    publishedDate: Date;
    body: string;
    tags: string[];
}

export interface IPostState {
    post: IPost;
}

// initial state
const initialState: IPostState = {
    post: {} as IPost
};

// reducer
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {data: post} = action.payload;
            return {
                ...state,
                post
            };
        }
    })
}, initialState);
