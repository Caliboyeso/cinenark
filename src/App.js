import React, { useEffect, useState } from 'react';
// Importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// App.css
import './App.css';
// MovieListHeading component
import MovieListHeading from './components/MovieListHeading/MovieListHeading';
// MovieList component
import MovieList from './components/MovieList/MovieList';
// AddFavourite component
import AddFavourite from './components/AddFavourite/AddFavourite';
// RemoveFavourite component
import RemoveFavourite from './components/RemoveFavourites/RemoveFavourites';
// SearchBox component
import SearchBox from './components/SearchBox/SearchBox';

// App component
const App = () => {

    // A state object that stores the movies the user searched
    const [movies, setMovies] = useState([]);

    // A state object that stores the users favourite movies
    const [favourites, setFavourites] = useState([]);

    // A state object that stores the user input
    const [searchValue, setSearchValue] = useState('');

    // This calls the omdbapi and it returns the HTTP response into JSON format
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d946c3cd`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    // A uesEffect hook that calls the getMovieRequest funcion when the user starts typing
    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue]);

    // A useEffect hook that stores the user favourite movies in JSON format
    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('favourite-movies')
        );
        if (movieFavourites) {
            setFavourites(movieFavourites)
        }
    }, []);

    // This function stores the user favourite movies to the local storage
    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourite-movies', JSON.stringify(items));
    };

    // 
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        alert(movie.Title + " has been added.")
    }

    // 
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
        alert(movie.Title + " has been removed.")
    };

    // Returns all components
    return (
        // Bootstrap container 
        <div className='container-fluid movie-app'>

            {/* Bootstrap row flex container for search input */}
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            {/* Bootstrap row of movies the user searched for */}
            <div className='row'>
                <MovieList movies={movies} handleFavouriteClick={addFavouriteMovie} favouriteComponent={AddFavourite} />
            </div>

            {/* Bootstrap row flex container for favourite movie section */}
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Favourites" />
            </div>

            {/* Bootstrap row of favourite movies */}
            <div className='row'>
                <MovieList movies={favourites} handleFavouriteClick={removeFavouriteMovie} favouriteComponent={RemoveFavourite} />
            </div>
        </div>
    );
};

// Exporting App component 
export default App;