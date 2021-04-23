(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Flags_Flags_intf=caml_string_of_jsbytes("Flags__Flags_intf"),
     cst_flags=caml_string_of_jsbytes("flags"),
     cst_flags_src_flags_intf_ml=
      caml_string_of_jsbytes("flags/src/flags_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_flags$0=caml_string_of_jsbytes("flags"),
     cst_flags$1=caml_string_of_jsbytes("flags"),
     cst_Flags_Flags_intf$0=caml_string_of_jsbytes("Flags__Flags_intf"),
     cst_t=caml_string_of_jsbytes("t"),
     cst_flags_src_flags_ml_17_2=
      caml_string_of_jsbytes("flags/src/flags.ml:17:2"),
     cst_t$0=caml_string_of_jsbytes("t"),
     name=caml_string_of_jsbytes("flags/src/flags.ml.Make.t"),
     cst_Flags_Make_got_intersectin=
      caml_string_of_jsbytes("Flags.Make got intersecting flags"),
     cst_Flag_Make_got_flags_with_n=
      caml_string_of_jsbytes("Flag.Make got flags with no bits set"),
     cst_t$1=caml_string_of_jsbytes("t"),
     cst_flags_src_flags_ml_127_4=
      caml_string_of_jsbytes("flags/src/flags.ml:127:4"),
     cst_t$2=caml_string_of_jsbytes("t"),
     cst_Flags_create_got_invalid_b=
      caml_string_of_jsbytes
       ("Flags.create got invalid ~bit (must be between 0 and 62)"),
     cst_Flags=caml_string_of_jsbytes("Flags"),
     cst_flags$2=caml_string_of_jsbytes("flags"),
     cst_flags_src_flags_ml=caml_string_of_jsbytes("flags/src/flags.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_flags$3=caml_string_of_jsbytes("flags"),
     cst_flags$4=caml_string_of_jsbytes("flags"),
     cst_Flags$0=caml_string_of_jsbytes("Flags"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Int63=global_data.Core_kernel__Int63,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Typerep_lib_Make_typename=global_data.Typerep_lib__Make_typename,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Comparable=global_data.Core_kernel__Comparable,
     Flags=[0];
    caml_register_global(31,Flags,"Flags__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Flags_Flags_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_flags);
    caml_call1(Expect_test_collector[4][1],cst_flags_src_flags_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_flags$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_flags$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Flags_Flags_intf$0);
    var Flags_Flags_intf=[0];
    caml_register_global(36,Flags_Flags_intf,"Flags__Flags_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Flags);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_flags$2);
    caml_call1(Expect_test_collector[4][1],cst_flags_src_flags_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_flags$3,cst$0);
    var
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("Flags.t_of_sexp got unknown name: "),
        [2,0,0]],
       caml_string_of_jsbytes("Flags.t_of_sexp got unknown name: %s")],
     _d_=[0,caml_string_of_jsbytes("unrecognized_bits")],
     _c_=
      [0,
       [11,caml_string_of_jsbytes("0x"),[7,6,0,0,0]],
       caml_string_of_jsbytes("0x%Lx")],
     _b_=[0,[2,0,[12,10,[10,0]]],caml_string_of_jsbytes("%s\n%!")],
     _a_=[0,caml_string_of_jsbytes("flags/src/flags.ml"),9,110,122];
    function create(n)
     {var _ak_=n < 0?1:0,_al_=_ak_ || (62 < n?1:0);
      if(_al_)
       caml_call5
        (Core_kernel[221],
         0,
         _a_,
         cst_Flags_create_got_invalid_b,
         n,
         Core_kernel[340]);
      return caml_call2(Core_kernel_Int63[51],Core_kernel_Int63[18],n)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_flags$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Flags$0);
    var
     Flags$0=
      [0,
       create,
       function(M)
        {var
          _f_=Core_kernel_Int63[98],
          _g_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),0,_f_],0],
          _h_=caml_call1(Bin_prot_Shape[4][1],cst_flags_src_flags_ml_17_2),
          group=caml_call2(Bin_prot_Shape[6],_h_,_g_),
          _i_=caml_call1(Bin_prot_Shape[2][1],cst_t$0),
          bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_i_),0),
          bin_size_t=Core_kernel_Int63[94],
          bin_write_t=Core_kernel_Int63[95],
          bin_read_t=Core_kernel_Int63[97],
          bin_read_t$0=Core_kernel_Int63[96],
          Typename_of_t=caml_call1(Typerep_lib_Make_typename[1],[0,name]),
          typename_of_t=Typename_of_t[2],
          name_of_t=Typename_of_t[1],
          typerep_of_t=[9,[0,name_of_t,[0,Core_kernel_Int63[91]]]],
          _l_=Core_kernel_Int63[17],
          _j_=Core_kernel_Int63[73],
          _k_=Core_kernel_Int63[5];
         function is_empty(t){return caml_equal(t,_l_)}
         function symbol(a,b){return caml_call2(Core_kernel_Int63[47],a,b)}
         function symbol$0(a,b)
          {var _aj_=caml_call1(Core_kernel_Int63[49],b);
           return caml_call2(Core_kernel_Int63[46],a,_aj_)}
         var _m_=Core_kernel_Int63[46],_n_=Core_kernel_Int63[49];
         function is_subset(t,of)
          {var _ai_=caml_call2(_m_,t,of);
           return caml_call2(Core_kernel_Int63[109],t,_ai_)}
         function do_intersect(t1,t2)
          {var
            _ag_=Core_kernel_Int63[17],
            _ah_=caml_call2(Core_kernel_Int63[46],t1,t2);
           return caml_call2(Core_kernel_Int63[112],_ah_,_ag_)}
         function are_disjoint(t1,t2)
          {var
            _ae_=Core_kernel_Int63[17],
            _af_=caml_call2(Core_kernel_Int63[46],t1,t2);
           return caml_call2(Core_kernel_Int63[109],_af_,_ae_)}
         function error(message,a,sexp_of_a)
          {var e=caml_call5(Core_kernel_Error[15],0,0,message,a,sexp_of_a);
           if(M[4])
            {var
              _ac_=caml_call1(Core_kernel_Error[6],e),
              _ad_=caml_call2(Core_kernel_Sexp[79],0,_ac_);
             caml_call2(Core_kernel[216],_b_,_ad_)}
           return caml_call1(Core_kernel_Error[25],e)}
         if(M[2])
          var
           _o_=
            function(param)
             {var n=param[1];
              return 1
                     -
                     caml_call2(Core_kernel_Int63[113],n,Core_kernel_Int63[17])},
           _p_=caml_call2(Core_kernel_List[50],M[1],_o_);
         else
          var _p_=M[1];
         if(1 - M[3])
          {var l=_p_,ac=0;
           for(;;)
            {if(l)
              {var
                l$0=l[2],
                match=l[1],
                name$0=match[2],
                flag=match[1],
                _q_=
                 function(flag)
                   {return function(param)
                     {var flag$0=param[1];return do_intersect(flag,flag$0)}}
                  (flag),
                bad=caml_call2(Core_kernel_List[50],l$0,_q_),
                ac$0=
                 caml_call1(Core_kernel_List[8],bad)
                  ?ac
                  :[0,[0,flag,name$0,bad],ac],
                l=l$0,
                ac=ac$0;
               continue}
             if(1 - caml_call1(Core_kernel_List[8],ac))
              {var
                _r_=
                 function(param)
                  {var
                    v2=param[3],
                    v1=param[2],
                    v0=param[1],
                    v0$0=caml_call1(Core_kernel_Int63[103],v0),
                    v1$0=caml_call1(Core_kernel[455],v1);
                   function _ab_(param)
                    {var
                      v1=param[2],
                      v0=param[1],
                      v0$0=caml_call1(Core_kernel_Int63[103],v0),
                      v1$0=caml_call1(Core_kernel[455],v1);
                     return [1,[0,v0$0,[0,v1$0,0]]]}
                   var v2$0=caml_call2(Core_kernel[405],_ab_,v2);
                   return [1,[0,v0$0,[0,v1$0,[0,v2$0,0]]]]};
               error
                (cst_Flags_Make_got_intersectin,
                 ac,
                 caml_call1(Core_kernel[405],_r_))}
             break}}
         function _s_(param)
          {var flag=param[1];return caml_equal(flag,Core_kernel_Int63[17])}
         var bad$0=caml_call2(Core_kernel_List[50],_p_,_s_);
         if(1 - caml_call1(Core_kernel_List[8],bad$0))
          {var
            _t_=
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(Core_kernel_Int63[103],v0),
                v1$0=caml_call1(Core_kernel[455],v1);
               return [1,[0,v0$0,[0,v1$0,0]]]};
           error
            (cst_Flag_Make_got_flags_with_n,
             bad$0,
             caml_call1(Core_kernel[405],_t_))}
         var known=caml_call1(Core_kernel_List[34],_p_);
         function sexp_of_t(t)
          {function ___(param,_aa_)
            {var
              flag_name=_aa_[2],
              flag=_aa_[1],
              flag_names=param[2],
              t=param[1];
             return caml_equal(caml_call2(Core_kernel_Int63[46],t,flag),flag)
                     ?[0,symbol$0(t,flag),[0,flag_name,flag_names]]
                     :[0,t,flag_names]}
           var
            match=caml_call3(Core_kernel_List[10],known,[0,t,0],___),
            v0=match[2],
            leftover=match[1];
           if(caml_equal(leftover,_l_))
            return caml_call2(Core_kernel[405],Core_kernel[455],v0);
           var
            _$_=caml_call1(Core_kernel_Int63[58],leftover),
            v0$0=caml_call2(Core_kernel[241],_c_,_$_),
            v0$1=caml_call2(Core_kernel[405],Core_kernel[455],v0),
            v1=[1,[0,_d_,[0,caml_call1(Core_kernel[455],v0$0),0]]];
           return [1,[0,v0$1,[0,v1,0]]]}
         function _u_(param)
          {var name=param[2],mask=param[1];return [0,name,mask]}
         var
          _v_=caml_call2(Core_kernel_List[71],_p_,_u_),
          known_by_name=caml_call3(Core_kernel_String[130][8],0,0,_v_);
         function t_of_sexp(t)
          {function _Y_(t$0,name)
            {var match=caml_call2(Core_kernel_Hashtbl[52],known_by_name,name);
             if(match){var mask=match[1];return symbol(t$0,mask)}
             var _Z_=caml_call2(Core_kernel[241],_e_,name);
             return caml_call2(Core_kernel[140],_Z_,t)}
           var _X_=caml_call2(Core_kernel[406],Core_kernel[456],t);
           return caml_call3(Core_kernel_List[10],_X_,_l_,_Y_)}
         function compare(t,u)
          {function flip_top_bit(i)
            {return caml_call2(Core_kernel_Int63[20],i,Core_kernel_Int63[64])}
           var _V_=flip_top_bit(u),_W_=flip_top_bit(t);
           return caml_call2(Core_kernel_Int63[114],_W_,_V_)}
         var
          include=
           caml_call1
            (Core_kernel_Comparable[8],[0,compare,t_of_sexp,sexp_of_t]),
          _A_=include[8],
          _w_=include[1],
          _x_=include[2],
          _y_=include[4],
          _z_=include[5],
          _B_=include[9],
          _C_=include[10],
          _D_=include[11],
          _E_=include[12],
          _F_=include[13],
          _G_=include[14],
          _H_=include[15],
          _I_=include[16],
          _J_=include[17],
          _K_=include[18],
          _L_=include[19],
          _M_=include[20],
          _N_=include[21],
          _O_=include[22],
          _P_=Core_kernel_Int63[109],
          _Q_=Core_kernel_Int63[109],
          _R_=Core_kernel_Int63[112],
          _S_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$1),0,bin_shape_t],0],
          _T_=caml_call1(Bin_prot_Shape[4][1],cst_flags_src_flags_ml_127_4),
          group$0=caml_call2(Bin_prot_Shape[6],_T_,_S_),
          _U_=caml_call1(Bin_prot_Shape[2][1],cst_t$2),
          bin_shape_t$0=
           caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_U_),0),
          bin_writer_t=[0,bin_size_t,bin_write_t],
          bin_reader_t=[0,bin_read_t$0,bin_read_t],
          bin_t=[0,bin_shape_t$0,bin_writer_t,bin_reader_t];
         return [0,
                 t_of_sexp,
                 sexp_of_t,
                 typerep_of_t,
                 typename_of_t,
                 _w_,
                 _x_,
                 _Q_,
                 _y_,
                 _z_,
                 _R_,
                 _P_,
                 _A_,
                 _B_,
                 _C_,
                 _D_,
                 _E_,
                 _F_,
                 _G_,
                 _H_,
                 _I_,
                 _J_,
                 _K_,
                 _L_,
                 _M_,
                 _N_,
                 _O_,
                 _j_,
                 _k_,
                 _l_,
                 symbol,
                 symbol$0,
                 _m_,
                 _n_,
                 is_empty,
                 do_intersect,
                 are_disjoint,
                 is_subset,
                 [0,
                  bin_size_t,
                  bin_write_t,
                  bin_read_t$0,
                  bin_read_t,
                  bin_shape_t$0,
                  bin_writer_t,
                  bin_reader_t,
                  bin_t,
                  _A_,
                  t_of_sexp,
                  sexp_of_t]]}];
    caml_register_global(47,Flags$0,"Flags");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJmbGFncy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
