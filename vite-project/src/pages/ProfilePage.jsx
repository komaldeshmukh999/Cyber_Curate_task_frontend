import React from 'react'
import { useState,useEffect } from 'react'
import "../styles/profilepage.css"
import imglogo from "../../public/img.svg"
import { FaFacebook } from "react-icons/fa";
import { RiSkypeFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ProfilePage() {
    let[data,setData]=useState([])
    let[obj,setObj]=useState({})
   useEffect(()=>async () => {
   
    const res = await fetch('http://localhost:5000/api/staff')
    const data = await res.json();
    setData(data)
    console.log(data)
    let id=localStorage.getItem("id")
   console.log(id)
  setObj(data.find((obj)=>{
    return obj._id===id
  }))
     
   },[data])
  
 
  
    
  return (
   
    <div className="profile-page">

      <div className="left-div">
       <div className="profiile-details">
       <div className="image">
         <img src={obj.img} alt=""/>
       </div>

       <div className="name">
        <h3>{obj.firstName}</h3>
       </div>
       <div className="social-icons">
        <a href={obj.facebook}>
          <FaFacebook/>
        </a>
         <a href={obj.linkedin}>
          <FaLinkedin/>

         </a>
          <a href={obj.skype}>
            <RiSkypeFill/>

          </a>
          <a href={obj.email}>
            <IoMdMail/>
          </a>
       </div>
       </div>
       <div className="contact-details">
        <div>
          <p>{obj.email}</p>
        </div>
         <div>
          <p>{obj.phone}</p>
        </div>
         <div>
          <p>{obj.workplace}</p>
        </div>
         <div>
          <p>{obj.jobPosition}</p>
        </div>
       </div>
       <div className="manager-details">
        Direct manager:<img src={imglogo}/>
       </div>

      </div>
      <div className="right-div">
        <div className="general-information">
          <h2>General Information</h2>
        <table>
          <tbody>
            <tr>
              <td>Staff Code</td>
              <td>{obj.staffCode}</td>
            </tr>
             <tr>
              <td>Staff Name</td>
              <td>{obj.firstName}</td>
            </tr>
             <tr>
              <td>Gender</td>
              <td>{obj.gender}</td>
            </tr>
             <tr>
              <td>Birthday</td>
              <td>{obj.birthday}</td>
            </tr>
             <tr>
              <td>Phone</td>
              <td>{obj.phone}</td>
            </tr>
             <tr>
              <td>Workplace</td>
              <td>{obj.workplace}</td>
            </tr>
             <tr>
              <td>Status</td>
              <td>{obj.status}</td>
            </tr>
             <tr>
              <td>Job position</td>
              <td>{obj.jobPosition}</td>
            </tr>
             <tr>
              <td>Academic level</td>
              <td>{obj.academicLevel}</td>
            </tr>
             <tr>
              <td>Hourly Rate</td>
              <td>{obj.hourlyRate}</td>
            </tr>
             <tr>
              <td>Religion</td>
              <td>{obj.religion}</td>
            </tr>
             <tr>
              <td>Nation</td>
              <td>{obj.nation}</td>
            </tr>
             <tr>
              <td>Martial status</td>
              <td>{obj.martialStatus}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="related-information"> 
           <h3>Related Information</h3>
           <table>
            <tbody>
              <tr>
                <td>Citizen Identification</td>
                <td>{obj.citizenId}</td>
              </tr>
               <tr>
                <td>Date of issue</td>
                <td>{obj.dateOfIssue}</td>
              </tr>
               <tr>
                <td>Place of birth</td>
                <td>{obj.placeOfBirth}</td>
              </tr>
               <tr>
                <td>Current address</td>
                <td>{obj.currentAddress}</td>
              </tr>
               <tr>
                <td>Bank account number</td>
                <td>{obj.bankAccountNumber}</td>
              </tr>
               <tr>
                <td>Bank account name</td>
                <td>{obj.bankAccountName}</td>
              </tr>
               <tr>
                <td>Bank name</td>
                <td>{obj.bankName}</td>
              </tr>
               <tr>
                <td>Personal tax code</td>
                <td>{obj.taxCode}</td>
              </tr>
            </tbody>
           </table>
        </div>


      </div>
    </div>
  )
}
