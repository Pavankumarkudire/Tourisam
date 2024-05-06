import React from 'react'
import GallaryImg1 from "../assects/images/gallery-01.jpg"
import GallaryImg2 from "../assects/images/gallery-02.jpg"
import GallaryImg3 from "../assects/images/gallery-03.jpg"
import GallaryImg4 from "../assects/images/gallery-04.jpg"
import GallaryImg5 from "../assects/images/gallery-05.jpg"
import GallaryImg6 from "../assects/images/gallery-06.jpg"
import GallaryImg7 from "../assects/images/gallery-07.jpg"
import GallaryImg8 from "../assects/images/gallery-08.jpg"

const Gallery = () => {
  return (
    <div className='container'>
      <p>Gallary</p>
      <h5>Visit our custumers tour gallery</h5>
      <div className='Gallerys'>
        <img src={GallaryImg1} alt="" className='Gallery1'/>
        <img src={GallaryImg2} alt="" className='Gallery1'/>
        <img src={GallaryImg3} alt="" className='Gallery1'/>
        <img src={GallaryImg4} alt="" className='Gallery1'/>
        <img src={GallaryImg5} alt="" className='Gallery1'/>
        <img src={GallaryImg6} alt="" className='Gallery1'/>
        <img src={GallaryImg7} alt="" className='Gallery1'/>
        <img src={GallaryImg8} alt="" className='Gallery1'/>
      </div>
    </div>
  )
}

export default Gallery
