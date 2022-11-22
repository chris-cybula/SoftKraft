import { useState } from "react"
// @ts-ignore
import Header from "./components/Header.tsx"
// @ts-ignore
import Messages from './components/Messages.tsx';
// @ts-ignore
import MovieInfo from './components/MovieInfoCard.tsx';
// @ts-ignore
import MovieInput from './components/MovieInput.tsx';
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

    background-color: #f8f9fa;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #444;
  }
`;

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

function App(): JSX.Element {
  interface State {
    details: string;
    error: boolean;
  }

  const [movieTitle, setMovieTitle] = useState<State['details']>('');
  const [movieYear, setMovieYear] = useState<State['details']>('');
  const [movieThumbnail, setMovieThumbnail] = useState<State['details']>('');
  const [errorState, setErrorState] = useState<State['error']>(false);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <MovieInput setMovieTitle={setMovieTitle} setMovieYear={setMovieYear} setMovieThumbnail={setMovieThumbnail} errorState={errorState} setErrorState={setErrorState} />
        <Messages movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
        <MovieInfo movieTitle={movieTitle} movieYear={movieYear} movieThumbnail={movieThumbnail} errorState={errorState} />
      </ContentContainer>
    </>
  );
}

export default App;
