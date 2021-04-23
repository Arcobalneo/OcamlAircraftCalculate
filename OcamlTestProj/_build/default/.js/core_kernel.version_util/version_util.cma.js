(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_notequal=runtime.caml_string_notequal,
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
     cst_hostname=caml_string_of_jsbytes("hostname"),
     cst_allowed_projections=caml_string_of_jsbytes("allowed_projections"),
     cst_application_specific_field=
      caml_string_of_jsbytes("application_specific_fields"),
     cst_build_system=caml_string_of_jsbytes("build_system"),
     cst_build_time=caml_string_of_jsbytes("build_time"),
     cst_dynlinkable_code=caml_string_of_jsbytes("dynlinkable_code"),
     cst_executable_path=caml_string_of_jsbytes("executable_path"),
     cst_kernel=caml_string_of_jsbytes("kernel"),
     cst_ocaml_version=caml_string_of_jsbytes("ocaml_version"),
     cst_portable_int63=caml_string_of_jsbytes("portable_int63"),
     cst_username=caml_string_of_jsbytes("username"),
     cst_with_fdo=caml_string_of_jsbytes("with_fdo"),
     cst_x_library_inlining=caml_string_of_jsbytes("x_library_inlining"),
     cst_build_system$0=caml_string_of_jsbytes("build_system"),
     cst_executable_path$0=caml_string_of_jsbytes("executable_path"),
     cst_ocaml_version$0=caml_string_of_jsbytes("ocaml_version"),
     cst_dynlinkable_code$0=caml_string_of_jsbytes("dynlinkable_code"),
     cst_portable_int63$0=caml_string_of_jsbytes("portable_int63"),
     cst_x_library_inlining$0=caml_string_of_jsbytes("x_library_inlining"),
     cst_Z=caml_string_of_jsbytes("Z"),
     cst_time_must_contain_one_spac=
      caml_string_of_jsbytes
       ("time must contain one space between date and ofday"),
     cst_zone_must_be_Z=caml_string_of_jsbytes("zone must be Z"),
     cst_Could_not_parse_version=
      caml_string_of_jsbytes("Could not parse version"),
     cst$1=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes("_"),
     cst$2=caml_string_of_jsbytes("\n"),
     cst_Version_util=caml_string_of_jsbytes("Version_util"),
     cst_version_util=caml_string_of_jsbytes("version_util"),
     cst_version_util_src_version_u=
      caml_string_of_jsbytes("version_util/src/version_util.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_version_util$0=caml_string_of_jsbytes("version_util"),
     cst_Print_build_info_as_sexp_a=
      caml_string_of_jsbytes(" Print build info as sexp and exit"),
     cst_build_info=caml_string_of_jsbytes("-build_info"),
     cst_Print_the_hg_revision_of_t=
      caml_string_of_jsbytes(" Print the hg revision of this build and exit"),
     cst_version=caml_string_of_jsbytes("-version"),
     tp_loc=caml_string_of_jsbytes("version_util/src/version_util.ml.t"),
     cst_version_util$1=caml_string_of_jsbytes("version_util"),
     cst_Version_util$0=caml_string_of_jsbytes("Version_util"),
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_Ref=global_data.Core_kernel__Ref,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Md5=global_data.Core_kernel__Md5,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Date=global_data.Core_kernel__Date,
     Core_kernel_Time_float=global_data.Core_kernel__Time_float,
     Sexplib_Conv=global_data.Sexplib__Conv,
     Core_kernel_List=global_data.Core_kernel__List,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Exn=global_data.Base__Exn;
    caml_call1(Ppx_module_timer_runtime[4],cst_Version_util);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_version_util);
    caml_call1(Expect_test_collector[4][1],cst_version_util_src_version_u);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_version_util$0,cst);
    var
     _h_=[0,caml_string_of_jsbytes("application_specific_fields")],
     _i_=[0,caml_string_of_jsbytes("with_fdo")],
     _j_=[0,caml_string_of_jsbytes("allowed_projections")],
     _k_=[0,caml_string_of_jsbytes("build_system")],
     _l_=[0,caml_string_of_jsbytes("executable_path")],
     _m_=[0,caml_string_of_jsbytes("ocaml_version")],
     _n_=[0,caml_string_of_jsbytes("dynlinkable_code")],
     _o_=[0,caml_string_of_jsbytes("portable_int63")],
     _p_=[0,caml_string_of_jsbytes("x_library_inlining")],
     _q_=[0,caml_string_of_jsbytes("build_time")],
     _r_=[0,caml_string_of_jsbytes("kernel")],
     _s_=[0,caml_string_of_jsbytes("hostname")],
     _t_=[0,caml_string_of_jsbytes("username")],
     _g_=[0,caml_string_of_jsbytes("version_util/src/version_util.ml"),95,0],
     _c_=[0,caml_string_of_jsbytes("version")],
     _d_=[0,caml_string_of_jsbytes("repo")],
     _a_=[0,caml_string_of_jsbytes(" ")],
     _b_=[0,caml_string_of_jsbytes("\n")];
    function parse_generated_hg_version(generated_hg_version)
     {function _am_(line)
       {var match=caml_call2(Core_kernel_String[55],line,32);
        if(match)
         {var match$0=match[1],rev_status=match$0[2],repo=match$0[1];
          if(caml_call2(Core_kernel_String[4],rev_status,95))return line;
          var
           _ap_=0,
           _aq_=
            caml_call2
              (Core_kernel[87],
               runtime.caml_ml_string_length(rev_status) % 2 | 0,
               1)
             ?caml_call2(Core_kernel_String[77],rev_status,1)
             :cst$1,
           _ar_=
            [0,
             repo,
             [0,
              cst$0,
              [0,
               caml_call2(Core_kernel_String[78],rev_status,12),
               [0,_aq_,_ap_]]]];
          return caml_call2(Core_kernel_String[26],0,_ar_)}
        return line}
      var
       _an_=caml_call2(Core_kernel_String[75],generated_hg_version,cst$2),
       _ao_=caml_call2(Core_kernel_String[56],_an_,10);
      return caml_call2(Core_kernel_List[71],_ao_,_am_)}
    var
     version_list=parse_generated_hg_version(runtime.generated_hg_version(0)),
     version=caml_call2(Core_kernel_String[26],_a_,version_list),
     hg_version=caml_call2(Core_kernel_String[26],_b_,version_list),
     build_info=runtime.generated_build_info(0);
    function sexp_of_t(param)
     {var
       v_version=param[2],
       v_repo=param[1],
       arg=caml_call1(Core_kernel[455],v_version),
       bnds=[0,[1,[0,_c_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_repo),
       bnds$0=[0,[1,[0,_d_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function parse(version)
     {var match=caml_call2(Core_kernel_String[55],version,95);
      if(match)
       {var match$0=match[1],version$0=match$0[2],repo=match$0[1];
        return [0,[0,repo,version$0]]}
      var
       _ak_=[0,caml_call1(Sexplib0_Sexp_conv[7],version),0],
       _al_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Could_not_parse_version),
          _ak_]];
      return caml_call1(Core_kernel[218],_al_)}
    var
     Version=[0,sexp_of_t,parse],
     _e_=0,
     _f_=
      [0,
       [0,
        cst_build_info,
        [0,
         function(param)
          {caml_call1(Core_kernel[29],build_info);
           return caml_call1(Core_kernel[80],0)}],
        cst_Print_build_info_as_sexp_a],
       _e_],
     arg_spec=
      [0,
       [0,
        cst_version,
        [0,
         function(param)
          {caml_call1(Core_kernel[29],hg_version);
           return caml_call1(Core_kernel[80],0)}],
        cst_Print_the_hg_revision_of_t],
       _f_];
    function t_of_sexp(t)
     {return caml_call2(Core_kernel_String[125][101],Core_kernel_Sexp[89],t)}
    function sexp_of_t$0(v)
     {return caml_call2(Core_kernel_String[125][102],Core_kernel_Sexp[88],v)}
    var Application_specific_fields=[0,t_of_sexp,sexp_of_t$0];
    function t_of_sexp$0(sexp)
     {var str=caml_call1(Core_kernel[456],sexp);
      try
       {var match=caml_call2(Core_kernel_String[73],str,cst_Z);
        if(match)
         {var
           rest=match[1],
           match$0=caml_call2(Core_kernel_String[54],rest,32);
          if(match$0)
           var
            match$1=match$0[1],
            ofday=match$1[2],
            date=match$1[1],
            _af_=caml_call1(Core_kernel[455],date),
            date$0=caml_call1(Core_kernel_Date[9],_af_),
            _ag_=caml_call1(Core_kernel[455],ofday),
            ofday$0=caml_call1(Core_kernel_Time_float[14][9],_ag_),
            _ah_=
             [0,
              caml_call3
               (Core_kernel_Time_float[62],
                Core_kernel_Time_float[50][6],
                date$0,
                ofday$0),
              sexp];
          else
           var _ah_=caml_call1(Core_kernel[3],cst_time_must_contain_one_spac);
          var _ai_=_ah_}
        else
         var _ai_=caml_call1(Core_kernel[3],cst_zone_must_be_Z);
        return _ai_}
      catch(_aj_)
       {_aj_ = caml_wrap_exception(_aj_);
        var e=_aj_[1] === Sexplib_Conv[25]?_aj_[2]:_aj_;
        throw [0,Sexplib_Conv[25],e,sexp]}}
    var sexp_of_t_ref=[0,function(param){var sexp=param[2];return sexp}];
    function _u_(param){return caml_call1(Core_kernel_Sexp[73],build_info)}
    var sexp=caml_call1(Base_Exn[14],_u_);
    function _v_(param$0)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       username_field=[0,0],
       hostname_field=[0,0],
       kernel_field=[0,0],
       build_time_field=[0,0],
       x_library_inlining_field=[0,0],
       portable_int63_field=[0,0],
       dynlinkable_code_field=[0,0],
       ocaml_version_field=[0,0],
       executable_path_field=[0,0],
       build_system_field=[0,0],
       allowed_projections_field=[0,0],
       with_fdo_field=[0,0],
       application_specific_fields_fi=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _M_=param[1];
          if(1 === _M_[0])
           {var _N_=_M_[1];
            if(_N_)
             {var _O_=_N_[1];
              if(0 === _O_[0])
               {var _P_=_N_[2],_Q_=_O_[1],switch$1=0;
                if(! _P_ || ! _P_[2])switch$1 = 1;
                if(switch$1)
                 {var
                   tail=param[2],
                   field_sexp$13=
                    function(_ae_)
                     {function field_sexp(param)
                       {if(_ae_)
                         {if(_ae_[2])throw [0,Assert_failure,_g_];
                          var x=_ae_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$13(_P_),
                   switch$0=runtime.caml_string_compare(_Q_,cst_hostname),
                   switch$2=0;
                  if(0 <= switch$0)
                   if(0 < switch$0)
                    if(caml_string_notequal(_Q_,cst_kernel))
                     if(caml_string_notequal(_Q_,cst_ocaml_version))
                      if(caml_string_notequal(_Q_,cst_portable_int63))
                       if(caml_string_notequal(_Q_,cst_username))
                        if(caml_string_notequal(_Q_,cst_with_fdo))
                         if(caml_string_notequal(_Q_,cst_x_library_inlining))
                          switch$2 = 1;
                         else
                          if(x_library_inlining_field[1])
                           duplicates[1] = [0,_Q_,duplicates[1]];
                          else
                           {var
                             field_sexp$0=field_sexp(0),
                             fvalue=caml_call1(Core_kernel[290],field_sexp$0);
                            x_library_inlining_field[1] = [0,fvalue]}
                        else
                         if(with_fdo_field[1])
                          duplicates[1] = [0,_Q_,duplicates[1]];
                         else
                          {var field_sexp$1=field_sexp(0),switch$3=0;
                           if(1 === field_sexp$1[0])
                            {var _R_=field_sexp$1[1];
                             if(_R_)
                              {var _S_=_R_[2];
                               if(_S_ && ! _S_[2])
                                {var
                                  v1=_S_[1],
                                  v0=_R_[1],
                                  v0$0=caml_call1(Core_kernel[456],v0),
                                  v1$0=caml_call2(Core_kernel[439],Core_kernel_Md5[3],v1),
                                  fvalue$0=[0,v0$0,v1$0];
                                 switch$3 = 1}}}
                           if(! switch$3)
                            var
                             fvalue$0=
                              caml_call3
                               (Sexplib0_Sexp_conv_error[2],tp_loc,2,field_sexp$1);
                           with_fdo_field[1] = [0,fvalue$0]}
                       else
                        if(username_field[1])
                         duplicates[1] = [0,_Q_,duplicates[1]];
                        else
                         {var
                           field_sexp$2=field_sexp(0),
                           fvalue$1=caml_call1(Core_kernel[456],field_sexp$2);
                          username_field[1] = [0,fvalue$1]}
                      else
                       if(portable_int63_field[1])
                        duplicates[1] = [0,_Q_,duplicates[1]];
                       else
                        {var
                          field_sexp$3=field_sexp(0),
                          fvalue$2=caml_call1(Core_kernel[290],field_sexp$3);
                         portable_int63_field[1] = [0,fvalue$2]}
                     else
                      if(ocaml_version_field[1])
                       duplicates[1] = [0,_Q_,duplicates[1]];
                      else
                       {var
                         field_sexp$4=field_sexp(0),
                         fvalue$3=caml_call1(Core_kernel[456],field_sexp$4);
                        ocaml_version_field[1] = [0,fvalue$3]}
                    else
                     if(kernel_field[1])
                      duplicates[1] = [0,_Q_,duplicates[1]];
                     else
                      {var
                        field_sexp$5=field_sexp(0),
                        fvalue$4=caml_call1(Core_kernel[456],field_sexp$5);
                       kernel_field[1] = [0,fvalue$4]}
                   else
                    if(hostname_field[1])
                     duplicates[1] = [0,_Q_,duplicates[1]];
                    else
                     {var
                       field_sexp$6=field_sexp(0),
                       fvalue$5=caml_call1(Core_kernel[456],field_sexp$6);
                      hostname_field[1] = [0,fvalue$5]}
                  else
                   if(caml_string_notequal(_Q_,cst_allowed_projections))
                    if(caml_string_notequal(_Q_,cst_application_specific_field))
                     if(caml_string_notequal(_Q_,cst_build_system))
                      if(caml_string_notequal(_Q_,cst_build_time))
                       if(caml_string_notequal(_Q_,cst_dynlinkable_code))
                        if(caml_string_notequal(_Q_,cst_executable_path))
                         switch$2 = 1;
                        else
                         if(executable_path_field[1])
                          duplicates[1] = [0,_Q_,duplicates[1]];
                         else
                          {var
                            field_sexp$7=field_sexp(0),
                            fvalue$6=caml_call1(Core_kernel[456],field_sexp$7);
                           executable_path_field[1] = [0,fvalue$6]}
                       else
                        if(dynlinkable_code_field[1])
                         duplicates[1] = [0,_Q_,duplicates[1]];
                        else
                         {var
                           field_sexp$8=field_sexp(0),
                           fvalue$7=caml_call1(Core_kernel[290],field_sexp$8);
                          dynlinkable_code_field[1] = [0,fvalue$7]}
                      else
                       if(build_time_field[1])
                        duplicates[1] = [0,_Q_,duplicates[1]];
                       else
                        {var
                          field_sexp$9=field_sexp(0),
                          fvalue$8=t_of_sexp$0(field_sexp$9);
                         build_time_field[1] = [0,fvalue$8]}
                     else
                      if(build_system_field[1])
                       duplicates[1] = [0,_Q_,duplicates[1]];
                      else
                       {var
                         field_sexp$10=field_sexp(0),
                         fvalue$9=caml_call1(Core_kernel[456],field_sexp$10);
                        build_system_field[1] = [0,fvalue$9]}
                    else
                     if(application_specific_fields_fi[1])
                      duplicates[1] = [0,_Q_,duplicates[1]];
                     else
                      {var
                        field_sexp$11=field_sexp(0),
                        fvalue$10=
                         caml_call1(Application_specific_fields[1],field_sexp$11);
                       application_specific_fields_fi[1] = [0,fvalue$10]}
                   else
                    if(allowed_projections_field[1])
                     duplicates[1] = [0,_Q_,duplicates[1]];
                    else
                     {var
                       field_sexp$12=field_sexp(0),
                       fvalue$11=
                        caml_call2(Core_kernel[406],Core_kernel[456],field_sexp$12);
                      allowed_projections_field[1] = [0,fvalue$11]}
                  if(switch$2 && Sexplib0_Sexp_conv[26][1])
                   extra[1] = [0,_Q_,extra[1]];
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_M_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _X_=x_library_inlining_field[1],
         _Y_=portable_int63_field[1],
         _Z_=dynlinkable_code_field[1],
         ___=ocaml_version_field[1],
         _$_=executable_path_field[1],
         _aa_=build_system_field[1],
         _T_=username_field[1],
         _U_=hostname_field[1],
         _V_=kernel_field[1],
         _W_=build_time_field[1],
         _ab_=allowed_projections_field[1],
         _ac_=with_fdo_field[1],
         _ad_=application_specific_fields_fi[1];
        if(_X_ && _Y_ && _Z_ && ___ && _$_ && _aa_)
         {var
           build_system_value=_aa_[1],
           executable_path_value=_$_[1],
           ocaml_version_value=___[1],
           dynlinkable_code_value=_Z_[1],
           portable_int63_value=_Y_[1],
           x_library_inlining_value=_X_[1];
          return [0,
                  _T_,
                  _U_,
                  _V_,
                  _W_,
                  x_library_inlining_value,
                  portable_int63_value,
                  dynlinkable_code_value,
                  ocaml_version_value,
                  executable_path_value,
                  build_system_value,
                  _ab_,
                  _ac_,
                  _ad_]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,
                   0 === x_library_inlining_field[1]?1:0,
                   cst_x_library_inlining$0],
                  [0,
                   [0,0 === portable_int63_field[1]?1:0,cst_portable_int63$0],
                   [0,
                    [0,
                     0 === dynlinkable_code_field[1]?1:0,
                     cst_dynlinkable_code$0],
                    [0,
                     [0,0 === ocaml_version_field[1]?1:0,cst_ocaml_version$0],
                     [0,
                      [0,0 === executable_path_field[1]?1:0,cst_executable_path$0],
                      [0,[0,0 === build_system_field[1]?1:0,cst_build_system$0],0]]]]]])}}
    var
     param=caml_call1(Base_Exn[14],_v_),
     _C_=param[7],
     _E_=param[5],
     _F_=param[4],
     _w_=param[13],
     _x_=param[12],
     _y_=param[11],
     _z_=param[10],
     _A_=param[9],
     _B_=param[8],
     _D_=param[6],
     _G_=param[3],
     _H_=param[2],
     _I_=param[1];
    if(_F_)var match=_F_[1],time=match[1],_J_=[0,time];else var _J_=0;
    function reprint_build_info(sexp_of_time)
     {function _K_(param$0)
       {var
         v_application_specific_fields=param[13],
         v_with_fdo=param[12],
         v_allowed_projections=param[11],
         v_build_system=param[10],
         v_executable_path=param[9],
         v_ocaml_version=param[8],
         v_dynlinkable_code=param[7],
         v_portable_int63=param[6],
         v_x_library_inlining=param[5],
         v_build_time=param[4],
         v_kernel=param[3],
         v_hostname=param[2],
         v_username=param[1],
         bnds=0;
        if(v_application_specific_fields)
         var
          v=v_application_specific_fields[1],
          arg$0=caml_call1(Application_specific_fields[2],v),
          bnd=[1,[0,_h_,[0,arg$0,0]]],
          bnds$0=[0,bnd,bnds];
        else
         var bnds$0=bnds;
        if(v_with_fdo)
         var
          v$0=v_with_fdo[1],
          v1=v$0[2],
          v0=v$0[1],
          v0$0=caml_call1(Core_kernel[455],v0),
          v1$0=caml_call2(Core_kernel[438],Core_kernel_Md5[4],v1),
          arg$1=[1,[0,v0$0,[0,v1$0,0]]],
          bnd$0=[1,[0,_i_,[0,arg$1,0]]],
          bnds$1=[0,bnd$0,bnds$0];
        else
         var bnds$1=bnds$0;
        if(v_allowed_projections)
         var
          v$1=v_allowed_projections[1],
          arg$2=caml_call2(Core_kernel[405],Core_kernel[455],v$1),
          bnd$1=[1,[0,_j_,[0,arg$2,0]]],
          bnds$2=[0,bnd$1,bnds$1];
        else
         var bnds$2=bnds$1;
        var
         arg$3=caml_call1(Core_kernel[455],v_build_system),
         bnds$3=[0,[1,[0,_k_,[0,arg$3,0]]],bnds$2],
         arg$4=caml_call1(Core_kernel[455],v_executable_path),
         bnds$4=[0,[1,[0,_l_,[0,arg$4,0]]],bnds$3],
         arg$5=caml_call1(Core_kernel[455],v_ocaml_version),
         bnds$5=[0,[1,[0,_m_,[0,arg$5,0]]],bnds$4],
         arg$6=caml_call1(Core_kernel[289],v_dynlinkable_code),
         bnds$6=[0,[1,[0,_n_,[0,arg$6,0]]],bnds$5],
         arg$7=caml_call1(Core_kernel[289],v_portable_int63),
         bnds$7=[0,[1,[0,_o_,[0,arg$7,0]]],bnds$6],
         arg$8=caml_call1(Core_kernel[289],v_x_library_inlining),
         bnds$8=[0,[1,[0,_p_,[0,arg$8,0]]],bnds$7];
        if(v_build_time)
         var
          v$2=v_build_time[1],
          arg=caml_call1(sexp_of_t_ref[1],v$2),
          bnd$2=[1,[0,_q_,[0,arg,0]]],
          bnds$9=[0,bnd$2,bnds$8];
        else
         var bnds$9=bnds$8;
        if(v_kernel)
         var
          v$3=v_kernel[1],
          arg$9=caml_call1(Core_kernel[455],v$3),
          bnd$3=[1,[0,_r_,[0,arg$9,0]]],
          bnds$10=[0,bnd$3,bnds$9];
        else
         var bnds$10=bnds$9;
        if(v_hostname)
         var
          v$4=v_hostname[1],
          arg$10=caml_call1(Core_kernel[455],v$4),
          bnd$4=[1,[0,_s_,[0,arg$10,0]]],
          bnds$11=[0,bnd$4,bnds$10];
        else
         var bnds$11=bnds$10;
        if(v_username)
         var
          v$5=v_username[1],
          arg$11=caml_call1(Core_kernel[455],v$5),
          bnd$5=[1,[0,_t_,[0,arg$11,0]]],
          bnds$12=[0,bnd$5,bnds$11];
        else
         var bnds$12=bnds$11;
        return caml_call1(Core_kernel_Sexp[81],[1,bnds$12])}
      function _L_(param)
       {var time=param[1];return caml_call1(sexp_of_time,time)}
      return caml_call3(Core_kernel_Ref[18],sexp_of_t_ref,_L_,_K_)}
    var
     compiled_for_speed=_E_?1 - _C_:_E_,
     For_tests=[0,parse_generated_hg_version];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_version_util$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Version_util$0);
    var
     Version_util=
      [0,
       version,
       version_list,
       Version,
       arg_spec,
       Application_specific_fields,
       build_info,
       sexp,
       reprint_build_info,
       _I_,
       _H_,
       _G_,
       _J_,
       _E_,
       _D_,
       _C_,
       compiled_for_speed,
       _w_,
       _B_,
       _y_,
       _A_,
       _z_,
       _x_,
       For_tests];
    runtime.caml_register_global(74,Version_util,"Version_util");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2ZXJzaW9uX3V0aWwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
