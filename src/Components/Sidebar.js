import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">

        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search"></input>
        </div>

        <div className="collection">
          <div className="collection-icon">
            <p>Icon</p>
          </div>
          <div className="collection-heading">
            <p>Collection</p>
          </div>
        </div>

        <div className="collection">
          <div className="collection-icon">
            <p>Icon</p>
          </div>
          <div className="collection-heading">
            <p>Overview</p>
          </div>
        </div>

        <div className="collection">
          <div className="collection-icon">
            <p>Icon</p>
          </div>
          <div className="collection-heading">
            <p>Status</p>
          </div>
        </div>

        <div className="collection">
          <div className="collection-icon">
            <p>Icon</p>
          </div>
          <div className="collection-heading">
            <p>Setting</p>
          </div>
        </div>

        {/* <div className="dropdown collection">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Setting
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div> */}

        <div className="collection">
          <div className="collection-icon">
            <p>Icon</p>
          </div>
          <div className="collection-heading">
            <p>Profile</p>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="meta">
            <div>
              <img src={require('../images/meta.png')} alt="" />
            </div>
            <div className="meta-text">MetaMask Wallet</div>
          </div>
          <div className="meta-button">
            <button>Logout</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Sidebar