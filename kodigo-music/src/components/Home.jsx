import React, { useState, useEffect } from 'react';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una llamada a una API
    setTimeout(() => {
      const data = [
        { id: 1, name: 'Top Hits 2023', description: 'Lo más escuchado del año', category: 'pop' },
        { id: 2, name: 'Rock Clásico', description: 'Éxitos del rock de siempre', category: 'rock' },
        { id: 3, name: 'Pop Latino', description: 'Artistas latinos del momento', category: 'pop' },
        { id: 4, name: 'Metal Pesado', description: 'Riffs potentes y energía', category: 'rock' },
        { id: 5, name: 'Salsa Mix', description: 'Ritmos latinos para bailar', category: 'salsa' },
      ];
      setPlaylists(data);
      setFilteredPlaylists(data);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredPlaylists(playlists);
    } else {
      setFilteredPlaylists(playlists.filter(playlist => playlist.category === category));
    }
  }, [category, playlists]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="home">
      <h2>Bienvenido a Kodigo Music</h2>
      <div className="filter">
        <label>Filtrar por categoría: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="salsa">Salsa</option>
        </select>
      </div>
      {loading ? (
        <p>Cargando playlists...</p>
      ) : (
        <div className="playlists">
          {filteredPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
              <p>Categoría: {playlist.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;