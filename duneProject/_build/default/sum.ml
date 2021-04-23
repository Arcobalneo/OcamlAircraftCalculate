open Base
open Stdio
open Owl
(* dune build sum.exe *)
let x = Arr.sequential [|3;3;3|] 
let y = Owl.Maths.sin 1.0
let z = Arr.sin x
(* let () = printf "Total: %f YES\n" y  *)
let rec read_and_accumulate accum =
  let line = In_channel.input_line In_channel.stdin in
  match line with
  | None -> accum
  | Some x -> read_and_accumulate (accum +. Float.of_string x)

let () =
  printf "Total: %F and %Fhello \n" (read_and_accumulate 0.) y