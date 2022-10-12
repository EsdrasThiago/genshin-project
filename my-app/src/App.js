import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Forms from './pages/Forms';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={ Login }/>
      <Route path="/calculador" component={ Forms } />
      </BrowserRouter>
    </div>
  );
}

export default App;
