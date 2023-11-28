import React from 'react'

import PropTypes from 'prop-types'

import './my-image-component.css'

const MyImageComponent = (props) => {
  return (
    <div className="my-image-component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="my-image-component-image"
      />
    </div>
  )
}

MyImageComponent.defaultProps = {
  image_alt: 'logo',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

MyImageComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default MyImageComponent
