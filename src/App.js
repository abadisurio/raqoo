// import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {routes, routesSignedIn} from './AppRoutes'
import pages from './pages'
import './App.css';
import { BottomNavbar, Scaffolding, ScrollToTop } from "./components";

function App() {
  // console.log(routes)

  const isSignedIn = true;

  const finalRoutes = isSignedIn ? routesSignedIn : routes;

  return (
    <Router>
      {isSignedIn
        ? (<>
          <Scaffolding>
          <ScrollToTop/>
            <Switch>
              {finalRoutes.map((item, index) => {
                return <Route key={index} path={item.path} component={pages[item.pageName]}/>
              })}
            </Switch>
          </Scaffolding>
          <BottomNavbar/>
        </>)
        : (
          <Switch>
            {finalRoutes.map((item, index) => {
              return <Route key={index} path={item.path} component={pages[item.pageName]}/>
            })}
          </Switch>
        )
      }
    </Router>
  );
}

export default App;
