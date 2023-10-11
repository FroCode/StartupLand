import './App.css';
import Topper from './Components/Topper';
import Header from './Components/Header';
import Service from './Components/Service';
import Mockup from './Components/Mockup';
import Features from './Components/Features';
import Ultimate from './Components/Ultimate.jsx';
import Pricing from './Components/Pricing';
import Client from './Components/Client';
import Blog from './Components/Blog';
function App() {
  return (
    <div className="App ">
      <Topper />
      <Header/>
      <Service/>
      <Mockup/>
      <Features/>
      <Ultimate/>
      <Pricing/>
      <Client/>
      <Blog/>
      <h2 className='bg-red'>Just this</h2>
    </div>
  );
}

export default App;
