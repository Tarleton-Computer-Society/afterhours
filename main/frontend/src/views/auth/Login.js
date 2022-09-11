import React from 'react';
import { AuthNavBar } from '../../components';
import PropTypes from 'prop-types';
import { useHistory,Redirect } from 'react-router-dom';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
function Login(props) {
 
 let history = useHistory();
 function handleRedirect(where) {
    history.push(where);
  }
        return (<>
        <div className="auth-col">
<AuthNavBar />
          
           <div className="auth-body">
            <div className="auth-form">
                <h2>Login | Afterhours</h2>
                <form>
                <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
  <span className='for-pas'>forgot password?</span>
</div>  <div class="mb-3  ">
  
  <button type="submit" class="btn btn-primary">Login</button></div>
                    </form>
                 
                    
            </div>
            <div className="auth-form mt-3">  <a href="/register"> <span className="smaautt"  >New here? <span className="nex">Get Started</span></span></a></div>
         
           </div>
            </div>
        </>);
    }
 
 

export default Login;