import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';
import * as api from '../../lib/api';
import {Id} from '../../@types/models/member';

// action tyles
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const actionCreators = {
    getPostList: createAction(GET_POST_LIST, api.getPostList, meta => meta)
};

// TODO: 타입 정의 필요
interface IList {
    __v: Id;
    _id: Id;
}

// TODO: 타입 정의 필요
export interface IListState {
    posts: IList[];
    lastPage: number;
}

// initial state
const initialState: IListState = {
    posts: [],
    lastPage: null
};

// reducer
export default handleActions({
    ...pender({
        type: GET_POST_LIST,
        onSuccess: (state, action) => {
            const {data: posts} = action.payload;
            const lastPage = action.payload.headers['last-page'];

            return {
                ...state,
                posts,
                lastPage: parseInt(lastPage, 10)
            };
        }
    })
}, initialState);
