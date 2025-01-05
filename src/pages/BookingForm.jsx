import React, { useState } from 'react';
import './BookingForm.css';
import Footer from '../components/Footer';

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    alert('Appointment booked successfully!');
    setFormData({ name: '', email: '', phone: '', date: '', reason: '' });
  };

  return (
    <>
      <div className="booking-form-container">
        <h2>Book an Appointment</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preferred Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Reason for Appointment:
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingForm;
