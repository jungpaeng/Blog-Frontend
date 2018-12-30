import * as React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header: React.FunctionComponent = () => (
    <div className={cx('header')}>
        Header
    </div>
);

export default Header;
