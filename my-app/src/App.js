import './App.css';
import Topper from './Components/Topper';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
function App() {
  return (
    <div className="App ">
      <Topper />
      <Header/>
      <h2 className='bg-red'>Just this</h2>
    </div>
  );
}

export default App;
