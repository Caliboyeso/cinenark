import React from 'react';

// MovieList component
const MovieList = (props) => {
    // This stores a function that adds the selected movie to the favourite list
    const FavouriteComponent = props.favouriteComponent;

    // Returns a list of movies the user searched
    return (
        <div className='MovieList'>
            {/* Rendering an array of movies */}
            {props.movies.map((movie, index) => (
                // Bootstrap flexbox container
                <div className='image-container d-flex justify-content-start m-3'>
                    {/* Image tag to display the movie poster */}
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => props.handleFavouriteClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </div>
    );
};

// Exporting MovieList component
export default MovieList;