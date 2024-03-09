import React from 'react'

function Alert({errormsg, status, estilomsg}) {
  return (
    <>
      <div className={status}>
        <p className={estilomsg}>{errormsg}</p>
      </div>
    </>
  )
}

export default Alert