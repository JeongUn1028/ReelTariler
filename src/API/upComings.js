export async function upComings() {
  return await fetch(`
        ${process.env.REACT_APP_TMDB_URL}/upcoming?api_key=${process.env.REACT_APP_TMDN_API_KEY}&language=ko&page=1&region=KR
    `).then((res) => res.json());
}
