import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './TextField.module.css';

const cx = classnames.bind(styles);

const TextField = ({ type, onChange, name, value, className, placeholder }) => (
    <div className={cx('inputWrap')}>
        <input
            className={cx('input', className)}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);


export default TextField;
