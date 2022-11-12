import React, { useState } from 'react'
import { styles } from './styles'
import InputFIeld from '../common/InputFIeld'
import './loginStyle.css'
import CustomButton from '../common/CustomButton'
const {  loginIcon, emailIcon, lockIcon, phoneIcon, hiddenIcon, eyeIcon } = require('../../assets')

export default function Login() {

    const [count, setcount] = useState(0); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)

const onPress=()=>{
    setcount(count + 1)
}

const onPressRightIcon=()=>{
    setIsPasswordVisible(!isPasswordVisible)
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
                         />

                         <InputFIeld label='Phone' 
                        leftIcon={phoneIcon}
                        />
                        <InputFIeld label='Password' 
                        leftIcon={lockIcon}
                        rightIcon={isPasswordVisible ? hiddenIcon : eyeIcon}
                        onPressRightIcon={onPressRightIcon}
                        isPasswordVisible={isPasswordVisible}
                        />

                    </form>
               <CustomButton
               label='Login Here 🗝️'
               onPress={onPress}
               />
                </div>
            </div>

         

        </div >
    )
}


