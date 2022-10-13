import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Forms from './pages/Forms';
import Calculator from './pages/Calculator'
import NotLogged from './pages/NotLogged';
import NotFound from './pages/NotFound';
import './App.css';
import { Switch } from 'react-router-dom';


class App extends React.Component {
  render() {

    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Login }/>
      <Route path="/calculador" component={ Forms } />
      <Route path="/resultado" component={ Calculator } />
      <Route path="/nao-logado" component={ NotLogged } />
      <Route path="*" component={ NotFound } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
