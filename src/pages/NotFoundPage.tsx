import * as React from 'react';
import {RouteComponentProps} from 'react-router';

interface IOwnProps extends RouteComponentProps {}

const NotFoundPage: React.FC<IOwnProps> = () => {
    return (
        <div>
            NotFound
        </div>
    );
};

export default NotFoundPage;
