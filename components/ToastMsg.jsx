import React from 'react'

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

export default ToastMsg