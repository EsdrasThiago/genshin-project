import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './pages/Login';
import Forms from './pages/Forms';
import Calculator from './pages/Calculator'
import NotLogged from './pages/NotLogged';
import NotFound from './pages/NotFound';
import './App.css';
import genshinOst from './assets/musics/genshin-ost.mp3'


class App extends React.Component {
  autoDecrement = (event) => {
    event.target.volume = 0.05
  }

  render() {

    return (
      <div className='all'>
      <audio loop src={ genshinOst } autoPlay onPlay={ this.autoDecrement } />
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
