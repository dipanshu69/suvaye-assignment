import React from 'react';
import DefinitionOfVerb from "../../components/Definition/DefinitionOfVerb/DefinitionVerb.component"; // Import the DefinitionOfVerb component
import DefinitionOfNoun from "../../components/Definition/DefinitionOfNoun/DefinitionNoun.component"; // Import the DefinitionOfNoun component
import PlayButton from "../../components/PlayButton/PlayButton.component"; // Import the PlayButton component
import Tabs from "../../components/Tabs/tabs.components"; // Import the Tabs component
import "./container.styles.css"; // Import the CSS file for styling
import { useDictionaryContext } from '../../Context/Dictionary.context'; // Import the custom context hook

// Define the Container component
const Container = () => {
    // Use the custom context hook to access shared context values and functions
    const { verb, inputValue, handleTabClick, activeTab, lastActiveTab } = useDictionaryContext();

    return (
        <div className="dictionary-container"> {/* Apply a CSS class for styling */}
            <PlayButton /> {/* Render the PlayButton component */}
            {/* Check if inputValue is not empty */}
            {inputValue.length !== 0 ? (
                <div className="tabs-container">
                    {/* Render the noun and verb tabs */}
                    <Tabs
                        text="noun"
                        bgColor="#0D0D0D"
                        textColor="#fff"
                        active={activeTab === "noun"}
                        onClick={() => handleTabClick("noun")}
                    />
                    <Tabs
                        text="verb"
                        bgColor="#0D0D0D"
                        textColor="#fff"
                        active={activeTab === "verb"}
                        onClick={() => handleTabClick("verb")}
                    />
                </div>
            ) : null}
            {/* Render the appropriate definition component based on verb and activeTab */}
            {inputValue.length !== 0 &&
                (verb && lastActiveTab === "verb" ? (
                    <DefinitionOfVerb /> // Render the DefinitionOfVerb component
                ) : (
                    <DefinitionOfNoun /> // Render the DefinitionOfNoun component
                ))}
        </div>
    )
}

export default Container; // Export the Container component
