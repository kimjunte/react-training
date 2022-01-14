import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import MoviesFunctional from './components/MoviesFunctional';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Movies/> */}
        <MoviesFunctional/>
      </BrowserRouter>
    </>
  );
}

export default App;
