import React from 'react';
import PropTypes from 'prop-types';

const Mailbox = ({ unreadMessages }) => (
  <div>
    <h1>Hello!</h1>

    {unreadMessages.length > 0 ? (
      <p>You have {unreadMessages.length} unread messages.</p>
    ) : (
      <p>No unread messages.</p>
    )}
  </div>
);

Mailbox.defaultProps = {
  unreadMessages: [],
};

Mailbox.propTypes = {
  unreadMessages: PropTypes.arrayOf(PropTypes.string),
};

export default Mailbox;

// {unreadMessages.length > 0 && (
//   <p>You have {unreadMessages.length} unread messages.</p>
// )}
