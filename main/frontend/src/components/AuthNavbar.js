import React from 'react';
   
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
export default function AuthNavBar(props) {
    return <>
    <div className="authnav">
    <label>
            Afterhours
        </label>
        <div className="authnav-right">
            {props.where == 'login' &&  <a href="/register">Register</a> }
            {props.where  == 'registetr' && <a href="/register">Login</a>}
            {props.where == 'resetpassword' &&
            <>
             <a href="/register">Login</a>
             <a href="/register">Register</a>
            </>
           }
 
           
        </div>
    </div>
       
    </>;
}