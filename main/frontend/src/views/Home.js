import React from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
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
           <a href=""><GridViewOutlinedIcon/></a>
           <a href=""><CalendarMonthOutlinedIcon/></a>
           <a href=""><BookmarkBorderOutlinedIcon/></a>
           <a href=""><SendOutlinedIcon/></a>
              <a href=""><PermPhoneMsgOutlinedIcon /></a>
              <a href=""><SettingsOutlinedIcon/></a>
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