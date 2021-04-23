open Stdio;;
open Owl;;
let angle2radian x = Const.pi *. x /. 180.;;
let sin_angle x = 
  let result = Maths.sin (angle2radian x) in 
  if (-.0.0001 < result && result < 0.0001) then 0. else result;;
let cos_angle x = 
  let result = Maths.cos (angle2radian x) in 
  if (-.0.0001 < result && result < 0.0001) then 0. else result;;

(* let sin_angle x = Maths.sin (angle2radian x) 
let cos_angle x = Maths.cos (angle2radian x)  *)

let matrix_Reb ~theta ~phi ~psi= [
  [
    (cos_angle theta) *. (cos_angle psi); 
    (cos_angle psi) *. (sin_angle theta) *. (sin_angle phi) -. (sin_angle psi) *. (cos_angle phi);
    (cos_angle psi) *. (sin_angle theta) *. (cos_angle phi) +. (sin_angle psi) *. (sin_angle phi); 
  ];
  [
    (cos_angle theta) *. (sin_angle psi);
    (sin_angle psi) *. (sin_angle theta) *. (sin_angle phi) +. (cos_angle psi) *. (cos_angle phi);
    (sin_angle psi) *. (sin_angle theta) *. (cos_angle phi) -. (cos_angle psi) *. (sin_angle phi);
  ];
  [
    -.(sin_angle theta);
    (sin_angle phi) *. (cos_angle theta);
    (cos_angle phi) *. (cos_angle theta);
  ];
];;

let rec map_matrix f matrix = 
  match matrix with 
  |hd_list :: tl_list -> List.map f hd_list :: map_matrix f tl_list
  |[] -> []

let rec iter_matrix f matrix = 
  match matrix with 
  |hd_list :: tl_list -> List.iter f hd_list ; iter_matrix f tl_list;
  |[] -> print_endline " "

let check_case1 = matrix_Reb ~phi:45. ~psi:45. ~theta:(90.);;
let final_case1 = map_matrix (fun x -> if (-.0.0001 < x && x < 0.0001) then 0. else x) check_case1;;
let check_case2 =  matrix_Reb ~phi:45. ~psi:45. ~theta:(-.90.);;
let final_case2 = map_matrix (fun x -> if (-.0.0001 < x && x < 0.0001) then 0. else x) check_case2;;