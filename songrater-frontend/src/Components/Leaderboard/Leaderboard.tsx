import React from 'react';

interface Song {
    songName: string;
    artistName: string;
    lastListened: Date;
    numberOfListens: number;
    songId: number;
    isfavourite: boolean;
    songRating: number;
    songImage: string;
    songAlbum: string;
}

interface LeaderboardProps {
    songs: Song[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ songs }) => {
    // Sort songs by last listened time
    const sortedSongs = [...songs].sort((a, b) => b.lastListened.getTime() - a.lastListened.getTime());

    return (
        <div className="leaderboard">
            <h2>Song Leaderboard</h2>
            <ol>
                {sortedSongs.map((song, index) => (
                    <li key={index}>
                        <span>{song.songName}</span>
                        <span> by {song.artistName}</span>
                        <span>Last Listened: {song.lastListened.toLocaleString()}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;
