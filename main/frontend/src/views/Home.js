import React from 'react';
 
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
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
class Home extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <>
           <div className='container-fluid h-100vh row'>
        <div className="first-bar">
            <div className="top-logo">
                <img src={applogo} alt="logo" />
            </div>
            <div className="sidebar">
                 
              <a href=""><i className='bx bxs-dashboard'></i></a>
            </div>
        </div>
        <div className="middle-bar"></div>
        <div className="last-bar"></div>

           </div>
        </>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;