import "./App.css";
import { MoviesList } from "./component/MovieList";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1>Movie list Section</h1>
        {movies.map((movie, index) => {
          return (
            <MoviesList
              key={index}
              image={movie.image}
              title={movie.title}
              year={movie.year}
              runtime={movie.runtime}
              imdbRating={movie.imdbRating}
              imdbVoting={movie.imdbVotes}
              genres={movie.genres.map((genre) =>
               <a>{genre}</a>
              )}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
