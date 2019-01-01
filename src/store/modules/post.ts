import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';
import * as api from '../../lib/api';

// action tyles
const GET_POST = 'post/GET_POST';

// action creators
export const actionCreators = {
    getPost: createAction(GET_POST, api.getPost)
};

export interface IPostState {
    post: [];
}

// initial state
const initialState: IPostState = {
    post: []
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
