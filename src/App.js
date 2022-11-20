import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from "react"
import Header from "./components/Header"
import Messages from './components/Messages';
import MovieInfo from './components/MovieInfo';
import styled from "styled-components"


const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
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

function App() {
  const [movie, setMovie] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movieThumbnail, setMovieThumbnail] = useState('')
  const [errorState, setErrorState] = useState(false)

  const getMovie = async () => {
    const apikey = 'tt3896198&apikey=98f4ba6b'

    if (movie !== "") {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=${apikey}&t=${movie}`
        );

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

      } catch (err) {
        console.log(err)
      }
    } else {
      setErrorState(true)
    }
  };

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

        
        <MovieInfo movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
        <Messages movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
      </ContentContainer>
    </div>
  );
}

export default App;
