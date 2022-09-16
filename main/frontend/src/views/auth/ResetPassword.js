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
function ResetPassword(props) {
 
 
        return (<>
        <div className="auth-col">
<AuthNavBar where='resetpassword'/>
          
           <div className="auth-body">
            <div className="auth-form">
                <h2>Reset Password</h2>
                <form>
                <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
   <div class="mb-3  ">
  
  <button type="submit" class="btn btn-primary">Send Reset Link</button></div>
                    </form>
                 
                    
            </div>
            <div className="auth-form mt-3">  <a href="/login"> <span className="smaautt"  > <span className="nex">Back to login</span></span></a></div>
         
           </div>
            </div>
        </>);
    }
 
 

export default  ResetPassword;