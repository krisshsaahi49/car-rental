import React from 'react'
import PropTypes from 'prop-types';

function ToastMsg({msg}) {
  return (
    <div>
    <div className="toast toast-center">
    <div className="alert alert-success">
        <span>{msg}</span>
    </div>
    </div>
    </div>
  )
}

ToastMsg.propTypes = {
  msg: PropTypes.string.isRequired
}

export default ToastMsg