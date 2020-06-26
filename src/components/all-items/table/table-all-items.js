import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import RowOrder from "./table-row"
import axios from "axios";
import UserContext from "../../../UserContext";

export default class TableOrders extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = {
            // items: [
            //     {
            //         id: 1, product_name: "Крупа гречана", product_description: "Це найкраща гречка з усіх! Неймовірний смак. Це найкраща гречка з усіх! Неймовірний смак.", product_manufacturer: "Київський Хліб", product_group_name: "Крупи", product_amount: 2, product_price: 52,
            //     }
            // ],
        };
    }

    render() {


        return (
            <Paper className="container-table-paper">
                <TableContainer className="container-mui-table">
                        <Table className="table-width">
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell className="table-head" align="left">
                                        #
                                    </TableCell>
                                    <TableCell align="left">Назва</TableCell>
                                    <TableCell align="left">Опис</TableCell>
                                    <TableCell align="left">К-сть</TableCell>
                                    <TableCell align="left">Виробник</TableCell>
                                    <TableCell align="left">Категорія</TableCell>
                                    <TableCell align="left">Ціна</TableCell>
                                    <TableCell align="left">Сума всього</TableCell>
                                    <TableCell/>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    this.props.products.map((item, idx) => {
                                        return (
                                            <RowOrder
                                                index={item.product_id}
                                                name={item.product_name}
                                                description={item.product_descr}
                                                manufacturer={item.product_manuf}
                                                amount={item.product_amount}
                                                group_name={item.product_group_name}
                                                price={item.product_price}
                                            />
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                </TableContainer>

            </Paper>
        )
    }
}