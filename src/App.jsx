import React, {useState, useEffect} from 'react';
import MovieList from './components/core/MovieList/MovieList';

export default function App() {
    // 🤓 Have state for all movies ([])
    // 🤓 Have state for all movies in the watch list ([])

    // 📜 Use https://swapi.dev/api/films/ to get the movies

    // 🤹‍♂️ Customers want to add movies to their watchlist
    // 🤓 Add a callback to help customers add movies to their watch list

    // 🤹‍♂️ Customers want to remove movies from their watchlist
    // 🤓 Add a callback to help customers remove movies from their watch list

    // 💯 Add a test to <MovieGrid /> (optional)

    const [originals, setOriginals] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect( () => { 
        fetch('https://swapi.dev/api/films')
            .then(response => response.json())
            .then(data => {
                setOriginals(data.results);
            })
            .catch( e => {
                console.error('error', e);
            });
    }, []);


    return (
        <>
            <MovieList title="Originals" movies={originals} actionProps={{
                label: 'Watch List',
                icon: '+',
                onClick: (movie) => {
                    setSaved([...saved, movie]);
                }
            }} />
            <MovieList title="Watch List" movies={saved} actionProps={{
                label: 'Watch List',
                icon: '-',
                onClick: (movie) => {
                    const index = saved.indexOf(movie);
                    const newArray = [...saved];
                    newArray.splice(index,1);
                    setSaved(newArray);
                }
            }} />
        </>
    )
}