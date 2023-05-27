import React, { useState } from 'react'
import '../css/vendorLogin.css'
import 'bootstrap/dist/css/bootstrap.css'

function VendorLogin()
{
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
    return <>
       <div className="body">
          <div className="parent1">
               <h1 style={{color:'white',margin:'30px'}}>LOGO</h1>
               <div className="textBody">
                  <h1 className='title'>TEXT WILL <br/>BE DISPLAYED <br/>HERE</h1>
               </div>
          </div>
          <div className="parent2">
              <form className='form'>
                 <div className="header">
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
                    <input type="text" placeholder='Phone / Email' className="input1"/><br />
                    <input type="password" placeholder='Password' className="input1"/>
                 </div>
                 <p id="passwordForgot">Forget Password?</p>
                 <div className="buttons">
                    <p id="createAc">Create Account</p>
                    <input class="btn btn-primary" id="signInBtn" type="button" value="SIGN IN"></input>
                 </div>
              </form>
          </div>
       </div>
    </>
}

export default VendorLogin