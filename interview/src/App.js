import Navbar from './components/Navbar';
import HomePageBody from './components/HomePageBody';
import Features from './components/Features';
import Footer from './components/Footer';
import CompanyLogin from './components/CompanyLogin';
import IntervieweeLogin from './components/IntervieweeLogin';
import CompanySignup from './components/CompanySignup';
<<<<<<< HEAD
import {Route, Link} from 'react-router-dom'
=======
import LoginEnter from './components/LoginEnter';
>>>>>>> ea53f3fc8c8510e067ef71c3eea0b8e40ef41481



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
      <Route exact path="/" component={HomePageBody}/>
      <Route exact path="/" component={Features}/>
      <Route exact path="/companysignup" component={CompanySignup}/>
      <Route exact path="/companylogin" component={CompanyLogin}/>
      <Route exact path="/intervieweelogin" component={IntervieweeLogin}/>
      <Footer/>
=======
 <Navbar/>
 <HomePageBody />
 <Features /> 
 <CompanyLogin/>
 <IntervieweeLogin/>
 <CompanySignup />
 <LoginEnter />
 <Footer/>
>>>>>>> ea53f3fc8c8510e067ef71c3eea0b8e40ef41481
    </div>
  );
}

export default App;
