import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import PageTemplate from '../components/common/PageTemplate';
import Post from '../containers/post/Post';

interface IPageParams {
    id: string;
}

interface IOwnProps extends RouteComponentProps<IPageParams> {}

const PostPage: React.FC<IOwnProps> = ({match}) => {
    const {id} = match.params;

    return (
        <PageTemplate>
            <Post id={id} />
        </PageTemplate>
    );
};

export default PostPage;
