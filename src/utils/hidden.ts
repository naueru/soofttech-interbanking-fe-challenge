declare global {
  interface Window {
    playerHp: number;
    enemyHp: number;
    play: () => void;
  }
}

let playerHp = 10;
let enemyHp = 10;

console.log("%cDETENTE", "color: red; font-size: 40px; font-weight: bold;");
console.log(
  "%cAcá no hay errores pero si un jueguito. Probá ejecutar la función play()",
  "color: green; font-size: 16px;"
);

function play() {
  const rndDmg = () => Math.floor(Math.random() * 3) + 1;
  while (playerHp > 0 && enemyHp > 0) {
    const action = confirm(`
      -Tu vida: ${playerHp}.
      -Vida enemigo: ${enemyHp}.

      ¿Quieres atacar?
    `);

    if (action === true) {
      const playerDmg = rndDmg();
      enemyHp -= Math.min(playerDmg, enemyHp);
      alert(`
        Atacas al enemigo por ${playerDmg}. ${
        playerDmg === 3 ? "¡CRITICO!" : ""
      }

        Vida enemigo ahora: ${enemyHp}`);
    } else {
      alert("No atacas.");
    }
    if (enemyHp <= 0) {
      alert("¡Ganaste! Encontraste a tu nuevo programador!");
      return;
    }
    const enemyDmg = rndDmg();
    playerHp -= Math.min(enemyDmg, playerHp);
    alert(`
      El enemigo te ataca por ${enemyDmg}. ${enemyDmg === 3 ? "¡CRITICO!" : ""}

      Tu vida ahora: ${playerHp}
    `);

    if (playerHp <= 0) {
      alert("Perdiste...");
    }
  }
  if (playerHp <= 0 || enemyHp <= 0) {
    alert("El juego terminó pero ya encontraste a tu nuevo programador.");
    playerHp = 10;
    enemyHp = 10;
  }
  if (confirm("¿Deseas jugar de nuevo?")) {
    play();
  } else {
    return;
  }
}

window.playerHp = playerHp;
window.enemyHp = enemyHp;
window.play = play;
