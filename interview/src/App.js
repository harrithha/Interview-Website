import Navbar from './components/Navbar';
import HomePageBody from './components/HomePageBody';
import Features from './components/Features';
import Footer from './components/Footer';
import CompanyLogin from './components/CompanyLogin';
import IntervieweeLogin from './components/IntervieweeLogin';
import CompanySignup from './components/CompanySignup';
import {Route} from 'react-router-dom'
import LoginEnter from './components/LoginEnter';
import Questions from './components/Questions';
import SetInterviewee from './components/SetInterviewee';
import UpdateDetails from './components/UpdateDetails';
import UpdatePassword from './components/UpdatePassword';
import Logout from './components/Logout'
import ErrorPage from './components/ErrorPage'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={HomePageBody}/>
      <Route exact path="/companysignup" component={CompanySignup}/>
      <Route exact path="/companylogin" component={CompanyLogin}/>
      <Route exact path="/intervieweelogin" component={IntervieweeLogin}/>
      <Route exact path="/loginenter" component={LoginEnter}/>
      <Route exact path="/questions" component={Questions}/>
      <Route exact path="/intervieweesignup" component={SetInterviewee}/>
      <Route exact path="/videocall" component={SetInterviewee}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/updatedetails" component={UpdateDetails}/>
      <Route exact path="/updatepassword" component={UpdatePassword}/>
      <Route exact path="/error" component={ErrorPage}/>
      <Footer/>

    </div>
  );
}

export default App;
