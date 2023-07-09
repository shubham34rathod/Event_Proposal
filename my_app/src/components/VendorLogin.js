import React, { useState } from 'react'
import '../css/vendorLogin.css'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {updateVendorDetail} from '../components/slice/vendorSlice'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,toast} from 'react-toastify'
import Cookie from 'js-cookie'
// import 'bootstrap/dist/css/bootstrap.css'

function VendorLogin()
{
    let valueOfState=useSelector((state)=>state.vendor_slice.name)
    let dispatch=useDispatch()
    const navigate=useNavigate()
    const [userLoginData,setUserLog]=useState({
        phoneOrEmial:'',
        password:''
    })
    const [th1,setTh1]=useState(false)
    const [th2,setTh2]=useState(false)
    const [userAlert,setAlert]=useState(true)
    const [checkUserReg,setUserReg]=useState(true)
    const [fieldAlert,setFieldAlert]=useState(true)
    const [passwordCheck,setCheckPass]=useState(true)
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
        setAlert(true)
    }
    function clickTh2()
    {
        setTh2(true)
        setTh1(false)   
        setAlert(true)
    }
    function enterData(e,prop)
    {
        setUserLog((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }
    function signIn()
    {
        if(th1===false && th2===false)
        {
            setAlert(false)
            setTimeout(()=>{
                setAlert(true)
            },3000)
        }
        else if(userLoginData.phoneOrEmial==="" || userLoginData.password==="")
        {
            setFieldAlert(false)
            setTimeout(()=>{
                setFieldAlert(true)
            },3000)
        }
        else
        {
            if(th2)
            {
            fetch('https://event-proposal-backend-5ouz.onrender.com/userLogin',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userLoginData),
            })
            .then((responce)=>responce.json())
            .then((data)=>{
                console.log(data)
                if(data[0]==="login success")
                {
                    Cookie.set('uid',data[1].token)
                    dispatch(updateVendorDetail(data[1]))
                    showToast()
                    setTimeout(()=>{
                        navigate("/events_list")
                    },5000)
                }
                if(data==="incorrect password")
                {
                    setCheckPass(false)
                    setTimeout(()=>{
                        setCheckPass(true)
                    },3000)
                }
                if(data==="user not registered")
                {
                    setUserReg(false)
                    setTimeout(()=>{
                        // navigate("/register")
                        setUserReg(true)
                    },3000)
                }
            })
            .catch(()=>console.log('fetching error'))
            console.log(userLoginData);
        }
        if(th1===true)
        {
            fetch('https://event-proposal-backend-5ouz.onrender.com/vendorLogin',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userLoginData),
            })
            .then((responce)=>responce.json())
            .then((data)=>{
                console.log(data)
                if(data[0]==="login success")
                {
                    showToast()
                    Cookie.set('uid',data[1].token)
                    dispatch(updateVendorDetail(data[1]))
                    setTimeout(()=>{
                        navigate("/proposal_list")
                    },5000)
                    console.log(data[1]);
                }
                if(data==="incorrect password")
                {
                    setCheckPass(false)
                    setTimeout(()=>{
                        setCheckPass(true)
                    },3000)
                }
                if(data==="user not registered")
                {
                    setUserReg(false)
                    setTimeout(()=>{
                        // navigate("/register")
                        setUserReg(true)
                    },5000)
                }
            })
            .catch(()=>console.log('fetching error'))
            console.log(userLoginData);
        }
        }
    }

    //toast function

    function showToast()
    {
        toast.success('Login successfully',{
            autoClose:3000,
            position:toast.POSITION.TOP_CENTER
        })
    }
    return <>
    <ToastContainer toastStyle={{color:'green'}}></ToastContainer>
       <div className="body">
          <div className="parent1">
               <h1 style={{color:'white',margin:'30px'}}>LOGO</h1>
               <div className="textBody">
                  <h1 className='title'>TEXT WILL <br/>BE DISPLAYED <br/>HERE</h1>
               </div>
          </div>
          <div className="parent2">
              <form className='form'>
                 <div className="Formheader">
                    <table className='head'>
                        <tr>
                            {/* <th className='th1' style={{borderLeft:'none'}}>Vendor</th> */}
                            <th className='th1' style={(th1)? Style1:Style2} onClick={()=>clickTh1()}>Vendor</th>
                            <th className='th1'style={(th2)? Style1:Style2} onClick={()=>clickTh2()}>User</th>
                        </tr>
                    </table>
                 </div>
                 <div className='formBox'>
                    <p id="signinTxt">Sign in your Account</p>
                    <input type="text" placeholder='Phone / Email' className="input1" onChange={(e)=>enterData(e,'phoneOrEmial')}/><br />
                    <input type="password" placeholder='Password' className="input1" onChange={(e)=>enterData(e,'password')}/>
                 </div>
                 <p id="passwordForgot"><a href="/forgotPassword">Forget Password?</a></p>
                 <div className="buttons">
                    <p id="createAc" onClick={()=>navigate('/register')}>Create Account</p>
                    <input class="btn btn-primary" id="signInBtn" type="button" value="SIGN IN" onClick={signIn}></input>
                 </div>
                 {(!userAlert) && <p className="userAlert"><b>Please select type of user</b></p>}
                 {(!checkUserReg) && <p className="userAlert"><b>User is not registered </b></p>}
                 {(!fieldAlert) && <p className="userAlert"><b>Please enter all the fields</b></p>}
                 {(!passwordCheck) && <p className="passwordAlert"><b>Incorrect password</b></p>}
              </form>
          </div>
       </div>
    </>
}

export default VendorLogin
