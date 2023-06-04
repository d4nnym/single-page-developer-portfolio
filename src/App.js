
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/header/Header';

function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div >
      <h1>Mi nuevo proyecto</h1>
      <Header />
    </div>
  );
}

export default App;
