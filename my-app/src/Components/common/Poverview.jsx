import React from 'react'
import './css/platform.css'; // Import the CSS file for styling
import background from '../images/plpg.png'; // Import your image



function Poverview() {
  return (
    <div>
        <div className="platform-header"style={{backgroundImage: `url(${background})`}}>
      <div className="ploutoverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white pl_bottom">
              <h1 className="text-center ah fw-bold">True Multi-Tenant, Cloud-Native platform</h1>     
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="plcontent">
      
      </div>
    </div>
  )
}

export default Poverview