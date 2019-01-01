
import {combineReducers} from 'redux';
import {penderReducer as pender, PenderState} from 'redux-pender';
// export {default as base} from './base';
// export {default as list} from './list';
import post, {IPostState} from './post';
import editor, {IEditorState} from './editor';

export default combineReducers({
    editor,
    post,
    pender
} as any);

export interface IStoreState {
    editor: IEditorState;
    post: IPostState;
    pender: PenderState;
}
