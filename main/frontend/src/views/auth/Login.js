import React from 'react';
import { NavBar } from '../../components';
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
class Login extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <>

            <NavBar/>
           <label>
            <ul>
                <li>
                    home
                </li>
                <li>
                   login
                </li>
                <li>
                  register
                </li>
            </ul>
            </label>
        
        </>;
    }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;