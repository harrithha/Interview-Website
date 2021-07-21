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



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={HomePageBody}/>
      <Route exact path="/features" component={Features}/>
      <Route exact path="/companysignup" component={CompanySignup}/>
      <Route exact path="/companylogin" component={CompanyLogin}/>
      <Route exact path="/intervieweelogin" component={IntervieweeLogin}/>
      <Route exact path="/loginenter" component={LoginEnter}/>
      <Route exact path="/questions" component={Questions}/>
      <Footer/>

    </div>
  );
}

export default App;
