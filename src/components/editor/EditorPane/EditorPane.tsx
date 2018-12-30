import * as React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import classNames from 'classnames/bind';
import styles from './EditorPane.module.scss';

const cx = classNames.bind(styles);

class EditorPane extends React.Component {
    editorRef: HTMLDivElement = {} as HTMLDivElement;
    codeMirror: CodeMirror.Editor = {} as CodeMirror.Editor;

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editorRef, {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'markdown',
            theme: 'monokai'
        });
    }

    componentDidMount() {
        this.initializeEditor();
    }

    render() {
        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="제목을 입력하세요"
                    name="title"
                />
                <div
                    className={cx('code-editor')}
                    ref={(ref: HTMLDivElement) => this.editorRef = ref}
                />
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
