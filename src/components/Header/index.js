import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './Header.module.css';


// components
import Container from '../common/Container';
import HeaderContent from './HeaderContent';


const cx = classnames.bind(styles);

const Header = () => {
    return <header className={cx('header')}>
        <Container>
            <HeaderContent />
        </Container>
    </header>
};


export default Header;
