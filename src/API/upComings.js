const apiKey = 'b69ce63df91b692b402e8436d1099819';
const TMDBURL = 'https://api.themoviedb.org/3/movie';

export async function upComings() {
  return await fetch(`
        ${TMDBURL}/upcoming?api_key=${apiKey}&language=ko&page=1&region=KR
    `).then((res) => res.json());
}
