import React from 'react'
import './css/Cards.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Cards = ({ searchQuery }) => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCards = async () => {
      try {
        let response;
        if (searchQuery) {
          response = await axios.get(`http://localhost:5000/api/cards/search?q=${searchQuery}`);
          setCards(response.data);
        } else {
          response = await axios.get('http://localhost:5000/api/cards');
          setCards(response.data);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, [searchQuery]);
  if (loading) {
    return (
      <div className="centered-container">
        <b>Loading...</b>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered-container">
        <b>Error: {error}</b>
      </div>
    );
  }
  return (
    <div className='cards'>
    <div className='cards-container'>
  
    {cards.length === 0 ? (
      <p>No cards available</p>
    ) : (
      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card._id}>
            <h6>{card.title || 'No Title'}</h6>
            <hr className="card-separator" />

            <p>{card.description || 'No Description'}</p>
          </div>
        ))}
      </div>
    )}
  </div>
    </div>

  )
}

export default Cards


