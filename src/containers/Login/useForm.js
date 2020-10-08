import React, {useState} from 'react';
import { register } from '../../redux/actions/auth';


export default () => {

    const [form, setForm] = useState({});

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value})
    }

    const loginFormValid = 
        !form.username?.length ||
        !form.password?.length;

    return {form, onChange, loginFormValid};
}