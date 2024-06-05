// Home.tsx
import React, { useState, useEffect } from "react";
import { Button, Pagination } from "@mui/material";
import AlbumCard from "../../AlbumCard/AlbumCard";
import ArtistCard from "../../ArtistCard/ArtistCard";
import SongCard from "../../SongCard/SongCard";

interface ListeningHistory {
  "Listening Time": string;
  "Artist Name": string;
  "Album Name": string;
  "Song Name": string;
}

const Home: React.FC = () => {
  const [listeningHistory, setListeningHistory] = useState<ListeningHistory[]>(
    []
  );
  const [view, setView] = useState<"songs" | "albums" | "artists">("songs");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("CaldogTheGreat.json")
      .then((response) => response.json())
      .then((data) => setListeningHistory(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = listeningHistory.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    switch (view) {
      case "albums":
        return selectedItems.map((entry, index) => (
          <AlbumCard
            key={index}
            albumName={entry["Album Name"]}
            artistName={entry["Artist Name"]}
            albumRating={4.5}
            isFavourite={false}
            numberOfListens={123}
            lastListened={new Date(entry["Listening Time"])}
            imageUrl="https://via.placeholder.com/150"
            albumId={index}
          />
        ));
      case "artists":
        return selectedItems.map((entry, index) => (
          <ArtistCard
            key={index}
            artistName={entry["Artist Name"]}
            artistRating={4.7}
            isFavourite={false}
            numberOfListens={456}
            lastListened={new Date(entry["Listening Time"])}
            imageUrl="https://via.placeholder.com/150"
            artistId={index}
          />
        ));
      case "songs":
      default:
        return selectedItems.map((entry, index) => (
          <SongCard
            key={index}
            albumName={entry["Album Name"]}
            artistName={entry["Artist Name"]}
            songName={entry["Song Name"]}
            songRating={4.8}
            isFavourite={false}
            numberOfListens={789}
            lastListened={new Date(entry["Listening Time"])}
            imageUrl="https://via.placeholder.com/150"
          />
        ));
    }
  };

  return (
    <div>
      <h1>Music Ratings</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setView("songs");
          setCurrentPage(1);
        }}
      >
        Show Songs
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setView("albums");
          setCurrentPage(1);
        }}
      >
        Show Albums
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setView("artists");
          setCurrentPage(1);
        }}
      >
        Show Artists
      </Button>
      <div className="cards-container">{renderCards()}</div>
      <Pagination
        count={Math.ceil(listeningHistory.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default Home;
