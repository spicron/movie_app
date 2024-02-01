import React from 'react';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css';
import BookingForm from './components/BookingForm';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<BookingForm/>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
