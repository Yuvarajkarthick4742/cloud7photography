import React, { useState } from 'react';
import "../Components/Bookus.css";


const ShootForm = () => {
  const [coupleNames, setCoupleNames] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [shootDate, setShootDate] = useState('');
  const [shootType, setShootType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to a server
    // For now, let's log the form data
    console.log({
      coupleNames,
      email,
      contactNumber,
      shootDate,
      shootType
    });
  };

  return (
    <div className="shoot-form-container mclo">
      <h2>Shoot Form</h2>
      <form onSubmit={handleSubmit} className="shoot-form">
        <div className="form-group">
          <label htmlFor="coupleNames">Couples Name</label>
          <input
            type="text"
            id="coupleNames"
            value={coupleNames}
            onChange={(e) => setCoupleNames(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Your Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shootDate">Main Shoot Date</label>
          <input
            type="date"
            id="shootDate"
            value={shootDate}
            onChange={(e) => setShootDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shootType">Type of Shoot</label>
          <select
            id="shootType"
            value={shootType}
            onChange={(e) => setShootType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Portrait">Portrait</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShootForm;
