import React from 'react'
import './inputStyles.css'

export default function InputFIeld(props) {
  
    const getType=()=>{
        if(props?.label === 'Password' && !props?.isPasswordVisible){
            return 'password'
        }
        return 'text'
    }

    return (
        <div className='inputContainer' >
        <p className='errorMessage' >{props.errorMessage}</p>
        <div>
            <img src={props.leftIcon} alt="" className='leftIcon' />
        <input className='inputField' type={getType()} 
        placeholder={props?.label}
        value={props?.value}
        onChange={props?.onChange}
        onBlurCapture={props?.onBlur}
        />
         
{
    props?.rightIcon && (
     
    <img 
    src={
         props?.rightIcon 
    } alt="" 
    className='righIcon'
    onClick={props?.onPressRightIcon}
    /> 
     

    )
}
       



        </div>
            </div>
            )
}
