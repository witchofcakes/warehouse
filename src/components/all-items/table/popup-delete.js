import React from 'react';

import x from "../../../images/icons/x.svg";

import Popup from "reactjs-popup";
import { Redirect } from 'react-router'

import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import qs from 'querystring'

import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import TableRow from "@material-ui/core/TableRow";

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

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    deleteItem(parameter, e){

        e.preventDefault();
        const token = localStorage.getItem('token')

        axios.delete('http://localhost:5000/api/good/delete/' + parameter, { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(
                // window.location.reload()
            )
            .catch(err=>alert(err));
            console.log("parameter " + parameter)
    }

    render() {

        return (
            <Popup className="delete-modal" lockScroll={true} modal closeOnDocumentClick trigger={
                    <Tooltip title={"Видалити товар"}>
                    <button className="edit-button-table">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-trash-delete-order-camp-row">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
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

                        <div className="row margin-bottom-create-item">
                            <div className="col-12 padding-delete-group padding-button-text-delete">
                                <span className="delete-item-popup-text">Ви впевнені, що хочете видалити всі одиниці товару "{this.props.name}"? Інформація про цей товар буде назавжди втрачений. Ви не зможете відновити дані.</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 justify-content-center padding-button-delete">
                                <button onClick={close} className="button-popup-cancel">
                                    Відмінити
                                </button>
                                <button onClick={this.deleteItem.bind(this, this.props.itemID)} className="button-popup-delete">
                                    Видалити товар
                                </button>
                                {console.log("delete " + this.props.itemID)}
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}