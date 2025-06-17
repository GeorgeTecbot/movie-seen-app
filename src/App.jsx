import React, { useState, useEffect } from 'react';

const MOVIES = [
  { originalTitle: 'S3', matchedTitle: 'Singam 3 (Si3)', poster: 'https://tse3.mm.bing.net/th?id=OIP.5WIDyS90OTTzSK_aSbFNtQHaDt&r=0&pid=Api', director: 'Hari', releaseDate: '9 Feb 2017', genre: 'Action, Thriller', synopsis: 'A tough police officer tackles toxic-waste trafficking and solves a murder mystery in rural India.', leadActors: ['Suriya', 'Anushka Shetty', 'Shruti Haasan'] },
  { originalTitle: 'The Double', matchedTitle: 'The Double (2013)', poster: 'https://tse2.mm.bing.net/th/id/OIP.iPIeI0HpCnRyLqtIkwNKhwHaK-?pid=Api', director: 'Richard Ayoade', releaseDate: '7 Sep 2013', genre: 'Mystery-Drama, Black Comedy', synopsis: 'A timid office drone’s life unravels when a charismatic double appears.', leadActors: ['Jesse Eisenberg', 'Mia Wasikowska', 'Wallace Shawn'] },
  { originalTitle: 'End of Watch', matchedTitle: 'End of Watch (2012)', poster: 'https://tse2.mm.bing.net/th?id=OIP.rAtCH3gT7zvYqG8MYSSodwHaLH&pid=Api', director: 'David Ayer', releaseDate: '21 Sep 2012', genre: 'Crime Drama, Thriller', synopsis: 'Two LAPD officers are targeted by a cartel after confiscating illicit money.', leadActors: ['Jake Gyllenhaal', 'Michael Peña', 'Natalie Martinez'] },
  { originalTitle: 'War Dogs', matchedTitle: 'War Dogs (2016)', poster: 'https://tse3.mm.bing.net/th?id=OIP.k3AIlJVAxYQ_2QRU-dgFhgHaK-&r=0&pid=Api', director: 'Todd Phillips', releaseDate: '19 Aug 2016', genre: 'Comedy-Drama, Biographical', synopsis: 'Based on true events: two friends become arms dealers for the U.S. army.', leadActors: ['Jonah Hill', 'Miles Teller', 'Ana de Armas'] }
];

function App() {
  const [seen, setSeen] = useState(() => {
    const saved = localStorage.getItem('seenMovies');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('seenMovies', JSON.stringify(seen));
  }, [seen]);

  const toggleSeen = (title) => {
    setSeen(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>My Movie List</h1>
      <table>
        <thead>
          <tr>
            <th>Poster</th><th>Original Title</th><th>Matched Title</th><th>Director</th><th>Release Date</th><th>Genre</th><th>Synopsis</th><th>Lead Actors</th><th>Seen</th>
          </tr>
        </thead>
        <tbody>
          {MOVIES.map(movie => {
            const isSeen = seen[movie.matchedTitle];
            return (
              <tr key={movie.matchedTitle}>
                <td><img src={movie.poster} alt={movie.matchedTitle} width="50" /></td>
                <td>{movie.originalTitle}</td>
                <td>{movie.matchedTitle}</td>
                <td>{movie.director}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.genre}</td>
                <td>{movie.synopsis}</td>
                <td>{movie.leadActors.join(', ')}</td>
                <td>
                  <button
                    onClick={() => toggleSeen(movie.matchedTitle)}
                    style={{
                      backgroundColor: isSeen ? 'red' : 'green',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    {isSeen ? 'Seen' : 'Not Seen'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
