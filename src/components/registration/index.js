import React, { useState } from 'react'
import { styles } from './styles'
import InputFIeld from '../common/InputFIeld'
import './regisStyles.css'
import CustomButton from '../common/CustomButton'
import { commonValidation } from '../../utils/validators'
import { ApiFunctions } from '../../apis'
import { reg } from '../../utils/regex'
const {   emailIcon, lockIcon, phoneIcon, hiddenIcon, eyeIcon, registrationIcon, userIcon, locationIcon } = require('../../assets')

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
const [showEmailErr, setShowEmailErr] = useState('')
const [showPhoneErr, setShowPhoneErr] = useState('')
const [showPasswordErr, setShowPasswordErr] = useState('')
const [showUsernameErr, setShowUsernameErr] = useState('')
const [showAddressErr, setShowAddressErr] = useState('')

const onPress= async ()=>{
 const response= await ApiFunctions.doRegister(
    {email, password,name : username,address,phone}
   )
   console.log(response ,"response")
}

const onPressRightIcon=()=>{
    setIsPasswordVisible(!isPasswordVisible)
}

  const customOnChange=(value, setValue, setError , label )=>{
      const regLabel = label?.toLowerCase(); 
    if(  !commonValidation( reg[regLabel] , value)){
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
       if( (phone.length === 0 && email.length ===0 ) || password.length === 0 || showPasswordErr.length!==0 || showEmailErr.length!==0 || showPhoneErr.length!==0 || username.length === 0 || address.length === 0 || showAddressErr.length!==0 || showUsernameErr.length!==0   ){
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
                    <img src={registrationIcon} className='loginIcon' alt="" />
                <div style={styles.formContainer} >
                    <form method='post' >
                         <InputFIeld label='Username'
                        leftIcon={userIcon}
                        value={username}
                        onChange={(e)=>customOnChange(e.target.value, setUsername, setShowUsernameErr, 'Username' )}
                        errorMessage={showUsernameErr}
                        onBlur={()=>customOnBlur(username,setShowUsernameErr)}
                         />

                         <InputFIeld label='Email'
                        leftIcon={emailIcon}
                        value={email}
                        onChange={(e)=>customOnChange(e.target.value, setEmail, setShowEmailErr, 'Email' )}
                        errorMessage={showEmailErr}
                        onBlur={()=>customOnBlur(email,setShowEmailErr)}
                         />

                      

                         <InputFIeld label='Phone' 
                        leftIcon={phoneIcon}
                        value={phone}
                        onChange={(e)=>customOnChange(e.target.value, setPhone, setShowPhoneErr, 'Phone' )}
                        errorMessage={showPhoneErr}
                        onBlur={()=>customOnBlur(phone,setShowPhoneErr)}
                        />

                        <InputFIeld label='Address'
                        leftIcon={locationIcon}
                        value={address}
                        onChange={(e)=>customOnChange(e.target.value, setAddress, setShowAddressErr, 'Address' )}
                        errorMessage={showAddressErr}
                        onBlur={()=>customOnBlur(address,setShowAddressErr)}
                         />

                        <InputFIeld label='Password' 
                        leftIcon={lockIcon}
                        rightIcon={isPasswordVisible ? hiddenIcon : eyeIcon}
                        onPressRightIcon={onPressRightIcon}
                        isPasswordVisible={isPasswordVisible}
                        onChange={(e)=>customOnChange(e.target.value, setPassword, setShowPasswordErr, 'Password' )}
                        errorMessage={showPasswordErr}
                        onBlur={()=>customOnBlur(password,setShowPasswordErr)}
                        />



                    </form>
               <CustomButton
               label='Sign Up 🗝️'
               onPress={onPress}
            disabled={isDisabled()}
               />
                </div>
            </div>

         

        </div >
    )
}
