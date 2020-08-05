/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../components/Test';

export default function index() {
  return (
        <Switch>
            <Route path="/" exact component={Test} />
        </Switch>
  );
}
