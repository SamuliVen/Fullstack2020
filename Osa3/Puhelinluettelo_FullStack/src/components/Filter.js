import React from 'react'

const Filter = ({newSearch, handleSearchChange}) => {
    return (
        <div>
            <form>
                filter shown with <input 
                value={newSearch} 
                onChange={handleSearchChange}/>
            </form>
        </div>
    )
}
export default Filter