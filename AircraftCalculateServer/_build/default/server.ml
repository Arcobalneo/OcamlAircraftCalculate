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
      Printf.eprintf "\nUri: %s\nMethod: %s\nHeaders: %s Body: %s" uri meth headers body;
      flush stderr;
      let body_json = Yojson.Basic.from_string body in
      match body_json with
      | (`List l) -> let m = (listify l) in let d = (determinant m) in (Printf.sprintf "%i\n" d)
      | _ -> let s = jsonproc body_json in (Printf.sprintf "%s\n" s)
    )
    >>= fun body -> Server.respond_string ~status:`OK ~body ()
  in
  Printf.eprintf "Server is online\n";
  flush stderr;
  Server.create ~mode:(`TCP (`Port 8086)) (Server.make ~callback ())

let _ = Lwt_main.run server