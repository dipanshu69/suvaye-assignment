import React from "react";
import { useDictionaryContext } from "../../../Context/Dictionary.context"; // Import the custom context hook

// Define the DefinitionOfVerb component
const DefinitionOfVerb = () => {
  // Use the custom context hook to access shared context values
  const { selectedInfo } = useDictionaryContext();

  console.log(selectedInfo); // Log the selectedInfo to the console

  return (
    <div className="definition-container"> {/* Apply a CSS class for styling */}
      {/* Check if selectedInfo contains verb definitions */}
      {selectedInfo && selectedInfo.length > 0 ? (
        <ol>
          {/* Render the first two definitions of the verb */}
          {selectedInfo[0].definitions.slice(0, 2).map((info, idx) => (
            <li key={idx}>
              {" "}
              {/* Display the definition text */}
              <p className="definition-text">{info.definition}</p>
            </li>
          ))}
        </ol>
      ) : (
        // Display a message if no verb definitions are available
        <p className="definition-text">No definitions available.</p>
      )}
    </div>
  );
};

export default DefinitionOfVerb; // Export the DefinitionOfVerb component
