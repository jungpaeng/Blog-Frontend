import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const PageTemplate: React.FunctionComponent = () => (
    <div className={cx('page-template')}>
        <Header />
        <Footer />
    </div>
);

export default PageTemplate;
