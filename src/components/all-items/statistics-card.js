import React from "react"

export default class CardStatistics extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="block-statistics">
                        <div className="icon-div-statistics">
                            <div className="icon-div-color">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                                    <line x1="1" y1="10" x2="23" y2="10"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-div-inline">
                            <p className="price-number-statistics">₴35,000</p>
                            <p className="overall-price-statistics">Загальна вартість</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="block-statistics">
                        <div className="icon-div-statistics">
                            <div className="icon-div-color">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                                    <line x1="1" y1="10" x2="23" y2="10"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-div-inline">
                            <p className="price-number-statistics">12</p>
                            <p className="overall-price-statistics">Кількість груп товарів</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="block-statistics">
                        <div className="icon-div-statistics">
                            <div className="icon-div-color">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                                    <line x1="1" y1="10" x2="23" y2="10"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-div-inline">
                            <p className="price-number-statistics">150</p>
                            <p className="overall-price-statistics">Кількість товарів</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}