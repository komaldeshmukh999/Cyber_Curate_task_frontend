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

// //   const handleSubmit = async () => {
// //     try{
// // const res = await fetch('https://cyber-curate-backend-task-gyp7.onrender.com/staff/create', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(formData),
// //     });
// //    let data= await res.json()
// //    alert("sucessfully submitted")
// //    console.log(data._id)
// //    localStorage.setItem("id",data._id)
// //     }
// //     catch(error){
// //       console.log(error.message)
// //       alert(error.message)

// //     }
    
//   //  if(id){
//   //    localStorage.setItem('id',id)
//   //    console.log(id)
//   //  }
  
//   };
const handleSubmit = async () => {
  try {
    const res = await fetch('https://cyber-curate-backend-task-gyp7.onrender.com/staff/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // Ensure formData is correct
    });

    // Check if response is not ok (e.g., 400 or 500 status codes)
    if (!res.ok) {
      const errorText = await res.text(); // Get text response if it's not JSON
      throw new Error(`Server Error: ${res.status} - ${errorText}`);
    }

    // If response is OK, parse it as JSON
    const data = await res.json();

    // Show success message and log the data
    alert("Successfully submitted");
    console.log(data._id);

    // Store the ID in localStorage
    localStorage.setItem("id", data._id);
  } catch (error) {
    // Handle errors and show an alert with the error message
    console.log(error.message);
    alert(error.message);
  }
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
