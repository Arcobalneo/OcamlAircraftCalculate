(*angle calculate *)

type angle = float

type radian = float

type ruler_angle = {
    yaw:float;
    pitch:float;
    roll:float;
}

type angle_info = {
    alpha:float;
    beta:float;
    theta:float;
    phi:float;
    psi:float;
}

val angle2radian : angle -> radian

val sin_angle : angle -> float

val cos_angle : angle -> float

val sin_radian : radian -> float

val cos_radian : radian -> float

val check_iszero : float -> float




