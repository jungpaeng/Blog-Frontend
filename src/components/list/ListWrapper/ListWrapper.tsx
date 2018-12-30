import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './ListWrapper.module.scss';

const cx = classNames.bind(styles);

const ListWrapper: React.FC = ({children}) => {
    return (
        <div className={cx('list-wrapper')}>
            {children}
        </div>
    );
};

export default ListWrapper;
