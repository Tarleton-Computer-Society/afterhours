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
        <nav></nav>

           </div>
        </>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;