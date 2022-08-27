import React from 'react';
 
import PropTypes from 'prop-types';
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
            <NavBar/>
            home
        </>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;