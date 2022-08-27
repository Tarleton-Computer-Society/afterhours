import { Register, Login, ForgotPassword, VerifyEmail } from './auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
export default function ViewS() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<Home/>} />
      <Route exact path="/register" component={<Register/>}></Route>
        <Route exact path="/register" component={<Register/>}></Route>
        <Route exact path="/login" component={<Login/>}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/verifyemail" component={VerifyEmail}></Route>
      </Switch>
    </Router>
  );
}