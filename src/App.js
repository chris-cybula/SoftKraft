import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from "react"
import Header from "./components/Header"
import styled from "styled-components"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`

const MovieInfo = styled.div`
  margin: 4rem 0;
  width: 300px;
`

const Input = styled.div`
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

        // if(res.data['Response'] === 'False') {
        //   setErrorState(false)
        // } else {
        //   setErrorState(true)
        // }

        if (res.data['Response'] !== 'False') {
          setMovieTitle(res.data['Title'])
          setMovieYear(res.data['Year'])
          setMovieThumbnail(res.data['Poster'])
        } else {
          setMovieTitle('')
          setMovieYear('')
          setMovieThumbnail('')
        }

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
        <Input>
          <TextField id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
            value={movie} />
          <Button variant="contained" onClick={getMovie}>Search</Button>
        </Input>
        {/* <Button variant="contained" onClick={getRandomMovie}>Random</Button> */}



        {movieTitle != '' && movieYear != '' && movieThumbnail != ''
          ? <MovieInfo>
            <Card>
              <CardMedia
                component="img"
                height=""
                image={movieThumbnail}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movieTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movieYear}
                </Typography>
              </CardContent>
            </Card>
          </MovieInfo>
          : <p>no movie</p>
        }




      </ContentContainer>
    </div>
  );
}

export default App;
