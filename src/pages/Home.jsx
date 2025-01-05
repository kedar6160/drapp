import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import TreatmentCard from '../components/TreatmentCard';
import Header from '../components/Header';
import Footer from '../components/Footer';


const treatments = [
  {
    image: '/images/cardiology.jpg',
    title: 'Cardiology',
    description: 'Comprehensive care for heart conditions.',
  },
  {
    image: '/images/diabetes.jpg',
    title: 'Diabetes Management',
    description: 'Personalized plans for diabetes control.',
  },
  {
    image: '/images/general.jpg',
    title: 'General Health',
    description: 'Routine check-ups and overall wellness.',
  },
];

const Home = ({ bookings }) => {
  const lastThreeBookings = bookings.slice(-3).reverse();

  return (
    <div className="home-container">
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="doctor-profile bg-custom">
          <img src="/images/dr.png" alt="Dr. John Doe" className="profile-pic" />
          <div className='profile-description'>
            <h3>Dr. John Doe</h3>
            <h4>Specialist in Cardiology</h4>
            <p>15+ years of experience in treating heart conditions.</p></div>
        </div>
      </section>
      <section>
        <div className="home-container">
          <h2>Treatments and Facilities</h2>
          <div className="card-container">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                image={treatment.image}
                title={treatment.title}
                description={treatment.description}
              />
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link to="/book-appointment" className="appointment-button">Book an Appointment</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="home-container">
          <h3>Last 3 Appointments</h3>
          <ul className="history-list">
            {lastThreeBookings.map((booking, index) => (
              <li key={index} className="history-item">
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Reason:</strong> {booking.reason}</p>
              </li>
            ))}
          </ul>

          <Link to="/history" className="see-more-button">
            See More
          </Link>
        </div>
      </section>

      {/* Clinic Details */}
      <section className="clinic-details">
        <h2>Clinic Details</h2>
        <p><strong>Address:</strong> 123 Health Street, Wellness City</p>
        <p><strong>Working Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>
        <p><strong>Contact:</strong> +1 234 567 890</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
