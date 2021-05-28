import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import * as ReactBootStrap from 'react-bootstrap'
import HomePageBody from './components/HomePageBody';
import Features from './components/Features';
import Footer from './components/Footer';
import CompanyLogin from './components/CompanyLogin';
import IntervieweeLogin from './components/IntervieweeLogin';



function App() {
  return (
    <div className="App">
 {/* <Navbar/>
 <HomePageBody />
 <Features />
 <Footer/> */}
 <CompanyLogin/>
 <IntervieweeLogin/>
    </div>
  );
}

export default App;
