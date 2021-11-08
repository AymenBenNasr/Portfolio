import { Container, Grid } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";

import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>

        <Grid item xs>
          
          <Router>
            <Header />
            <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Resume />
            </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
