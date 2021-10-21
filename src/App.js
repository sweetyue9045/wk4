import './App.css';
import HOME from './pages/Home'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route path="/" exact={true} component={HOME} />
          {/* <Route path="/works/:filter" component={Works} />
          <Route path="/work-detail/:id" component={Work} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
