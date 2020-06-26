import React from "react"

export default class CardCategory extends React.Component{
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <a className="link-activities" href={"/category-page/" + this.props.categoryID}>
                    <div className={`block-activities ${this.props.classBackground}`}>
                        <p className="activities-title">{this.props.group_name}</p>
                        <p className="activities-explanation">{this.props.description}</p>
                        <div className="arrow-position">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 className={`feather-arrow-icon-card ${this.props.arrowBackground}`}
                            >
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}