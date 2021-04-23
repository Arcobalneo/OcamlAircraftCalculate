(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Spawn_spawn_cwd_Fd_is_not_=
      caml_string_of_jsbytes
       ("Spawn.spawn: [cwd=Fd _] is not supported on Windows"),
     cst=caml_string_of_jsbytes(" "),
     cst_SPAWN_USE_FORK=caml_string_of_jsbytes("SPAWN_USE_FORK"),
     Unix=global_data.Unix,
     Stdlib_listLabels=global_data.Stdlib__listLabels,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_stringLabels=global_data.Stdlib__stringLabels,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Working_dir=[0],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Spawn.spawn: NUL bytes are not allowed in any of the arguments but found one in "),
        [3,0,0]],
       caml_string_of_jsbytes
        ("Spawn.spawn: NUL bytes are not allowed in any of the arguments but found one in %S")],
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Spawn.Env.of_list: NUL bytes are not allowed in the environment but found one in "),
        [3,0,0]],
       caml_string_of_jsbytes
        ("Spawn.Env.of_list: NUL bytes are not allowed in the environment but found one in %S")];
    try
     {var switch$0=0;runtime.caml_sys_getenv(cst_SPAWN_USE_FORK);switch$0 = 1}
    catch(_x_)
     {_x_ = caml_wrap_exception(_x_);
      if(_x_ !== Stdlib[8])throw _x_;
      var default$0=1}
    if(switch$0)var default$0=0;
    var Unix_backend=[0,default$0];
    function of_list(env)
     {var _u_=1;
      function _v_(acc,s)
       {return (acc + runtime.caml_ml_string_length(s) | 0) + 1 | 0}
      var
       len=caml_call3(Stdlib_listLabels[25],_v_,_u_,env),
       buf=caml_call1(Stdlib_buffer[1],len);
      function _w_(s)
       {caml_call2(Stdlib_buffer[14],buf,s);
        return caml_call2(Stdlib_buffer[10],buf,0)}
      caml_call2(Stdlib_listLabels[17],_w_,env);
      caml_call2(Stdlib_buffer[10],buf,0);
      return caml_call1(Stdlib_buffer[2],buf)}
    var Env_win32=[0,of_list];
    function no_null(s)
     {var _t_=caml_call2(Stdlib_stringLabels[8],s,0);
      return _t_?caml_call3(Stdlib_printf[10],Stdlib[1],_a_,s):_t_}
    function of_list$0(l)
     {caml_call2(Stdlib_listLabels[17],no_null,l);return l}
    var Env_unix=[0,of_list$0],Env_win32$0=Stdlib_sys[7]?Env_win32:Env_unix;
    function spawn_windows(env,cwd,prog,argv,stdin,stdout,stderr,param)
     {if(typeof cwd === "number")
       var cwd$0=0;
      else
       if(0 === cwd[0])
        var p$0=cwd[1],cwd$0=[0,p$0];
       else
        var cwd$0=caml_call1(Stdlib[1],cst_Spawn_spawn_cwd_Fd_is_not_);
      var
       _s_=caml_call2(Stdlib_listLabels[19],Stdlib_filename[21],argv),
       cmdline=caml_call2(Stdlib_stringLabels[3],cst,_s_),
       switch$0=0;
      if(caml_call1(Stdlib_filename[5],prog) && cwd$0)
       {var p=cwd$0[1],prog$0=caml_call2(Stdlib_filename[4],p,prog);
        switch$0 = 1}
      if(! switch$0)var prog$0=prog;
      return runtime.spawn_windows_byte
              (env,cwd$0,prog$0,cmdline,stdin,stdout,stderr)}
    function no_null$0(s)
     {var _r_=caml_call2(Stdlib_stringLabels[8],s,0);
      return _r_?caml_call3(Stdlib_printf[10],Stdlib[1],_b_,s):_r_}
    function spawn(env,opt,prog,argv,_i_,_h_,_g_,_f_,param)
     {if(opt)var sth=opt[1],cwd=sth;else var cwd=0;
      if(_i_)var sth$0=_i_[1],stdin=sth$0;else var stdin=Unix[21];
      if(_h_)var sth$1=_h_[1],stdout=sth$1;else var stdout=Unix[22];
      if(_g_)var sth$2=_g_[1],stderr=sth$2;else var stderr=Unix[23];
      if(_f_)
       var sth$3=_f_[1],unix_backend=sth$3;
      else
       var unix_backend=Unix_backend[1];
      var switch$0=0;
      if(typeof cwd !== "number" && 0 === cwd[0])
       {var s=cwd[1];no_null$0(s);switch$0 = 1}
      no_null$0(prog);
      caml_call2(Stdlib_listLabels[17],no_null$0,argv);
      var
       backend=
        Stdlib_sys[7]
         ?spawn_windows
         :function(_q_,_p_,_o_,_n_,_m_,_l_,_k_,_j_)
           {return runtime.spawn_unix_byte(_q_,_p_,_o_,_n_,_m_,_l_,_k_,_j_)},
       use_vfork=unix_backend?1:0;
      return backend(env,cwd,prog,argv,stdin,stdout,stderr,use_vfork)}
    var
     safe_pipe=
      Stdlib_sys[7]
       ?function(param)
         {var match=caml_call2(Unix[69],0,0),fdw=match[2],fdr=match[1];
          try
           {caml_call1(Unix[58],fdr);caml_call1(Unix[58],fdw)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            try {caml_call1(Unix[25],fdr)}catch(_d_){}
            try {caml_call1(Unix[25],fdw)}catch(_c_){}
            throw exn}
          return [0,fdr,fdw]}
       :function(_e_){return runtime.spawn_pipe(_e_)},
     Spawn=[0,Working_dir,Unix_backend,Env_win32$0,spawn,safe_pipe];
    runtime.caml_register_global(13,Spawn,"Spawn");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzcGF3bi5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
