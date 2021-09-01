import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/profile/:name">
                        <Profile></Profile>
                    </Route>
                    <Route path="/">
                        <Homepage></Homepage>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
