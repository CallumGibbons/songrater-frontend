interface ArtistCardProps {
    artistName: string;
    artistRating: number;
    isFavourite: boolean;
    numberOfListens: number;
    lastListened: Date;
    imageUrl: string;
    artistId: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
    artistName,
    artistRating,
    isFavourite,
    numberOfListens,
    lastListened,
    imageUrl
}) => {
    return (
        <div className="album-card">
            <img src={imageUrl} alt={artistName} />
            <h3>{artistName}</h3>
            <p>Rating: {artistRating}</p>
            <p>{isFavourite ? 'Favourite' : 'Not Favourite'}</p>
            <p>Listens: {numberOfListens}</p>
            <p>Last Listened: {lastListened.toLocaleString()}</p>
        </div>
    );
};

export default ArtistCard;