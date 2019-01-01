import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeaderContainer from '../containers/editor/EditorHeaderContainer';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer';

interface IOwnProps extends RouteComponentProps {}

const EditorPage: React.FC<IOwnProps> = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeaderContainer />}
                editor={<EditorPaneContainer />}
                preview={<PreviewPaneContainer />}
            />
        </div>
    );
};

export default EditorPage;
