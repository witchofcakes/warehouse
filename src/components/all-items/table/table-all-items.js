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

export default class TableOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            items: [
                {
                    id: 1, product_name: "Крупа гречана", product_description: "Це найкраща гречка з усіх! Неймовірний смак.", product_manufacturer: "Київський Хліб", product_group_name: "Крупи", product_amount: 2, product_price: 52,
                }
            ],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/orders/getUserOrder/')
            .then(response => {
                this.setState({
                    items: response.data,
                });
                console.log(this.state.items);
                // console.log(this.state.ordersCamps);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Paper>
                {/*<div className="kanban-board">*/}
                <TableContainer className="container-mui-table">
                    {this.state.items.length !== 0 ?

                        <Table stickyHeader aria-label="simple table">
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
                                    <TableCell align="left">Сума</TableCell>
                                    <TableCell/>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    this.state.items.map((item, idx) => {
                                        return (
                                            <RowOrder
                                                index={item.id}
                                                name={item.product_name}
                                                description={item.product_description}
                                                manufacturer={item.product_manufacturer}
                                                amount={item.product_amount}
                                                group_name={item.product_group_name}
                                                price={item.product_price}
                                            />
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>

                        :
                        <div>
                            <div className="empty-orders-text-table">
                                Ви не маєте замовлень :(
                            </div>
                        </div>

                    }
                </TableContainer>
                {/*</div>*/}
            </Paper>
        )
    }
}