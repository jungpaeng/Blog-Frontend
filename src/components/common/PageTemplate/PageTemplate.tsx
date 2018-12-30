import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';
import Header from '../Header';

const cx = classNames.bind(styles);

const PageTemplate: React.FunctionComponent = () => (
    <div className={cx('page-template')}>
        <Header />
    </div>
);

export default PageTemplate;
