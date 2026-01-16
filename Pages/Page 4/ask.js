//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    love: "../Assets/love.gif",
    depressed: '../Assets/depressed.gif',
    ori: "../Assets/handsome.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//BG image change while hovering on a button
var body = document.body;

function bg1() {
	body.className = 'yess';
};

function bg2() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Linking to Yes page
function yesFunction() {
    window.location.href = "../Page 5/yes.html";
}

// No button wächst bei jedem Klick
let noClickCount = 0;
function noFunction() {
    noClickCount++;
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');

    // Nach 3 Klicks ändert sich der Text
    if (noClickCount >= 3) {
        noButton.textContent = 'Drück bitte auf Ja :(';
        noButton.style.fontSize = '0.9rem';
        noButton.style.transform = 'scale(1)'; // Reset scale
        yesButton.style.transform = 'scale(1)'; // Reset Yes button too
    } else {
        // Button wird bei jedem Klick größer (langsamer)
        const newSize = 1 + (noClickCount * 0.2);
        noButton.style.transform = `scale(${newSize})`;
        noButton.style.transition = 'transform 0.3s ease';

        // Yes Button wird kleiner
        const yesSize = Math.max(0.6, 1 - (noClickCount * 0.15));
        yesButton.style.transform = `scale(${yesSize})`;
        yesButton.style.transition = 'transform 0.3s ease';
    }
}