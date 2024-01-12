import React from 'react'
import "./index.scss"
const TeamCard = () => {
  return (
    <div className='team-card col-lg-3 col-md-6 col-12'>
<div className="img">
    <img src="https://preview.colorlib.com/theme/nitro/images/person_7.jpg" alt="" />
    <div className="icons">
    <div className="sosials">
    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-linkedin-in"></i>
    <i class="fa-brands fa-instagram"></i>
    </div>
    </div>
</div>
<div className="info">
    <h3>Kaiara Spencer</h3>
    <p>PRODUCT MANAGER</p>
</div>
    </div>
  )
}

export default TeamCard