import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PostBody.module.scss';
import {IPostBody} from '../../../@types/models/post';
import MarkdownRender from '../../common/MarkdownRender';

const cx = classNames.bind(styles);

interface IPostBodyProps extends Partial<IPostBody> {}

const PostBody: React.FC<IPostBodyProps> = ({body}) => {
    return (
        <div className={cx('post-body')}>
            <div className={cx('parser')}>
                <MarkdownRender markdown={body} />
            </div>
        </div>
    );
};

export default PostBody;
