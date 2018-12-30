import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PostInfo.module.scss';

const cx = classNames.bind(styles);

const PostInfo = () => {
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <h1>타이틀</h1>
                <div className={cx('tags')}>
                    <a>#태그1</a>
                    <a>#태그2</a>
                    <a>#태그3</a>
                </div>
                <div className={cx('date')}>Dec 30, 2018</div>
            </div>
        </div>
    );
};

export default PostInfo;
