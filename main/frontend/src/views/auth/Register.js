import React,{useState} from 'react';
import { AuthNavBar } from '../../components';
 
import { useHistory,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
 
    function Register(props) {
    const [loader,setLoader]=useState(false);
      const handleChange =(e) =>{
        if(e.target.name === 'email'){
        setEmail(e.target.value)
        
        }
        if(e.target.name === 'password'){
          setPassword(e.target.value)
          
          }
       
        if(e.target.name === 'firstname'){
        setFirstname(e.target.value)
        }
        if(e.target.name === 'lastname'){
        setLastname(e.target.value)
        } }
        function handleRegister(e){
       
        e.preventDefault()
        const arr =[]
        if(email ==''){
        setEmailerror(true)
        setEmailerrortext('Email is required')
        arr.push('error')
        
        
        }else{
        setEmailerror(false)
        setEmailerrortext('s')
        }
        if(password == ''){
        setPassworderror(true)
        setPassworderrortext('Password is required')
        arr.push('error')
        
        
        
        }
        else{
          setPassworderror(false)
          setPassworderrortext('')
          
          }
        if(firstname == ''){
          setFirstnamerror(true)
          arr.push('error')
          setFirstnamerrortext('Fistname is required')
          arr.push('error')
          
          
          
          }else{
          setFirstnamerror(false)
          setFirstnamerrortext('')
          }
          if(lastname == ''){
            setLastnamerror(true)
            setLastnamerrortext('Lastname is required')
            arr.push('error')
            
            
            
            }else{
            setLastnamerror(false)
            setLastnamerrortext('')
            }
          
        if(password.length < 6){
          setPassworderror(true)
          setPassworderrortext('Password must be at least 6 characters')
          arr.push('error')
          
          
          
          }else{
          setPassworderror(false)
          setPassworderrortext('')
          
          }
          if(arr.length == 0){
        
        setLoader(true)
        
            }
        }
        
     
        const [firstname,setFirstname] =useState('');
        const [firstnamerror,setFirstnamerror] =useState(false);
        const [firstnamerrortext,setFirstnamerrortext] =useState('')
        const [lastname,setLastname]=useState('');
        const [lastnamerror,setLastnamerror] =useState(false)
        const [lastnamerrortext,setLastnamerrortext] =useState('')
        const [email,setEmail]=useState('');
        const [emailerror,setEmailerror]=useState(false);
        const [emailerrortext,setEmailerrortext]=useState('')
        const [password,setPassword] =useState('');
        const [passworderror,setPassworderror]=useState(false);
        const [passworderrortext,setPassworderrortext]=useState('');
        
               return (<>
               <div className="auth-col">
       <AuthNavBar where='register'/>
                 
                  <div className="auth-body">
                   <div className="auth-form">
                       <h2>Register  </h2>
                       <form onSubmit={handleRegister} >    
                       <div class="form-floating mb-3">
         <input onChange={e => handleChange(e)}value={firstname}type="text"name='firstname'  class={firstnamerror==true ?'form-control is-invalid':'form-control'} id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">First Name</label>
         {firstnamerror==true?<>
  <div id="validationServer03Feedback" class="invalid-feedback">
{firstnamerrortext}  </div>
</>:null}
       </div>         <div class="form-floating mb-3">
         <input onChange={e => handleChange(e)}value={lastname}type="text" name='lastname'  class={lastnamerror==true ?'form-control is-invalid':'form-control'} id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">Last Name</label>
         {lastnamerror==true?<>
  <div id="validationServer03Feedbeack" class="invalid-feedback">
{lastnamerrortext}  </div>
</>:null}
       </div>
                        
                       <div class="form-floating mb-3">
         <input value={email} onChange={e => handleChange(e)}type="email"  name='email'class={emailerror==true ?'form-control is-invalid':'form-control'} id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">Email address</label>
         {emailerror==true?<>
  <div id="validationServer03Feedback" class="invalid-feedback">
{emailerrortext}  </div>
</>:null}
       </div>
       <div class="form-floating">
         <input value={password} onChange={e => handleChange(e)}type="password" name='password' class={passworderror==true ?'form-control is-invalid':'form-control'} id="floatingPassword" placeholder="Password"/>
         <label for="floatingPassword">Password</label>
         {passworderror==true?<>
  <div id="validationServer03Feedback" class="invalid-feedback">
{passworderrortext}  </div>
</>:null}
        
       </div>  <div class="mb-3  mt-3">
         
  <button disabled={loader} onClick={handleRegister}type="submit" class="btn btn-primary"><div className={loader==true?'loader':'hidediv'}><i class='bx bx-loader-circle' ></i></div>{loader==false && 'SignUp'}</button></div>
                    </form>
                 
                    
            </div>
            <div className="auth-form mt-3">  <a href="/login"> <span className="smaautt"  >Already have an account? <span className="nex">Login</span></span></a></div>
                
                  </div>
                   </div>
               </>);
           }
        
        
       
       export default Register;