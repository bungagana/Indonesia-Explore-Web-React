import React, { useEffect } from 'react';
import './css/Game.css'; // For styling

const Game = () => {
    useEffect(() => {
        // Redirect to the external URL
        window.location.href = 'https://66b8bb8fb4d6405c61245faf--ephemeral-phoenix-a5016c.netlify.app/';
    }, []);

    return null; // Optionally, you can display a loading message or spinner here
}

export default Game;
