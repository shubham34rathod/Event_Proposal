import React, { useEffect, useState } from "react";
import Header from "./Header";
import '../css/vendorProposal.css'
import searchImg from '../image/search.jpg'
import filterImg from '../image/filter-icon-trendy-flat-style-260nw-674478223.webp'
import editImg from '../image/pencil-edit-button.jpg'
import deleteImg from '../image/bin.jpg'
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Cookie from 'js-cookie'
// import 'bootstrap/dist/css/bootstrap.css'

function VendorProposal()
{
    const navigate=useNavigate()

    //authentication 
    let a=Cookie.get('uid')
    // console.log(` a is ${a}`);
    if(!a)
    {
        navigate('/')
    }

    let token_id=useSelector((state)=>state.vendor_slice.token_id)
    let [newEventData,setEventData]=useState([])
    let [searchData,setSerarch]=useState('')
    //fetching created event data
   useEffect(()=>{
    fetch(`https://event-proposal-backend-5ouz.onrender.com/fetchingEventData/${token_id}`)
    .then((data)=>data.json())
    .then((res)=>{
    //   console.log(res)
      setEventData(res)
    })
    .catch(()=>console.log('fetching error'))
   },[newEventData])

   function deleteEvent(id)
   {
       console.log(id);
        fetch(`https://event-proposal-backend-5ouz.onrender.com/deleteEvent/${id}`)
        .then((data)=>data.json())
        .then((res)=>console.log(res))
        .catch(()=>console.log('backend error'))
   }

    
    return <>
       <div className="head">
          <Header></Header>
       </div>       
       <div className="container">
          <div className="subCon1">
               <div className="b1">
                   <span className="ProposalsTxt">Proposals</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span> <img src={searchImg} alt="search" /></span>
                   <form class="d-flex" role="search">
                       <input class="form-control me-2" type="search" placeholder="Search Project" onChange={(e)=>setSerarch(e.target.value)} aria-label="Search" id="projectSearch"/>
                   </form>
               </div>
               <div className="b2">
                    <span><img src={filterImg} alt="filter" className="filterImg" />
                      <div className="filterBox">
                        {/* <ul>
                            <li><input type="checkbox" /><label htmlFor="">Marriage</label></li>
                            <li><input type="checkbox" /><label htmlFor="">Birthday</label></li>
                            <li><input type="checkbox" /><label htmlFor="">Office paty</label></li>
                            <li><input type="checkbox" /><label htmlFor="">Office paty</label></li>
                            <li><input type="checkbox" /><label htmlFor="">Office paty</label></li>
                        </ul> */}
                      </div>
                    </span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span><input class="btn btn-primary" id="createBtn" type="button" value="CREATE" onClick={()=>navigate("/create_Proposal")}></input></span>
               </div>
          </div>
          {(newEventData.length!=0)? 
          newEventData.filter((d)=>d.eventName.toLowerCase().includes(searchData)).map((data)=><>
            <div className="subCon2">
                <div className="b3">
                    <h6>Event Name</h6>
                    <p className="description100">{data.eventName}</p>
                </div>
                <hr />
                <div className="b4">
                    <div className="b4_1">
                        <p className="smallHeading">Event Type</p>
                        <h6>{data.eventType}</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">Proposal Type</p>
                        <h6>{data.proposalType}</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">From Date</p>
                        <h6>{data.startDate}</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">To Date</p>
                        <h6>{data.endDate}</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">Budget</p>
                        <h6>{data.budget}</h6>
                    </div>
                    <div className="b4_1" id="b4_1">
                        <span><img src={editImg} alt="edit" className="edit" onClick={()=>navigate('/create_Proposal',{state:data})} /></span> 
                        <span onClick={()=>deleteEvent(data._id)}><img src={deleteImg} alt="delete" className="delete" /></span>
                    </div>
                </div>
          </div>
          </>):<><h3 style={{textAlign:'center',marginTop:'30px',color:'silver',letterSpacing:'2px'}}>No data present, please create new data</h3></>}
          {/* <div className="subCon2">
                <div className="b3">
                    <h6>Event Name</h6>
                    <p className="description100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti voluptatum vel incidunt provident, repellat necessitatibus harum odio et maiores.</p>
                </div>
                <hr />
                <div className="b4">
                    <div className="b4_1">
                        <p className="smallHeading">Event Type</p>
                        <h6>Marriage</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">Proposal Type</p>
                        <h6>Venue</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">From Date</p>
                        <h6>21-JAN-2019</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">To Date</p>
                        <h6>21-JAN-2019</h6>
                    </div>
                    <div className="b4_1">
                        <p className="smallHeading">Budget</p>
                        <h6>2000</h6>
                    </div>
                    <div className="b4_1" id="b4_1">
                        <span><img src={editImg} alt="edit" className="edit" /></span> 
                        <span><img src={deleteImg} alt="delete" className="delete" /></span>
                    </div>
                </div>
          </div> */}
       </div>
    </>
}
 
export default VendorProposal
