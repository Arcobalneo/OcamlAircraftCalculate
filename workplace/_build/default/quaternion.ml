open Owl

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
