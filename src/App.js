import { useEffect } from 'react';
import Header from './components/header/Header';
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="">
      <Header />
    </div>
  );
}

export default App;
