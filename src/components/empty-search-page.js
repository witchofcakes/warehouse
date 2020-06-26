import React from 'react';

import empty from '../images/rush-7.png';

export default class EmptySearchPage extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className="row center-row">
                    <img src={empty} className="search-no-results-employer-search" />
                </div>
                <div className="row center-row margin-bottom-all">
                    <div className="col-12 center-text justify-content-center">
                        <p className="not-found-big-empty">За цим запитом нічого не знайдено :(</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}