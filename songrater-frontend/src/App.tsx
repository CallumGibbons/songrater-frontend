import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const albums:object  = [
  {
    id: 1,
    title: "Album 1",
    artist: "Artist 1",
    imageUrl: "https://via.placeholder.com/150",
    songs: [
      { id: 1, title: "Song 1" },
      { id: 2, title: "Song 2" },
      { id: 3, title: "Song 3" },
    ]
  },
  {
    id: 2,
    title: "Album 2",
    artist: "Artist 2",
    imageUrl: "https://via.placeholder.com/150",
    songs: [
      { id: 4, title: "Song 4" },
      { id: 5, title: "Song 5" },
      { id: 6, title: "Song 6" },
    ]
  }
];

const AlbumCard = ({ album }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={album.imageUrl}
      alt={album.title}
    />
    <CardContent>
      <Typography variant="h5" component="div">
        {album.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {album.artist}
      </Typography>
      <Box mt={2}>
        {album.songs.map(song => (
          <Typography key={song.id} variant="body2">
            {song.title}
          </Typography>
        ))}
      </Box>
    </CardContent>
  </Card>
);

const App = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      Albums and Songs
    </Typography>
    <Grid container spacing={4}>
      {albums.map(album => (
        <Grid item key={album.id} xs={12} sm={6} md={4}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default App;