import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Landing from '../pages/landing/index'

export default function Routes(){
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}