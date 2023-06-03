import { YOUTUBEURL, apiKey } from './apis';

export const getMovieList = async (movieId) => {
  return await fetch(`
        ${YOUTUBEURL}videos?key=${apiKey}&id=${movieId}&maxResults=15&part=id,snippet
    `).then((res) => res.json());
};
