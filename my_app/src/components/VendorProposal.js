import React from "react";
import Header from "./Header";
import '../css/vendorProposal.css'
import searchImg from '../image/search.jpg'
import filterImg from '../image/filter-icon-trendy-flat-style-260nw-674478223.webp'
import editImg from '../image/pencil-edit-button.jpg'
import deleteImg from '../image/bin.jpg'
// import 'bootstrap/dist/css/bootstrap.css'

function VendorProposal()
{
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
                       <input class="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" id="projectSearch"/>
                   </form>
               </div>
               <div className="b2">
                    <span><img src={filterImg} alt="filter" className="filterImg" /></span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span><input class="btn btn-primary" id="createBtn" type="button" value="CREATE"></input></span>
               </div>
          </div>
          <div className="subCon2">
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
          </div>
       </div>
    </>
}
 
export default VendorProposal