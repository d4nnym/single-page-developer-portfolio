import { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
