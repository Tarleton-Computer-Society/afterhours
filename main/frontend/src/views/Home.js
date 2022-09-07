import React from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import {Sidebar} from '../components';
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
        // write a code to find ip address
        return <>
           <div className='main-app w-100 h-100vh '>
       
   
       <Sidebar/>
            
               <div className="app-body">
             <NavBar/>
                <div className="app-content">
            <div className="middle-bar">
                <section className="dash-sect">
                    <div className="container">
                        <h2>Recent Group Activty</h2>
                        <section className='summary-sect'></section>
                        </div>

                </section>
            </div>
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