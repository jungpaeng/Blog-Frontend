import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './EditorPane.module.scss';

const cx = classNames.bind(styles);

class EditorPane extends React.Component {
    render() {
        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="제목을 입력하세요"
                    name="title"
                />
                <div className={cx('code-editor')} />
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input
                        placeholder="태그를 입력하세요 (쉼표로 구분)"
                        name="tags"
                    />
                </div>
            </div>
        );
    }
}

export default EditorPane;
