import { useState } from "react"
import styled from "styled-components"
import { Button, TextField } from '@mui/material';
import axios from 'axios';

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

interface Props {
  setMovieTitle: React.Dispatch<React.SetStateAction<string>>;
  setMovieYear: React.Dispatch<React.SetStateAction<string>>;
  setMovieThumbnail: React.Dispatch<React.SetStateAction<string>>;
  errorState: boolean;
  setErrorState: React.Dispatch<React.SetStateAction<boolean>>;
}

function MovieInput({setMovieTitle, setMovieYear, setMovieThumbnail, errorState, setErrorState}: Props) {
  interface State {
    inputValue: string;
  }

  const [movie, setMovie] = useState<State | ''>({ inputValue: ''});

  const getMovie  = async () => {
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

  const inputHandler = (event) => {
    setMovie(event.target.value);
  };

  return (
    <Input>
      <TextFieldInput className={errorState === true ? 'error' : ''} id="outlined-basic" label="Your movie..." variant="outlined" onChange={inputHandler}
        value={movie} />
      <SearchButton variant="contained" onClick={getMovie} className={'searchButton'}>Search</SearchButton>
    </Input>
  );
}

export default MovieInput;
