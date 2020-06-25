import React from 'react';

import x from "../../../images/icons/x.svg";

import Popup from "reactjs-popup";
import TableCell from "@material-ui/core/TableCell";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

export default class PopupDeleteItem extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,
            product_group_name: '',
            product_price: '',
            product_amount: 0,

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
                <Tooltip title={'Видалити товар'}>
                    <button className="edit-button-table">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="feather-edit-2"
                        >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                    </button>
                </Tooltip>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Видалення товару</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <span className="delete-item-popup-text">Ви впевнені, що хочете видалити товар "Крупа гречана"? Він видалиться назавжди.</span>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="delete-item-popup-text">Якщо так, то оберіть, будь ласка, яку кількість товару бажаєте видалити.</span>
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

                    </div>
                )}
            </Popup>
        );
    }
}