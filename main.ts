basic.forever(function () {
    if (input.compassHeading() > 120) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 0, magicbit.Motors.M1, 50)
    }
    if (input.compassHeading() < 60) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 50, magicbit.Motors.M1, 0)
    }
})
