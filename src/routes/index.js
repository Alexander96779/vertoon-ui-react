/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Icon from '../components/Icons';
import Signup from '../components/Signup';
import Upgrade from '../components/Upgrade';
import Table from '../components/Table';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';

export default function index() {
  return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/icons" exact component={Icon} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/upgrade" exact component={Upgrade} />
            <Route path="/tables" exact component={Table} />
            <Route path="/map" exact component={Map} />
            <Route path="/sidebar" exact component={Sidebar} />
        </Switch>
  );
}
