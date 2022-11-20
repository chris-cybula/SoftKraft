import styled from "styled-components"
import { Fragment } from "react"
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

function Messages(props) {

  return (
    <Fragment>
      {props.movieTitle !== '' && props.movieYear !== '' && props.movieThumbnail !== '' && props.errorState === false
        ? <MovieInfo>
          <Card>
            <CardMedia
              component="img"
              height=""
              image={props.movieThumbnail}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.movieTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.movieYear}
              </Typography>
            </CardContent>
          </Card>
        </MovieInfo>
        : null
      }
    </Fragment>
  );
}

export default Messages;
