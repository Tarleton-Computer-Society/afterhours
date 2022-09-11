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
                    
                        <h2>Recent Group Activty</h2>
                        <section className='summary-sect'>

                        <div className="summ-sect-card">
                            <h3>
                                Intro to Computer Science
                            </h3>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas unde nesciunt ad soluta suscipit eos dolorum mollitia delectus, ea architecto consequatur, reprehenderit eveniet, eum facere illo possimus recusandae inventore!
                            </span>
                        </div>    <div className="summ-sect-card">
                            <h3>
                                Intro to Computer Science
                            </h3>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas unde nesciunt ad soluta suscipit eos dolorum mollitia delectus, ea architecto consequatur, reprehenderit eveniet, eum facere illo possimus recusandae inventore!
                            </span>
                        </div>
                        <div className="summ-sect-card">
                            <h3>
                                Intro to Computer Science
                            </h3>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas unde nesciunt ad soluta suscipit eos dolorum mollitia delectus, ea architecto consequatur, reprehenderit eveniet, eum facere illo possimus recusandae inventore!
                            </span>
                        </div>  <div className="summ-sect-card">
                            <h3>
                                Intro to Computer Science
                            </h3>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas unde nesciunt ad soluta suscipit eos dolorum mollitia delectus, ea architecto consequatur, reprehenderit eveniet, eum facere illo possimus recusandae inventore!
                            </span>
                        </div>
                        </section>
                       

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