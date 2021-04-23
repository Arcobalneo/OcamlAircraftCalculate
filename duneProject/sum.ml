open Base
open Stdio
open Owl
(* dune build sum.exe *)
let x = Arr.sequential [|3;3;3|] 
let y = Owl.Maths.sin 1.0
(* 弧度制 *)
let z = Arr.sin x
(* let () = printf "Total: %f YES\n" y  *)
let rec read_and_accumulate accum =
  let line = In_channel.input_line In_channel.stdin in
  match line with
  | None -> accum
  | Some x -> read_and_accumulate (accum +. Float.of_string x)

let () =
  printf "Total: %F and hello \n" y


let show_arr x =  Arr.iter (fun x -> printf "%f \n" x) x;;
let pi = 3.1415926535897932384626433;;
let angle2radian x = pi *. x /. 180.;;
let sin_angle x = sin (angle2radian x);;
let cos_angle x = cos (angle2radian x);;
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
(*theta = θ, phi = φ, psi = ψ *)
(* 打印数组 *)