import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PostBody.module.scss';

const cx = classNames.bind(styles);

const PostBody: React.FC = () => {
    return (
        <div className={cx('post-body')}>
            <div className={cx('parser')}>
                내용
            </div>
        </div>
    );
};

export default PostBody;
