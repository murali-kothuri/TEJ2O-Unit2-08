/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Feb 2026
 * This program turns an RGB LED on using circuits.
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when Button A is pressed, scroll text and RGB light turned on
input.onButtonPressed(Button.A, function () {
    // Red
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("RED")
    basic.pause(1000)

    // Green
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("GREEN")
    basic.pause(1000)

    // Blue
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("BLUE")
    basic.pause(1000)

    // Yellow (Red + Green)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("YELLOW")
    basic.pause(1000)

    // Cyan (Green + Blue)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("CYAN")
    basic.pause(1000)

    // Magenta (Red + Blue)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("MAGENTA")
    basic.pause(1000)

    // White (Red + Green + Blue)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("WHITE")
    basic.pause(1000)

    // Turn OFF everything
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
})
