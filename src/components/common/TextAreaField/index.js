import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './TextAreaField.module.css';

const cx = classnames.bind(styles);

const TextAreaField = ({ onChange, name, value, className, placeholder }) => (
    <div className={cx('inputWrap')}>
        <textarea
            className={cx('input', className)}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);


export default TextAreaField;
