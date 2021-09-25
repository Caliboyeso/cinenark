import React from 'react';

// AddFavourite component
const AddFavourite = () => {

    // Returns a heart image so the user can add movies to the favourite list
    return (
        <div>
            {/* A inline container to mark up the movie poster */}
            <span className='mr-2'>Add to Favourites</span>

            {/* A element container for SVG graphics */}
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                class='bi bi-heart-fill'
                fill='red'
                xmlns='http://www.w3.org/2000/svg'
            >
                {/* Finds the location of the image file */}
                <path 
                    fill-rule='evenodd'
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                />
            </svg>
        </div>
    );
};

// Exporting AddFavourite component
export default AddFavourite;