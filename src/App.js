import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from "react"
import Header from "./components/Header"
import styled from "styled-components"

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`

function App() {
  const [movie, setMovie] = useState('')

  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movieThumbnail, setMovieThumbnail] = useState('')

  // const [errorState, setErrorState] = useState(false)

  // useEffect(() => {
  //   getMovie()
  // }, [movie])

  const getMovie = async () => {
    const apikey = 'tt3896198&apikey=98f4ba6b'

    if (movie !== "") {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=${apikey}&t=${movie}`
        );

        setMovieTitle(res.data['Title'])
        setMovieYear(res.data['Year'])
        setMovieThumbnail(res.data['Poster'])

        // if(res.data['Response'] === 'False') {
        //   setErrorState(false)
        // } else {
        //   setErrorState(true)
        // }

      } catch (err) {
        console.log(err)
      }
    }
  };

  // const getRandomMovie = async () => {

  //   try {
  //     const res = await axios.get(
  //       `https://k2maan-moviehut.herokuapp.com/api/random`
  //     );

  //     setMovie(res.data.name)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const inputHandler = event => {
    setMovie(event.target.value);
  };

  return (
    <div>
      <Header />
      {/* <TextField error={errorState === true ? "" : "false"} id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
        value={movie} /> */}
      <ContentContainer>
        <div>
          <TextField id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
            value={movie} />
          <Button variant="contained" onClick={getMovie}>Search</Button>
        </div>
        {/* <Button variant="contained" onClick={getRandomMovie}>Random</Button> */}
        <div>
          <p>{movieTitle}</p>
          <p>{movieYear}</p>
          <img src={movieThumbnail} />
        </div>
      </ContentContainer>
    </div>
  );
}

export default App;
