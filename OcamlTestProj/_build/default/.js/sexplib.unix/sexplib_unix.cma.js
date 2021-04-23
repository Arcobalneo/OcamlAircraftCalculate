(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     Unix=global_data.Unix,
     Assert_failure=global_data.Assert_failure,
     Sexplib_Conv=global_data.Sexplib__Conv,
     Sexplib_unix=[0];
    caml_register_global(3,Sexplib_unix,"Sexplib_unix");
    var
     _b_=[0,caml_string_of_jsbytes("Unix.Unix_error")],
     _c_=[0,caml_string_of_jsbytes("unix/lib/sexplib_unix_conv.ml"),16,11],
     _d_=[0,0];
    function _a_(param)
     {if(param[1] === Unix[1])
       {var
         arg=param[4],
         loc=param[3],
         err=param[2],
         err_str=caml_call1(Unix[2],err);
        return [1,[0,_b_,[0,[0,err_str],[0,[0,loc],[0,[0,arg],0]]]]]}
      throw [0,Assert_failure,_c_]}
    caml_call3(Sexplib_Conv[51][2],_d_,Unix[1],_a_);
    var Sexplib_unix_Sexplib_unix_conv=[0,0];
    caml_register_global
     (7,Sexplib_unix_Sexplib_unix_conv,"Sexplib_unix__Sexplib_unix_conv");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXhwbGliX3VuaXguY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
