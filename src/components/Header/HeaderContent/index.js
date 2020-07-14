import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames/bind';

// styles
import styles from '../Header.module.css';

// components
import Nav from './Nav';
import Logo from './Logo';
import SearchField from '../../common/SearchField';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import ContactModal from './ContactModal';

const cx = classnames.bind(styles);

const HeaderContent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = useCallback(() => {
        setIsModalOpen(true);
    }, [setIsModalOpen]);

    return <div className={cx('header__content')}>
        <div className={cx('header__logoNav')}>
            <Logo />
            <Nav />
        </div>
        <div className={cx('header__searchContact')}>
            <SearchField type="text" />
            <Button text="Contact Us" onClick={handleClick} />
        </div>
        {isModalOpen && ReactDOM.createPortal(
            <Modal>
                <ContactModal closeModal={setIsModalOpen} />
            </Modal>,
            document.querySelector('body')
        )}
    </div>
};


export default HeaderContent;
