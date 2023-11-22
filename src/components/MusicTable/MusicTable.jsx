import Table from "react-bootstrap/Table";
import React from "react";

const MusicTable = ({ songs, handleDelete }) => {
  return (
    <Table bordered hover variant="dark" size="sm" responsive="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => {
          return (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.releaseDate}</td>
              <td>{song.genre}</td>
              <td>
                <button
                  size="small"
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(song.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MusicTable;
