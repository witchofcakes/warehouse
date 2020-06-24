import React from 'react';

import x from "../../../images/icons/x.svg";

import Popup from "reactjs-popup";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

export default class PopupCreate extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false
        }
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
                        <div className="row">
                            <div className="col-12">
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="item-creation-main-text">Створення товару</p>
                            </div>
                        </div>

                        <div className="row margin-bottom-email-field">
                            <div className="col-12">
                                <CssTextField
                                    required
                                    id="outlined-text-email"
                                    label="Назва товару"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <CssTextField
                                    required
                                    id="outlined-text-email"
                                    label="Виробник товару"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}