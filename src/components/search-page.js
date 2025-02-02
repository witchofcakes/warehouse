import React from 'react';

import { withStyles } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from "./topbar-sidebar/top-bar";
import SideBar from "./topbar-sidebar/side-bar";
import TableAllItems from "./all-items/table/table-all-items";

import Tooltip from "@material-ui/core/Tooltip";

import axios from "axios";

import EmptyCategoryPage from "./all-categories/empty-category-page";
import EmptySearchPage from "./empty-search-page";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 2px !important;',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: '#717171',
    },

    closeButton: {
        color: '#b5b6b7',
    },
    sideText: {
        color: '#cacaca',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: '#212529',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '0',
        // width: theme.spacing(7) + 1,
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9) + 1,
        // },
        background: '#212529',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: '60px 25px 20px 25px',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    search: {
        position: 'relative',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 300,
            },
        },
    },
});

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: true,
            products: [],
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let query = params.get('query');

        this.setState({
            query: query
        })

        axios.get(`http://localhost:5000/api/good/search?query=${query}`, { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({
                    products: response.data.products
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    };

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    };

    ContentDesktop() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <div className={classes.toolbar} />

                <div className="row">
                    <div className="col-8">
                        <div className="text-main-title-cabinet">Результати запиту
                            "<span className="search-query-span">{this.state.query}</span>"
                        </div>
                    </div>
                </div>

                {
                    this.state.products.length!==0 ?
                        <TableAllItems products={this.state.products}/>
                        :
                        <EmptySearchPage/>
                }

            </div>
        );
    }

    render() {

        const { classes, theme } = this.props;

        return (
            <div className="padding-bottom-warehouse">
                <div className="employer-cabinet-display">
                    <CssBaseline />
                    <TopBar
                        classes={classes}
                        open={this.state.openDrawer}
                        handleDrawerOpen={this.handleDrawerOpen}
                    />
                    <SideBar
                        theme={theme}
                        classes={classes}
                        open={this.state.openDrawer}
                        handleDrawerClose={this.handleDrawerClose}
                    />
                    {this.ContentDesktop()}
                </div>

            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(SearchPage);