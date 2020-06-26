import React from 'react';

import empty from '../../images/rush-15.png';

export default class EmptyCategoryPage extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className="row center-row">
                    <img src={empty} className="search-no-results-employer" />
                </div>
                <div className="row center-row margin-bottom-all">
                    <div className="col-12 center-text justify-content-center">
                        <p className="not-found-big-empty">Ви не маєте товарів у цій групі :(</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}