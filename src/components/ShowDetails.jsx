import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  return (
    <div className='container'>
       <div className="show-details">
      {showDetails && (
        <>
          <h1>{showDetails.name}</h1>
          <img src={showDetails.image && showDetails.image.medium} alt={showDetails.name} />
          <p>{showDetails.summary && showDetails.summary.replace(/<[^>]+>/g, '')}</p>
          <Link to={`/book/${id}`} className="book-button">
          <button onClick={() => console.log('Book ticket for', showDetails.name)}>Book Ticket</button>
          </Link>
            
         
            
        </>
      )}
    </div>
      </div>
     
  );
}

export default ShowDetails;
