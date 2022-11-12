import React from 'react'
import './inputStyles.css';

export default function CustomButton(props) {
  return (
   <button className='loginButton' 
   onClick={props?.onPress}
   >
       {props?.label}
   </button>
  )
}
