open Matrix
let get_arr2 json name : float list list =
    let open Yojson.Basic.Util in
    let json_arr2 = json |> member name |> member "Content" |> to_list |> filter_list in 
    List.map (fun f_lst -> f_lst |> filter_float) json_arr2

let get_posInfo json name : pos = 
    let open Yojson.Basic.Util in
    let pos_lst = json |> member name |> member "Content" |> to_list |> filter_float in 
    {x = (List.nth pos_lst 0); y = (List.nth pos_lst 1); z = (List.nth pos_lst 2)}

let jsontest json : string = 
    let pos = pos_tr_B2A (get_posInfo json "PosInfo") ~alpha:45. ~beta:45. in 
    let back_json = `Assoc[
                            (
                                "PosInfoRes1", 
                                `List
                                [
                                    `Float pos.x;
                                    `Float pos.y;
                                    `Float pos.z;
                                ]
                            );
                            (
                                "PosInfoRes2", 
                                `List
                                [
                                    `Float pos.x;
                                    `Float pos.x;
                                    `Float pos.x;
                                ]
                            )
                        ] in 
    Yojson.Basic.pretty_to_string back_json



