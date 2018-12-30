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

export interface IEditorChangeInputParams {
    name: string;
    value: string;
}

interface IProps {
    markdown: string;
    tags: string;
    title: string;
    onChangeInput: ({name, value}: IEditorChangeInputParams) => void;
}

class EditorPane extends React.Component<IProps> {
    editorRef!: HTMLDivElement;
    cursor!: CodeMirror.Position;
    codeMirror!: CodeMirror.Editor;

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editorRef, {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'markdown',
            theme: 'monokai'
        });
        this.codeMirror.on('change', this.handleChangeMarkdown);
    }

    componentDidMount() {
        this.initializeEditor();
    }

    componentDidUpdate(prevProps: IProps, prevState: IProps) {
        if (prevProps.markdown !== this.props.markdown) {
            if (!this.codeMirror) {
                return;
            }
            this.codeMirror.setValue(this.props.markdown);
            if (!this.cursor) {
                return;
            }
            this.codeMirror.setCursor(this.cursor);
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {onChangeInput} = this.props;
        const {value, name} = e.target;
        onChangeInput({name, value});
    }

    handleChangeMarkdown = (doc: CodeMirror.Editor) => {
        const {onChangeInput} = this.props;
        this.cursor = doc.getCursor();

        onChangeInput({
            name: 'markdown',
            value: doc.getValue()
        });
    }

    render() {
        const {tags, title} = this.props;

        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="제목을 입력하세요"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
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
                        value={tags}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default EditorPane;
