import React, { useState, useEffect, useRef } from 'react';
import './css/Game.css'; // For styling

const Game = () => {
  const canvasRef = useRef(null);
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [flag, setFlag] = useState(null);
  const [score, setScore] = useState(0);
  const [playerPos, setPlayerPos] = useState(window.innerWidth / 2 - 25);
  const [hasFlag, setHasFlag] = useState(false);

  const canvasWidth = 800;
  const canvasHeight = 600;
  const playerWidth = 50;
  const playerHeight = 10;
  const bulletWidth = 5;
  const bulletHeight = 10;
  const enemyWidth = 50;
  const enemyHeight = 20;
  const flagWidth = 50;
  const flagHeight = 20;

  // Update refs for state variables
  const playerPosRef = useRef(playerPos);
  const bulletsRef = useRef(bullets);
  const enemiesRef = useRef(enemies);

  useEffect(() => {
    playerPosRef.current = playerPos;
  }, [playerPos]);

  useEffect(() => {
    bulletsRef.current = bullets;
  }, [bullets]);

  useEffect(() => {
    enemiesRef.current = enemies;
  }, [enemies]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const drawPlayer = () => {
      ctx.fillStyle = 'blue';
      ctx.fillRect(playerPosRef.current, canvasHeight - playerHeight, playerWidth, playerHeight);
    };

    const drawBullets = () => {
      ctx.fillStyle = 'red';
      bulletsRef.current.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);
      });
    };

    const drawEnemies = () => {
      ctx.fillStyle = 'black';
      enemiesRef.current.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
      });
    };

    const drawFlag = () => {
      if (flag) {
        ctx.fillStyle = 'red'; // For simplicity, using red color
        ctx.fillRect(flag.x, flag.y, flagWidth, flagHeight);
      }
    };

    const updateBullets = () => {
      setBullets(prevBullets =>
        prevBullets
          .map(bullet => ({ ...bullet, y: bullet.y - 5 }))
          .filter(bullet => bullet.y > 0)
      );
    };

    const checkCollisions = () => {
      setBullets(prevBullets => {
        const remainingBullets = [];
        let newScore = score;

        prevBullets.forEach(bullet => {
          let hit = false;
          setEnemies(prevEnemies => {
            return prevEnemies.filter(enemy => {
              if (
                bullet.x < enemy.x + enemyWidth &&
                bullet.x + bulletWidth > enemy.x &&
                bullet.y < enemy.y + enemyHeight &&
                bullet.y + bulletHeight > enemy.y
              ) {
                hit = true;
                newScore += 1;
                return false; // Remove this enemy
              }
              return true; // Keep this enemy
            });
          });

          if (!hit) {
            remainingBullets.push(bullet);
          }
        });

        if (newScore > score) {
          setScore(newScore);
        }

        return remainingBullets;
      });

      if (flag && !hasFlag) {
        setHasFlag(
          bulletsRef.current.some(
            bullet =>
              bullet.x < flag.x + flagWidth &&
              bullet.x + bulletWidth > flag.x &&
              bullet.y < flag.y + flagHeight &&
              bullet.y + bulletHeight > flag.y
          )
        );
      }
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawPlayer();
      drawBullets();
      drawEnemies();
      drawFlag();
      updateBullets();
      checkCollisions();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();
  }, [score, flag, hasFlag]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setPlayerPos(prev => Math.max(prev - 20, 0));
    } else if (event.key === 'ArrowRight') {
      setPlayerPos(prev => Math.min(prev + 20, canvasWidth - playerWidth));
    } else if (event.key === ' ') {
      setBullets(prev => [...prev, { x: playerPos + playerWidth / 2 - bulletWidth / 2, y: canvasHeight - playerHeight - bulletHeight }]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPos]);

  useEffect(() => {
    const generateEnemies = () => {
      const numEnemies = 5;
      const newEnemies = [];
      for (let i = 0; i < numEnemies; i++) {
        newEnemies.push({
          x: Math.random() * (canvasWidth - enemyWidth),
          y: Math.random() * (canvasHeight / 2 - enemyHeight)
        });
      }
      setEnemies(newEnemies);
    };

    const generateFlag = () => {
      setFlag({
        x: Math.random() * (canvasWidth - flagWidth),
        y: Math.random() * (canvasHeight / 2 - flagHeight)
      });
    };

    generateEnemies();
    generateFlag();
  }, []);

  return (
    <div className="game-container">
      <h1>Freedom Quest: The Road to Independence</h1>
      <p>Score: {score}</p>
      <p>{hasFlag ? "You've collected the flag!" : "Collect the flag to win!"}</p>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: '2px solid black' }}
      />
    </div>
  );
};

export default Game;
