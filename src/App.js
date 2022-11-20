import { useState } from "react"
import Header from "./components/Header"
import Messages from './components/Messages';
import MovieInfo from './components/MovieInfo';
import MovieInput from './components/MovieInput';
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
function App() {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movieThumbnail, setMovieThumbnail] = useState('')
  const [errorState, setErrorState] = useState(false)

  return (
    <div>
      <Header />
      <ContentContainer>
        <MovieInput setMovieTitle={setMovieTitle} setMovieYear={setMovieYear} setMovieThumbnail={setMovieThumbnail} setErrorState={setErrorState} errorState={errorState}/>
        <MovieInfo movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
        <Messages movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
      </ContentContainer>
    </div>
  );
}

export default App;
