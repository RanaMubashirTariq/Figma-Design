import './App.css';
import CardComponent from './components/CardComponent';
import Footer from './components/Footer';
import MoonCoin from './components/MoonCoin';
import NavbarSection from './components/NavbarSection';
import ThreeCardNFt from './components/ThreeCardNFt';
function App() {
  return (
    <div className="">
        
        <NavbarSection/>
        <CardComponent/>
        <MoonCoin/>
        <ThreeCardNFt/>
        <Footer/>
    </div>
  );
}

export default App;
