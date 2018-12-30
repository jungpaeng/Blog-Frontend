import * as React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPane from '../components/editor/EditorPane';

const EditorPage: React.FC = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader />}
                editor={<EditorPane />}
                preview="프리뷰"
            />
        </div>
    );
};

export default EditorPage;
