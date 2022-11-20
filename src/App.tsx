import { useState, Fragment } from "react"
import Header from "./components/Header"
// @ts-ignore
import Messages from './components/Messages.tsx';
// @ts-ignore
import MovieInfo from './components/MovieInfoCard.tsx';
// @ts-ignore
import MovieInput from './components/MovieInput.tsx';
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
  interface State {
    details?: string;
    error?: boolean;
  }

  const [movieTitle, setMovieTitle] = useState<State>({ details: ''});
  const [movieYear, setMovieYear] = useState<State>({ details: ''});
  const [movieThumbnail, setMovieThumbnail] = useState<State>({ details: ''});
  const [errorState, setErrorState] = useState<State>({ error: false});

  return (
    <>
      <Header />
      <ContentContainer>
        <MovieInput setMovieTitle={setMovieTitle} setMovieYear={setMovieYear} setMovieThumbnail={setMovieThumbnail} errorState={errorState} setErrorState={setErrorState}/>
        <MovieInfo movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
        <Messages movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
      </ContentContainer>
    </>
  );
}

export default App;
