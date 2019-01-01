import * as React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import {Link} from 'react-router-dom';
import styles from './PostInfo.module.scss';
import {IPostBody} from '../../../@types/models/post';

const cx = classNames.bind(styles);

interface IPostInfoProps extends Partial<IPostBody> {}

type Props = IPostInfoProps;

const PostInfo: React.FC<Props> = ({title, publishedDate, tags}) => {
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <h1>{title}</h1>
                <div className={cx('tags')}>
                    {tags && (
                        tags.map(
                            tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
                        )
                    )}
                </div>
                <div className={cx('date')}>
                    {moment(publishedDate).format('ll')}
                </div>
            </div>
        </div>
    );
};

export default PostInfo;
