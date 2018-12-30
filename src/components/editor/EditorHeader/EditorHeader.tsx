import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './EditorHeader.module.scss';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

interface IProps {
    onGoBack?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onSubmit?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const EditorHeader: React.FC<IProps> = ({onGoBack, onSubmit}) => {
    return (
        <div className={cx('editor-header')}>
            <div className={cx('back')}>
                <Button
                    onClick={onGoBack}
                    theme="outline"
                >
                    뒤로가기
                </Button>
            </div>
            <div className={cx('submit')}>
                <Button
                    onClick={onGoBack}
                    theme="outline"
                >
                    작성하기
                </Button>
            </div>
        </div>
    );
};

export default EditorHeader;
