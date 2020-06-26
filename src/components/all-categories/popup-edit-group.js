import React from 'react';

import x from "../../images/icons/x.svg";

import Popup from "reactjs-popup";
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

export default class PopupEditGroup extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false,

            productGroupName: '',
            productGroupDescr: '',
            productGroupId: this.props.categoryID,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount(){
        const token = localStorage.getItem('token')

        axios.get('http://localhost:5000/api/group/getOne/' + this.props.categoryID, { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({
                    productGroupDescr: response.data.group_descr,
                    productGroupName: response.data.group_name,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleGroupEdit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        const { productGroupDescr, productGroupName} = this.state;

        if (!productGroupDescr || !productGroupName) {
            alert("Будь ласка, заповніть всі обов'язкові поля")
        }

        else {

            const newItem = {
                productGroupDesc: this.state.productGroupDescr,
                productGroupName: this.state.productGroupName,
                productGroupId: this.state.productGroupId
            };

            axios.post('http://localhost:5000/api/group/update', qs.stringify(newItem), { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(
                    window.location.reload()
                )
                .catch((error) => {
                    alert(error)
                });

            console.log(newItem);

        }
    };


    render() {

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <button className="button-edit-group margin-delete-category">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-category">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                    </svg>
                </button>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Редагування групи</span>
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
                                <button onClick={this.handleGroupEdit.bind(this)} className="button-popup-create">
                                    Редагувати групу
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}