import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavbarCon from './components/Navbar';
import Profile from './components/Profile';
import Createtask from './components/Createtask';
import Landing from './components/Landing';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Updateprofile from './components/Updateprofile';
import Updatetask from './components/Updatetask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavbarCon />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/createtask" component={Createtask} />
            <Route exact path="/updatetask" component={Updatetask} />
            <Route exact path="/updateprofile" component={Updateprofile}/>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
