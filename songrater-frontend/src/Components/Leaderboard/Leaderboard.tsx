import React, { useState, useEffect } from "react";

interface Song {
  "Listening Time": string;
  "Artist Name": string;
  "Album Name": string;
  "Song Name": string;
}

const Leaderboard: React.FC = () => {
  const [listeningHistory, setListeningHistory] = useState<Song[]>([]);

  useEffect(() => {
    fetch("/CaldogTheGreat.json")
      .then((response) => response.json())
      .then((data) => setListeningHistory(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sortedSongs = [...listeningHistory].sort(
    (a, b) =>
      new Date(b["Listening Time"]).getTime() -
      new Date(a["Listening Time"]).getTime()
  );

  return (
    <div>
      <h1>Leaderboard</h1>
      {sortedSongs.map((song, index) => (
        <div key={index}>
          <p>Song: {song["Song Name"]}</p>
          <p>Artist: {song["Artist Name"]}</p>
          <p>
            Last Listened: {new Date(song["Listening Time"]).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
