import * as React from 'react';
import classNames from 'classnames';
import styles from './PageTemplate.module.scss';

const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className={cx('page-template')}>
        PageTemplate
    </div>
);

export default PageTemplate;