import Feature from "./Components/Feature/Feature.jsx";
import Landing from "./Components/Landing/Landing.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Programmable from "./Components/Programmable/Programmable.jsx";
import Paper from "./Components/ResearchPaper/Paper.jsx";
import Works from "./Components/Works/Works.jsx";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Landing></Landing>
            <Paper></Paper>
            <Feature></Feature>
            <Works></Works>
            <Programmable></Programmable>
        </div>
    );
}

export default App;
