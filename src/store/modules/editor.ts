import {createAction, handleActions, Action} from 'redux-actions';

// action tyles
const INITALIZE = 'editor/INITALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

export interface IEditorPayload {
    name: 'markdown' | 'tags' | 'title';
    value: string;
}

// action creators
export const actionCreators = {
    changeInput: createAction(CHANGE_INPUT),
    initalize: createAction(INITALIZE)
};

export interface IEditorState {
    markdown: string;
    tags: string;
    title: string;
}

// initial state
const initialState: IEditorState = {
    markdown: '',
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
    }
}, initialState);
