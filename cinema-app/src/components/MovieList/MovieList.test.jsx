import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { movies } from '../../data/movies.js'
import { MovieList } from './MovieList.jsx'

describe('MovieList', () => {
  it('renders one movie card for each movie passed through props', () => {
    render(<MovieList movies={movies.slice(0, 3)} />)

    expect(screen.getByRole('region', { name: 'La cartelera' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
