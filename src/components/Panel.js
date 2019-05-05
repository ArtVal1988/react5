import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Panel.defaultProps = {
  title: '',
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Panel;
