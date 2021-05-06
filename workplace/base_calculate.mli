(*机械功率(单位: W)=输出力矩(单位: N/m)×螺旋桨转速(单位: rad/s) *)
val mechanical_power : output_torque:float -> propeller_speed:float -> float
(*螺旋桨力效(单位:g/W)=拉力(单位: g)/(机械功率(单位: W)) *)
val propeller_power_effect : pull:float -> mechanical_power:float -> float
(*电功率(单位: W)=电机输入电压(单位: V)×有效电流(单位: A) *)
val electric_power : motor_input_voltage:float -> effective_current:float -> float
(*电机效率=机械功率(单位: W)/(电功率(单位: W)) *)
val motor_efficiency : mechanical_power:float -> electric_power:float -> float
(*总力效(单位:g/W)=螺旋桨拉力(单位: g)/(输入电功率(单位: W)) = 螺旋桨力效×电机效率 *)
val total_power_effect : propeller_pull:float -> input_electric_power:float -> float
(*放电倍率(单位: C)=放电电流(单位: mA)/(容量(单位: mAh)) *)
val discharge_rate : discharge_current:float -> capacity:float -> float