import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/customers' exact component={Customers}></Route>
        </Switch>
    )
}

export default Routes










