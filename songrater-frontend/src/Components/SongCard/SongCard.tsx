interface SongCardProps {
    albumName: string;
    artistName: string;
    songName: string;
    songRating: number;
    isFavourite: boolean;
    numberOfListens: number;
    lastListened: Date;
    imageUrl: string;
}

const SongCard: React.FC<SongCardProps> = ({
    albumName,
    artistName,
    songName,
    songRating,
    isFavourite,
    numberOfListens,
    lastListened,
    imageUrl
}) => {
    return (
        <div className="album-card">
            <img src={imageUrl} alt={albumName} />
            <h2>{songName}</h2>
            <h2>{albumName}</h2>
            <h3>{artistName}</h3>
            <p>Rating: {songRating}</p>
            <p>{isFavourite ? 'Favourite' : 'Not Favourite'}</p>
            <p>Listens: {numberOfListens}</p>
            <p>Last Listened: {lastListened.toLocaleString()}</p>
        </div>
    );
};

export default SongCard;