
export function MoviesList(props) {
  return (
    <div className="movie-box">
      <img src={props.image} alt="banner-movie" />
      <article>
        <span>Title: {props.title}</span>
        <span>Year: {props.year}</span>
        <span>Runtime: {props.runtime}</span>
        <span>Genres: {props.genres}</span>
        <span>IMDB Rating: {props.imdbRating}</span>
        <span>IMDB Votes: {props.imdbVoting}</span>
      </article>
    </div>
  );
}