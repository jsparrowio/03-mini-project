let playerInput = window.prompt("Rock, paper, or scissors?", "R, P, S");
playerInput = playerInput.toUpperCase();

const rps = ["R", "P", "S"];

while (!rps.includes(playerInput)) {
    let playerInput = window.prompt("Not valid, you peasant! Now choose...", "R, P, S");
    playerInput = playerInput.toUpperCase();
}

if (rps.includes(playerInput)) {
    const computerInput = rps[Math.floor(Math.random() * rps.length)];
    if (playerInput === computerInput) {
        console.log("It's a tie!");
    } else if (playerInput === "R" && computerInput === "S" || playerInput === "P" && computerInput === "R" || playerInput === "S" && computerInput === "P") {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}