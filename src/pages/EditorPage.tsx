import * as React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer';

const EditorPage: React.FC = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader />}
                editor={<EditorPaneContainer />}
                preview={<PreviewPaneContainer />}
            />
        </div>
    );
};

export default EditorPage;
