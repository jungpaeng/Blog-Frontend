import * as React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import PreviewPane from '../components/editor/PreviewPane';

const EditorPage: React.FC = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader />}
                editor={<EditorPaneContainer />}
                preview={<PreviewPane />}
            />
        </div>
    );
};

export default EditorPage;
