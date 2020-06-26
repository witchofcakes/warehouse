import React from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import {withRouter} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from "axios";
import UserContext from "../../UserContext";

class SideBar extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = {
            employerID: this.props.employerID,
            isOpenForms: this.props.isOpenForms,
            isOpenCandidates: this.props.isOpenCandidates,
        };
    }

    handleLogout(token, setToken){

        const newToken = 0
        setToken(newToken)
        console.log("newToken: " + newToken)
        this.props.history.push('/');
        window.location.reload();

    }

    render() {
        const { classes, theme, open, handleDrawerClose } = this.props;
        const { token, setToken } = this.context

        return (
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose} className={classes.closeButton}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider id="bottom-divider" />
                <List>
                    <NavLink
                        activeClassName="employer-left-active"
                        className="all-vac-employer-sidebar"
                        to={{
                            pathname: `/all-items/${this.state.employerID}`,
                        }}
                    >
                        <ListItem button className={classes.sideText}>
                            <ListItemIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-file-text-sidebar">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                            </ListItemIcon>
                            <ListItemText className={'text-sidebar'} primary={'Всі товари'} />
                        </ListItem>
                    </NavLink>

                    <NavLink
                        activeClassName="employer-left-active"
                        className="all-vac-employer-sidebar"
                        to={{
                            pathname: `/all-categories/${this.state.employerID}`,
                        }}
                    >
                        <ListItem button className={classes.sideText}>
                            <ListItemIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-file-text-sidebar"
                                >

                                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                                    <polyline points="2 17 12 22 22 17"/>
                                    <polyline points="2 12 12 17 22 12"/>

                                </svg>
                            </ListItemIcon>
                            <ListItemText className={'text-sidebar'} primary={'Групи товарів'} />
                        </ListItem>
                    </NavLink>

                </List>

                <List id="bottom-button">
                    <Divider id="bottom-divider" />

                    <button
                        activeClassName="employer-left-active"
                        className="all-vac-employer-sidebar button-logout"
                        onClick={() => {this.handleLogout(token, setToken)}}
                    >
                        <ListItem button className={classes.sideText}>
                            <ListItemIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="feather-file-text-sidebar"
                                >
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </ListItemIcon>
                            <ListItemText className={'text-sidebar'} primary={'Вийти'} />
                        </ListItem>
                    </button>
                </List>
            </Drawer>
        );
    }
}

export default withRouter(SideBar);