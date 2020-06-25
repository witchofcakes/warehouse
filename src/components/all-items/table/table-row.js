import React from 'react';

import { withStyles } from '@material-ui/core';

import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

import axios from 'axios';
import PopupCreate from "../../topbar-sidebar/popups/popup-create-items";
import PopupItemPage from "../../item-page/popup-item-page";
import x from "../../../images/icons/x.svg";
import Popup from "reactjs-popup";
import PopupDeleteItem from "./popup-delete";

const styles = theme => ({
    rootTable: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

class RowOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountCamps: 0
        };

        this.deleteOrder = this.deleteOrder.bind(this);
    }

    sumPay() {
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        return (`₴` + (nf.format(this.props.price)))
    }

    sumPayAll() {
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return nf.format(parseInt(this.props.price)*parseInt(this.props.amount))
    }

    // creationDate() {
    //     return Intl.DateTimeFormat('uk-UA', {
    //         year: '2-digit',
    //         month: '2-digit',
    //         day: '2-digit',
    //     })
    //         .format(new Date(this.props.createdAt))
    //         .toString();
    // }

    deleteOrder(parameter, e){
        e.preventDefault();

        // axios.get('http://localhost:4000/api/orders/deleteOrder/' + parameter)
        //     .then(res => console.log(res.data))
        //     .catch(err=> console.log(err));
        //
        // // this.props.history.push('/');
        // window.location.reload();
    }

    render() {
        const { classes } = this.props;

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <TableRow hover key={this.props.index}>

                    <TableCell component="th" scope="row">
                        {this.props.index}
                    </TableCell>

                    <TableCell className="name-cell-width" align="left">
                        {this.props.name}
                    </TableCell>

                    <TableCell className="description-cell-width" align="left">
                        {this.props.description}
                    </TableCell>

                    <TableCell className="amount-cell-width" align="left">
                        {this.props.amount}
                    </TableCell>

                    <TableCell className="manufacturer-cell-width" align="left">
                        {this.props.manufacturer}
                    </TableCell>

                    <TableCell className="group_name-cell-width" align="left">
                        {this.props.group_name}
                    </TableCell>

                    <TableCell className="sumPay-cell-width" align="left">
                        {this.sumPay()}
                    </TableCell>

                    <TableCell className="sumPayAll-cell-width" align="left">
                        {this.sumPayAll()}
                    </TableCell>

                    <TableCell className="vac-row-date empty-more-button-cell" align="center">
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
                    </TableCell>

                    <TableCell className="vac-row-date empty-more-button-cell no-gutters-left" align="center">
                       <PopupDeleteItem/>
                    </TableCell>

                </TableRow>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-title-popup">Крупа гречана</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row margin-bottom-create-item">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <span className="item-title-popup">Крупа гречана</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="row margin-bottom-create-item">
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color icon-div-color-green">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics green-icon">
                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Категорія</p>
                                        <p className="text-category-item-popup">Продовольчі товари</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color icon-div-color-green">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics green-icon">
                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Виробник</p>
                                        <p className="text-category-item-popup">Київ Хліб</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color icon-div-color-green">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics green-icon">
                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Ціна</p>
                                        <p className="text-category-item-popup">10,500 гривень</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color icon-div-color-green">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics green-icon">
                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Кількість</p>
                                        <p className="text-category-item-popup">30 одиниць</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                {/*<p className="name-category-item-popup">Опис товару</p>*/}
                                <span className="text-category-item-popup">
                                    Це найкраща гречка з усіх! Неймовірний смак. Це найкраща гречка з усіх! Неймовірний смак.
                                </span>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>

        );
    }
}
export default withStyles(styles, { withTheme: true })(RowOrder);