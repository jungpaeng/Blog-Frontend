import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const PageTemplate: React.FunctionComponent = ({children}) => (
    <div className={cx('page-template')}>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
    </div>
);

export default PageTemplate;
