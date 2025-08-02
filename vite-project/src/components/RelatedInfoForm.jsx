import React from 'react';
import "../styles/profileForm.css"
import { FaFacebook } from "react-icons/fa";
import { RiSkypeFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
export default function RelatedInfoForm({ formData, onChange }) {
  return (
    <div>
      <h2>Related Information</h2>
      <div className="form-row"> 
        <div className="form-field">
        <label>Domicile</label>
         <input value={formData.domicile || ''} onChange={(e) => onChange('domicile', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Martial Status</label>
             <select value={formData.maritalStatus || ''} onChange={(e) => onChange('maritalStatus', e.target.value)}>
        <option value="">Marital Status</option>
        <option>Single</option>
        <option>Married</option>
      </select>
            
       </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>Current address</label>
              <textarea  value={formData.currentAddress || ''} onChange={(e) => onChange('currentAddress', e.target.value)} />
         </div>
        <div className="form-field">
            <label>Nation</label>
             <input  value={formData.nation || ''} onChange={(e) => onChange('nation', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>Place of Birth</label>
             <input value={formData.placeOfBirth || ''} onChange={(e) => onChange('placeOfBirth', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Religion</label>
             <input  value={formData.religion || ''} onChange={(e) => onChange('religion', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>Citizen identification</label>
              <input value={formData.citizenId || ''} onChange={(e) => onChange('citizenId', e.target.value)} />
        </div>
        <div className="form-field">
              <label>Date of issue</label>
            
      <input type="date"  value={formData.dateOfIssue || ''} onChange={(e) => onChange('dateOfIssue', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>place of issue</label>
              <input  value={formData.placeOfIssue || ''} onChange={(e) => onChange('placeOfIssue', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Resident</label>
           
      <input  value={formData.resident || ''} onChange={(e) => onChange('resident', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>Bank account Number</label>
            <input  value={formData.bankAccountNumber || ''} onChange={(e) => onChange('bankAccountNumber', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Bank account Name</label>
            
      
      <input value={formData.bankAccountName || ''} onChange={(e) => onChange('bankAccountName', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>Bank Name</label>
              <input  value={formData.bankName || ''} onChange={(e) => onChange('bankName', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Personal tax code</label>
          
      <input  value={formData.taxCode || ''} onChange={(e) => onChange('taxCode', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label>EPF No</label>
             <input  value={formData.epfNo || ''} onChange={(e) => onChange('epfNo', e.target.value)} />
        </div>
        <div className="form-field">
            <label>Social Security No</label>
              
      <input  value={formData.socialSecurityNo || ''} onChange={(e) => onChange('socialSecurityNo', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
            <label className="icon-label"><FaFacebook size={18}/>Facebook</label>
             <input value={formData.facebook || ''} onChange={(e) => onChange('facebook', e.target.value)} />
        </div>
        <div className="form-field">
           <label className="icon-label"><FaLinkedin size={18}/>Linkdln</label>
            
      <input  value={formData.linkedin || ''} onChange={(e) => onChange('linkedin', e.target.value)} />
        </div>
      </div>
        <div className="form-row"> 
        <div className="form-field">
                 
                
            <label className="icon-label"><RiSkypeFill size={22} className="icons"/><span>Skype</span></label>
           
             <input  value={formData.skype || ''} onChange={(e) => onChange('skype', e.target.value)} />
        </div>
      </div>
      
    
     

     
     
      
     

      
   
    
     
    </div>
  );
}

