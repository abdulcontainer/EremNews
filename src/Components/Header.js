import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="../logo.png" alt="Logo" />
          <span>ScholorShip</span>
        </div>
        <div className="setting">
          <span className="cName">
            Company Name L.L.C
          </span>
          <span className="setting-icon">
            <i>Icon</i>
          </span>
        </div> 
      </div>
    </>
  )
}

export default Header