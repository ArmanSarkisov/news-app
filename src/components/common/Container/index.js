import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './Container.module.css';

const cx = classnames.bind(styles);

const Container = ({ children }) => {
    return <div className={cx('container')}>
        {children}
    </div>
};


export default Container;
