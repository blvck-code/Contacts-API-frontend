import React, { useRef, useState } from 'react'
import CreateContact from '../../layout/Contacts/Create'
import { connect } from 'react-redux'


const CreateContactComponent = ({addContact}) => {
    document.title = "Contacts | Create Contact"
    
    const [form, setForm] = useState({});
    const [contactPic, setContactPic] = useState(null)

    const onChange = (e,{ name, value}) => {
        setForm({...form, [name]:value});
    }

    const imagePickerRef = useRef(null)

    const choseImage = () => {
        if(imagePickerRef.current){
            imagePickerRef.current.click()
        }
    }

    const readURL = (e) => {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (e) => {
            setContactPic(e.target.result)
            setForm({...form, ['contactPic']:e.target.result})
        };
    
      };

    const formInvalid = 
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.countryCode?.length ||
        !form.phoneNumber?.length 

    return <CreateContact readURL={readURL} imagePickerRef={imagePickerRef} contactPic={contactPic} choseImage={choseImage} onChange={onChange} addContact={addContact} formInvalid={formInvalid} form={form} />
}

const mapStateToProps = state => ({
    addContact : state.contactState.addContact
})

export default connect(mapStateToProps)(CreateContactComponent)
