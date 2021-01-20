def on_forever():
    if input.compass_heading() > 120:
        magicbit.motor_run_dual(magicbit.Motors.M1, 0, magicbit.Motors.M1, 50)
    if input.compass_heading() < 60:
        magicbit.motor_run_dual(magicbit.Motors.M1, 50, magicbit.Motors.M1, 0)
    if input.compass_heading() < 60:
        magicbit.motor_run_dual(magicbit.Motors.M1, 50, magicbit.Motors.M1, 0)
basic.forever(on_forever)
