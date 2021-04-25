open Owl

type angle = float
type radian = float
let angle2radian x = Const.pi *. x /. 180.

let check_iszero x = if (-.0.0001 < x && x < 0.0001) then 0. else x
let sin_angle x = 
  let result = Maths.sin (angle2radian x) in 
  check_iszero result
let cos_angle x = 
  let result = Maths.cos (angle2radian x) in 
  check_iszero result

let sin_radian x = 
  let result = Maths.sin x in 
  check_iszero result
let cos_radian x = 
  let result = Maths.cos x in 
  check_iszero result
