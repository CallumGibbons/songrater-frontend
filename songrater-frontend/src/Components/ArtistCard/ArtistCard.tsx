import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface ArtistCardProps {
    artistName: string;
    artistRating: number;
    isFavourite: boolean;
    numberOfListens: number;
    lastListened: Date;
    imageUrl: string;
    artistId: number;
};

const ArtistCard: React.FC<ArtistCardProps> = ({
    artistName,
    artistRating,
    isFavourite,
    numberOfListens,
    lastListened,
    imageUrl
}) => {
    const [isFavourited, setIsFavourited] = useState(isFavourite);

    const toggleFavourite = () => {
        setIsFavourited((prevIsFavourited) => !prevIsFavourited);
    };

    return (
        <div className="artist-card">
            <img src={imageUrl} alt={artistName} />
            <h3>{artistName}</h3>
            <p>Rating: {artistRating}</p>
            <button onClick={toggleFavourite}>
                {isFavourited ? <StarIcon /> : <StarBorderIcon />}
            </button>
            <p>Listens: {numberOfListens}</p>
            <p>Last Listened: {lastListened.toLocaleString()}</p>
        </div>
    );
};

export default ArtistCard;
