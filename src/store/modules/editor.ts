import {createAction, handleActions, Action} from 'redux-actions';
import * as api from '../../lib/api';
import {Id} from '../../@types/models/member';
import {pender} from 'redux-pender';

// action tyles
const INITALIZE = 'editor/INITALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';

export interface IEditorPayload {
    name: 'markdown' | 'tags' | 'title';
    value: string;
}

// action creators
export const actionCreators = {
    changeInput: createAction(CHANGE_INPUT),
    initalize: createAction(INITALIZE),
    writePost: createAction(WRITE_POST, api.writePost)
};

export interface IEditorState {
    postId: Id;
    markdown: string;
    tags: string;
    title: string;
}

// initial state
const initialState: IEditorState = {
    markdown: '',
    postId: null,
    tags: '',
    title: ''
};

// reducer
export default handleActions<IEditorState, IEditorPayload>({
    [INITALIZE]: (state, action: Action<IEditorPayload>) => initialState,
    [CHANGE_INPUT]: (state, action: Action<IEditorPayload>) => {
        const {name, value} = action.payload as IEditorPayload;
        return {
            ...state,
            [name]: value
        };
    },
    ...pender({
        type: WRITE_POST,
        onSuccess: (state, action) => {
            const {_id} = action.payload.data;
            return {
                ...state,
                postId: _id
            };
        }
    })
}, initialState);
