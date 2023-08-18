import React from "react";
import { useDictionaryContext } from "../../../Context/Dictionary.context"; // Import the custom context hook
import "./DefinitionNoun.styles.css"; // Import the CSS file for styling

// Define the DefinitionOfNoun component
const DefinitionOfNoun = () => {
    // Use the custom context hook to access shared context values
    const { apiData } = useDictionaryContext();

    return (
        <div className="definition-container"> {/* Apply a CSS class for styling */}
            {/* Check if API data is available */}
            {apiData && apiData.length > 0 ? (
                <ol>
                    {/* Render the first two definitions of the noun */}
                    {apiData[0].meanings[0].definitions.slice(0, 2).map((info, index) => (
                        <li key={index}>
                            {/* Display the definition text */}
                            <p className="definition-text">{info.definition}</p>
                        </li>
                    ))}
                </ol>
            ) : (
                // Display a message if no definitions are available
                <p>No definitions available.</p>
            )}
        </div>
    );
};

export default DefinitionOfNoun; // Export the DefinitionOfNoun component
