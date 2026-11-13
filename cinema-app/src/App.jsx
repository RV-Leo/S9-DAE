import { movies } from './data/movies.js'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { MovieList } from './components/MovieList/MovieList.jsx'

export default function App() {
  const featuredMovie = movies.find((movie) => movie.featured)

  return (
    <>
      <Header />
      <main>
        <Hero movie={featuredMovie} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </>
  )
}
