import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditorPane from '../../components/editor/EditorPane/EditorPane';
import {actionCreators as editorActions, IEditorPayload} from '../../store/modules/editor';
import {IStoreState} from '../../store/modules';

// TODO: 옵션 제거되어야 함
interface IProps {
    markdown?: string;
    tage?: string;
    title?: string;
    EditorActions?: typeof editorActions;
}

class EditorPaneContainer extends React.Component<IProps> {
    handleChangeInput = ({name, value}: IEditorPayload) => {
        const {EditorActions} = this.props;
        EditorActions.changeInput({name, value});
    }

    render() {
        const {title, tage, markdown} = this.props;

        return (
            <EditorPane
                title={title}
                markdown={markdown}
                tage={tage}
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
