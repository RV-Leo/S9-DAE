import { Star } from 'lucide-react'
import './MovieCard.css'

export function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster-wrap"><img className="movie-card__poster" src={movie.poster} alt={`Póster de ${movie.title}`} loading="lazy" /></div>
      <div className="movie-card__body">
        <div className="movie-card__heading"><h3 className="movie-card__title">{movie.title}</h3><span className="movie-card__rating" aria-label={`Valoración ${movie.rating} de 10`}><Star size={14} fill="currentColor" aria-hidden="true" />{movie.rating.toFixed(1)}</span></div>
        <div className="movie-card__showtimes" aria-label={`Horarios de ${movie.title}`}>{movie.showtimes.map((time) => <span className="movie-card__time" key={time}>{time}</span>)}</div>
      </div>
    </article>
  )
}
