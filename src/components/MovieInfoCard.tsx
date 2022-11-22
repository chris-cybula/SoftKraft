import styled from "styled-components"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieInfo = styled.div`
  margin: 4rem 0;
  width: 300px;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`
interface Props {
  movieTitle: string;
  movieYear: string;
  movieThumbnail: string;
  errorState: boolean;
}

function MovieInfoCard({movieTitle, movieYear, movieThumbnail, errorState}:Props): JSX.Element {
  return (
    <>
      {movieTitle !== '' && movieYear !== '' && movieThumbnail !== '' && errorState === false
        ? <MovieInfo>
          <Card>
            <CardMedia
              component="img"
              image={movieThumbnail}
              alt={movieTitle}
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
    </>
  );
}

export default MovieInfoCard;
