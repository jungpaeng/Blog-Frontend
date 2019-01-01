import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import PageTemplate from '../components/common/PageTemplate';
import ListWrapper from '../components/list/ListWrapper';
import PostList from '../components/list/PostList';
import Pagination from '../components/list/Pagination';

interface IOwnProps extends RouteComponentProps {}

const ListPage: React.FC<IOwnProps> = () => {
    return (
        <PageTemplate>
            <ListWrapper>
                <PostList />
                <Pagination />
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;
