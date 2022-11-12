import React,{useState} from 'react'
import {  eyeIcon, hiddenIcon } from '../../assets'
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
        <div>
            <img src={props.leftIcon} alt="" className='leftIcon' />
        <input className='inputField' type={getType()} 
        placeholder={props?.label}
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
