import React from 'react';

// SearchBox component
const SearchBox = (props) => {

    // Returns a input box
    return (
        <div id="SearchBox" className='SearchBox'>
            {/* A input tag accept user data */}
            <input
                className='col col-sm-4'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            >
            </input>
        </div>
    );
};

// Exporting SearchBox component
export default SearchBox;