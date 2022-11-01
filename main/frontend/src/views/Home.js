import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import { Sidebar } from '../components';
import { GetMyData } from '../actions/user';
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

function Home(props) {

  // useEffect(() => {
  //   GetMyData()
  //   }, []);
    
return (
<>

<div className='appbody'>
<Sidebar/>

<div className="middbar">
{/* <NavBar/> */}
<div className='dashboard-bar'>
  <section>
  <h4>Recent Activity</h4>
  <div className="section-box">
  <div className="section-card"></div>
  <div className="section-card"></div>
  <div className="section-card"></div>
  <div className="section-card"></div>
  </div>
  </section>
  
</div>
</div>
</div>
</>
)
}
Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;