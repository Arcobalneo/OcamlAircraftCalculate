open Angle
open Owl
type arr2 = float list list
type pos = {
  x:float;
  y:float;
  z:float;
}

(*arr2 and matrix base function *) 
let rec map_arr2 ~(f:angle -> angle) (m:arr2) :arr2 = 
  match m with 
  |hd_list :: tl_list -> List.map f hd_list :: map_arr2 ~f:f tl_list
  |[] -> []

let rec iter_arr2 ~(f:angle -> unit) (m:arr2) :unit = 
  match m with 
  |hd_list :: tl_list -> List.iter f hd_list ; iter_arr2 ~f:f tl_list ;
  |[] -> print_endline " "
let get_arr2elt i j arr2 :float = List.nth (List.nth arr2 i) j
let show_arr2(m:arr2)  = iter_arr2 ~f:(fun x -> Printf.printf "%0.1f " x) m
let creat_mat_byarr2 src_arr2 : Mat.mat = 
  let temp_matrix = Mat.create 3 3 0. in 
  Mat.mapi_2d (fun i j a-> (get_arr2elt i j src_arr2) +. a) temp_matrix

let show_mat mat : unit = Mat.iteri_2d (fun i j a -> Printf.printf "(%i,%i) %.1f\n" i j a) mat;print_endline " "

(*aircraft position matrix function *)
let arr2_B2E ~(theta:float) ~(phi:float) ~(psi:float) : arr2= 
  let src_arr2 = [
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
  ] in 
  map_arr2 ~f:check_iszero src_arr2

let arr2_B2A ~(alpha:float) ~(beta:float) : arr2 = 
  let src_arr2 = [
    [
      (cos_angle alpha) *. (cos_angle beta); 
      (sin_angle beta);
      (sin_angle alpha) *. (cos_angle beta); 
    ];
    [
      -.( (cos_angle alpha) *. (sin_angle beta));
      (cos_angle beta);
      -.( (sin_angle alpha) *. (sin_angle beta));
    ];
    [
      -.(sin_angle alpha);
      0.;
      (cos_angle alpha);
    ];
  ] in 
  map_arr2 ~f:check_iszero src_arr2


(*用于矩阵运算*)
let pos2mat pos = 
  let pos_list = [pos.x; pos.y; pos.z] in 
  let temp_mat = Mat.create 3 1 0. in 
  Mat.mapi (fun i a -> a +. (List.nth pos_list i)) temp_mat

let mat2pos obj_mat = 
  let objx = Mat.get obj_mat 0 0 in 
  let objy = Mat.get obj_mat 1 0 in 
  let objz = Mat.get obj_mat 2 0 in 
  {x = objx; y = objy; z = objz;}

let pos_tr_B2A pos ~(alpha:angle) ~(beta:angle) : pos = 
  let pos_mat = pos2mat pos in 
  let tr_arr2 = arr2_B2A ~alpha:alpha ~beta:beta in 
  let tr_mat = creat_mat_byarr2 tr_arr2 in 
  let res_mat = Mat.(tr_mat *@ pos_mat) in 
  mat2pos res_mat

let pos_tr_B2E pos ~(theta:angle) ~(phi:angle) ~(psi:angle) : pos = 
  let pos_mat = pos2mat pos in 
  let tr_arr2 = arr2_B2E ~theta:theta ~phi:phi ~psi:psi in 
  let tr_mat = creat_mat_byarr2 tr_arr2 in 
  let res_mat = Mat.(tr_mat *@ pos_mat) in 
  mat2pos res_mat