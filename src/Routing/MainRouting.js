import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Modules/HomePage/HomePage';
import LoginForm from '../Modules/Login/LoginForm';
import SignUp from '../Modules/SignUp/SignUp';
import PrivateRouting from './PrivateRouting';
import PublicRouting from './PublicRouting';
export default function MainRouting() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/login"><LoginForm/></Route>
                    <Route path="/SignUp"><SignUp/></Route>
                   
                 {/* <PublicRouting path="/login" auth={authState}>
                    <HomePage />
                    {
                    authState ? (<HomePage />) : (<LoginForm />)
                }
                </PublicRouting>
                <PrivateRouting path="/HomePage" auth={authState}>
                    <HomePage />
                </PrivateRouting>   */}
                </Switch>
            </Router>
        </div>
    )
}
