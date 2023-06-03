import { createContext, useState } from 'react';

const MovieIdsContext = createContext({
  movieIds: [],
  setMovieIds: () => {},
  deleteMovieId: () => {},
});

const MovieIdsProvider = ({ children }) => {
  const [movieIds, setMovieIds] = useState([]);
  const deleteMovieId = (num) => {
    setMovieIds([...movieIds].filter((e) => e !== num));
  };

  const value = {
    movieIds,
    setMovieIds,
    deleteMovieId,
  };
  return <MovieIdsContext.Provider value={value}>{children}</MovieIdsContext.Provider>;
};

const { Consumer: MovieIdsConsumer } = MovieIdsContext;

export { MovieIdsProvider, MovieIdsConsumer };
export default MovieIdsContext;
