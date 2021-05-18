open Lwt
open Cohttp
open Cohttp_lwt_unix
open Json_handler

let server =
  let callback _conn req body =
    let uri = req |> Request.uri |> Uri.to_string in
    let meth = req |> Request.meth |> Code.string_of_method in
    let headers = req |> Request.headers |> Header.to_string in
    ( body |> Cohttp_lwt.Body.to_string >|= fun body ->
      Printf.eprintf "\nUri: %s\nMethod: %s\nHeaders: %s Body: %s" uri meth headers body;
      flush stderr;
      let body_json = Yojson.Basic.from_string body in
      let s = jsonproc body_json in (Printf.sprintf "%s\n" s)
    )
    >>= fun body -> Server.respond_string ~status:`OK ~body ()
  in
  Printf.eprintf "Server is online\n";
  flush stderr;
  Server.create ~mode:(`TCP (`Port 8086)) (Server.make ~callback ())

let _ = Lwt_main.run server