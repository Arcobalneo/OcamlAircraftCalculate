val angle2radian : float -> float
val sin_angle : float -> float
val cos_angle : float -> float
val matrix_Reb : theta:float -> phi:float -> psi:float -> float list list
val map_matrix : ('a -> 'b) -> 'a list list -> 'b list list
val iter_matrix : ('a -> unit) -> 'a list list -> unit
val check_case1 : float list list
val final_case1 : float list list
val check_case2 : float list list
val final_case2 : float list list
