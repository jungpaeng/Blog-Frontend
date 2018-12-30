
import {combineReducers} from 'redux';
import {penderReducer as pender} from 'redux-pender';
// export {default as base} from './base';
// export {default as list} from './list';
// export {default as post} from './post';
import editor, {IEditorState} from './editor';

export default combineReducers({
    editor,
    pender
} as any);

export interface IStoreState {
    editor: IEditorState;
}
