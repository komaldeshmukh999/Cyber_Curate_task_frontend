import React from 'react';
import {useRef,useState} from 'react';
import "../styles/profileForm.css"
import imglogo from "../../public/img.svg"
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
export default function ProfileForm({ formData, onChange }) {
let[image,setImage]=useState("")
let[imageUrl,setImageUrl]=useState("")
 let inputRef=useRef()

 const handleImageClick=()=>{
   inputRef.current.click()
 }
 const handleImageChange = async (event) => {
  const file = event.target.files[0];
  setImage(file);

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "cybercurate_project"); // from your Cloudinary settings
  data.append("cloud_name", "dkmgs9ifo");

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/dkmgs9ifo/image/upload", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    console.log("Cloudinary URL: ", json.url); // real image URL
    setImageUrl(json.url); // Save to state to store in MongoDB later
    onChange('img',json.url)
    console.log(imageUrl)
  } catch (err) {
    console.error("Error uploading image:", err);
  }
};



  return (
    <div className="profileform">
       <div>
        <div>
             <div className="email-auth">
            <input type="checkbox" checked={formData.twoFactorEnabled || false} onChange={(e) => onChange('twoFactorEnabled', e.target.checked)}  />
        <label className="icon-label"> <HiQuestionMarkCircle/>Enabled email two factor authentication </label>
        </div>
         <div className="img" onClick={handleImageClick}>
       {imageUrl?<img src={imageUrl} alt=""/>:<img src={imglogo} alt="imgLogo" />} 
       
       <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>
     
    </div>
        </div>
        
       

       <label><span className="required">*</span>Staff Code</label>
      <input  type="number" className="input-full-width" value={formData.staffCode || ''} onChange={(e) => onChange('staffCode', e.target.value)}  required/>
      <div className="form-row">
        <div className="form-field">
            <label><span className="required">*</span>First Name</label>
             <input  value={formData.firstName || ''} onChange={(e) => onChange('firstName', e.target.value)}  required />
        </div>
       <div className="form-field">
        <label><span className="required">*</span>LastName</label>
        <input  className="form-field" value={formData.lastName || ''} onChange={(e) => onChange('lastName', e.target.value)} required/>
       </div>
        
      </div>
      <div className="form-row">
        <div className="form-field">
            <label>Gender</label>
            <select value={formData.gender || ''} onChange={(e) => onChange('gender', e.target.value)}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
        </div>
        <div className="form-field">
            <label>Birthdate</label>
            <input type="date"  value={formData.birthday || ''} onChange={(e) => onChange('birthday', e.target.value)} />
        </div>
      </div>

      
<div className="form-row">
    <div className="form-field">
    <label><span className="required">*</span>Email</label>
     <input type="email" value={formData.email || ''} onChange={(e) => onChange('email', e.target.value)} required/>
</div>
<div className="form-field">
    <lable>Phone</lable>
     <input  value={formData.phone || ''} onChange={(e) => onChange('phone', e.target.value)} />
</div>
</div>


   
      
     
    
      
      <div className='form-row'>
         <div className='form-field'>
        <label>Workplace</label>
        <select value={formData.workplace || ''} onChange={(e) => onChange('workplace', e.target.value)}>
        <option value=" ">None Selected</option>
        <option>Indore</option>
        <option>Ujjain</option>
        <option>Dewas</option>
      </select>
      </div>
      <div className="form-field">
        <label><span className="required">*</span>Status</label>
        <select value={formData.status || ''} onChange={(e) => onChange('status', e.target.value)} required>
        <option>Working</option>
        <option>On Leave</option>
        <option>Terminated</option>
      </select>
      </div>
      </div>
     

      <div className="form-row">
        <div className='form-field'>
        <label><span className="required">*</span>Job Position</label>
          <select value={formData.jobPosition || ''} onChange={(e) => onChange('jobPosition', e.target.value)}  required>
        <option value="">None Selected </option>
        <option>Software Engineer</option>
        <option>Tester</option>
        <option>Hr</option>
      </select>
      </div>
      <div className="form-field">
        <label>Direct Manager</label>
        <select value={formData.directManager || ''} onChange={(e) => onChange('directManager', e.target.value)}>
        <option value="">None selected</option>
        <option>ABC</option>
        <option>XYZ</option>
        <option>ZXY</option>
        </select>
    </div>




      </div>
       <label>Role</label>
        <select className="input-full-width" value={formData.role || ''} onChange={(e) => onChange('role', e.target.value)}>
        <option>Admin</option>
        <option>Manager</option>
        <option>Employee</option>
      </select>
     <div className="form-row">
       
        <div className="form-field">
            <label>Academic level</label>
            <select value={formData.academicLevel || ''} onChange={(e) => onChange('academicLevel', e.target.value)}>
        <option value="">Diploma</option>
        <option>Graduate</option>
        <option>Postgraduate</option>
      </select>
        </div>
          <div className="form-field">
            <label>Hourly Rate </label>
            <div className="hourly-rate">
                   <input  placeholder="0.00" type="number"  value={formData.hourlyRate || ''} onChange={(e) => onChange('hourlyRate', e.target.value)} />
                   <div className="rupee-icon">
                    <FaIndianRupeeSign  size={18}/>
                   </div>
                   
            </div>
          


          </div>
     </div>
       <div className="form-row">
        <div className="form-field">
            <label>Default Language</label>
               <select value={formData.defaultLanguage || ''} onChange={(e) => onChange('defaultLanguage', e.target.value)}>
        <option value="">System Default</option>
        <option>English</option>
        <option>Marathi</option>
      </select>

        </div>
          <div className="form-field">
            <label>Direction</label>
                 <select value={formData.direction  || ''} onChange={(e) => onChange('direction', e.target.value)}>
        <option value="">System Default</option>
        <option>Right</option>
        <option>Left</option>
      </select>
          </div>
     </div>
       <div className="form-row">
        <div className="form-field">
<label className="icon-label"> <HiQuestionMarkCircle/>Email Signature</label>
<textarea  value={formData.emailSignature || ''} onChange={(e) => onChange('emailSignature', e.target.value)}  rows="6" />
      
        </div>
          <div className="form-field">
            <label>Other Information</label>
            <textarea placeholder="Other Information" value={formData.otherInfo || ''} onChange={(e) => onChange('otherInfo', e.target.value)} rows="6"/>
          </div>
     </div>

      

     
      
      

     
      
      <label className="icon-label">  <FaRegEdit className="edit-icon"/>Twilio Phone Number</label>
      <input  className="input-full-width" value={formData.twilioPhone || ''} onChange={(e) => onChange('twilioPhone', e.target.value)} />

      <label className="icon-label"> <FaRegEdit className="edit-icon"/>Is twilio number whats app enabled</label>
        <select className="input-full-width" value={formData.twilioWhatsappEnabled || ''} onChange={(e) => onChange('twilioWhatsappEnabled', e.target.value)}>
        <option value="">None selected</option>
        <option>Enabled</option>
        <option>Not Enabled</option>
        </select>

</div>
      <div>

         <label><span className="required">*</span>password</label>
      <input  className="input-full-width" type="password" placeholder="Password" value={formData.password || ''} onChange={(e) => onChange('password', e.target.value)} required />
      </div>
      
    </div>
  );
}
