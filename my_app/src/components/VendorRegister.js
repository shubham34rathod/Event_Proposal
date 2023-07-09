import React, { useState } from 'react'
import '../css/vendorRegister.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,toast} from 'react-toastify'

function VendorRegister()
{
    const Navigate=useNavigate()
    const [userInfo,setUserInfo]=useState({
        name:'',
        email:'',
        contact:'',
        password:'',
        confirmPassword:''
    })
    const [passwordAlert,setPassAlert]=useState(true)
    const [passwordCheck,setPassword]=useState(true)
    const [fieldAlert,setFieldAlert]=useState(true)
    const [userAlert,setUserAlert]=useState(true)
    const [checkUser,setCheckUser]=useState(true)
    const [th1,setTh1]=useState(false)
    const [th2,setTh2]=useState(false)
    const Style1={
        borderLeft:'none',
        color:'#4E94F4'
    }
    const Style2={
        borderLeft:'none',
    }
    function clickTh1()
    {
        setTh1(true)
        setTh2(false)
    }
    function clickTh2()
    {
        setTh2(true)
        setTh1(false)        
    }
    function setUser(e,prop)
    {
        setUserInfo((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }
       function register()
    {
        if(th1===false && th2===false)
        {
            setUserAlert(false)
            setTimeout(()=>{
                setUserAlert(true)
            },3000)
        }
        else if(userInfo.name===""||userInfo.email===""||userInfo.contact===""||userInfo.password===""||userInfo.confirmPassword==="")
        {
             setFieldAlert(false)
             setTimeout(()=>{
                 setFieldAlert(true)
             },3000)
        }
        else if(userInfo.password.length<8)
        {
            setPassword(false)
        }
       else if(userInfo.password!==userInfo.confirmPassword)
       {
            // let pass1=document.getElementsByClassName('input02')[3]
            let pass2=document.getElementsByClassName('input02')[4]
            pass2.style.border='1px solid red'
            setPassAlert(false)
            setTimeout(()=>{
                setPassAlert(true)
            },3000)
       }
      
       else
       {
        if(th2===true)
        {
             console.log(userInfo);
             fetch('https://event-proposal-backend-5ouz.onrender.com/userReg',{
                 method:"POST",
                 headers:{
                 "content-type":"application/json"
                 },
                 body:JSON.stringify(userInfo)
             })
             .then((data)=>data.json())
             .then((responce)=>{
                 console.log(responce)
                 if(responce==="already registered")
                 {
                     setCheckUser(false)
                     setTimeout(()=>{
                        setCheckUser(true)
                     },4000)
                 }
                 if(responce==="registred successfully")
                 {
                    showToast()
                    setTimeout(()=>{
                        Navigate("/")
                    },4000)
                 }
             })
             .catch(()=>console.log("uploading error"))
 
             console.log(th2);
        }
        if(th1===true)
        {
             console.log(userInfo);
             fetch('https://event-proposal-backend-5ouz.onrender.com/vendorReg',{
                 method:"POST",
                 headers:{
                 "content-type":"application/json"
                 },
                 body:JSON.stringify(userInfo)
             })
             .then((data)=>data.json())
             .then((responce)=>{
                 console.log(responce)
                 if(responce==="already registered")
                 {
                     setCheckUser(false)
                     setTimeout(()=>{
                        setCheckUser(true)
                     },4000)
                 }
                 if(responce==="registred successfully")
                 {
                    showToast()
                    setTimeout(()=>{
                        Navigate("/")
                    },4000)
                 }
             })
             .catch(()=>console.log("uploading error"))
 
             console.log(th1);
        }
       }
    }

    
    //toast function

    function showToast()
    {
        toast.success('Registered successfully',{
            autoClose:3000,
            position:toast.POSITION.TOP_CENTER
        })
    }

    return <>
       <div className="body2">
          <div className="parent01">
               <h1 style={{color:'white',margin:'30px'}}>LOGO</h1>
               <div className="textBody1">
                  <h1 className='title1'>TEXT WILL <br/>BE DISPLAYED <br/>HERE</h1>
               </div>
          </div>
          <div className="parent02">
              <form className='form1'>
                 <div className="header1">
                    <table className='head1'>
                        <tr>
                            {/* <th className='th1' style={{borderLeft:'none'}}>Vendor</th> */}
                            <th className='th01' style={(th1)? Style1:Style2} onClick={()=>clickTh1()}>Vendor</th>
                            <th className='th01'style={(th2)? Style1:Style2} onClick={()=>clickTh2()}>User</th>
                        </tr>
                    </table>
                 </div>
                 <div className='formBox1'>
                    <p id="signinTxt1">Sign in your Account</p>
                    <input type="text" placeholder='Name' className="input02" name='name' onChange={(e)=>setUser(e,'name')} required/><br />
                    <input type="email" placeholder='Email'  className="input02" name='email' onChange={(e)=>setUser(e,'email')} required/>
                    {/* <input type="text" inputMode='numeric' pattern='[0-9]+' placeholder='Contact' maxLength='10' className="input02" name='contact' onChange={(e)=>setUser(e,'contact')} required/> */}
                    <input type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='xxx-xxx-xxxx' maxLength='10' className="input02" name='contact' onChange={(e)=>setUser(e,'contact')} required/>
                    <input type="password" placeholder='Password' minLength='8' className="input02" name='password' onChange={(e)=>setUser(e,'password')} required/>
                    {!passwordCheck && <p style={{fontSize:'12px',color:'red',marginLeft:'15px'}}>*password must contain minimum 8 charecters</p>}
                    <input type="password" placeholder='Confirm Password' className="input02" name='cnfPassword' onChange={(e)=>setUser(e,'confirmPassword')} required/>
                 </div>
                 <div className="buttons1">
                    <p id="createAc" onClick={()=>Navigate('/')}>Sign In</p>
                    <input className="btn btn-primary" id="registerBtn" type="button" value="REGISTER" onClick={register}></input>
                 </div>
              </form>
              {!passwordAlert && <p className='passAlert'>Password doen't match</p>}
              {!fieldAlert && <p className='passAlert'><b>All field's are required</b></p>}
              {!checkUser && <p className='passAlert'><b>Email already registered</b></p>}
              { !userAlert&& <p className='passAlert'><b>Select type of account</b></p>}
          </div>
       </div>
    </>
}

export default VendorRegister
