import React, {useState, useEffect} from 'react';
import HomePage from './components/homepage/HomePage'
import SplashScreen from './components/splashscreen/SplashScreen';
import './App.css';
import './assets/colors.css'


function App() {

  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    const timer =   setTimeout(() => {
      setLoaded(true)
    }, 5000);
    return () => clearTimeout(timer)
  }, [])



  return (
    <section className="App">
      {
        loaded ? <HomePage /> : <SplashScreen />
      }
    </section>
  );
}

export default App;
