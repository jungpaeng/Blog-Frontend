import * as React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPane from '../components/editor/EditorPane';
import PreviewPane from '../components/editor/PreviewPane';

const EditorPage: React.FC = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader />}
                editor={<EditorPane />}
                preview={<PreviewPane />}
            />
        </div>
    );
};

export default EditorPage;
