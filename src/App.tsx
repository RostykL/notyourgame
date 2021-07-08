import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/Home/Home';
import Waiting from './pages/Waiting/Waiting';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/waiting'} component={Waiting} />
        <Route path={'/*'} component={() => <span>Not Found</span>} />
      </Switch>
    </>
  );
}

export default App;
