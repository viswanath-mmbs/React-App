import React from 'react';

const Header =(props) => {
    return (
        <h1>{props.title}</h1>
    );
}

Header.defaultProps = {
    title: 'My Task99999'
}

export default Header;