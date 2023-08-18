import React, { useRef } from "react";
import { useDictionaryContext } from "../../Context/Dictionary.context"; // Import the custom context hook
import "./playButton.styles.css"; // Import the CSS file for styling

// Define the PlayButton component
const PlayButton = () => {
    const audioRef = useRef(null); // Create a reference to the audio element

    // Use the custom context hook to access shared context values and functions
    const { isPlaying, setIsPlaying, audioUrl, phonetic, inputValue } = useDictionaryContext();

    // Function to toggle audio playback and update the isPlaying state
    const handleTogglePlayback = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Pause the audio if it's playing
        } else {
            audioRef.current.play(); // Play the audio if it's paused
        }
        setIsPlaying(!isPlaying); // Update the isPlaying state
    };

    // Function to handle audio playback ending
    const handleAudioEnded = () => {
        setIsPlaying(false); // Set isPlaying to false when audio playback ends
    };

    return (
        <div>
            {inputValue ? (
                <div className="play-button-container"> {/* Apply a CSS class for styling */}
                    <button className="play-button" onClick={handleTogglePlayback}>
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        )}
                    </button>
                    {/* Audio element for playing the pronunciation */}
                    <audio ref={audioRef} src={audioUrl} onEnded={handleAudioEnded} />
                    <h3>{phonetic}</h3> {/* Display the phonetic transcription */}
                </div>
            ) : null}
        </div>
    );
};

export default PlayButton; // Export the PlayButton component
