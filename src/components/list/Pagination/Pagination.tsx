import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

const Pagination: React.FC = () => {
    return (
        <div className={cx('pagination')}>
            <Button disabled>
                Prev
            </Button>
            <div className={cx('number')}>
                Page 1
            </div>
            <Button>
                Next
            </Button>
        </div>
    );
};

export default Pagination;
