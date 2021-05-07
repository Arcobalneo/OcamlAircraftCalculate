open Owl
open Matrix
open Angle
type q = {
    q0 : float;
    qv : (float * float * float) ;
}

let showq q = 
    let (x, y, z) = q.qv in 
    Printf.printf "q0=%2f , qv=(%2f, %2f, %2f)\n" q.q0 x y z 

let vectorizate q = 
    let (x, y, z) = q.qv in 
    let temp_lst = [q.q0; x; y; z] in 
    let init_mat = Mat.create 4 1 0. in 
    Mat.mapi (fun i a -> a +. (List.nth temp_lst i)) init_mat

let mold q = 
    let (x, y, z) = q.qv in 
    let q02 = Maths.sqr q.q0 in 
    let x2 = Maths.sqr x in 
    let y2 = Maths.sqr y in 
    let z2 = Maths.sqr z in 
    Maths.sqrt (q02 +. x2 +. y2 +. z2)

let normalize q = 
    let (x, y, z) = q.qv in 
    let m = mold q in 
    let nq = {q0 = (q.q0 /. m); qv = (x/.m, y/.m, z/.m)} in 
    nq

let add q1 q2 = 
    let (x1, y1, z1) = q1.qv in 
    let (x2, y2, z2) = q2.qv in 
    let nq = {q0 = (q1.q0 +. q2.q0); qv = (x1 +. x2, y1 +. y2, z1 +. z2)} in 
    nq

let sub q1 q2 = 
    let (x1, y1, z1) = q1.qv in 
    let (x2, y2, z2) = q2.qv in 
    let nq = {q0 = (q1.q0 -. q2.q0); qv = (x1 -. x2, y1 -. y2, z1 -. z2)} in 
    nq

let mul q1 q2 = 
    let w1 = q1.q0 in 
    let w2 = q2.q0 in 
    let (x1, y1, z1) = q1.qv in 
    let (x2, y2, z2) = q2.qv in 
    let nw = (w1*.w2) -. (x1*.x2) -. (y1*.y2) -. (z1*.z2) in 
    let nx = (w1*.x2) +. (x1*.w2) +. (y1*.z2) -. (z1*.y2) in 
    let ny = (w1*.y2) -. (x1*.z2) +. (y1*.w2) +. (z1*.x2) in 
    let nz = (w1*.z2) +. (x1*.y2) -. (y1*.x2) +. (z1*.w2) in 
    {q0 = nw; qv = (nx, ny, nz)}

let rotation_shaft_angle_tr_q vec r = 
    let (x, y, z) = vec in 
    let sinv = Maths.sin (r/.2.) in 
    {q0 = Maths.cos (r/.2.); qv = (x*.sinv, y*.sinv, z*.sinv)}

let get_vector_rotate_q obj_vec res_vec = 
    let (x1, y1, z1) = obj_vec in 
    let (x2, y2, z2) = res_vec in 
    let x_vec = (y1*.z2 -. y2*.z1, z1*.x2 -. x1*.z2, x1*.y2 -. y1*.x2) in (*叉乘 *)
    let (xs, ys, zs) = x_vec in 
    let d_vec_v = x1*.x2 +. y1*.y2 +. z1*.z2 in (*点乘 *)
    let x_vec_m = Maths.sqrt ( (Maths.sqr xs) +. (Maths.sqr ys) +. (Maths.sqr zs)) in (*叉乘模 *)
    let nq0 = Maths.atan2 x_vec_m d_vec_v in 
    {q0 = nq0; qv = (xs/.x_vec_m, ys/.x_vec_m, zs/.x_vec_m)}

let q_tr_mat q :Mat.mat = 
    let (x, y, z) = q.qv in 
    let w = q.q0 in 
    let arr2 = [
        [
            1. -. 2.*.(Maths.sqr y) -. 2.*.(Maths.sqr z);
            2.*.x*.y -. 2.*.w*.z;
            2.*.x*.z +. 2.*.w*.y;
        ];
        [
            2.*.x*.y +. 2.*.w*.z;
            1. -. 2.*.(Maths.sqr x) -. 2.*.(Maths.sqr z);
            2.*.y*.z -. 2.*.w*.x;
        ];
        [
            2.*.x*.z -. 2.*.w*.y;
            2.*.y*.z +. 2.*.w*.x;
            1. -. 2.*.(Maths.sqr x) -. 2.*.(Maths.sqr y);
        ];
    ] in 
    let obj_arr2 = map_arr2 ~f:check_iszero arr2 in 
    creat_mat_byarr2 obj_arr2

let q_tr_eulerAngle q : ruler_angle = 
    let (x, y, z) = q.qv in 
    let w = q.q0 in 
    let yaw_v = Maths.atan2 (2.*.w*.z +. 2.*.x*.y) (1. -. 2.*.(Maths.sqr y) -. 2.*.(Maths.sqr z)) in
    let pitch_v = Maths.asin (2.*.w*.y -. 2.*.z*.x) in 
    let roll_v = Maths.atan2 (2.*.w*.x +. 2.*.y*.z) (1. -. 2.*.(Maths.sqr x) -. 2.*.(Maths.sqr y)) in 
    {yaw = yaw_v; pitch = pitch_v; roll = roll_v}
