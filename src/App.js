import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/weather/CurrentWeather';
import WeeklyWeather from './components/weather/WeeklyWeather';

function App() {
  return (
    <div className="App">
      < Navbar />
      < SearchBar />
      < CurrentWeather />
      < WeeklyWeather />
    </div>
  );
}

export default App;
