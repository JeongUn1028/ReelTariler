export const getMovieList = async (movieId) => {
  return await fetch(`
        ${process.env.REACT_APP_YOUTUBE_URL}videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=${movieId}&maxResults=15&part=id,snippet
    `).then((res) => res.json());
};
