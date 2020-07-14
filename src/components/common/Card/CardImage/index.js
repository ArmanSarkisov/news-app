import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from '../Card.module.css';

const cx = classnames.bind(styles);

const CardImage = ({img}) => {
    return <div
        className={cx('card__img')}
        style={{backgroundImage: `url(${img})`}}
    />
};

export default CardImage;
