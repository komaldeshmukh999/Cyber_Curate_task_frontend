import React, { useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import RelatedInfoForm from '../components/RelatedInfoForm';
import "../styles/staffFormPage.css"

export default function StaffFormPage() {
  const [tab, setTab] = useState('profile');
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch('https://cyber-curate-backend-task-3.onrender.com/staff/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
   let data= await res.json()
   console.log(data._id)
   localStorage.setItem("id",data._id)
  //  if(id){
  //    localStorage.setItem('id',id)
  //    console.log(id)
  //  }
  
  };

  return (
    <div>
        <div className="navbar-1">
            <h3>Staff Profile Create</h3>
        </div>
      <div className="navbar-2">
        <button onClick={() => setTab('profile')}>Profile</button>
        <button onClick={() => setTab('related')}>Related Information</button>
      </div>

      {tab === 'profile' ? (
        <ProfileForm formData={formData} onChange={handleChange} />
      ) : (
        <RelatedInfoForm formData={formData} onChange={handleChange} />
      )}
      <div className="button">
        <button onClick={handleSubmit}>Save</button>
        <button>Close</button>
      </div>
      
    </div>
  );
}
