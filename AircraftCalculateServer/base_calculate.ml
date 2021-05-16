open Owl

let mechanical_power ~output_torque ~propeller_speed = Maths.mul output_torque propeller_speed
let propeller_power_effect ~pull ~mechanical_power = Maths.div pull mechanical_power
let electric_power ~motor_input_voltage ~effective_current = Maths.mul motor_input_voltage effective_current
let motor_efficiency ~mechanical_power ~electric_power = Maths.div mechanical_power electric_power
let total_power_effect ~propeller_pull ~input_electric_power = Maths.div propeller_pull input_electric_power
let discharge_rate ~discharge_current ~capacity = Maths.div discharge_current capacity