(*matrix calculate *)
open Angle
open Owl
type arr2 = float list list
type pos = {
  x:float;
  y:float;
  z:float;
}

(*将pos类型转换为矩阵用于运算 *)
val pos2mat : pos -> Mat.mat
val mat2pos : Mat.mat -> pos
(*机体坐标系(B)到地球固连坐标系(E)旋转矩阵 *)
val arr2_B2E : theta:angle -> phi:angle -> psi:angle -> arr2
(*地球固连坐标系(E)到机体坐标系(B)旋转矩阵 *)
val arr2_E2B : theta:angle -> phi:angle -> psi:angle -> arr2
(*机体坐标系(B)到气流坐标系(A)旋转矩阵 *)
val arr2_B2A : alpha:angle -> beta:angle -> arr2

val pos_tr_B2A : pos -> alpha:angle -> beta:angle -> pos

val pos_tr_B2E : pos -> theta:angle -> phi:angle -> psi:angle -> pos
val pos_tr_E2B : pos -> theta:angle -> phi:angle -> psi:angle -> pos

val map_arr2: f:(angle -> angle) -> arr2 -> arr2
val iter_arr2 : f:(angle -> unit) -> arr2 -> unit
val show_arr2 : arr2 -> unit
val get_arr2elt : int -> int -> arr2 -> float

val creat_mat_byarr2 : arr2 -> Mat.mat
val show_mat : Mat.mat -> unit



