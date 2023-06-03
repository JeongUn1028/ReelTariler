const apiKey = 'b69ce63df91b692b402e8436d1099819';
const TMDBURL = 'https://api.themoviedb.org/3/movie';

export async function getMovieKeys(movieId) {
  return await fetch(`
  ${TMDBURL}/${movieId}/videos?api_key=${apiKey}
    `).then((res) => res.json());
}
