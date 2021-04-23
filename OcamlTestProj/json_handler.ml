
let jsontest json : string = 
    let open Yojson.Basic.Util in
    let name = json |> member "Name" |> to_string in
    name 
;;
