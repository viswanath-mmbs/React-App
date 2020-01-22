import React from 'react';
import PropTypes from 'prop-types';

const Header =(props) => {
    return (
        <h1>{props.title}</h1>
    );
}

Header.propTypes = {
    title : PropTypes.string
}

Header.defaultProps = {
    title: 'My Task99999'
}

export default Header;