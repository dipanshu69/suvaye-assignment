import React from 'react';
import "./tabs.styles.css"; // Import the CSS file for styling
import { useDictionaryContext } from '../../Context/Dictionary.context'; // Import the custom context hook

// Define the Tabs component
const Tabs = ({ text, bgColor, textColor, active, onClick, verb }) => {
    // Use the custom context hook to access shared context functions
    const { handleDefinition } = useDictionaryContext();

    // Check if the "verb" button should be disabled
    const isVerbButtonDisabled = text === "verb" && verb;

    // Define button style based on active status and provided colors
    const buttonStyle = {
        backgroundColor: active ? bgColor : '#ffffff',
        color: active ? textColor : "#0D0D0D",
    };

    // Handle button click
    const handleClick = () => {
        // If the "verb" button is not disabled, perform the following actions
        if (!isVerbButtonDisabled) {
            onClick(); // Call the onClick function passed as a prop
            handleDefinition(text); // Call the handleDefinition function from the context
        }
    }

    return (
        <div>
            {/* Render a button with provided styles */}
            <button
                onClick={handleClick} // Attach the handleClick function to the button's onClick event
                className='btn'
                style={{ ...buttonStyle, opacity: isVerbButtonDisabled ? 0.5 : 1 }} // Apply button style and set opacity if the verb button is disabled
            >
                {text} {/* Display the text inside the button */}
            </button>
        </div>
    );
}

export default Tabs; // Export the Tabs component
