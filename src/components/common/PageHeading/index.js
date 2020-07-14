import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './PageHeading.module.css';

const cx = classnames.bind(styles);

const PageHeading = ({ title }) => {
    return <div className={cx('heading')}><h2>{title}</h2></div>
};

export default PageHeading;
