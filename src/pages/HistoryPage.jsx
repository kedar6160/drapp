import React from 'react';
import './HistoryPage.css';

const HistoryPage = ({ bookings }) => {
  return (
    <div className="history-page-container">
      <h2>Appointment History</h2>
      {bookings.length > 0 ? (
        <ul className="history-list">
          {bookings.map((booking, index) => (
            <li key={index} className="history-item">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Reason:</strong> {booking.reason}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default HistoryPage;
