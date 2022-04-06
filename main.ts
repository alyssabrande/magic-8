input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 3)
    if (randomNumber == 0) {
        basic.showString("Yes")
    } else if (randomNumber == 1) {
        basic.showString("No")
    } else if (randomNumber == 2) {
        basic.showString("Maybe")
    } else if (randomNumber == 3) {
        basic.showString("Probably Not")
    }
})
let randomNumber = 0
basic.showString("Ask A ??")
basic.forever(function () {
	
})
