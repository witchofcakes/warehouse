import React from 'react';

import x from "../../images/icons/x.svg";

import Popup from "reactjs-popup";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default class PopupItemPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            product_group_name: '',
            product_price: '',
            product_amount: 0,
        };
    }

    render() {

        return (

            <Popup lockScroll={true} modal closeOnDocumentClick trigger={
                <TableCell className="name-cell-width" align="left">
                    {this.props.name}
                </TableCell>
            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-creation-main-text">Інформація про товар</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-title-popup">Крупа гречана</span>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        );
    }
}