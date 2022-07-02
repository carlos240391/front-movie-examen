import React from 'react';
import { IMovie } from 'src/models/MovieModels';

interface IPropsBodyDescription {
  movie: IMovie;
}
const BodyDescription = (props: IPropsBodyDescription) => {
  const {
    movie: { movieName, sinopsis, trailer },
  } = props;
  return (
    <>
      <h1>{movieName}</h1>
      <br />
      <p>{sinopsis}</p>
      <br />
      <h1>Trailer</h1>
      <br />
      <iframe
        style={{ borderRadius: '10px', marginBottom: '50px' }}
        width="100%"
        height="415"
        src={trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default BodyDescription;
