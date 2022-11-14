import React from 'react'
import './inputStyles.css';

export default function CustomButton(props) {
  return (
   <button className='loginButton' 
   style={{
   borderColor : props?.disabled ? 'gray' :'green',
   color :  props?.disabled ? 'gray' :'green'
   }}
   onClick={props?.onPress}
   disabled = {props?.disabled}
   >
       {props?.label}
   </button>
  )
}
