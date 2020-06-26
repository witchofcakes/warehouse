import React from 'react';

import { withStyles } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from "../topbar-sidebar/top-bar";
import SideBar from "../topbar-sidebar/side-bar";
import CardCategory from "./category-card";
import axios from "axios";
import RowOrder from "../all-items/table/table-row";
import CryptoJS from "crypto-js";

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

class AllCategories extends React.Component {

    encryptFun(data) {

        var key  = CryptoJS.enc.Latin1.parse('1234567812345678');
        var iv   = CryptoJS.enc.Latin1.parse('1234567812345678');
        var encrypted = CryptoJS.AES.encrypt(
            data,
            key,
            {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
            });
        console.log('encrypted: ' + encrypted) ;

        return encrypted;

    }

    decryptFun(data) {

        var key  = CryptoJS.enc.Latin1.parse('1234567812345678');
        var iv   = CryptoJS.enc.Latin1.parse('1234567812345678');


        var decrypted = CryptoJS.AES.decrypt(data,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
        // console.log('decrypted: '+decrypted.toString(CryptoJS.enc.Utf8));

        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    constructor(props) {
        super(props);
        this.state = {
            openDrawer: true,

            groups: [],
        };

        this.encryptFun = this.encryptFun.bind(this);
        this.decryptFun = this.decryptFun.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        axios.get('http://localhost:5000/api/group/getAll', { headers: { 'Authorization': token, 'Content-Type': 'application/x-www-form-urlencoded'}  })
            .then(response => {
                this.setState({
                    groups: JSON.parse(this.decryptFun(response.data)).groups
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        console.log("groups " + this.state.groups)
    }

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    };

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    };

    colorBackground(id){
        if(id%2==0){
            return "block-activities-yellow"
        }

        if(id%3==0){
            return "block-activities-red"
        }

        if((id%3!=0) && (id%2!=0)){
            return "block-activities-white"
        }

    }

    arrowColorBackground(id){
        if(id%2==0){
            return "arrow-activities-yellow"
        }

        if(id%3==0){
            return "arrow-activities-red"
        }

        if((id%3!=0) && (id%2!=0)){
            return "arrow-activities-blue"
        }

    }

    ContentDesktop() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <div className="row">
                    <div className="col-12">
                        <div className="text-main-title-cabinet">Всі групи товарів</div>
                    </div>
                </div>
                <div className="row"  id={"categories-cards-margin"}>

                    {
                        this.state.groups.map((item, idx) => {
                            return (
                                <CardCategory
                                    categoryID={item.group_id}
                                    description={item.group_descr}
                                    group_name={item.group_name}
                                    classBackground = {
                                        this.colorBackground(item.group_id)
                                    }
                                    arrowBackground = {
                                        this.arrowColorBackground(item.group_id)
                                    }
                                />
                            );
                        })
                    }

                </div>
            </div>
        );
    }

    render() {

        const { classes, theme } = this.props;

        return (
            <div>
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
export default withStyles(styles, { withTheme: true })(AllCategories);