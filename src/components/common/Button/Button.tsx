import * as React from 'react';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface IButton {
    to?: string;
    disabled?: boolean;
    theme?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Div: React.FC = ({children, ...rest}) => (
    <div {...rest}>{children}</div>
);

const Button: React.FC<IButton> = ({
    children,
    to,
    onClick,
    disabled,
    theme = 'default'
}) => {
    const Element = (to && !disabled) ? Link : Div;

    return (
        <Element
            to={to ? to : ''}
            className={cx(
                'button',
                theme,
                {disabled}
            )}
            onClick={(onClick && !disabled) ? onClick : () => null}
        >
            {children}
        </Element>
    );
};

export default Button;
