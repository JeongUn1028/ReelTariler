const apiKey = 'b69ce63df91b692b402e8436d1099819';
const TMDBURL = 'https://api.themoviedb.org/3/movie';

export async function nowPlayings(page) {
  return await fetch(`
        ${TMDBURL}/now_playing?api_key=${apiKey}&language=ko&region=KR&page=${page}
    `).then((res) => res.json());
}
