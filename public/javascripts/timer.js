// // Set Final Value for Countdown Timer
// var countDownTo = 0;

// // Get Starting Value of Countdown Timer
// var startCountDownAt = 10;

// var countDown = () => {
// 	// Display the result in the element with id="clockDisplay"
// 	document.getElementById("clockDisplay").innerHTML = startCountDownAt;

// 	if(startCountDownAt === countDownTo){
// 		return startCountDownAt
// 	}

// 	// Decrement Current Countdown Value
// 	startCountDownAt -= 1;
// }

var id;

function moveBar() {
	var elem = document.getElementById("progressBar"); 
	var width = 0;
	clearInterval(id)
    id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width += .5; 
            elem.style.width = width + '%'; 
        }
    }
}

