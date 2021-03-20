import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/about' component={AboutScreen} />
                    <Route exact path='/login' component={LoginScreen} />

                    <Route component={NotFoundComponent} />
                </Switch>
            </>
        </Router>
    )
}

const NotFoundComponent = () => <p>404 Not Found</p>
