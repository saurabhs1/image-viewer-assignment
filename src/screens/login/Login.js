import React, {Component} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography
} from '@material-ui/core';
import Header from "../../common/header/Header"; // Import Header
import './Login.css' // Import stylesheet for Login Page
import {Redirect} from 'react-router-dom';

const userCredentials = {
    username: 'saurabh',
    password: 'Temp@2021',
    accessToken: 'IGQVJYRU9NSW9Fam9PcVJtTDVLU05fcTdEcEd1TnN5bmF5TkFvcFFlU2hTZATZA5YnpoQTAwOWFHd1RSamhxSkQ2OWxuMHJla1dtdmFXSFVWUHhMSG0wX2RBaEJGc3pueFZAXZAmVfSUt3'
};

/**
 * Login Page
 */
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameHelperText: 'display-none',
            passwordHelperText: 'display-none',
            incorrectCredentialsHelperText: 'display-none',
            loginSuccess: false
        }
    }

    render() {
        if (this.state.loginSuccess === true) {
            return <Redirect to={{pathname: '/home', state: {loginSuccess: true}}}/>
        }
        return <div>
            <div><Header/></div>
            <div className='login-card-flex-container'>
                <Card className='login-card'>
                    <CardContent>
                        <FormControl className='login-form-control'>
                            <Typography variant="h5">
                                <Box fontWeight='fontWeightBold'>
                                    LOGIN
                                </Box>
                            </Typography>
                        </FormControl>
                        <br/>
                        <br/>
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' name='username' type='text' onChange={this.onUsernameFieldChange}/>
                                <FormHelperText className={this.state.usernameHelperText}><span
                                    className='form-helper-text-red-color'>required</span></FormHelperText>
                            </FormControl>
                        <br/>
                        <br/>
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' name='password' type='password'
                                       onChange={this.onPasswordFieldChange}/>
                                <FormHelperText className={this.state.passwordHelperText}><span
                                    className='form-helper-text-red-color'>required</span></FormHelperText>
                            </FormControl>
                        <br/>
                        <br/>
                            <FormHelperText className={this.state.incorrectCredentialsHelperText}><span
                                className='form-helper-text-red-color'>Incorrect username and/or password</span></FormHelperText>
                        <br/>
                            <FormControl>
                                <Button variant='contained' color='primary' onClick={this.onLogin}>Login</Button>
                            </FormControl>
                    </CardContent>
                </Card>
            </div>
        </div>;
    }

    onUsernameFieldChange = (e) => {
        if (e.target.value === '') {
            this.setState({
                username: e.target.value,
                usernameHelperText: 'display-block',
                incorrectCredentialsHelperText: 'display-none'
            });
        } else {
            this.setState({username: e.target.value, usernameHelperText: 'display-none'})
        }
    }

    onPasswordFieldChange = (e) => {
        if (e.target.value === '') {
            this.setState({
                password: e.target.value,
                passwordHelperText: 'display-block',
                incorrectCredentialsHelperText: 'display-none'
            });
        } else {
            this.setState({password: e.target.value, passwordHelperText: 'display-none'})
        }
    }
    

    onLogin = () => {
        // If username is empty show required text
        if (this.state.username === '') {
            this.setState({usernameHelperText: 'display-block'});
        }else {
            this.setState({usernameHelperText: 'display-none'});
        }

        // If password is empty show required text
        if (this.state.password === '') {
            this.setState({passwordHelperText: 'display-block'});
        }else {
            this.setState({passwordHelperText: 'display-none'});
        }

        if (this.state.incorrectCredentialsHelperText === 'display-block') {
            this.setState({incorrectCredentialsHelperText: 'display-none'});
        }

        if (this.state.username !== '' && this.state.password !== '') {
            // Match input Username and Password against stored Username & Password
            if (this.state.username === userCredentials.username && this.state.password === userCredentials.password) {
                this.setState({incorrectCredentialsHelperText: 'display-none', loginSuccess: true});
                sessionStorage.setItem("access-token", userCredentials.accessToken);
            } else {
                this.setState({incorrectCredentialsHelperText: 'display-block'});
            }
        }
    }

}

export default Login;