import React from 'react';
import { AuthNavBar } from '../../components';
 
import { useHistory,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
 
    function Register(props) {
 
        let history = useHistory();
        function handleRedirect(where) {
           history.push(where);
         }
               return (<>
               <div className="auth-col">
       <AuthNavBar />
                 
                  <div className="auth-body">
                   <div className="auth-form">
                       <h2>Register | Afterhours</h2>
                       <form>         <div class="form-floating mb-3">
         <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">First Name</label>
       </div>         <div class="form-floating mb-3">
         <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">Last Name</label>
       </div>
                        
                       <div class="form-floating mb-3">
         <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">Email address</label>
       </div>
       <div class="form-floating">
         <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
         <label for="floatingPassword">Password</label>
        
       </div>  <div class="mb-3  mt-3">
         
  <button type="submit" class="btn btn-primary">SignUp</button></div>
                    </form>
                 
                    
            </div>
            <div className="auth-form mt-3">  <a href="/login"> <span className="smaautt"  >Already have an account? <span className="nex">Login</span></span></a></div>
                
                  </div>
                   </div>
               </>);
           }
        
        
       
       export default Register;