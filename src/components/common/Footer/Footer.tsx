import * as React from 'react';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer: React.FC = () => (
    <footer className={cx('footer')}>
        <Link
            to="/"
            className={cx('brand')}
        >
            Blog
        </Link>
        <div className={cx('admin-login')}>로그인</div>
    </footer>
);

export default Footer;
