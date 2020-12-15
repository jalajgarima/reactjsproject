import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 Error Page Not Found</h1>
      <Link to="/">
        <h3>Go To Homepage</h3>
      </Link>
      {/* later Timer Will Be Added To Redirect */}
    </div>
  )
}

export default NotFound
