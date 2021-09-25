import React from 'react';

// MovieListHeading component
const MovieListHeading = (props) => {

    // Returns a h1 heading tag
    return (
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    );
};

// Exporting MovieListHeading component
export default MovieListHeading;