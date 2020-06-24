import React from "react"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import {withStyles,} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        fontSize: 16,
        // '& label' :{
        //     fontSize: 16
        // },
        '& label.Mui-focused': {
            color: '#212529',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#212529',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#212529',
            },
        },
    },
})(TextField);

export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            password: null,
            email: null,

            verified: null,
            authenticated: null,

            showPassword: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };


    InputFieldPassword() {
        return (
            <FormControl required fullWidth={true} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                <OutlinedInput
                    name={'password'}
                    label="Пароль*"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                className="button-login-bg"
                                disableRipple="true"
                                disableFocusRipple="true"
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword.bind(this)}
                                onMouseDown={this.handleMouseDownPassword}
                            >
                                {this.state.showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="feather-eye-login"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="feather-eye-off-login"
                                    >
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                )}
                            </IconButton>
                        </InputAdornment>

                    }
                />
            </FormControl>
        );
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 padding-top-login">

                            <div className="row center-row">
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="hello-text-login">Вітаємо!</p>
                                        </div>
                                    </div>
                                    <div className="row margin-bottom-email-field">
                                        <div className="col-12">
                                            <CssTextField
                                                required
                                                id="outlined-text-email"
                                                label="E-mail"
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {this.InputFieldPassword()}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <a href="/all-items">
                                            <button className="login-button">
                                                Увійти
                                            </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-6 image-login-container">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}