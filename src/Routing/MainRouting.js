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
export default function RoutinG() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/SignUp" component={SignUp}/>

               
            </Switch>
          <Footer/>
        </Router>
    );
}
