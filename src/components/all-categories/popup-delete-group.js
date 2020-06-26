import React from 'react';

import x from "../../images/icons/x.svg";

import Popup from "reactjs-popup";
import { Redirect } from 'react-router'

import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

export default class PopupDeleteGroup extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,

            productGroupName: '',
            productGroupDescr: '',

            groups: [],
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    deleteGroup(parameter, e){

        e.preventDefault();
        const token = localStorage.getItem('token')

        axios.delete('http://localhost:5000/api/group/delete/' + parameter, { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(
                () => this.setState({ redirect: true }),
            )
            .catch(err=> console.log(err));

    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/all-categories'/>
        }
        return (

            <Popup id="delete-modal" lockScroll={true} modal closeOnDocumentClick trigger={
                <button className="button-edit-group margin-delete-category">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-category">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                </button>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Видалення групи</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12 padding-delete-group padding-button-text-delete">
                                <span className="delete-item-popup-text">Ви впевнені, що хочете видалити групу "{this.props.name}"? Ця група буде назавжди втрачена. Ви не зможете відновити дані.</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 justify-content-center padding-button-delete">
                                <button onClick={close} className="button-popup-cancel">
                                    Відмінити
                                </button>
                                <button onClick={this.deleteGroup.bind(this, this.props.categoryID)} className="button-popup-delete">
                                    Видалити групу
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}