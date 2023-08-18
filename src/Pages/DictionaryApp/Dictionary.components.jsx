import React from "react";
import SearchBox from "../../components/SearchBox/searchBox.component"; // Import the SearchBox component
import { Link } from "react-router-dom"; // Import Link component for navigation
import Container from "../../components/container/container.component"; // Import the Container component
import "./Dictionary.styles.css"; // Import the CSS file for styling

// Define the Dictionary component
const Dictionary = () => {
    return (
        <div>
            {/* Link to the "dictionary" route with a heading and logo */}
            <Link to="/dictionary" className="heading">
                <img src="/company-logo-ideas-32529.png" alt="logo" />
                <h1>Suvaye Dictionary</h1>
            </Link>
            {/* Render the SearchBox component */}
            <SearchBox />
            {/* Render the Container component */}
            <Container />
        </div>
    );
};

export default Dictionary; // Export the Dictionary component
