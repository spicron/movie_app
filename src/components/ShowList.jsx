import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="show-list">
      <h1>Show List</h1>
      <ul className='show_list_container'>
        {shows.map(item => (
          <li key={item.show.id}>
             <div >
              {item.show.image && (
                <img src={item.show.image.medium  } alt={`${item.show.name}poster`} />
              )}
            </div>
            <div className='title'>
              {`Movie name : ${item.show.name}`} 
            </div>
            <div className='title'>
              {`Movie language : ${item.show.language}`} 
            </div>
            <Link to={`/show/${item.show.id}`}>
              {/* {item.show.name} */}
              <button className='detail_button'>Show details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
