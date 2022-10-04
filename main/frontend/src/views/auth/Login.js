import React,{useState} from 'react';
import { AuthNavBar } from '../../components';
import PropTypes from 'prop-types';
import { useHistory,Redirect } from 'react-router-dom';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
function Login(props) {
const [email, setEmail] =useState('')
const [emailerror, setEmailerror]=useState(false)
const [emailerrortext, setEmailerrortext]=useState('')
const [password, setPassword] =useState('')
const [passworderror, setPassworderror]=useState(false)
const [passwordtext, setPassworderrortext] = useState('')
const handleChange =(e) =>{
if(e.target.name === 'email'){
setEmail(e.target.value)

}if(e.target.name === 'password'){
  setPassword(e.target.value)
  
  }}
function handleSubmit(e){
e.preventDefault()


if(email.trim() ==''){
setEmailerror(true)
setEmailerrortext('Email is required')


}else{
  setEmailerror(false)
  setEmailerrortext('')
}
if(password == ''){

setPassworderror(true)
setPassworderrortext('Password is required')




}else{
  if(password.length < 6){
    setPassworderror(true)
    setPassworderrortext('Password must be at least 6 characters')
    
    
    
    
    }else{
  setPassworderror(false)
  setPassworderrortext('')}}
}
 let history = useHistory();
 function handleRedirect(where) {
    history.push(where);
  }
        return (<>
        <div className="auth-col">
<AuthNavBar where='login' />
          
           <div className="auth-body">
            <div className="auth-form">
                <h2>Login  </h2>
                <form>
                <div class="form-floating mb-3">
  <input onChange={e=> handleChange(e)} valvue={email} name='email'type="email" class={emailerror==true ?'form-control is-invalid':'form-control'} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
{emailerror==true?<>
  <div id="validationServer03Feedback" class="invalid-feedback">
{emailerrortext}
    </div>
</>:null}
</div>
<div class="form-floating">
  <input onChange={e=> handleChange(e)} value={password}  type="password" name='password'class={passworderror==true ?'form-control is-invalid':'form-control'} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
  {passworderror==true?<>
  <div id="validationServer03Feedback" class="invalid-feedback">
{passwordtext}
    </div>
</>:null}
  <span className='for-pas'>
    <a href="/resetpassword"> forgot password?</a></span>
</div>  <div class="mb-3  ">
  
  <button onClick={handleSubmit} type="submit" class="btn btn-primary"> Login</button></div>
                    </form>
                 
                    
            </div>
            <div className="auth-form mt-3">  <a href="/register"> <span className="smaautt"  >New here? <span className="nex">Get Started</span></span></a></div>
         
           </div>
            </div>
        </>);
    }
 
  

export default Login