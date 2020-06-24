import React from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Popper from '@material-ui/core/Popper';
import { ClickAwayListener } from '@material-ui/core';
import PopupCreate from "./popups/popup-create-items";

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            anchorMenu: null,

        };
    }

    handleKeyDown = evt => {
        if (evt.key === 'Enter') this.props.onKeyDown();
    };

    onClickClose = event => {
        if (this.state.anchorMenu && this.state.anchorMenu.contains(event.target)) return;
        this.setState({ isMenuOpen: false });
    };

    onClickToogle = evt => {
        this.setState({
            anchorMenu: evt.currentTarget,
            isMenuOpen: !this.state.isMenuOpen,
        });
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
                                <a className="navbar-brand-sidebar" href="/">
                                    {/*<span className="logo-mount-sidebar">M.W.G.A</span>*/}
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
                                    value={this.props.query}
                                    placeholder={'Пошук товару'}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    id="search-navbar-employer-vacancy"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={this.props.onChange}
                                    onKeyDown={this.handleKeyDown}
                                />
                            </div>
                        </div>

                        <div className="display-block-ml">
                            <button
                                className="create-group-button"
                                onClick={evt => {
                                    evt.preventDefault();
                                    window.location.href = `/employer-vacancy-create/${this.state.employerID}`;
                                }}
                            >
                                Створити групу
                            </button>

                            <PopupCreate/>

                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;