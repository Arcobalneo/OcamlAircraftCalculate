open Angle
open Matrix
let get_arr2 json name : float list list =
    let open Yojson.Basic.Util in
    let json_arr2 = json |> member name |> member "Content" |> to_list |> filter_list in 
    List.map (fun f_lst -> f_lst |> filter_float) json_arr2

let get_posInfo json name : pos = 
    let open Yojson.Basic.Util in
    let pos_lst = json |> member name |> member "Content" |> to_list |> filter_float in 
    {x = (List.nth pos_lst 0); y = (List.nth pos_lst 1); z = (List.nth pos_lst 2)}

let get_angleInfo json name : angle_info =
    let open Yojson.Basic.Util in
    let alpha_v = json |> member name |> member "Angle" |> member "Alpha" |> to_float in 
    let beta_v = json |> member name |> member "Angle" |> member "Beta" |> to_float in 
    let theta_v = json |> member name |> member "Angle" |> member "Theta" |> to_float in 
    let phi_v = json |> member name |> member "Angle" |> member "Phi" |> to_float in 
    let psi_v = json |> member name |> member "Angle" |> member "Psi" |> to_float in 
    {alpha = alpha_v; beta = beta_v; theta = theta_v; phi = phi_v; psi = psi_v;}


let jsonproc json : string = 
    let angle = get_angleInfo json "PosInfo" in 
    let pos_E2B = pos_tr_E2B (get_posInfo json "PosInfo") ~theta:(angle.theta) ~phi:(angle.phi) ~psi:(angle.psi) in 
    let pos_B2A = pos_tr_B2A pos_E2B ~alpha:(angle.alpha) ~beta:(angle.beta) in 
    let pos_B2E = pos_tr_B2E pos_E2B ~theta:(angle.theta) ~phi:(angle.phi) ~psi:(angle.psi) in 
    let back_json = `Assoc[
                            (
                                "PosInfoRes_B2A", 
                                `List
                                [
                                    `Float pos_B2A.x;
                                    `Float pos_B2A.y;
                                    `Float pos_B2A.z;
                                ]
                            );
                            (
                                "PosInfoRes_B2E", 
                                `List
                                [
                                    `Float pos_B2E.x;
                                    `Float pos_B2E.y;
                                    `Float pos_B2E.z;
                                ]
                            );
                            (
                                "PosInfoRes_E2B", 
                                `List
                                [
                                    `Float pos_E2B.x;
                                    `Float pos_E2B.y;
                                    `Float pos_E2B.z;
                                ]
                            );
                        ] in 
    Yojson.Basic.pretty_to_string back_json



