import React from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';

import Login from "../components/login";
import AllCategories from "../components/all-categories/all-categories";
import AllItems from "../components/all-items/all-items";
import CategoryPage from "../components/all-categories/category-page";
import SearchPage from "../components/search-page";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/all-categories" component={AllCategories}/>
                        <Route path="/all-items" component={AllItems}/>
                        <Route path="/search-page" component={SearchPage}/>
                        <Route path="/category-page/:id" component={CategoryPage}/>
                        {/*<Route component={DefaultContainer}/>*/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

// class DefaultContainer extends React.Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {
//
//             isAdmin: false,
//             authenticated: true,
//
//         };
//     }
//
//     render(){
//         return(
//             <div>
//                 {/*{this.state.isAdmin ?*/}
//                 {/*    <NavbarAdmin/>*/}
//                 {/*    :*/}
//                 {/*    <React.Fragment>*/}
//                 {/*        {*/}
//                 {/*            this.state.authenticated ? <NavbarLoggedIn/> : <NavbarNotLoggedIn/>*/}
//                 {/*        }*/}
//
//                 {/*    </React.Fragment>*/}
//                 {/*}*/}
//
//                 <Switch>
//                     <Route exact path="/" component={AllCamps} />
//                     {/*<Route path="/camp-page/:id" component={CampPage} />*/}
//                     {/*<Route path="/user-profile" component={UserProfile} />*/}
//                     {/*<Route path="/create-camp" component={CreateCamp} />*/}
//                     {/*<Route path="/create-admin" component={CreateAdmin} />*/}
//                     {/*<Route path="/all-admins" component={AllAdmins} />*/}
//                     {/*<Route path="/admin-page/:id" component={AdminProfile} />*/}
//                     {/*<Route path="/edit-camp/:id" component={EditCamp} />*/}
//                     {/*<Route path="/edit-admin/:id" component={EditAdminProfile} />*/}
//                 </Switch>
//             </div>
//         )
//     }
//
// }

class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login-user" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);