import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewPane.module.scss';
import MarkdownRender from '../../common/MarkdownRender';

const cx = classNames.bind(styles);

interface IProps {
    markdown: string;
    title: string;
}

const PreviewPane: React.FC<IProps> = ({markdown, title}) => {
    return (
        <div className={cx('preview-pane')}>
            <h1 className={cx('title')}>
                {title}
            </h1>
            <div>
                <MarkdownRender markdown={markdown} />
            </div>
        </div>
    );
};

export default PreviewPane;
