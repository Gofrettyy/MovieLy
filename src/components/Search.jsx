import React from 'react'

const Search = (props) => {
    return (
        <div className="search">{props.searchTerm}
        <div>
            <img src="./search.svg" alt="search" />
            <input type="text" placeholder="Search through 1000+ movie"
                   value={props.searchTerm}
                   onChange={(e) => props.setSearchTerm(e.target.value)
                   } />
        </div>
        </div>

    )
}
export default Search
