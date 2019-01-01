import * as React from 'react';
import {connect} from 'react-redux';
import PreviewPane from '../../components/editor/PreviewPane';
import {IStoreState} from '../../store/modules';
import {PreviewPaneProps} from '../../components/editor/PreviewPane/PreviewPane';

type StateToProps = PreviewPaneProps;

type Props = StateToProps;

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
