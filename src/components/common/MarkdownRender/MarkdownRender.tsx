import * as React from 'react';
import Prism from 'prismjs';
import classNames from 'classnames/bind';
import marked from 'marked';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';
import styles from './MarkdownRender.module.scss';

const cx = classNames.bind(styles);

interface IState {
    html: string;
}
interface IProps {
    markdown: string;
}

class MarkdownRender extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const {markdown} = this.props;

        this.state = {
            html: markdown ?
                marked(props.markdown, {breaks: true, sanitize: true}) :
                ''
        };
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        if (prevProps.markdown !== this.props.markdown) {
            this.renderMarkdown();
        }

        if (prevState.html !== this.state.html) {
            Prism.highlightAll();
        }
    }

    renderMarkdown = () => {
        const {markdown} = this.props;

        if (!markdown) {
            this.setState({html: ''});
            return;
        }

        this.setState({
            html: marked(markdown, {
                breaks: true,
                sanitize: true
            })
        });
    }

    render() {
        const {html} = this.state;
        const markup = {
            __html: html
        };

        return (
            <div
                className={cx('markdown-render')}
                dangerouslySetInnerHTML={markup}
            />
        );
    }
}

export default MarkdownRender;
