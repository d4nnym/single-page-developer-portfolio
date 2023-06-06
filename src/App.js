import { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="body">
      <Header />
      <Main />
      {/* Footer*/}
    </div>
  );
}

export default App;
