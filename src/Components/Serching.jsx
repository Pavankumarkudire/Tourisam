import React from 'react'

const Serching = () => {
  return (
    <div>
      <div className="Serching ms-5">
          <div className="Border">
            <div>
              <i className="fa-solid fa-location-dot"
                style={{ color: "#de601b" }}
              ></i>
            </div>
            <div className='ms-2'>
              <p>Location</p>
              <input type="text" placeholder="Where are you going ?" />
            </div>
          </div>
          <div className="Border">
            <div>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#de601b" }}
              ></i>
            </div>
            <div className='ms-2'>
              <p>Distance</p>
              <input type="text" placeholder="Distance k/m" />
            </div>
          </div>
          <div className="Borders">
            <div>
            <i class="fa-solid fa-user-group" style={{color: "#d97d26"}}></i>
            </div>
            <div className='ms-2'>
              <p>Max People</p>
              <input type="text" placeholder="0" />
            </div>
          <div className=' ExpirenceCard rounded-2-top-start-pill my-3 '>
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Serching
