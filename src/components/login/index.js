import React, { useState } from 'react'
import { styles } from './styles'
import InputFIeld from '../common/InputFIeld'
import './loginStyle.css'
import CustomButton from '../common/CustomButton'
import { ValidateEmail, validatePassword, validatePhone } from '../../utils/validators'
const {  loginIcon, emailIcon, lockIcon, phoneIcon, hiddenIcon, eyeIcon } = require('../../assets')

export default function Login() {

    const [count, setcount] = useState(0); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
const [showEmailErr, setShowEmailErr] = useState('')
const [showPhoneErr, setShowPhoneErr] = useState('')
const [showPasswordErr, setShowPasswordErr] = useState('')

const onPress=()=>{
    setcount(count + 1)
}

const onPressRightIcon=()=>{
    setIsPasswordVisible(!isPasswordVisible)
}

  const customOnChange=(value, validateFunction, setValue, setError , label )=>{
    if(  !validateFunction(value)){
        setValue(value)
        setError(`Invalid ${label}`)
            return;
          }
          setValue(value)
          setError('')
  }

  const customOnBlur=(fieldName, state)=>{
if(fieldName === ''){
    state('')
}
  }

  const isDisabled=()=>{
       if( (phone.length === 0 && email.length ===0 ) || password.length === 0 || showPasswordErr.length!==0 || showEmailErr.length!==0 || showPhoneErr.length!==0 ){
        console.log('here 2')
          return true
      }
      else{ return false } 
  }

    return (
        <div style={{
            display:'flex', 
           justifyContent:'center', 
            alignItems:'center', 
            height:'90vh',
        //    backgroundColor:'#e6f2ff',
        
        }} >
            <div  className='mainContainer' >
                    <img src={loginIcon} className='loginIcon' alt="" />
                <div style={styles.formContainer} >
                    <form method='post' >
                        <InputFIeld label='Email'
                        leftIcon={emailIcon}
                        value={email}
                        onChange={(e)=>customOnChange(e.target.value, ValidateEmail, setEmail, setShowEmailErr, 'Email' )}
                        errorMessage={showEmailErr}
                        onBlur={()=>customOnBlur(email,setShowEmailErr)}
                         />

                         <InputFIeld label='Phone' 
                        leftIcon={phoneIcon}
                        value={phone}
                        onChange={(e)=>customOnChange(e.target.value, validatePhone, setPhone, setShowPhoneErr, 'Phone' )}
                        errorMessage={showPhoneErr}
                        onBlur={()=>customOnBlur(phone,setShowPhoneErr)}
                        />
                        <InputFIeld label='Password' 
                        leftIcon={lockIcon}
                        rightIcon={isPasswordVisible ? hiddenIcon : eyeIcon}
                        onPressRightIcon={onPressRightIcon}
                        isPasswordVisible={isPasswordVisible}
                        onChange={(e)=>customOnChange(e.target.value, validatePassword, setPassword, setShowPasswordErr, 'Password' )}
                        errorMessage={showPasswordErr}
                        onBlur={()=>customOnBlur(password,setShowPasswordErr)}
                        />

                    </form>
               <CustomButton
               label='Login Here 🗝️'
               onPress={onPress}
            disabled={isDisabled()}
               />
                </div>
            </div>

         

        </div >
    )
}


