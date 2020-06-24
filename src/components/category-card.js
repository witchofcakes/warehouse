import React from "react"

export default class CardCategory extends React.Component{
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <a className="link-activities" href={"/cases-block"}>
                    <div className={`block-activities ${this.props.classBackground}`}>
                        <p className="activities-title">Продовольчі</p>
                        <p className="activities-explanation">Прикладні завдання у формі реальних проєктів з можливістю працевлаштування.</p>
                        <div className="arrow-position">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-arrow-icon-card">
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