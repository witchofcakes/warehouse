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

export default class PopupCreate extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,
            product_group_name: '',
            product_price: '',
            product_amount: 0,

            categories:
                [
                    {
                        product_group_name: "Крупи"
                    },
                    {
                        product_group_name: "Продовольчі товари"
                    },
                ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.addAmount = this.addAmount.bind(this);
        this.reduceAmount = this.reduceAmount.bind(this);
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleOpen = () => {
        this.setState({
            open: true
        })
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addAmount(){
        this.setState({
            product_amount: this.state.product_amount + 1
        })
    }

    reduceAmount(){
        let newAmount = Math.max(this.state.product_amount - 1, 0);
        this.setState({
            product_amount: newAmount
        })
    }


    render() {

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <button className="create-vac-employer">
                    Створити товар
                </button>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Створення товару</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    required
                                    id="outlined-text-email"
                                    label="Назва товару"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <ButtonGroup>
                                    <Button
                                        className="button-amount button-add-amount"
                                        aria-label="reduce"
                                        onClick={this.reduceAmount}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <CssTextField
                                        name="product_amount"
                                        required
                                        value={this.state.product_amount}
                                        onChange={this.handleChange}
                                        id="outlined-text-email"
                                        label="Кількість товару"
                                        variant="outlined"
                                    />
                                    <Button
                                        className="button-amount button-reduce-amount"
                                        aria-label="increase"
                                        onClick={this.addAmount}
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    required
                                    id="outlined-text-email"
                                    label="Виробник товару"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12" id="outlined-select-currency">
                                <CssTextField
                                    required
                                    name="product_group_name"
                                    select
                                    value={this.state.product_group_name}
                                    label="Категорія"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                >
                                    {this.state.categories.map((option) => (
                                        <MenuItem key={option.product_group_name} value={option.product_group_name}>
                                            {option.product_group_name}
                                        </MenuItem>
                                    ))}
                                </CssTextField>
                            </div>
                        </div>

                        <FormControl required fullWidth={true} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Ціна товару</InputLabel>
                            <OutlinedInput
                                className="margin-bottom-create-item"
                                name={'product_price'}
                                label="Ціна товару*"
                                value={this.state.product_price}
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment id="price-id-text" position="end">
                                        ₴
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    multiline
                                    rows={6}
                                    required
                                    id="outlined-text-email"
                                    label="Опис товару"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button className="button-popup-create">
                                    Створити товар
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}