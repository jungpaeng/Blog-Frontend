import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PostInfo from '../../components/post/PostInfo';
import PostBody from '../../components/post/PostBody';
import {Id} from '../../@types/models/member';
import {IStoreState} from '../../store/modules';
import {actionCreators as postActions, IPostState} from '../../store/modules/post';

interface IOwnProps {
    id: Id;
}

interface IStateToProps extends Partial<IPostState> {
    loading: boolean;
}

interface IDispatchToProps {
    PostActions: typeof postActions;
}

type Props = IOwnProps & IStateToProps & IDispatchToProps;

class Post extends React.Component<Props> {
    componentDidMount() {
        this.initialize();
    }

    initialize = async () => {
        const {id, PostActions} = this.props;

        try {
            await PostActions.getPost(id);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const {loading, post} = this.props;
        const {title, publishedDate, body, tags} = post;

        if (loading) return null;

        return (
            <>
                <PostInfo
                    title={title}
                    publishedDate={publishedDate}
                    tags={tags}
                />
                <PostBody
                    body={body}
                />
            </>
        );
    }
}

export default connect(
    (state: IStoreState) => ({
        post: state.post.post,
        loading: state.pender.pending['post/GET_POST']
    }),
    dispatch => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Post);
