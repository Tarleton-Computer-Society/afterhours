import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
           <div className='w-100 h-100vh '>
       
        <div className="app-body">
            <div className="side-bar">
           <a href=""><DashboardIcon/></a>
           <a href=""><CalendarMonthIcon/></a>
            </div>
            <div className="middle-bar"></div>
            <div className="right-bar"></div>
        </div> <nav></nav>
           </div>
        </>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;