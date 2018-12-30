import * as React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer: React.FunctionComponent = () => (
    <div className={cx('footer')}>
        Footer
    </div>
);

export default Footer;
