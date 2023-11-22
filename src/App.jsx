import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import SearchBar from "./components/SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const response = await axios.get("https://localhost:7010/api/Songs");
    setSongs(response.data);
  };

  function handleDelete(id) {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
  }

  function songFilter(search) {
    const libraryFilter = songs.filter((song) => {
      if (
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase()) ||
        song.album.toLowerCase().includes(search.toLowerCase()) ||
        song.releaseDate.toLowerCase().includes(search.toLowerCase()) ||
        song.genre.toLowerCase().includes(search.toLowerCase())
      ) {
        return search;
      }
    });
    setSongs(libraryFilter);
  }

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <SearchBar songFilter={songFilter} />
        <MusicTable songs={songs} handleDelete={handleDelete} />
        <NewSongForm onNewSong={fetchSongs} />
      </div>
    </div>
  );
}

export default App;
