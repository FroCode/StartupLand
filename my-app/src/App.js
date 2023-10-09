import './App.css';
import Topper from './Components/Topper';
import Header from './Components/Header';
import Service from './Components/Service';
import Mockup from './Components/Mockup';
import Features from './Components/Features';
function App() {
  return (
    <div className="App ">
      <Topper />
      <Header/>
      <Service/>
      <Mockup/>
      <Features/>
      <h2 className='bg-red'>Just this</h2>
    </div>
  );
}

export default App;
