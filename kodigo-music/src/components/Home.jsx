import React, { useState, useEffect } from 'react';

const Home = () => {
  const [option, setOption] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const getSongs = (category) => {
    const songs = {
      pop: [
        { id: 1, name: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
        { id: 2, name: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
        { id: 3, name: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
        { id: 4, name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', duration: '4:30' },
        { id: 5, name: 'Bad Guy', artist: 'Billie Eilish', duration: '3:14' },
        { id: 6, name: 'Havana', artist: 'Camila Cabello', duration: '3:37' },
        { id: 7, name: 'Stay', artist: 'The Kid LAROI & Justin Bieber', duration: '2:21' },
        { id: 8, name: 'Roar', artist: 'Katy Perry', duration: '3:43' },
        { id: 9, name: 'Shake It Off', artist: 'Taylor Swift', duration: '3:39' },
        { id: 10, name: 'Senorita', artist: 'Shawn Mendes & Camila Cabello', duration: '3:11' },
      ],
      rock: [
        { id: 11, name: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', duration: '5:56' },
        { id: 12, name: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
        { id: 13, name: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:01' },
        { id: 14, name: 'Hotel California', artist: 'Eagles', duration: '6:30' },
        { id: 15, name: 'Back in Black', artist: 'AC/DC', duration: '4:15' },
        { id: 16, name: 'Wonderwall', artist: 'Oasis', duration: '4:18' },
        { id: 17, name: 'Creep', artist: 'Radiohead', duration: '3:59' },
        { id: 18, name: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd', duration: '4:43' },
        { id: 19, name: 'Livin\' on a Prayer', artist: 'Bon Jovi', duration: '4:11' },
        { id: 20, name: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
      ],
      salsa: [
        { id: 21, name: 'Vivir Mi Vida', artist: 'Marc Anthony', duration: '4:12' },
        { id: 22, name: 'Valió la Pena', artist: 'Marc Anthony', duration: '3:43' },
        { id: 23, name: 'La Gozadera', artist: 'Gente de Zona ft. Marc Anthony', duration: '3:24' },
        { id: 24, name: 'Quítate Tú Pa\' Ponerme Yo', artist: 'Eddie Palmieri', duration: '5:21' },
        { id: 25, name: 'Cali Pachanguero', artist: 'Grupo Niche', duration: '4:06' },
        { id: 26, name: 'El Cantante', artist: 'Héctor Lavoe', duration: '10:24' },
        { id: 27, name: 'Rebelión', artist: 'Joe Arroyo', duration: '4:23' },
        { id: 28, name: 'Pedro Navaja', artist: 'Rubén Blades', duration: '7:22' },
        { id: 29, name: 'Idilio', artist: 'Willie Colón', duration: '5:08' },
        { id: 30, name: 'Llorarás', artist: 'Oscar D\'León', duration: '3:50' },
      ],
    };
    return songs[category] || [];
  };

  return (
    <div className="home">
      <h2>Bienvenido, {userData ? userData.email : 'Usuario'}</h2>
      <div className="options">
        <label>Selecciona una categoría de música: </label>
        <select value={option} onChange={handleOptionChange}>
          <option value="">Selecciona</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="salsa">Salsa</option>
        </select>
      </div>
      {option && (
        <div className="songs">
          <h3>Canciones de {option.charAt(0).toUpperCase() + option.slice(1)}</h3>
          <div className="song-list">
            {getSongs(option).map(song => (
              <div key={song.id} className="song-card">
                <h4>{song.name}</h4>
                <p>Artista: {song.artist}</p>
                <p>Duración: {song.duration}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;