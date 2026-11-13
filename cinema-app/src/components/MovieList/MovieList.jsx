import { Film } from 'lucide-react'
import { MovieCard } from '../MovieCard/MovieCard.jsx'
import './MovieList.css'

export function MovieList({ movies }) {
  return (
    <section className="movie-list section-space" id="cartelera" aria-labelledby="movie-list-title">
      <div className="movie-list__intro container" id="estrenos">
        <div><p className="movie-list__eyebrow"><Film size={15} aria-hidden="true" /> En pantalla</p><h2 id="movie-list-title">La cartelera</h2></div>
        <p className="movie-list__note" aria-live="polite">{movies.length} historias para elegir tu próxima función.</p>
      </div>
      {movies.length > 0 ? <div className="movie-list__grid container">{movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}</div> : <p className="movie-list__empty container" aria-live="polite">Muy pronto anunciaremos nuevas funciones.</p>}
    </section>
  )
}
