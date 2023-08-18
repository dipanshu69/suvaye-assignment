import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create a context to share state and functions across components
const DictionaryContext = createContext();

// Custom hook to access the dictionary context
export function useDictionaryContext() {
    return useContext(DictionaryContext);
}

// DictionaryProvider component manages the shared state and provides it to children
export function DictionaryProvider({ children }) {
    // State variables to manage various aspects of the dictionary
    const [selectedInfo, setSelectedInfo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [apiData, setApiData] = useState([]);
    const [verb, setVerb] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState("");
    const [phonetic, setPhonetic] = useState("");
    const [activeTab, setActiveTab] = useState("noun");
    const [lastActiveTab, setLastActiveTab] = useState("noun");

    let debounceTimeOut;

    // Function to fetch data from API with debouncing
    const debouncedFetchApiData = (searchTerm) => {
        clearTimeout(debounceTimeOut);

        debounceTimeOut = setTimeout(async () => {
            try {
                if (searchTerm) {
                    setSelectedInfo([]);
                    setAudioUrl("");
                    setPhonetic("");
                    const response = await fetch(
                        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
                    );
                    const data = await response.json();
                    setApiData(data);
                    if (data[0].phonetic) {
                        setPhonetic(data[0].phonetic);
                    }
                    if (data[0].phonetics && data[0].phonetics.length > 0 && data[0].phonetics[0].audio) {
                        setAudioUrl(data[0].phonetics[0].audio);
                    }
                    console.log(data);
                }
            } catch (error) {
                console.error(error);
                setApiData([]);
            }
        }, 300);
    };

    // Check if a verb is present in the API data
    const isVerbPresent = () => {
        if (apiData && apiData.length > 0) {
            const newArray = apiData[0].meanings;
            for (const item of newArray) {
                if (item.partOfSpeech === "verb") {
                    setVerb(true);
                }
            }
        }
    };

    // Effect to check if a verb is present when API data changes
    useEffect(() => {
        isVerbPresent();
    }, [apiData]);

    // Function to handle displaying definitions based on selected tab
    const handleDefinition = (text) => {
        let textToLower = text.toLowerCase();

        if (textToLower === "verb" && verb) {
            setVerb(true);
            const verbDefinitions = apiData[0].meanings.filter(
                (info) => info.partOfSpeech === textToLower
            );
            setSelectedInfo(verbDefinitions);
        } else {
            setSelectedInfo([]);
        }
    };

    // Function to handle tab clicks
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Effect to display verb definitions when verb is detected
    useEffect(() => {
        if (verb) {
            handleDefinition("verb");
        }
    }, [apiData]);

    // Effect to update the last active tab
    useEffect(() => {
        setLastActiveTab(activeTab);
    }, [activeTab]);

    // Create an object with all context values and functions
    const contextValue = {
        selectedInfo,
        setSelectedInfo,
        inputValue,
        setInputValue,
        apiData,
        debouncedFetchApiData,
        handleDefinition,
        verb,
        isPlaying,
        setIsPlaying,
        audioUrl,
        phonetic,
        activeTab,
        handleTabClick,
        lastActiveTab,
    };

    // Provide the context to the children components
    return (
        <DictionaryContext.Provider value={contextValue}>
            {children}
        </DictionaryContext.Provider>
    );
}
