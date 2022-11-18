import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from "react"

function App() {
  const [movie, setMovie] = useState('')

  const getMovie = async () => {
    const apikey = 'tt3896198&apikey=98f4ba6b'

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${apikey}`
      );

      console.log(res)

    } catch (err) {
      console.log(err);
    }
  };

  const inputHandler = event => {
    setMovie(event.target.value);
    console.log(movie)
 };

  return (
    <div className="App">
      <p>SoftKraft</p>
      <TextField id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
        value={movie} />
      <Button variant="contained">Search</Button>
    </div>
  );
}

export default App;
