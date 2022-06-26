import React, {useState, useEffect} from 'react';
import Container from './landing_components/Container';
import SubContainer from './landing_components/SubContainer';


import RegisterForm from './landing_components/Forms/RegisterForm';
import LoginForm from './landing_components/Forms/LogInForm';

import { postLoginResponse, postCreateNewUser, autoLogin } from '../fetchs/fetchs';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserInfo } from './stores/user';

const formInitialState = {
    username: '',
    password: '',
    password_confirmation: ''
}

const Landing = () => {


    const [isLogIn, setIsLogIn] = useState(true)
    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState(formInitialState)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setErrorStatus(false)
        setFormData({...formInitialState})

        const checkIfUserLoggedIn = async() => {
            let response = await autoLogin()
            if(response.ok){
                response.json().then(response => {
                    dispatch(setUserInfo(response))
                    navigate('game')
                })
            }
        }

        checkIfUserLoggedIn()
    }, [isLogIn, dispatch, navigate])

    const onChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        if(errorStatus){
            setErrorStatus(()=>false)
        } 
        setFormData({...formData,[name]: value })
    }

    const onLogin = async() => {
        let response  = await postLoginResponse({username: formData.username, password: formData.password})
        if(response.ok){
            response.json().then(response => {
                dispatch(setUserInfo(response))
                navigate('game')
            })
        }else{
            response.json().then(response => {
                setErrorStatus(()=>true)
                setErrorMessage(response.error)
            })
        }
    }

    const onRegister = async() => {
        let response = await postCreateNewUser(formData) 
        if(response.ok){
            response.json().then(res => {
                dispatch(setUserInfo(res))
                navigate('game')
            })  
        }else{
            response.json().then(response => {
                setErrorStatus(()=>true)
                setErrorMessage(response.error)
            })
            
        }
        
    }

    const onSubmitForm = (e, isRegister) => {
        e.preventDefault()
        if(isRegister){
            onRegister()
        }else{
            onLogin()
        }
        
    }

    return ( 
        <Container>
            <SubContainer>

                {isLogIn? 
                <LoginForm formData={formData} errorStatus={errorStatus} errorMessage={errorMessage} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} setIsLogIn={setIsLogIn}/> : 
                <RegisterForm formData={formData} errorStatus={errorStatus} errorMessage={errorMessage} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} setIsLogIn={setIsLogIn}/>}

            </SubContainer>
        </Container>
     );
}
 
export default Landing;