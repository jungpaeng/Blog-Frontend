import * as React from 'react';
import {connect} from 'react-redux';
import PreviewPane from '../../components/editor/PreviewPane';
import {IStoreState} from '../../store/modules';

interface IStateToProps {
    markdown: string;
    title: string;
}

type Props = IStateToProps;

class PreviewPaneContainer extends React.Component<Props> {
    render() {
        const {title, markdown} = this.props;

        return (
            <PreviewPane
                title={title}
                markdown={markdown}
            />
        );
    }
}

export default connect(
    (state: IStoreState) => ({
        markdown: state.editor.markdown,
        title: state.editor.title
    })
)(PreviewPaneContainer);
