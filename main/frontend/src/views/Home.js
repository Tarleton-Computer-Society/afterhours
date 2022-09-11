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
                <div className="dash-sect">
                    
                        <h2>Recent Group Activty</h2>
                        <div className='summary-sect'>

                        <div className="summ-sect-card">
                            <h3>
                                Intro to Computer Science
                            </h3>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas unde nesciunt ad soluta suscipit eos dolorum mollitia delectus, ea architecto consequatur, reprehenderit eveniet, eum facere illo possimus recusandae inventore!
                            </span>
                        </div>   
                        </div>
                       

                </div>
                <div className="dash-sect">
                    
                    <h2>Recent Group Activty</h2>
                    <div className='summary-sect'>

                    <table class="table events-table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  
                    </div>
                   

            </div>
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