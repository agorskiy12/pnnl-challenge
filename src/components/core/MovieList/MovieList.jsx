import React from 'react';
import LayoutMovieGrid from '../Layout/LayoutMovieGrid';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieList.module.css';

export default function MovieList({ title, movies = [], watchList = [], actionProps = {}, noMoviesLabel = 'Add some movies...'}) {

    return (
        <div className={styles.movieList}>
            <h2>{title}</h2>
            <LayoutMovieGrid>
                {Array.isArray(movies) && movies.length > 0 ? movies.map(movie => <MovieCard movie={movie} watchList={watchList} actionProps={actionProps} />) : <p>{noMoviesLabel}</p>}
            </LayoutMovieGrid>
        </div>
    )
}