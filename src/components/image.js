import React from 'react'

const FirstImage = ({image_url, color}) => {
  return (
    <div className='imagecontainer'>
        <img src={image_url} height={200} width={200}></img>
        <button className='button' style={{backgroundColor:color}}>SHOP</button>
        <button className='button'>ADD TO CART</button>
    </div>
      )
}

export default FirstImage