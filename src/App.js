import React, {useState, useEffect} from 'react';
import HomePage from './components/homepage/HomePage'
import SplashScreen from './components/splashscreen/SplashScreen';
import './App.css';
import './assets/colors.css'




function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const seenSplashScreen = sessionStorage.getItem('seenSplashScreen');

    if (!seenSplashScreen) {
      const timer = setTimeout(() => {
        setLoaded(true);
        sessionStorage.setItem('seenSplashScreen', true);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <section className="App">
      {loaded ? <HomePage /> : <SplashScreen />}
    </section>
  );
}

export default App;
