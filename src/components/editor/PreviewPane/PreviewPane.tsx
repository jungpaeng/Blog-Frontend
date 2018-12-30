import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewPane.module.scss';

const cx = classNames.bind(styles);

interface IProps {
    markdown?: any;
    title?: string;
}

const PreviewPane: React.FC<IProps> = ({markdown, title}) => {
    return (
        <div className={cx('preview-pane')}>
            <h1 className={cx('title')}>
                제목
            </h1>
            <div>내용</div>
        </div>
    );
};

export default PreviewPane;
