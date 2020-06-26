import React from "react"

export default class CardStatistics extends React.Component{

    productPrice() {
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        return (nf.format(this.props.product_sum_price))
    }

    render() {
        return (
            <div className="row">

                <div className="col-4">
                    <div className="block-statistics">
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
                            <p className="price-number-statistics">{this.props.group_amount}</p>
                            <p className="overall-price-statistics">Кількість груп</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="block-statistics">
                        <div className="icon-div-statistics">
                            <div className="icon-div-color icon-div-color-lightblue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics lightblue-icon">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                                    <line x1="1" y1="10" x2="23" y2="10"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-div-inline">
                            <p className="price-number-statistics">{this.productPrice()}</p>
                            <p className="overall-price-statistics">Загальна вартість</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="block-statistics">
                        <div className="icon-div-statistics">
                            <div className="icon-div-color icon-div-color-red">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics red-icon">
                                    <rect x="3" y="3" width="7" height="7"/>
                                    <rect x="14" y="3" width="7" height="7"/>
                                    <rect x="14" y="14" width="7" height="7"/>
                                    <rect x="3" y="14" width="7" height="7"/>
                                </svg>

                            </div>
                        </div>
                        <div className="price-div-inline">
                            <p className="price-number-statistics">{this.props.product_amount}</p>
                            <p className="overall-price-statistics">Кількість товарів</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}