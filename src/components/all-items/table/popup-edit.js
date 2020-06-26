import React from 'react';

import x from "../../../images/icons/x.svg";

import Popup from "reactjs-popup";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Collapse from '@material-ui/core/Collapse';
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

import axios from "axios";
import qs from "querystring";
import Tooltip from "@material-ui/core/Tooltip";

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

export default class PopupEditItem extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,
            product_group_name: '',
            product_price: '',
            product_amount: 0,
            productDescr: '',
            productManufacturer: '',
            productName: '',
            productGroupId: '',

            amountRemove: '',
            amountAdd: '',

            groups: [],

            openCollapse: false,
            openCollapseAdd: false,

        }

        this.handleChange = this.handleChange.bind(this);
        this.addAmount = this.addAmount.bind(this);
        this.reduceAmount = this.reduceAmount.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addAmount(){
        let newAmount = parseInt(this.state.product_amount) + parseInt(this.state.amountAdd)
        this.setState({
            product_amount: newAmount
        })
    }

    reduceAmount(){
        let newAmount = parseInt(this.state.product_amount) - parseInt(this.state.amountRemove)
        this.setState({
            product_amount: newAmount
        })
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        axios.get('http://localhost:5000/api/group/getAll', { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({
                    groups: response.data.groups,
                });
            })
            .catch(function(error) {
                console.log(error);
            });

        axios.get('http://localhost:5000/api/good/getOne/' + this.props.itemID, { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({
                    product_amount: response.data.product_amount,
                    productDescr: response.data.product_descr,
                    productManufacturer: response.data.product_manufacturer,
                    product_price: response.data.product_price,
                    productName: response.data.product_name,
                    productGroupId: response.data.product_group_id,
                });
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleItemEdit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        const { product_amount, productDescr, productManufacturer, productGroupId, product_price, productName} = this.state;

        if (!product_amount || !productGroupId || !productDescr || !productManufacturer || !product_price || !productName) {
            alert("Будь ласка, заповніть всі обов'язкові поля")
        }

        else {

            const newItem = {
                productAmount: this.state.product_amount,
                productDescr: this.state.productDescr,
                productManufacturer: this.state.productManufacturer,
                productPrice: this.state.product_price,
                productName: this.state.productName,
                productGroupId: this.state.productGroupId,
                productId: this.props.itemID
            };

            axios.post('http://localhost:5000/api/good/update', qs.stringify(newItem), { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(
                    window.location.reload()
                )
                .catch((error) => {
                    console.log(error)
                });

            console.log(newItem);

        }
    };

    handleExpand = (evt, index) => {
        this.setState({
            openCollapse: !this.state.openCollapse,
        });
    };

    handleExpandAdd = (evt, index) => {
        this.setState({
            openCollapseAdd: !this.state.openCollapseAdd,
        });
    };

    render() {

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <Tooltip title={'Редагувати товар'}>
                    <button className="edit-button-table">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="feather-edit-2"
                        >
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                        </svg>
                    </button>
                </Tooltip>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Редагування товару</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    required
                                    name="productName"
                                    value={this.state.productName}
                                    onChange={this.handleChange}
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
                                        startIcon={<AddIcon />}
                                        onClick={evt => this.handleExpandAdd(evt, this.props.index - 1)}
                                    >
                                        Додати товар
                                    </Button>
                                    <Button
                                        className="button-amount button-reduce-amount"
                                        aria-label="increase"
                                        onClick={this.addAmount}
                                        startIcon={<RemoveIcon />}
                                        onClick={evt => this.handleExpand(evt, this.props.index - 1)}
                                    >
                                        Вилучити товар
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
                                </ButtonGroup>
                            </div>
                        </div>

                        <Collapse in={this.state.openCollapse} timeout="auto" unmountOnExit>
                            <div className="row margin-bottom-create-item align-items-center">
                                <div className="col-10">
                                    <CssTextField
                                        name="amountRemove"
                                        value={this.state.amountRemove}
                                        onChange={this.handleChange}
                                        id="outlined-text-email"
                                        label="К-сть товару для вилучення"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="col-2 no-gutters-left">
                                    <button className="save-button-popup" onClick={this.reduceAmount}>
                                        Зберегти
                                    </button>
                                </div>
                            </div>
                            <div className="collapse-line-popup"/>
                        </Collapse>

                        <Collapse in={this.state.openCollapseAdd} timeout="auto" unmountOnExit>
                            <div className="row margin-bottom-create-item align-items-center">
                                <div className="col-10">
                                    <CssTextField
                                        name="amountAdd"
                                        value={this.state.amountAdd}
                                        onChange={this.handleChange}
                                        id="outlined-text-email"
                                        label="К-сть товару для додавання"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="col-2 no-gutters-left">
                                    <button className="save-button-popup" onClick={this.addAmount}>
                                        Зберегти
                                    </button>
                                </div>
                            </div>
                            <div className="collapse-line-popup"/>
                        </Collapse>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    name="productManufacturer"
                                    value={this.state.productManufacturer}
                                    onChange={this.handleChange}
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
                                    name="productGroupId"
                                    select
                                    value={this.state.productGroupId}
                                    label="Категорія"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                >
                                    {this.state.groups.map((option) => (
                                        <MenuItem key={option.group_name} value={option.group_id}>
                                            {option.group_name}
                                        </MenuItem>
                                    ))}
                                </CssTextField>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    required={true}
                                    className="margin-bottom-create-item"
                                    name={'product_price'}
                                    label="Ціна товару"
                                    value={this.state.product_price}
                                    onChange={this.handleChange}
                                    variant={"outlined"}
                                />
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <CssTextField
                                    name="productDescr"
                                    value={this.state.productDescr}
                                    onChange={this.handleChange}
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
                                <button onClick={this.handleItemEdit.bind(this)} className="button-popup-create">
                                    Редагувати товар
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}