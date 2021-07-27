input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    if (input.compassHeading() >= 316) {
        music.playMelody("A G A B C5 B A G ", 120)
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 316) {
        basic.showString("N")
    } else if (input.compassHeading() >= 46 && input.compassHeading() <= 134) {
        basic.showString("E")
    } else if (input.compassHeading() >= 136 && input.compassHeading() <= 224) {
        basic.showString("S")
    } else if (input.compassHeading() >= 226 && input.compassHeading() <= 314) {
        basic.showString("W")
    } else if (input.compassHeading() == 315) {
        basic.showString("NW")
    } else if (input.compassHeading() == 45) {
        basic.showString("NE")
    } else if (input.compassHeading() == 135) {
        basic.showString("SE")
    } else if (input.compassHeading() == 225) {
        basic.showString("SW")
    } else if (input.compassHeading() <= 44) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
