import * as React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';

const EditorPage: React.FC = () => {
    return (
        <div>
            <EditorTemplate
                header="헤더"
                editor="에디터"
                preview="프리뷰"
            />
        </div>
    );
};

export default EditorPage;
