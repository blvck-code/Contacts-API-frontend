import React, {useEffect, useState} from 'react'
import RegisterUI from '../../layout/Register';
import useForm from './useForm';


const RegisterComponent = () => {

    return <RegisterUI form={useForm()}  />
}



export default RegisterComponent;
