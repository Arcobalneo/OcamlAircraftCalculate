(* open Owl
   open Stdio
   open Core

   (* ocamlfind ocamlopt -linkpkg -package owl -package stdio test.ml -o testing.out *)
   let x = Arr.sequential [|3;3;3|] 
   let y = Owl.Maths.sin 45.0
   let z = Arr.sin x
   let () = printf "Total: %f YES\n" y *)

(* open Base
   open Stdio
   let rec read_and_accumulate accum =
   let line = In_channel.input_line In_channel.stdin in
   match line with
   | None -> accum
   | Some x -> read_and_accumulate (accum +. Float.of_string x)

   let () =
   printf "Total: %F\n" (read_and_accumulate 0.) *)

(* quicksort test *)
(* open Stdio
let rec quicksort = function
  | [] -> []
  | x::xs ->
    let smaller, larger = List.partition (fun y -> y < x) xs
    in quicksort smaller @ (x::quicksort larger);;

List.iter (fun x -> Printf.printf "%d \n" x) (quicksort [2; 3; 1; 1; 7; 11;]);;

let y = Owl.Maths.sin 45.0
let () = printf "Total: %f YES\n" y *)

(* owl test *)
(* ocamlfind ocamlopt -linkpkg -package [libname] *)

(* open Matrix
let check_case1 = arr2_Reb ~phi:45. ~psi:45. ~theta:(-.90.);;
let check_case2 =  arr2_Reb ~phi:45. ~psi:45. ~theta:(90.);;
let new_matrix = creat_mat_byarr2 check_case1
let new_matrix2 = creat_mat_byarr2 check_case2
let () = show_arr2 check_case1;
         show_arr2 check_case2;
         show_mat new_matrix;
         print_endline "\n";
         show_mat new_matrix2; *)
         
open Matrix

(* let x = Mat.create 2 3 2.
let y = Mat.create 3 2 1.

let mul_test = Mat.(x *@ y)

let () = show_mat x;show_mat y; show_mat mul_test *)

let test_pos = {x = 1.; y = 2.; z = 3.}
let res_pos = pos_tr_B2A test_pos ~alpha:45. ~beta:45.
let () = Printf.printf "pos is (%f, %f, %f)\n" res_pos.x res_pos.y res_pos.z



