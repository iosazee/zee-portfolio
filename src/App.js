import React, {useState} from 'react';
import HomePage from './components/homepage/HomePage'
import SplashScreen from './components/splashscreen/SplashScreen';
import './App.css';
import './assets/colors.css'


function App() {

  const [loaded, setLoaded] = useState(false)

  setTimeout(() => {
    setLoaded(true)
  }, 5100)

  return (
    <section className="App">
      {
        loaded ? <HomePage /> : <SplashScreen />
      }
    </section>
  );
}

export default App;
