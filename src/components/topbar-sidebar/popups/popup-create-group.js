import React from 'react';

import x from "../../../images/icons/x.svg";

import Popup from "reactjs-popup";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";

import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import qs from 'querystring'

import axios from "axios";

const CssTextField = withStyles({
    root: {
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

export default class PopupCreateGroup extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,

            productGroupName: '',
            productGroupDescr: '',

            groups: [],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleGroupAdd = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        const { productGroupDescr, productGroupName} = this.state;

        if (!productGroupDescr || !productGroupName) {
            alert("Будь ласка, заповніть всі обов'язкові поля")
        }

        else {

            const newItem = {
                productGroupDescr: this.state.productGroupDescr,
                productGroupName: this.state.productGroupName,
            };

            axios.post('http://localhost:5000/api/group', qs.stringify(newItem), { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(
                    window.location.reload()
                )
                .catch((error) => {
                    alert(error)
                });

            console.log(newItem);

            this.setState({
                productGroupDescr: '',
                productGroupName: '',
            });

        }
    };


    render() {

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <button className="create-group-button">
                    Створити групу
                </button>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Створення групи</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    name="productGroupName"
                                    value={this.state.productGroupName}
                                    onChange={this.handleChange}
                                    required
                                    id="outlined-text-email"
                                    label="Назва групи"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    name="productGroupDescr"
                                    value={this.state.productGroupDescr}
                                    onChange={this.handleChange}
                                    multiline
                                    rows={6}
                                    required
                                    id="outlined-text-email"
                                    label="Опис групи"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button onClick={this.handleGroupAdd.bind(this)} className="button-popup-create">
                                    Створити групу
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}