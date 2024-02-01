import React, { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    showId: id
  });

  const [movieName, setMovieName] = useState('');
  const [movieImage, setMovieImage] = useState('');
    // Assuming you have a function to fetch movie details based on ID
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
          .then(response => response.json())
          .then(data => {
            setMovieName(data.name);
            setMovieImage(data.image && data.image.original);
          })
          .catch(error => console.error('Error fetching movie details:', error));
      }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can save form data to local storage here
    console.log('Form submitted:', formData);
    // After submitting, redirect back to show details
    navigate(`/show/${id}`);
  };

  return (
    <div className="booking-form">
      <h1 className='form_title'>Booking Form  for {movieName}</h1>
      <img src={movieImage} alt={movieName} style={{ width: '250px' }} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Username' value={formData.name} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='E-mail' value={formData.email} onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
