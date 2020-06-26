import React from 'react';

import { withStyles } from '@material-ui/core';

import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

import x from "../../../images/icons/x.svg";
import Popup from "reactjs-popup";
import PopupDeleteItem from "../../all-items/table/popup-delete";
import PopupEditItem from "../../all-items/table/popup-edit";
import PopupEditGroupItem from "./popup-edit-group-item";
import PopupPage from "../../item-page/popup-item-page";

const styles = theme => ({
    rootTable: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

class RowOrderCategory extends React.Component {

    sumPay() {
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return (nf.format(this.props.price))
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

    render() {
        const { classes } = this.props;

        return (


            <TableRow key={this.props.index}>

                <TableCell component="th" scope="row">
                    {this.props.index}
                </TableCell>

                <TableCell className="name-cell-width" align="left">
                    <PopupPage
                        name={this.props.name}
                        description = {this.props.description}
                        amount = {this.props.amount}
                        manufacturer = {this.props.manufacturer}
                        groupName={this.props.groupName}
                        price={this.sumPay()}
                        priceAll={this.sumPayAll()}
                    />
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

                <TableCell className="sumPay-cell-width" align="left">
                    {this.sumPay()}
                </TableCell>

                <TableCell className="sumPayAll-cell-width" align="left">
                    {this.sumPayAll()}
                </TableCell>

                <TableCell className="vac-row-date empty-more-button-cell" align="center">
                    <PopupEditGroupItem groupName={this.props.groupName} categoryID={this.props.categoryID} name={this.props.name} itemID={this.props.index}/>
                </TableCell>

                <TableCell className="vac-row-date empty-more-button-cell no-gutters-left" align="center">
                    <PopupDeleteItem name={this.props.name}/>
                </TableCell>

            </TableRow>


        );
    }
}
export default withStyles(styles, { withTheme: true })(RowOrderCategory);