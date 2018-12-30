import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '././EditorTemplate.module.scss';

const cx = classNames.bind(styles);

interface IProps {
    header: React.ReactNode;
    editor: React.ReactNode;
    preview: React.ReactNode;
}

class EditorTemplate extends React.Component<IProps> {
    render() {
        const {header, editor, preview} = this.props;

        return (
            <div className={cx('editor-template')}>
                {header}
                <div className={cx('panes')}>
                    <div className={cx('pane', 'editor')}>
                        {editor}
                    </div>
                    <div className={cx('pane', 'preview')}>
                        {preview}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorTemplate;
