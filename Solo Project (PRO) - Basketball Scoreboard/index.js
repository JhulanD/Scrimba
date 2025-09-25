let homeScore = document.getElementById("home-score")
let newHomeScore = 18

function homeClick(points) {
    newHomeScore += points
    homeScore.textContent = newHomeScore
}

let guestScore = document.getElementById("guest-score")
let newGuestScore = 10

function guestClick(points) {
    newGuestScore += points
    guestScore.textContent = newGuestScore
}

function resetScore() {
    newHomeScore = 0;
    newGuestScore = 0;
    homeScore.textContent = newHomeScore;
    guestScore.textContent = newGuestScore;
}

