import './App.css';
import Topper from './Components/Topper';
import Header from './Components/Header';
import Service from './Components/Service';
import Mockup from './Components/Mockup';
function App() {
  return (
    <div className="App ">
      <Topper />
      <Header/>
      <Service/>
      <Mockup/>
      <h2 className='bg-red'>Just this</h2>
    </div>
  );
}

export default App;
