import React from 'react'
import './Gallery.css'

const Gallery = ({photos}) => {
  return (
         <div>
            <div className='row'>
                {photos.map((image) => 
                <div key={image.id}>
                    <div className='col img'>
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.description} height='200' width='250' />
                    </div>
                </div>)}
            </div>
        </div>
  )
}

export default Gallery