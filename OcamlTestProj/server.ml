
(* 测试指令：grep -Eo '[[:alpha:]]+' freq.ml | dune exec ./freq.exe *)
(*
let build_counts () =
  In_channel.fold_lines In_channel.stdin ~init:Counter.empty ~f:Counter.touch

let () =
  build_counts ()
  |> Counter.to_list
  |> List.sort ~compare:(fun (_,x) (_,y) -> Int.descending x y)
  |> (fun counts -> List.take counts 10)
  |> List.iter ~f:(fun (line,count) -> printf "%3d: %s\n" count line) 

let () = print_endline "here is freq.js!"          
 *)

(* 
open Base
open Async_kernel
open Cohttp_async

let getHandler uri = 
  match Uri.path uri with
  | "/test1" ->
      Uri.get_query_param uri "hello1"
      |> Option.map ~f:(fun v -> "content1:" ^ v)
      |> Option.value ~default:"No param hello supplied"
      |> Server.respond_string
  | "/test2" ->
      Uri.get_query_param uri "hello2"
      |> Option.map ~f:(fun v -> "content2: " ^ v)
      |> Option.value ~default:"No param hello supplied"
      |> Server.respond_string
  | _ -> Server.respond_string ~status:`Not_found "Route not found"

let handler ~body:_ _sock req =
  let uri = Cohttp.Request.uri req in
  match req |> Cohttp.Request.meth with
      | `GET -> getHandler uri
      | _ -> Server.respond `Method_not_allowed

let start_server port () =
  Stdio.printf "Listening for HTTP on port %d\n" port;
  Stdio.printf "Try 'curl http://localhost:%d/test?hello=xyz'\n%!" port;
  Cohttp_async.Server.create ~on_handler_error:`Raise
    (Async.Tcp.Where_to_listen.of_port port)
    handler
  >>= fun _ -> Deferred.never ()

let () =
  let module Command = Async_command in
  Command.async_spec ~summary:"Start a hello world Async server"
    Command.Spec.(
      empty
      +> flag "-p"
           (optional_with_default 8080 int)
           ~doc:"int Source port to listen on")
    start_server
  |> Command.run *)
(* 
open Base
open Async_kernel
open Cohttp_async

(* compile with: $ corebuild receive_post.native -pkg cohttp.async *)

let start_server port () =
  Stdio.printf "Listening for HTTP on port %d\n" port;
  Stdio.printf "Try 'curl -X POST -d 'foo bar' http://localhost:%d\n"
    port;
  Cohttp_async.Server.create ~on_handler_error:`Raise
    (Async.Tcp.Where_to_listen.of_port port) (fun ~body _ req ->
      match req |> Cohttp.Request.meth with
      | `POST ->
          Body.to_string body >>= fun body ->
          Stdio.printf "Body: %s" body;
          Server.respond `OK
      | _ -> Server.respond `Method_not_allowed)
  >>= fun _ -> Deferred.never ()

let () =
  let module Command = Async_command in
  Command.async_spec ~summary:"Simple http server that outputs body of POST's"
    Command.Spec.(
      empty
      +> flag "-p"
           (optional_with_default 8086 int)
           ~doc:"int Source port to listen on")
    start_server
  |> Command.run *)

open Lwt
open Cohttp
open Cohttp_lwt_unix
open Yojson
open Deter
open Json_handler
let rec listify (json):int list list = 
  let rec intify (list):int list = 
    match list with 
    | [] -> []
    | (`Int x)::rest -> x::(intify rest)
    | _ -> raise (Json_error "Does not support in intify")
  in match json with 
     | [] -> []
     | (`List l)::rest -> (intify l)::(listify rest)
     | _ -> raise (Json_error "Does not support in listify")
;;

let server =
  let callback _conn req body =
    let uri = req |> Request.uri |> Uri.to_string in
    let meth = req |> Request.meth |> Code.string_of_method in
    let headers = req |> Request.headers |> Header.to_string in
    ( body |> Cohttp_lwt.Body.to_string >|= fun body ->
      Printf.eprintf "Uri: %s\nMethod: %s\nHeaders\nHeaders: %s\nBody: %s" uri meth headers body;
      flush stderr;
      let body_json = Yojson.Basic.from_string body in
      match body_json with
      | (`List l) -> let m = (listify l) in let d = (determinant m) in (Printf.sprintf "%i\n" d)
      | _ -> let s = jsontest body_json in (Printf.sprintf "%s\n" s)
    )
    >>= fun body -> Server.respond_string ~status:`OK ~body ()
  in
  Printf.eprintf "Server is online\n";
  flush stderr;
  Server.create ~mode:(`TCP (`Port 8086)) (Server.make ~callback ())

let _ = Lwt_main.run server