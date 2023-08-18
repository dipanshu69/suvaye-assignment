import React from 'react';
import "./DictionaryPage.styles.css"; // Import the CSS file for styling
import Container from '../../components/container/container.component'; // Import the Container component
import { useDictionaryContext } from '../../Context/Dictionary.context'; // Import the custom context hook

// Define the DictionaryPage component
const DictionaryPage = () => {
    // Use the custom context hook to access shared context values
    const { inputValue } = useDictionaryContext();

    return (
        <div className='dictionaryPage-container'> {/* Apply a CSS class for styling */}
            <h4>Word : {inputValue}</h4> {/* Display the inputValue from the context */}
            <Container /> {/* Render the Container component */}
        </div>
    );
}

export default DictionaryPage; // Export the DictionaryPage component
