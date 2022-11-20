import styled from "styled-components"
import { Fragment } from "react"

const Message = styled.span`
  font-size: 40px;
  font-weight: 300;
  margin: 8rem 10px 0 10px;

  span {
    font-weight: bold;
    color: #7ae8c5;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 4rem;
    max-width: 300px;
  }
`

function Messages({movieTitle, movieYear, movieThumbnail, errorState}) {

  return (
    <Fragment>
      {movieTitle === '' && movieYear === '' && movieThumbnail === '' && errorState === true
        ? <Message>Please enter correct title of the <span>movie</span></Message>
        : null
      }

      {movieTitle === '' && movieYear === '' && movieThumbnail === '' && errorState === false
        ? <Message>Please enter <span>movie</span> you are looking for</Message>
        : null
      }
    </Fragment>
  );
}

export default Messages;
