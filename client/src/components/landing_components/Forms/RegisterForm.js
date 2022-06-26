import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Title from '../Title';
import ErrorText from '../ErrorText';


const RegisterForm = ({formData, errorStatus, errorMessage, onSubmitForm, setIsLogIn, onChangeForm}) => {

    return ( 
    <>
        <Title> Register </Title>
        <form className='form' onSubmit={(e)=>onSubmitForm(e, true)}>
            <Input name='username' type='text' placeholder='username' value={formData.username} onChange={onChangeForm}/>
            <Input name='password' type='password' placeholder='password' value={formData.password} onChange={onChangeForm}/>
            <Input name='password_confirmation' type='password' placeholder='repeat password' value={formData.password_confirmation} onChange={onChangeForm}/>
            {errorStatus? errorMessage.map((error, index) => <ErrorText key={index}>{error}</ErrorText>) : null}
            <Button>Submit</Button>
        </form>
        <Button onClick={()=>setIsLogIn(prev=> !prev)}>Back</Button>
    </>
    );
}
 
export default RegisterForm;