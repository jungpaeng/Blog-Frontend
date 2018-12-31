import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewPane.module.scss';
import MarkdownRender from '../../common/MarkdownRender';

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
            <div>
                <MarkdownRender />
            </div>
        </div>
    );
};

export default PreviewPane;
