import React from 'react';

import { withStyles } from '@material-ui/core';

import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

import axios from 'axios';

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

                <TableRow key={this.props.index} className={classes.rootTable + ' tableRow'}>

                    <TableCell component="th" scope="row">
                        <p className="td-margin">{this.props.index}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.name}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.description}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.amount}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.manufacturer}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.group_name}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.sumPay()}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.sumPayAll()}</p>
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
                        <Tooltip title={'Видалити товар'}>
                            <button onClick={this.deleteOrder.bind(this, this.props.index)} className="edit-button-table">
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
                    </TableCell>

                </TableRow>

        );
    }
}
export default withStyles(styles, { withTheme: true })(RowOrder);