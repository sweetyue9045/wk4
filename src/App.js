import './App.css';
import HOME from './pages/Home'
import INTRO from './pages/Intro'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={HOME} />
          <Route path="/intro/:introId" component={INTRO} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
