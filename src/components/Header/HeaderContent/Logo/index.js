import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './Logo.module.css';

const cx = classnames.bind(styles);

const Logo = () => {
    return <div className={cx('logo')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BBC_News_%282008%29.svg/1200px-BBC_News_%282008%29.svg.png"
            alt="Logo"
            title="BBC News"
            className={cx('logo__img')}
        />
    </div>
};

export default Logo;
