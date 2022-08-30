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
           <div className='main-app w-100 h-100vh '>
       
   
        <div className="side-bar">
           <a href=""><DashboardIcon/></a>
           <a href=""><CalendarMonthIcon/></a>
            </div>  
            
               <div className="app-body">
               <nav></nav>
                <div className="app-content">
            <div className="middle-bar"></div>
            <div className="right-bar"></div>
        </div> 
        </div>
           </div>
        </>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;