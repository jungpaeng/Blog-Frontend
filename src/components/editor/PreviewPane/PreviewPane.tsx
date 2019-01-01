import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewPane.module.scss';
import MarkdownRender from '../../common/MarkdownRender';
import {IPostInfo} from '../../../@types/models/post';

const cx = classNames.bind(styles);

export type PreviewPaneProps = IPostInfo;

type Props = PreviewPaneProps;

const PreviewPane: React.FC<Props> = ({markdown, title}) => {
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
