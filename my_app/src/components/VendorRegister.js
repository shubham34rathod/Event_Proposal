import React, { useState } from 'react'
import '../css/vendorRegister.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'

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
    const [fieldAlert,setFieldAlert]=useState(true)
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
       if(userInfo.password!==userInfo.confirmPassword)
       {
            setPassAlert(false)
            setTimeout(()=>{
                setPassAlert(true)
            },3000)
       }
       if(userInfo.name===""||userInfo.email===""||userInfo.contact===""||userInfo.password===""||userInfo.confirmPassword==="")
       {
            setFieldAlert(false)
            setTimeout(()=>{
                setFieldAlert(true)
            },3000)
       }
       else
       {
        if(th2===true)
        {
             console.log(userInfo);
             fetch('http://localhost:1000/userReg',{
                 method:"POST",
                 headers:{
                 "content-type":"application/json"
                 },
                 body:JSON.stringify(userInfo)
             })
             .then((data)=>data.json())
             .then((responce)=>{
                 console.log(responce)
                 if(responce==="registred successfully")
                 {
                     Navigate("/")
                 }
             })
             .catch(()=>console.log("uploading error"))
 
             console.log(th2);
        }
        if(th1===true)
        {
             console.log(userInfo);
             fetch('http://localhost:1000/vendorReg',{
                 method:"POST",
                 headers:{
                 "content-type":"application/json"
                 },
                 body:JSON.stringify(userInfo)
             })
             .then((data)=>data.json())
             .then((responce)=>{
                 console.log(responce)
                 if(responce==="registred successfully")
                 {
                     Navigate("/")
                 }
             })
             .catch(()=>console.log("uploading error"))
 
             console.log(th1);
        }
       }
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
                    <input type="text" placeholder='Name' className="input02" name='name' onChange={(e)=>setUser(e,'name')}/><br />
                    <input type="email" placeholder='Email' className="input02" name='email' onChange={(e)=>setUser(e,'email')}/>
                    <input type="number" placeholder='Contact' className="input02" name='contact' onChange={(e)=>setUser(e,'contact')}/>
                    <input type="password" placeholder='Password' className="input02" name='password' onChange={(e)=>setUser(e,'password')}/>
                    <input type="password" placeholder='Confirm Password' className="input02" name='cnfPassword' onChange={(e)=>setUser(e,'confirmPassword')}/>
                 </div>
                 <div className="buttons1">
                    <p id="createAc" onClick={()=>Navigate('/')}>Sign In</p>
                    <input className="btn btn-primary" id="registerBtn" type="button" value="REGISTER" onClick={register}></input>
                 </div>
              </form>
              {!passwordAlert && <p className='passAlert'>Password doen't match</p>}
              {!fieldAlert && <p className='passAlert'>All field's are required</p>}
          </div>
       </div>
    </>
}

export default VendorRegister