import { YOUTUBEURL, apiKey } from './apis';

export async function getMovieList(movieId) {
  const moviesId = movieId.replace('"', '');
  return await fetch(`
        ${YOUTUBEURL}videos?key=${apiKey}&id=${moviesId}&maxResults=15&part=id,snippet
    `).then((res) => res.json());

  // return Promise.resolve(`${YOUTUBEURL}videos?key=${apiKey}&id=${moviesId}&maxResults=15&part=id,snippet
  // `);
}
