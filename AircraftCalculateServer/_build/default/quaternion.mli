open Owl
open Angle
type q = {
    q0 : float;
    qv : (float * float * float) ;
}

val showq : q -> unit

val vectorizate : q -> Mat.mat

val mold : q -> float

val normalize : q -> q

val add : q -> q -> q

val sub : q -> q -> q 

val mul : q -> q -> q

val rotation_shaft_angle_tr_q : float*float*float -> angle -> q 

(*生成表示向量旋转的四元数 *)
val get_vector_rotate_q : float*float*float -> float*float*float -> q

val q_tr_mat : q -> Mat.mat

val q_tr_eulerAngle : q -> ruler_angle 