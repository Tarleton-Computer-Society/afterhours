import { Register, Login, ResetPassword, VerifyEmail } from './auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import { PageNotFound } from './errors';
export default function ViewS() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/Resetpassword" component={ResetPassword}></Route>
        <Route exact path="/verifyemail" component={VerifyEmail}></Route>
        <Route exact path="*" component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}