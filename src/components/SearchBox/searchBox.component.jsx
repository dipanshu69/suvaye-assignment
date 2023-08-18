import React from "react";
import { useDictionaryContext } from "../../Context/Dictionary.context"; // Import the custom context hook
import "./searchBox.styles.css"; // Import the CSS file for styling

// Define the SearchBox component
const SearchBox = () => {
    // Use the custom context hook to access shared context values and functions
    const { inputValue, setInputValue, debouncedFetchApiData } = useDictionaryContext();

    // Handle Enter key press event
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            debouncedFetchApiData(inputValue); // Call the debouncedFetchApiData function on Enter key press
        }
    }

    // Handle search button click
    const handleSearch = () => {
        debouncedFetchApiData(inputValue); // Call the debouncedFetchApiData function on search button click
    }

    return (
        <div className="search-container"> {/* Apply a CSS class for styling */}
            <button onClick={handleSearch}><i className='bx bx-search'></i></button> {/* Render a button for search */}
            <input
                type="text"
                value={inputValue} // Set the input value to the inputValue from the context
                onKeyDown={handleKeyPress} // Attach the handleKeyPress function to the onKeyDown event
                onChange={(e) => setInputValue(e.target.value)} // Update the inputValue in the context on input change
                placeholder="Enter search term" // Placeholder text for the input
            />
        </div>
    );
};

export default SearchBox; // Export the SearchBox component
