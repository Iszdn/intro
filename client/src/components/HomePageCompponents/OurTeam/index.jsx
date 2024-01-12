import React from 'react'
import "./index.scss"
import TeamCard from '../../TeamCard'
const OurTeam = () => {
  return (
    <section id='team'>
<div className="header">

    <h3>Our Team</h3>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
   
    
</div>
<div className="container">
    <div className='row'>
   
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
  
</div>
</div>

    </section>
  )
}

export default OurTeam