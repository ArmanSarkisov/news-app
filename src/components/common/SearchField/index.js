import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames/bind';

// styles
import styles from './SearchField.module.css';
import Button from '../Button';

const cx = classnames.bind(styles);

const SearchField = ({ type, children }) => {
    const { push } = useHistory();

    const [inputValue, setInputValue] = useState('');

    const handleChange = useCallback(e => {
        const { target: { value } } = e;
        setInputValue(value);
    }, []);

    const handleClick = useCallback(() => {
        if (!inputValue) return;

        push(`/search?q=${inputValue}`);
    }, [inputValue, push]);

    return <div className={cx('inputWrap')}>
        <input type={type} className={cx('inputWrap__input')} onChange={handleChange} />
        {children}
        <Button text="Search" onClick={handleClick} />
    </div>
};


export default SearchField;
