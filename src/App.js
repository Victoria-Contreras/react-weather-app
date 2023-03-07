import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/weather/CurrentWeather';
import WeeklyWeather from './components/weather/WeeklyWeather';
import Login from './components/user/Login'
import SignUp from './components/user/SignUp';
import Favorites from './components/user/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            < Navbar />
            < Favorites />
            < SearchBar />
            < CurrentWeather />
            < WeeklyWeather />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path="/favorites">
            < Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
