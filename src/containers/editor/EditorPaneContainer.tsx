import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditorPane, {
    IEditorChangeInputParams, EditorPaneProps
} from '../../components/editor/EditorPane/EditorPane';
import {actionCreators as editorActions} from '../../store/modules/editor';
import {IStoreState} from '../../store/modules';

type StateToProps = EditorPaneProps;

interface IDispatchToProps {
    EditorActions: typeof editorActions;
}

type Props = StateToProps & IDispatchToProps;

class EditorPaneContainer extends React.Component<Props> {
    handleChangeInput = ({name, value}: IEditorChangeInputParams) => {
        const {EditorActions} = this.props;
        EditorActions.changeInput({name, value});
    }

    render() {
        const {title, tags, markdown} = this.props;

        return (
            <EditorPane
                title={title}
                markdown={markdown}
                tags={tags}
                onChangeInput={this.handleChangeInput}
            />
        );
    }
}

export default connect(
    (state: IStoreState) => ({
        markdown: state.editor.markdown,
        tags: state.editor.tags,
        title: state.editor.title
    }),
    dispatch => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(EditorPaneContainer);
