import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import ContactUsScreen from './screens/ContactUsScreen';

const App = () => {
  return (
    <Router>
      <div className="">
        <div>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={SignInScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/contactus" component={ContactUsScreen} />
        </div>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
