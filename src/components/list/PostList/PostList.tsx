import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PostList.module.scss';

const cx = classNames.bind(styles);

const PostItem: React.FC = () => {
    return (
        <div className={cx('post-item')}>
            <h2>
                <a>타이틀</a>
            </h2>
            <div className={cx('date')}>2017-10-24</div>
            <p>내용</p>
            <div className={cx('tags')}>
                <a>#태그1</a>
                <a>#태그2</a>
                <a>#태그3</a>
            </div>
        </div>
    );
};

const PostList: React.FC = () => {
    return (
        <div className={cx('post-list')}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
};

export default PostList;
