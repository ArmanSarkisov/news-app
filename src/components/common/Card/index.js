import React from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './Card.module.css';

// components
import CardImage from './CardImage';
import CardContent from './CardContent';

const cx = classnames.bind(styles);

const Card = ({ img, title, date, description }) => {
    return <div className={ cx('card') }>
        <CardImage img={ img } />
        <CardContent
            title={title}
            date={date}
            description={description}
        />
    </div>;
};

export default Card;
