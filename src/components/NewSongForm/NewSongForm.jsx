import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSong = {
      title: title,
      artist: artist,
      album: album,
      releaseDate: releaseDate,
      genre: genre,
    };

    const response = await axios.post(
      "https://localhost:7010/api/Songs",
      newSong
    );
    if (response.status === 201) {
      onNewSong();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-item">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Album" value={album} onChange={setAlbum} />

        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <div className="flex-item">
          <button className="btn btn-outline-danger" type="submit">
            Add Song
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSongForm;
