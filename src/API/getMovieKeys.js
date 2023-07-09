export async function getMovieKeys(movieId) {
  return await fetch(`
  ${process.env.REACT_APP_TMDB_URL}/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}
    `).then((res) => res.json());
}
