import React, { Component } from "react";
import {Router, Switch, Route} from "react-router-dom";
import AdminHome from "./components/AdminHome";
import history from './history';
import Home from "./components/Home";
import NewBlog from "./components/Newblog"
import ViewAdminBlog from "./components/ViewAdminBlog";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/adminhome" component={AdminHome}/>
                    <Route path="/addNewBlog" component={NewBlog}/>
                    <Route path="/viewAdminBlog" component={ViewAdminBlog}/>
                </Switch>
            </Router>
        )
    }
}