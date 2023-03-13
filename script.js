const players = [
    document.getElementById("player1"),
    document.getElementById("player2"),
    document.getElementById("player3"),
    document.getElementById("player4"),
    document.getElementById("player5")
  ];
  
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  
  let intervalId = null;
  let isPlaying = false;
  
  function movePlayers() {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const left = parseInt(player.style.left) || 0;
      const random = Math.floor(Math.random() * 10);
      player.style.left = `${left + random}px`;
      if (left > 1333) {
        clearInterval(intervalId);
        isPlaying = false;
        alert(`Player ${i+1} wins!`);
        break;
      }
    }
  }
  
  function startGame() {
    if (isPlaying) return;
    isPlaying = true;
    intervalId = setInterval(movePlayers, 100);
  }
  
  function restartGame() {
    clearInterval(intervalId);
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      player.style.left = "0";
    }
    isPlaying = false;
  }
  
  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);
  