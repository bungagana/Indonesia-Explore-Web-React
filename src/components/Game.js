import React, { useEffect } from 'react';
import './css/Game.css'; // For styling

const Game = () => {
    useEffect(() => {
        // Redirect to the external URL
        window.location.href = 'https://app.netlify.com/sites/mellifluous-ganache-903128/';
    }, []);

    return null; // Optionally, you can display a loading message or spinner here
}

export default Game;
