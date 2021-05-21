import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import * as ReactBootStrap from 'react-bootstrap'
import HomePageBody from './components/HomePageBody';


function App() {
  return (
    <div className="App">
 <Navbar/>
 <HomePageBody />
    </div>
  );
}

export default App;
