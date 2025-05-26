declare global {
  interface Window {
    playerHp: number;
    enemyHp: number;
    play: () => void;
  }
}

let playerHp = 10;
let enemyHp = 10;

function play() {
  if (playerHp <= 0 || enemyHp <= 0) {
    alert("El juego terminó pero tal ya a tu nuevo programador.");
    return;
  }

  const action = confirm(
    `Tu vida: ${playerHp}\nVida enemigo: ${enemyHp}\n¿Quieres atacar? (sí/no)`
  );

  if (action === true) {
    enemyHp -= 3;
    alert("Atacas al enemigo. Vida enemigo ahora: " + enemyHp);
  } else {
    alert("No atacas.");
  }
  if (enemyHp <= 0) {
    alert("¡Ganaste! Encontraste a tu nuevo programador!");
    return;
  }

  playerHp -= 2;
  alert("El enemigo te ataca. Tu vida ahora: " + playerHp);

  if (playerHp <= 0) {
    alert("Perdiste...");
  }
}

window.playerHp = playerHp;
window.enemyHp = enemyHp;
window.play = play;
