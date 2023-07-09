import React, { useEffect, useState } from "react";
import partyImg from '../image/private-party-venues.jpg'
import close from '../image/close.jpg'
import goBack from '../image/goBack.png'
import '../css/vendorCreateProp.css'
import Header from "./Header";
import {useSelector,useDispatch} from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'

function VendorCreatePro()
{
  let navigate=useNavigate()

    //authentication 
    let a=Cookie.get('uid')
    // console.log(` a is ${a}`);
    if(!a)
    {
        navigate('/')
    }
    
    // window.location.reload()
    let location=useLocation()
    
    let token_id=useSelector((state)=>state.vendor_slice.token_id)
    let vendor_name=useSelector((state)=>state.vendor_slice.name)
    let vendor_email=useSelector((state)=>state.vendor_slice.email)
    let [editEventData,setEditEvent]=useState(false)
    let [popUp,setPopup]=useState(true)
    let [imgBoxClass,setImgBoxClass]=useState('samples2')
    let [imgClassName,setClassName]=useState('partyImg')
    let [venueData,setVenueData]=useState({
         eventName:'',
         placeOfEvent:'',
         proposalType:'',
         eventType:'',
         budget:'',
         startDate:'',
         endDate:'',
         description:'',
         food:'',
         Events:'',
         image:[],
    })

    //edit the existing event data

    useEffect(()=>{
      // console.log(location.state);
      // console.log(location.state!=null);
      if(location.state!=null)
      {
        setEditEvent(true)
        // setVenueData({
          venueData.eventName=location.state.eventName;
          venueData.placeOfEvent=location.state.placeOfEvent;
          venueData.proposalType=location.state.proposalType;
          venueData.eventType=location.state.eventType;
          venueData.budget=location.state.budget;
          venueData.startDate=location.state.startDate;
          venueData.endDate=location.state.endDate;
          venueData.description=location.state.description;
          venueData.food=location.state.food;
          venueData.Events=location.state.Events;
          venueData.image=location.state.image;
        // })
        console.log(venueData);
        // console.log(location.state._id);
      }
    },[location])


    let [IMG,setIMG]=useState([])
    let [imageData,setImgData]=useState([])
    let [createdEvent,setCreatedEvent]=useState([])

    //receving event data from backend
    useEffect(()=>{
      fetch(`https://event-proposal-backend-5ouz.onrender.com/${token_id}`)
      // fetch(`http://localhost:1000/fetchingEventData`)
      .then((data)=>data.json())
      .then((res)=>{
        // console.log(res)
        setCreatedEvent(res);
      })
      .catch(()=>console.log('fetching error'))
    },[createdEvent])

    function saveData(e,prop)
    {
        setVenueData((data)=>({
          ...data,
          [prop]:e.target.value
        }))
    }

    function img(e)
    {
      // console.log(e.target.files[0]);
      // venueData.image.push(e.target.files[0])
        let file=e.target.files[0]
        let data=new FormData()
        data.append('file',file)
        data.append('upload_preset','event_project')
        fetch('https://event-proposal-backend-5ouz.onrender.com/image/upload',{
          method:'POST',
          body:data
        })
        .then((data)=>data.json())
        .then((res)=>{
          // console.log(res)
          venueData.image.push(res.secure_url)
          setIMG((data)=>([
            ...data,
            res.secure_url
          ]))
        })
        .catch(()=>console.log('cloud error'))
    }

    function closePopup()
    {
      // window.location.reload()
      if(popUp===true)
      {
          setPopup(false)
          setImgBoxClass('samples')
          setClassName('partyImg2')
      }
      if(popUp===false)
      {
          setPopup(true)
          setImgBoxClass('samples2')
          setClassName('partyImg')
      }
    }

    function submit()
    {
        // console.log(venueData);
        if(editEventData)
        {
          console.log(location.state._id);
          fetch(`https://event-proposal-backend-5ouz.onrender.com/${location.state._id}`,{
            method:'PATCH',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(venueData)
          })
          .then((data)=>data.json())
          .then((res)=>{
            console.log(res)
          })
          .catch(()=>console.log('fetching error (event update)'))

          setVenueData({
            eventName:'',
            placeOfEvent:'',
            proposalType:'',
            eventType:'',
            budget:'',
            startDate:'',
            endDate:'',
            description:'',
            food:'',
            Events:'',
            image:[],
          })
        }
        else
        {
          fetch(`https://event-proposal-backend-5ouz.onrender.com/${token_id}/${vendor_name}/${vendor_email}`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(venueData)
          })
          .then((data)=>data.json())
          .then((res)=>{
            console.log(res)
          })
          .catch(()=>console.log('fetching error (create event)'))
          // console.log(IMG);
          setVenueData({
            eventName:'',
            placeOfEvent:'',
            proposalType:'',
            eventType:'',
            budget:'',
            startDate:'',
            endDate:'',
            description:'',
            food:'',
            Events:'',
            image:[],
          })
          setIMG([])
        }
    }
    return <>
    {/* <Header></Header> */}
       <div className={imgClassName}>
         <Header></Header> 
         <img src={partyImg} alt="photo"  className="samplePartyImg"/>
       </div>
       {/* <div className="goBack"><img src={goBack} alt="go_back" /></div> */}
       <div className={imgBoxClass}>
           {createdEvent.map((data,index)=><>
                <div className="createdData">
                   <div className="createdEvent"><img src={data.image[0]} alt="img" /></div>
                   <h4 className="eventLocation">{data.placeOfEvent}</h4>
                </div>
           </>)}
           {/* <div className="createdData">
               <div className="createdEvent"><img src="" alt="" /></div>
               <h4 className="eventLocation">Location</h4>
           </div> */}
           <div id="create"><button type="button" class="btn btn-danger" onClick={closePopup}>Create New +</button></div>
       </div>
       {popUp && 
       <>
        <div className="popUpParent">
        <div className="popBox">
            <div className="creatProposal">
               {/* <h4>Create Praposal</h4> */}
               <img src={close} alt="close" className="closeImg" onClick={closePopup}/>
               <h4>Create Praposal</h4>
               <hr className="hr1"/>
            </div>
            <div className="parentPop">
                <div className="popChild1">
                  <div className="nameBox">
                    <label htmlFor="name" className="labelEventname" >Event Name</label><br />
                    <input type="text" placeholder="name" value={venueData.eventName} onChange={(e)=>saveData(e,'eventName')} style={{padding:'10px'}}/>
                  </div>
                  <div className="popBody">
                    <div className="popSubChuld1">
                      <div className="bodyBox">
                        <label htmlFor="place" className="label">Place of Event</label><br />
                        <select name="place" id="place" value={venueData.placeOfEvent} onChange={(e)=>saveData(e,'placeOfEvent')}>
                          <option>Select</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Assam">Assam</option>
                        </select>
                      </div>
                      <div className="bodyBox">
                        <label htmlFor="type" className="label">Event Type</label><br />
                        <select name="type" id="type" value={venueData.eventType} onChange={(e)=>saveData(e,'eventType')}>
                          <option>Select</option>
                          <option value="marriage">Marriage</option>
                          <option value="birthday">Birthday</option>
                          <option value="office party">Office Party</option>
                        </select>
                      </div>
                      <div className="bodyBox">
                        <label htmlFor="fromDate" className="label">From</label><br />
                        <input type="date" id="fromDate" value={venueData.startDate} onChange={(e)=>saveData(e,'startDate')}/>
                      </div>
                    </div>
                    <div className="popSubChuld2">
                      <div className="bodyBox">
                        <label htmlFor="type2" className="label">Proposal Type</label><br />
                        <select name="type2" id="type2" value={venueData.proposalType} onChange={(e)=>saveData(e,'proposalType')}>
                          <option>Select</option>
                          <option value="marriage">Marriage</option>
                          <option value="birthday">Birthday</option>
                          <option value="office party">Office Party</option>
                        </select>
                      </div>
                      <div className="bodyBox">
                        <label htmlFor="budget" className="label">Budget</label><br />
                        <input type="number" placeholder="0000" value={venueData.budget} onChange={(e)=>saveData(e,'budget')}/>
                        {/* <select name="type2" id="type2" onChange={(e)=>saveData(e,'budget')}>
                          <option>Select</option>
                          <option value="10000">&lt;10,000</option>
                          <option value="30000">&lt;30,000</option>
                          <option value="50000">&lt;50,000</option>
                          <option value="80000">&lt;80,000</option>
                          <option value="100000">&gt;1,00,000</option>
                        </select> */}
                      </div>
                      <div className="bodyBox">
                        <label htmlFor="toDate" className="label">TO</label><br />
                        <input type="date" name="toDate" id="toDate" placeholder="DD MM YYY" value={venueData.endDate} onChange={(e)=>saveData(e,'endDate')}/>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    <label htmlFor="description" >Description</label><br />
                    <textarea name="description" id="description" cols="46" rows="4" placeholder="description" value={venueData.description} onChange={(e)=>saveData(e,'description')}></textarea>
                  </div>
                </div>
                <div className="popChild2">
                  <div className="imgBox1">
                    <p style={{fontSize: 'normal normal normal 16px/22px Open Sans'}}>Images</p>
                    {/* <span className="addButton"><button></button></span> */}
                    <span className="addButton"><input type="file" onChange={(e)=>img(e)}/></span>

                  </div>
                  <div id="imgBox2">
                    {/* {IMG.map((data)=><>
                      <div className="subImgBox2"><img src={data} style={{width:"100%",height:"100%"}} /></div>
                    </>)} */}
                    {(editEventData)? <>{venueData.image.map((data)=><>
                      <div className="subImgBox2"><img src={data} style={{width:"100%",height:"100%"}} /></div>
                    </>)}</> : <>{IMG.map((data)=><>
                      <div className="subImgBox2"><img src={data} style={{width:"100%",height:"100%"}} /></div>
                    </>)}</>}
                    {/* <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div>
                    <div className="subImgBox2"></div> */}
                  </div>
                  <p className="foodPref">Food Preferences</p><br />
                  <textarea name="preferences" id="foodPreferences" cols="52" rows="3" value={venueData.food} onChange={(e)=>saveData(e,'food')} placeholder="Veg/Non-Veg/Both"></textarea>
                  <p className="foodPref">Events</p><br />
                  <textarea name="preferences" id="foodPreferences" cols="52" value={venueData.Events} onChange={(e)=>saveData(e,'Events')} rows="3" ></textarea>
                </div>
            </div>
            <button type="button" class="btn btn-primary" id="praposalAddBtn" onClick={submit}>Submit</button>
            {/* <hr style={{marginTop:'35px'}}/> */}
        </div>          
     </div>
     </>
    }
    </>
}

export default VendorCreatePro


