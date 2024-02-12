//what is the color of the traffic light?

var color = "blue"
if (color == "red") {
    console.log("Stop")
} else if (color == "yellow") {
    console.log("Get ready")
} else if (color == "green"){
    console.log("Go")
} else {
    console.log("invalid color")
}

//What is the season of the year?

var season = "autumn"
if (season == "spring") {
    console.log("Enjoy the blooming flowers")
} else if (season == "summer") {
    console.log("Have fun in the sun")
} else if (season == "autumn" || season == "fall") {
    console.log("Admire the colorful leaves") 
} else if (season == "winter") {
    console.log("Bundle up and stay warm") 
} else {
    console.log("invalid season")
}

//what is the score in a game?

var score = 103
if (score <= 50) {
    console.log("You need to improve")
} else if (score > 50 && score <= 70) {
    console.log("Good job!")
} else if (score > 70 && score <= 100) {
    console.log("Excellent performance!")
} else {
    console.log("Invalid score")
}