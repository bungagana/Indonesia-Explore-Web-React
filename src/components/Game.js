import React, { useEffect } from 'react';
import './css/Game.css'; // For styling

const Game = () => {
    useEffect(() => {
        // Redirect to the external URL
        window.location.href = 'https://chic-empanada-8387a6.netlify.app/';
    }, []);

    return null; // Optionally, you can display a loading message or spinner here
}

export default Game;
