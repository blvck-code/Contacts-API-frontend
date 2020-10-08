import React, {useEffect, useState} from 'react'
import { Form, Grid, Button , Header as SemanticHeader, Segment} from 'semantic-ui-react'
import Header from '../../component/Header';
import { connect } from 'react-redux'
import {register} from '../../redux/actions/auth'
import { Link, useHistory } from 'react-router-dom';


const RegisterUI = ({ data, error, loading, register,form:{form, onChange, registerFormValid }}) => {

    document.title = "Contacts | Register"

    const [fieldErrors, setFieldErrors] = useState({})

    const history = useHistory();

    useEffect(() => { 
        if(error) {
            for(const item in error) {
                setFieldErrors({...fieldErrors, [item]: error[item][0]})
            }
        }
    }, [ error ]);

    useEffect(() => {
        if(data) {
            history.push('/auth/login')
        }
    }, [ data ]);

    const onSubmit = e => {
        e.preventDefault();
        setFieldErrors({});
        register(form);
    }

    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{maxWidth:550, marginTop:20}}>
                    <SemanticHeader>Signup Here</SemanticHeader>
                    <Segment>
                        <Form onSubmit={onSubmit}>
                            <Form.Field>
                                <Form.Input 
                                    value={form.username || ""}
                                    onChange={onChange}
                                    name="username" 
                                    placeholder="Username" 
                                    label="Username" 
                                    error = {
                                        fieldErrors.username && {
                                            content: fieldErrors.username,
                                            pointing: 'below'
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value={form.firstName || ""}
                                    onChange={onChange}
                                    name="firstName" 
                                    placeholder="First Name" 
                                    label="First Name" 
                                    error = {
                                        fieldErrors.first_name && {
                                            content: fieldErrors.first_name,
                                            pointing: 'below'
                                        }
                                    }
                                    
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value={form.lastName || ""}
                                    onChange={onChange}
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    label="Last Name" 
                                    error = {
                                        fieldErrors.last_name && {
                                            content: fieldErrors.last_name,
                                            pointing: 'below'
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value={form.email || ""}
                                    onChange={onChange}
                                    name="email" 
                                    placeholder="Email" 
                                    label="Email" 
                                    type="email" 
                                    error = {
                                        fieldErrors.email && {
                                            content: fieldErrors.email,
                                            pointing: 'below'
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value={form.password || ""}
                                    onChange={onChange}
                                    name="password" 
                                    placeholder="Password" 
                                    label="Password" 
                                    type="password" 
                                    error = {
                                        fieldErrors.password && {
                                            content: fieldErrors.password,
                                            pointing: 'below'
                                        }
                                    }
                                />
                            </Form.Field>
                            <Button 
                                onClick={onSubmit}
                                disabled={registerFormValid || loading}
                                fluid 
                                loading={loading}
                                primary 
                                type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Segment>
                    <Segment>Already have an account ? <Link to="/auth/login">Sign In</Link></Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.authState.loading,
    error: state.authState.error,
    data: state.authState.data,
})

export default connect(mapStateToProps, {register})(RegisterUI);
