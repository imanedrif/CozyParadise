import './App.css';
import { Hero } from './views/Hero';
import { Services } from './views/Services';
import { Products } from './views/Products';
import { Reference } from './views/Reference';
import { Care } from './views/Care';
import { Footer } from './views/Footer';

function App() {
  return (
    <>
      <Hero/>
      <Services/>
      <Products/>
      <Reference/>
      <Care/>
      <Footer/>
    </>
  );
}

export default App;
