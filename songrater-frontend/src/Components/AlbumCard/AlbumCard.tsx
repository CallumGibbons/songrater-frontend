import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface AlbumCardProps {
    albumName: string;
    artistName: string;
    albumRating: number;
    isFavourite: boolean;
    numberOfListens: number;
    lastListened: Date;
    imageUrl: string;
    albumId: number;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
    albumName,
    artistName,
    albumRating,
    numberOfListens,
    lastListened,
    imageUrl
}) => {
    const [isFavourited, setIsFavourited] = useState(false);
    const toggleFavourite = () => {
        setIsFavourited((prevIsFavourited) => !prevIsFavourited);
    };
    return (
        <div className="album-card">
            <img src={imageUrl} alt={albumName} />
            <h2>{albumName}</h2>
            <h3>{artistName}</h3>
            <p>Rating: {albumRating}</p>
            <button onClick={toggleFavourite}>
                {isFavourited ? <StarIcon /> : <StarBorderIcon />}
            </button><p>Listens: {numberOfListens}</p>
            <p>Last Listened: {lastListened.toLocaleString()}</p>
        </div>
    );
};

export default AlbumCard;
