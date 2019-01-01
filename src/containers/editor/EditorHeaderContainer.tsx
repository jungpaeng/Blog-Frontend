import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import EditorHeader from '../../components/editor/EditorHeader';
import {IStoreState} from '../../store/modules';
import {actionCreators as editorActions, IEditorState} from '../../store/modules/editor';

interface IStateToProps extends Partial<IEditorState> {}

interface IDispatchToProps {
    EditorAction: typeof editorActions;
}

interface IOwnProps extends RouteComponentProps {}

type Props = IOwnProps & IStateToProps & IDispatchToProps;

class EditorHeaderContainer extends React.Component<Props> {
    componentDidMount() {
        const {EditorAction} = this.props;
        EditorAction.initalize();
    }

    handleGoBack = () => {
        const {history} = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const {title, markdown, tags, EditorAction, history} = this.props;
        const post = {
            title,
            body: markdown,
            tags: tags === '' ?
                [] :
                tags.split(',').map(tag => tag.trim())
        };

        try {
            await EditorAction.writePost(post);

            history.push(`/post/${this.props.postId}`);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <EditorHeader
                onGoBack={this.handleGoBack}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default connect(
    (state: IStoreState) => ({
        postId: state.editor.postId,
        title: state.editor.title,
        markdown: state.editor.markdown,
        tags: state.editor.tags
    }),
    dispatch => ({
        EditorAction: bindActionCreators(editorActions, dispatch)
    })
)(withRouter<Props>(EditorHeaderContainer));
