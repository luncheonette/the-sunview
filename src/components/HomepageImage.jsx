import React from 'react'

const HomepageImage = ({ image, image_description }) => (
  <React.Fragment>
    <img src={image} />
    {image_description
      ? <p className="image-caption">{image_description}</p>
      : null
    }
  </React.Fragment>
)

export default HomepageImage
