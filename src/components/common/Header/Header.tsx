import * as React from 'react';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Header: React.FunctionComponent = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">Blog</Link>
            </div>
            <div className={cx('right')}>
                <Button
                    theme="outline"
                    to="/editor"
                >
                    New Post
                </Button>
            </div>
        </div>
    </header>
);

export default Header;
