import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './AppRoutes'
import pages from './pages'
import './App.css';

function App() {
  // console.log(routes)
  return (
    <Router>
      <Switch>
        {routes.map((item, index) => {
          return <Route key={index} path={item.path} component={pages[item.pageName]}/>
        })}
      </Switch>
    </Router>
  );
}

export default App;
