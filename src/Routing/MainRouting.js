import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import HomePage from "../Modules/HomePage/HomePage";
import LoginForm from "../Modules/Login/LoginForm";
import SignUp from "../Modules/SignUp/SignUp";
import NotFound from "../Modules/NotFound";
import { useDispatch } from "react-redux";
import { useState ,useEffect} from "react";
import { alreadyLoginUser } from "../Redux/Actions/LoginAction";
import OwnersLogin from "../Modules/OwnerProfile/OwnersLogin/OwnersLogin";
import OwnersProfile from "../Modules/OwnerProfile/OwnersProfile";
import OwnerAddResturent from "../Modules/OwnerProfile/OwnersAddResturent/OwnerAddResturent";
export default function RoutinG() {
    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(alreadyLoginUser(setLoading))
    }, [])
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/OwnersLogin" component={OwnersLogin} />
                <Route path="/OwnersProfile" component={OwnersProfile}/>
                <Route path="/OwnerAddResturent" component={OwnerAddResturent}/>

               

                <Route component={NotFound}/>
            </Switch>
          <Footer/>
        </Router>
    );
}
