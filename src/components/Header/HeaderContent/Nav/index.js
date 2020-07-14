import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';

// styles
import styles from './Nav.module.css';

// api
import axiosInstance from '../../../../api';

// constants
import { API_KEY } from '../../../../constants/api';

const cx = classnames.bind(styles);

const Nav = () => {
    const [navItems, setNavItems] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getNavItems = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/sources?apiKey=${API_KEY}`);
            setNavItems(response.data.sources);
        } catch (e) {
            console.warn(e.message);
        }
    }, []);

    const openMobileMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen, setIsMenuOpen]);

    useEffect(() => {
        getNavItems();
    }, [getNavItems]);

    return <nav className={cx('nav')}>
        <div
            className={cx('nav__burger')}
            onClick={openMobileMenu}
        >
            <span className={cx('nav__burger_line')} />
            <span className={cx('nav__burger_line')} />
            <span className={cx('nav__burger_line')} />
        </div>
        {navItems.length ? (
            <div className={cx('nav__items', {isMenuOpen})}>
                <div className={cx('nav__item')}>
                    <NavLink exact to={`/category/${navItems[0].id}`}>{navItems[0].name}</NavLink>
                </div>
                <div className={cx('nav__item')}>
                    <NavLink exact to={`/category/${navItems[4].id}`}>{navItems[4].name}</NavLink>
                </div>
                <div className={cx('nav__item')}>
                    <NavLink exact to={`/category/${navItems[2].id}`}>{navItems[2].name}</NavLink>
                </div>
            </div>
        ) : null}
    </nav>
};

export default Nav;
