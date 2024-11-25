import './loginForm.css'
import MyInput from '../myInput/MyInput'
import MyButton from '../myButton/MyButton'

function LoginForm (){
    return(
        <div>
            <form className='form-container'>
            
            <MyInput name='login' type='text' placeholder = 'Enter your login' label='login:'/>
            <MyInput name='e-mail' type='email' placeholder='Enter your e-mail' label='E-mail:'/>
            <MyInput name='password' type='password' placeholder='Enter your password' label='Password:'/>

            <MyButton type={'submit'} text='Login'/>
            </form>
        </div>
    )
}

export default LoginForm