import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from "react"

function App() {
  const [movie, setMovie] = useState('')

  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movieThumbnail, setMovieThumbnail] = useState('')

  const getMovie = async () => {
    const apikey = 'tt3896198&apikey=98f4ba6b'

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${apikey}&t=${movie}`
      );

      setMovieTitle(res.data['Title'])
      setMovieYear(res.data['Year'])
      setMovieThumbnail(res.data['Poster'])

      console.log(movieTitle, movieYear, movieThumbnail)

    } catch (err) {
      console.log(err);
    }
  };

  const inputHandler = event => {
    setMovie(event.target.value);
  };

  return (
    <div className="App">
      <p>SoftKraft</p>
      <TextField id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
        value={movie} />
      <Button variant="contained" onClick={getMovie}>Search</Button>
      <p>{movieTitle}</p>
      <p>{movieYear}</p>
      <img src={movieThumbnail} />
    </div>
  );
}

export default App;
