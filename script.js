console.log("Script started");

// Variable to track the number of clicks
let clicks = 0;
let clickValue = 1;

// Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

// VAriable to store the level display element
let LevelDisplay = document.getElementById("level-display")

// Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks; 

// Called when the potato is clicked
function handleClick() {
    console.log("click");

    //Add one to click count
    clicks = clicks + 1;

    //Update display
    clickDisplay.innerText = "Clicks:" + clicks;

    // Detect if they reach 10 clicks
    if (clicks == 10){
        alert("Congrats! You reached level 2" );
        LevelDisplay.innerText = "Levl 2";
        clickValue2
    }

    else if (clicks == 50) {
        alert("Congrat! You've reached level 3")
        LevelDisplay.innerText = "Level 3";
        clickValue = 5;
    }

}

    