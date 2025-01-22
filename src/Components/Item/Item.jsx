import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
    </div>
  )
}

export default Item