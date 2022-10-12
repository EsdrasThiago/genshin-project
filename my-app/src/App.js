import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Forms from './pages/Forms';
import Calculator from './pages/Calculator'
import './App.css';


class App extends React.Component {
  render() {

    return (
      <div>
      <BrowserRouter>
      <Route exact path="/" component={ Login }/>
      <Route path="/calculador" component={ Forms } />
      <Route path="/resultado" component={ Calculator } />
      </BrowserRouter>
    </div>
  );
}
}

export default App;
