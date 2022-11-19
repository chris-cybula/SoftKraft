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
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchButton = styled(Button)`
 &.searchButton {
  background-image: linear-gradient(90deg,#288cbb,#74e2c5);
  height: 37px;

    &:hover {
      background-image: linear-gradient(90deg,#288cbb,#74e2c5);
    }
  }
`
const TextFieldInput = styled(TextField)`
  &.error {
    label {
      color: #d32f2f;
    }

    fieldset {
      border-color: #d32f2f;
    }
  }
`

const Message = styled.span`
  font-size: 40px;
  margin-top: 8rem;
  font-weight: 300;

  span {
    font-weight: bold;
    color: #7ae8c5;
  }
`

function App() {
  const [movie, setMovie] = useState('')

  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movieThumbnail, setMovieThumbnail] = useState('')

  const [errorState, setErrorState] = useState(false)

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
          setErrorState(false)
        } else {
          setMovieTitle('')
          setMovieYear('')
          setMovieThumbnail('')
          setErrorState(true)
        }

        console.log(res.data)

      } catch (err) {
        console.log(err)
      }
    } else {
      setErrorState(true)
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
      <ContentContainer>
        <Input>
          <TextFieldInput className={errorState === true ? 'error' : ''} id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
            value={movie} />
          <SearchButton variant="contained" onClick={getMovie} className={'searchButton'}>Search</SearchButton>
        </Input>
        {/* <Button variant="contained" onClick={getRandomMovie}>Random</Button> */}



        {movieTitle !== '' && movieYear !== '' && movieThumbnail !== ''
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
          : null
        }

        {movieTitle === '' && movieYear === '' && movieThumbnail === '' && errorState === true
          ? <Message>Please enter correct title of the <span>movie</span></Message>
          : null
        }

        {movieTitle === '' && movieYear === '' && movieThumbnail === '' && errorState === false
          ? <Message>Please enter <span>movie</span> you are looking for</Message>
          : null
        }

      </ContentContainer>
    </div>
  );
}

export default App;
