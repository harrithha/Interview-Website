import Navbar from './components/Navbar';
import HomePageBody from './components/HomePageBody';
import Features from './components/Features';
import Footer from './components/Footer';
import CompanyLogin from './components/CompanyLogin';
import IntervieweeLogin from './components/IntervieweeLogin';
import CompanySignup from './components/CompanySignup';
import LoginEnter from './components/LoginEnter';



function App() {
  return (
    <div className="App">
 <Navbar/>
 <HomePageBody />
 <Features /> 
 <CompanyLogin/>
 <IntervieweeLogin/>
 <CompanySignup />
 <LoginEnter />
 <Footer/>
    </div>
  );
}

export default App;
