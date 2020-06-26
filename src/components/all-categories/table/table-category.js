import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import axios from "axios";
import UserContext from "../../../UserContext";
import RowOrderCategory from "./table-category-row";

export default class TableCategory extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
            <Paper className="container-table-paper">
                <TableContainer className="container-mui-table">
                    <Table stickyHeader aria-label="simple table" className="table-width">
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell className="table-head" align="left">
                                    #
                                </TableCell>
                                <TableCell align="left">Назва</TableCell>
                                <TableCell align="left">Опис</TableCell>
                                <TableCell align="left">К-сть</TableCell>
                                <TableCell align="left">Виробник</TableCell>
                                <TableCell align="left">Ціна</TableCell>
                                <TableCell align="left">Сума всього</TableCell>
                                <TableCell/>
                                <TableCell/>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                this.props.productsCategory.map((item, idx) => {
                                    return (
                                        <RowOrderCategory
                                            index={item.product_id}
                                            name={item.product_name}
                                            description={item.product_descr}
                                            manufacturer={item.product_manuf}
                                            amount={item.product_amount}
                                            price={item.product_price}
                                            groupName={this.props.groupName}
                                            categoryID={this.props.categoryID}
                                        />
                                    );
                                })

                            }
                            {console.log(this.props.productsCategory)}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        )
    }
}