import React, { Component } from 'react';
import classnames from 'classnames/bind';

// styles
import styles from './ContactModal.module.css';

// helpers
import { isValidText, isEmail, isDisabled } from '../../../../helpers';

// components
import TextField from '../../../common/TextField';
import Button from '../../../common/Button';
import TextAreaField from '../../../common/TextAreaField';

const cx = classnames.bind(styles);



class ContactModal extends Component {

    state = {
        name: {
            value: '',
            isInvalid: true,
            isTouched: false,
        },
        email: {
            value: '',
            isInvalid: true,
            isTouched: false,
        },
        message: {
            value: '',
            isInvalid: true,
            isTouched: false,
        }
    };

    handleInputChange = e => {
        const { target: { name, value } } = e;

        if (!isValidText(value)) {
            this.setState(prevState => ({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value,
                    isInvalid: true,
                    isTouched: true,
                }
            }));
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    [name]: {
                        ...prevState[name],
                        value,
                        isInvalid: false,
                        isTouched: true,
                    }
                };
            });
        }

        if (name === 'email' && !isEmail(value)) {
            this.setState(prevState => ({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value,
                    isInvalid: true,
                    isTouched: true,
                }
            }));
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            name: { value: nameValue },
            email: { value: emailValue },
            message: { value: messageValue }
        } = this.state;

        console.log(nameValue, emailValue, messageValue);
    };

    handleCloseModal = e => {
        e.stopPropagation();
        this.props.closeModal(false);
    };

    render() {
        const { name, email, message } = this.state;

        return (
            <div className={ cx('content') }>
                <div className={ cx('close') } onClick={this.handleCloseModal}>
                    &times;
                </div>
                <form className={ cx('form') } onSubmit={this.handleSubmit}>
                    <TextField
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={ name.value }
                        className={(name.isInvalid && name.isTouched) ? cx('error') : ''}
                        onChange={ this.handleInputChange }
                    />
                    <TextField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={ email.value }
                        className={(email.isInvalid && email.isTouched) ? cx('error') : ''}
                        onChange={ this.handleInputChange }
                    />
                    <TextAreaField
                        name="message"
                        placeholder="Type Your Message"
                        value={ message.value }
                        className={(message.isInvalid && message.isTouched) ? cx('error') : ''}
                        onChange={ this.handleInputChange }
                    />
                    <Button
                        disabled={!isDisabled(message.isInvalid, email.isInvalid, name.isInvalid)}
                        text="Submit"
                    />
                </form>
            </div>
        );
    }
}


export default ContactModal;
