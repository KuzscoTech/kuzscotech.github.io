import "./App.scss";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";
import styled from "styled-components";

const AppStyled = styled.div`

`;
function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <AppStyled className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar className="Navbar" />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
