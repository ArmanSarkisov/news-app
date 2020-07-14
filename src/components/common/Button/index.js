import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './Button.module.css';

const cx = classnames.bind(styles);

const Button = ({ text, onClick, disabled, className }) => {
    return <div className={cx('button')}>
        <button
            disabled={disabled}
            className={cx('button_btn', className)}
            onClick={onClick}
        >
            {text}
        </button>
    </div>
};

export default Button;
