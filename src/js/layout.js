//React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Context
import { AuthProvider } from "./firebase/AuthContext";
import injectContext from "./store/appContext";

//Components
import Navbar from "./component/Navbar.jsx";
import ScrollToTop from "./component/scrollToTop";
import PrivateRoute from "./component/PrivateRoute.jsx";

//Views
import { Home } from "./views/home";
import { Signup } from "./views/signup";
import { Login } from "./views/login";
import { SearchResults } from "./views/searchresults";
import { WatchList } from "./views/watchlist";
import { RandomMovie } from "./views/randomMovie";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="bigDiv">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <ScrollToTop>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/search">
                <SearchResults />
              </Route>
              <Route exact path="/random">
                <RandomMovie />
              </Route>
              <PrivateRoute exact path="/watch" component={WatchList} />
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
          </ScrollToTop>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
