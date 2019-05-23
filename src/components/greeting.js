import React from 'react';
import PropTypes from "prop-types";

const Greeting  = ({ greeting, name }) => (
  <div style={{ color: 'teal' }}>
    <h3>Hello there ..</h3>
    <p>{greeting}, {name}</p>
  </div>
);

Greeting.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
};

export default Greeting;
