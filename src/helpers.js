export function selectGanres(movie, genreArr) {
  const genres = genreArr.filter((genre) => movie.genre_ids.includes(genre.id))
  return genres
}
