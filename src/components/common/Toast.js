import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast(props) {

    useEffect(() => {
        if(props?.type === true){
            toast.success(props?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        else   if(props?.type === false){
            toast.error(props?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
       
    }, [props?.message, props?.type])
    

  return (
    <ToastContainer />
  )
}
