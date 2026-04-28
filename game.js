const SWF_URL = "game/fancypants.swf";

let playerInstance;

function showError(message) {
  const errorPanel = document.getElementById("error-panel");
  errorPanel.textContent = message;
  errorPanel.classList.remove("hidden");
}

function hideError() {
  document.getElementById("error-panel").classList.add("hidden");
}

function focusPlayer() {
  if (!playerInstance) {
    return;
  }

  playerInstance.tabIndex = 0;
  playerInstance.focus({ preventScroll: true });
}

async function loadGame() {
  const container = document.getElementById("player-container");
  hideError();
  container.replaceChildren();

  try {
    const ruffle = window.RufflePlayer?.newest?.();

    if (!ruffle) {
      throw new Error("Ruffle could not be initialized.");
    }

    const player = ruffle.createPlayer();
    player.style.width = "100%";
    player.style.height = "100%";
    container.appendChild(player);

    await player.ruffle().load({
      url: SWF_URL,
      autoplay: "on",
      unmuteOverlay: "hidden",
      splashScreen: false,
      backgroundColor: "#000000",
      letterbox: "fullscreen",
      quality: "high",
      scale: "showAll",
      wmode: "opaque"
    });

    playerInstance = player;
    focusPlayer();
  } catch (error) {
    console.error("Fancy Pants failed to load", error);
    showError("Fancy Pants could not be started in this tab. Reload the extension tab and try again.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("pointerdown", focusPlayer, { passive: true });
  window.addEventListener("keydown", focusPlayer);
  loadGame();
});
