import React from "react";
import Popup from "reactjs-popup";
import x from "../../images/icons/x.svg";
import CryptoJS from "crypto-js";

export default class PopupPage extends React.Component{

    render() {
        return(
            <Popup id={"max-height-popup"} lockScroll={true} modal closeOnDocumentClick trigger={
                <button className="button-popup-item-page">
                    {this.props.name}
                </button>

            }
            >
                {close => (
                    <div className="container">
                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="item-title-popup">{this.props.name}</span>
                                <div className="close" onClick={close}>
                                    <img src={x} className="close-icon" alt={"close-popup"}/>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color block-activities-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics blue-icon">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Категорія</p>
                                        <p className="text-category-item-popup">{this.props.groupName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color icon-div-color-green">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics green-icon">
                                                <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Виробник</p>
                                        <p className="text-category-item-popup">{this.props.manufacturer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color block-activities-yellow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics yellow-icon">
                                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Сума всього</p>
                                        <p className="text-category-item-popup">{this.props.priceAll}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="align-items-center">
                                    <div className="icon-div-statistics">
                                        <div className="icon-div-color block-activities-violet">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card-statistics violet-icon">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-div-inline">
                                        <p className="name-category-item-popup">Кількість</p>
                                        <p className="text-category-item-popup">{this.props.amount} одиниць</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                <span className="price-for-piece">Ціна за одиницю: {this.props.price}</span>
                            </div>
                        </div>

                        <div className="row margin-bottom-create-item">
                            <div className="col-12">
                                {/*<p className="name-category-item-popup">Опис товару</p>*/}
                                <span className="text-category-item-popup">
                                    {this.props.description}
                                </span>
                            </div>
                        </div>

                    </div>
                )}
            </Popup>
        )
    }
}