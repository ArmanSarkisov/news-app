import React from 'react';
import classnames from 'classnames/bind';
import Moment from 'react-moment';


// styles
import styles from '../Card.module.css';

const cx = classnames.bind(styles);

const CardContent = ({ title, date, description }) => {
    return <div className={ cx('card__content') }>
        <h3>{ title }</h3>
        <span className={ cx('card__date') }>
                <Moment format="D MMM YYYY" withTitle>
                    {date}
                </Moment>
            </span>
        <p>
            {description}
        </p>
    </div>
};


export default CardContent;
