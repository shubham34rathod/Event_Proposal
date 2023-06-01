import React, { useState } from 'react'
import '../css/vendorRegister.css'
import 'bootstrap/dist/css/bootstrap.css'

function UserRegister()
{
    const Style1={
        borderLeft:'none',
        color:'#4E94F4'
    }
    const Style2={
        borderLeft:'none',
    }
    function clickTh1()
    {
        
    }
    function clickTh2()
    {
                
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
                            <th className='th01' style={Style1} onClick={()=>clickTh1()}>Vendor</th>
                            <th className='th01'style={Style2} onClick={()=>clickTh2()}>User</th>
                        </tr>
                    </table>
                 </div>
                 <div className='formBox1'>
                    <p id="signinTxt1">Sign in your Account</p>
                    <input type="text" placeholder='Name' className="input02"/><br />
                    <input type="password" placeholder='Email' className="input02"/>
                    <input type="number" placeholder='Contact' className="input02" />
                    <input type="password" placeholder='Password' className="input02"/>
                    <input type="password" placeholder='Confirm Password' className="input02"/>
                 </div>
                 <div className="buttons1">
                    <p id="createAc">Sign In</p>
                    <input class="btn btn-primary" id="registerBtn" type="button" value="REGISTER"></input>
                 </div>
              </form>
          </div>
       </div>
    </>
}

export default UserRegister