import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingForm from './pages/BookingForm';
import HistoryPage from './pages/HistoryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {

  const initialBookings = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      date: "2024-01-01",
      reason: "Routine Checkup",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      date: "2024-01-02",
      reason: "Dental Cleaning",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "4567891230",
      date: "2024-01-03",
      reason: "Consultation for Headache",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "6543217890",
      date: "2024-01-04",
      reason: "Flu Symptoms",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "3216549870",
      date: "2024-01-05",
      reason: "Back Pain Consultation",
    },
  ];

  const [bookings, setBookings] = useState(initialBookings);

  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home bookings={bookings} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-appointment" element={<BookingForm />} />
          <Route path="/history" element={<HistoryPage bookings={bookings} />} />
        </Routes>
      </Router>
     
    </>
  );
}

