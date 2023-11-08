
import './assets/css/App.css';
import NavBar from './components/navbar/navbar';
import WeatherPanel from './components/panel/weatherPanel';

function App() {

  
  return (
    <div className="container">
      <NavBar/>
      <WeatherPanel/>
    </div>
  );
}

export default App;
