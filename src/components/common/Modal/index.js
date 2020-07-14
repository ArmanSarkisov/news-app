import React from 'react';
import classnamse from 'classnames/bind';

// styles
import styles from './Modal.module.css';

const cx = classnamse.bind(styles);

const Modal = ({ children }) => {
    return <div className={cx('modal')}>
        {children}
    </div>
};


export default Modal;
