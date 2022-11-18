import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from "react"

function App() {

  useEffect(() => {
    getMovies()
  })

  const getMovies = async () => {
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

  return (
    <div className="App">
      <p>SoftKraft</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Search</Button>
    </div>
  );
}

export default App;
