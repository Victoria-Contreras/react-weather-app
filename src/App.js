import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/weather/CurrentWeather';

function App() {
  return (
    <div className="App">
      < Navbar />
      < SearchBar />
      < CurrentWeather />
    </div>
  );
}

export default App;
