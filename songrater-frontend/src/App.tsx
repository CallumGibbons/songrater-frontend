// App.tsx
import React from 'react';
import AlbumCard from './Components/AlbumCard/AlbumCard';
import ArtistCard from './Components/ArtistCard/ArtistCard';
import SongCard from './Components/SongCard/SongCard';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Music Ratings</h1>
            <AlbumCard
                albumName="Test Album"
                artistName="Test Artist"
                albumRating={4.5}
                isFavourite={true}
                numberOfListens={123}
                lastListened={new Date('2024-06-05T12:00:00')}
                imageUrl="https://via.placeholder.com/150"
                albumId={1}
            />
            <ArtistCard
                artistName="Test Artist"
                artistRating={4.7}
                isFavourite={false}
                numberOfListens={456}
                lastListened={new Date('2024-06-05T12:00:00')}
                imageUrl="https://via.placeholder.com/150"
                artistId={1}
            />
            <SongCard
                albumName="Test Album"
                artistName="Test Artist"
                songName="Test Song"
                songRating={4.8}
                isFavourite={true}
                numberOfListens={789}
                lastListened={new Date('2024-06-05T12:00:00')}
                imageUrl="https://via.placeholder.com/150"
            />
        </div>
    );
};

export default App;
