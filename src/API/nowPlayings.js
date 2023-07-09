export async function nowPlayings(page) {
  return await fetch(`
        ${process.env.REACT_APP_TMDB_URL}/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&region=KR&page=${page}
    `).then((res) => res.json());
}
