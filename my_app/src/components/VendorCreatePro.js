import React from "react";
import partyImg from '../image/private-party-venues.jpg'
import close from '../image/close.jpg'
import '../css/vendorCreateProp.css'

function VendorCreatePro()
{
    return <>
       <div className="partyImg">
         <img src={partyImg} alt="photo"  className="samplePartyImg"/>
       </div>
       <div className="samples">
           
       </div>
       <div className="popUpParent">
          <div className="popBox">
              <div className="creatProposal">
                 {/* <h4>Create Praposal</h4> */}
                 <img src={close} alt="close" className="closeImg" />
                 <h4>Create Praposal</h4>
                 <hr className="hr1"/>
              </div>
              <div className="parentPop">
                  <div className="popChild1">
                    <div className="nameBox">
                      <label htmlFor="name" className="labelEventname">Event Name</label><br />
                      <input type="text" placeholder="name" style={{padding:'10px'}}/>
                    </div>
                    <div className="popBody">
                      <div className="popSubChuld1">
                        <div className="bodyBox">
                          <label htmlFor="place" className="label">Place of Event</label><br />
                          <select name="place" id="place">
                            <option>Select</option>
                            <option value="maharashtra">MaharashtraDelhi</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="andhra pradesh">Andhra Pradesh</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="assam">Assam</option>
                          </select>
                        </div>
                        <div className="bodyBox">
                          <label htmlFor="type" className="label">Event Type</label><br />
                          <select name="type" id="type">
                            <option>Select</option>
                            <option value="marriage">Marriage</option>
                            <option value="birthday">Birthday</option>
                            <option value="office party">Office Party</option>
                          </select>
                        </div>
                        <div className="bodyBox">
                          <label htmlFor="fromDate" className="label">From</label><br />
                          <input type="date" id="fromDate" />
                        </div>
                      </div>
                      <div className="popSubChuld2">
                        <div className="bodyBox">
                          <label htmlFor="type2" className="label">Proposal Type</label><br />
                          <select name="type2" id="type2">
                            <option>Select</option>
                            <option value="marriage">Marriage</option>
                            <option value="birthday">Birthday</option>
                            <option value="office party">Office Party</option>
                          </select>
                        </div>
                        <div className="bodyBox">
                          <label htmlFor="budget" className="label">Budget</label><br />
                          <input type="number" placeholder="0000" />
                        </div>
                        <div className="bodyBox">
                          <label htmlFor="toDate" className="label">TO</label><br />
                          <input type="date" name="toDate" id="toDate" placeholder="DD MM YYY"/>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <label htmlFor="description" >Description</label><br />
                      <textarea name="description" id="description" cols="46" rows="4" placeholder="description"></textarea>
                    </div>
                  </div>
                  <div className="popChild2">
                    <div className="imgBox1">
                      <p style={{fontSize: 'normal normal normal 16px/22px Open Sans'}}>Images</p>
                      <span className="addButton"><button>Add</button></span>
                    </div>
                    <div id="imgBox2">
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                      <div className="subImgBox2"></div>
                    </div>
                    <p className="foodPref">Food Preferences</p><br />
                    <textarea name="preferences" id="foodPreferences" cols="52" rows="3" ></textarea>
                    <p className="foodPref">Events</p><br />
                    <textarea name="preferences" id="foodPreferences" cols="52" rows="3" ></textarea>
                  </div>
              </div>
              <button type="button" class="btn btn-primary" id="praposalAddBtn">Primary</button>
              {/* <hr style={{marginTop:'35px'}}/> */}
          </div>          
       </div>
    </>
}

export default VendorCreatePro