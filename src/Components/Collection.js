import React from 'react'

const Collection = () => {
  return (
    <div className="collection">
      <div className="topbar">
        <div className="heading">
          <h2>Collection</h2>
        </div>
        <div className="collection-top-icons">
          <div className="delete">D</div>
          <div className="edit">E</div>
          <div className="list">L</div>
        </div>
      </div>
      <hr />

      <div className="coll-box">
        <div className="image">
          <img src="" alt="IMAGE" />
        </div>
        <div className="small-box">
          <div className="box-img">
            <img src="" alt="My image" />
          </div>
          <div className="coll-dis">
            <div className="heading">
              <p>White Sand Parcel Pass</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque, modi similique consequatur facilis quo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection