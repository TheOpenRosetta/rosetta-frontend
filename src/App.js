import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/profile">
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
