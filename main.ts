basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P2) < 20 && magicbit.Ultrasonic(DigitalPin.P2) > 2) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -200, magicbit.Motors.M2, 200)
        basic.pause(500)
    }
    magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, 255)
})
