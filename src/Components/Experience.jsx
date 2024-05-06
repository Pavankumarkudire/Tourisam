import React from 'react'
import ExperienceImg from "../assects/images/experience.png"

const Experience = () => {
  return (
      <div className='row my-5'>
        <div className='col-md-6 my-5 p-5'>
        <p>Experience</p>
        <h5>With our all experience we will serve you </h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur reprehenderit officiis est, voluptate, exercitationem necessitatibus nihil laudantium ipsam voluptatum magni quisquam nam numquam tenetur blanditiis totam natus possimus! Possimus, soluta.</p>
        <div className='ExpirenceCards'>
            <div>
                <h6 className='ExpirenceCard'>12+</h6>
                <p>Successfull Trips</p>
            </div>
            <div>
                <h6 className='ExpirenceCard'>2k+</h6>
                <p>Regular clients</p>
            </div>
            <div>
                <h6 className='ExpirenceCard'>15</h6>
                <p>Years experience</p>
            </div>
        </div>
        </div>
        <div className='col-md-6'>
            <img src={ExperienceImg} alt="" />
        </div>
    </div>
  )
}

export default Experience

