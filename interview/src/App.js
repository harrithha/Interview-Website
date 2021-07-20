import Navbar from './components/Navbar';
import HomePageBody from './components/HomePageBody';
import Features from './components/Features';
import Footer from './components/Footer';
import CompanyLogin from './components/CompanyLogin';
import IntervieweeLogin from './components/IntervieweeLogin';
import CompanySignup from './components/CompanySignup';
import {Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={HomePageBody}/>
      <Route exact path="/" component={Features}/>
      <Route exact path="/companysignup" component={CompanySignup}/>
      <Route exact path="/companylogin" component={CompanyLogin}/>
      <Route exact path="/intervieweelogin" component={IntervieweeLogin}/>
      <Footer/>
    </div>
  );
}

export default App;
