import React from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import logo from "../../images/logo.png"
import { Redirect } from 'react-router'

import { withRouter } from 'react-router-dom';

import PopupCreate from "./popups/popup-create-items";
import PopupCreateGroup from "./popups/popup-create-group";
import axios from "axios";

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            anchorMenu: null,

            query: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onKeyDown = evt => {
        if (evt.key === 'Enter') {

            if (this.state.query) {
                console.log(this.state.query)
                this.props.history.push(`/search-page/?query=` + this.state.query)
                window.location.reload();
            } else {
                alert("Будь ласка, введіть пошукове слово :)")
            }
        }
    };

    render() {
        const { classes, open, handleDrawerOpen } = this.props;

        return (
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classNames(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className="row align-items-center">
                        <div className="col-12 sidebar-column">
                            <div>
                                <a className="navbar-brand-sidebar" href="/all-items">
                                    <img src={logo} className="logo-mount-sidebar"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto display-align-center">
                        <div className="search-suggestions-search display-block-ml">
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="feather-search-mob-menu-inline"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>

                                <InputBase
                                    name={'query'}
                                    value={this.state.query}
                                    placeholder={'Пошук товару'}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    id="search-navbar-employer-vacancy"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={this.handleChange}
                                    onKeyDown={this.onKeyDown}
                                />
                            </div>
                        </div>

                        <div className="display-block-ml">
                            <PopupCreateGroup/>
                            <PopupCreate/>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(TopBar);