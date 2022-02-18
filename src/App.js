import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Careers from "./pages/Careers";
import PaperDetails from "./Components/PaperDetails/PaperDetails";
import "aos/dist/aos.css";
import { AuthorsProvider } from "./StateManagement/AuthorsContext";
import Math from "./Components/Math/Math";
import Feature from "./Components/Feature";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Components/About/About";
import Developers from "./Components/Developers/Developers";
// import GetStart from "./Components/OnBoarding/GetStart/GetStart";
import VerifyIdentity from "./Components/OnBoarding/VerifyIdentity/VerifyIdentity";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OnBoarding from "./Components/OnBoarding";
import FAQPage from "./Components/FAQPage/FAQPage";
import Spread from "./Components/Spread/Spread";
import AuthorPage from "./Components/AuthorPage/AuthorPage";
function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#B68E5C",
            },
        },
    });
    return (
        <div className="App">
            <AuthorsProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <ScrollToTop></ScrollToTop>
                        <Switch>
                            <Route exact path="/profile/:id/:name">
                                <Profile></Profile>
                            </Route>
                            <Route
                                exact
                                path="/paper-details"
                                component={PaperDetails}
                            />
                            <Route exact path="/">
                                <Homepage></Homepage>
                            </Route>
                            <Route exact path="/careers">
                                <Careers></Careers>
                            </Route>
                            <Route exact path="/math">
                                <Math />
                            </Route>
                            <Route exact path="/features/">
                                <Feature />
                            </Route>
                            <Route exact path="/about/">
                                <About></About>
                            </Route>
                            <Route exact path="/faq/">
                                <FAQPage></FAQPage>
                            </Route>
                            <Route exact path="/start/">
                                <OnBoarding></OnBoarding>
                            </Route>
                            <Route exact path="/spread/">
                                <Spread></Spread>
                            </Route>
                            <Route exact path="/authors/">
                                <AuthorPage></AuthorPage>
                            </Route>
                            <Route exact path="/verify-identity/">
                                <VerifyIdentity></VerifyIdentity>
                            </Route>
                            <Route exact path="/developers/">
                                <Developers></Developers>
                            </Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </AuthorsProvider>
        </div>
    );
}

export default App;
