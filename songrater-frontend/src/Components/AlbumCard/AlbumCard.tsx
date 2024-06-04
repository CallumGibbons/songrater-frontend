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
    isFavourite,
    numberOfListens,
    lastListened,
    imageUrl
}) => {
    return (
        <div className="album-card">
            <img src={imageUrl} alt={albumName} />
            <h2>{albumName}</h2>
            <h3>{artistName}</h3>
            <p>Rating: {albumRating}</p>
            <p>{isFavourite ? 'Favourite' : 'Not Favourite'}</p>
            <p>Listens: {numberOfListens}</p>
            <p>Last Listened: {lastListened.toLocaleString()}</p>
        </div>
    );
};

export default AlbumCard;
