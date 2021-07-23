// import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {routes, routesSignedIn} from './AppRoutes'
import pages from './pages'
import './App.css';
import { BottomNavbar } from "./components";

function App() {
  // console.log(routes)

  const isSignedIn = true;

  const finalRoutes = isSignedIn ? routesSignedIn : routes;

  return (
    <Router>
      <Switch>
        {finalRoutes.map((item, index) => {
          return <Route key={index} path={item.path} component={pages[item.pageName]}/>
        })}
      </Switch>
      {isSignedIn && <BottomNavbar/>}
    </Router>
  );
}

export default App;
