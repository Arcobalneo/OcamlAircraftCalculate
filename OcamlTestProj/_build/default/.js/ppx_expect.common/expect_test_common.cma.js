(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
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
     cst_Expect_test_collector_File$0=
      caml_string_of_jsbytes
       ("Expect_test_collector.File.Digest.of_string, unexpected length"),
     cst_Expect_test_collector_File$1=
      caml_string_of_jsbytes("Expect_test_collector.File.Digest.of_string"),
     cst_Expect_test_collector_File=
      caml_string_of_jsbytes("Expect_test_collector.File.Location.compare"),
     cst_end_pos=caml_string_of_jsbytes("end_pos"),
     cst_filename=caml_string_of_jsbytes("filename"),
     cst_line_number=caml_string_of_jsbytes("line_number"),
     cst_line_start=caml_string_of_jsbytes("line_start"),
     cst_start_pos=caml_string_of_jsbytes("start_pos"),
     cst_end_pos$0=caml_string_of_jsbytes("end_pos"),
     cst_start_pos$0=caml_string_of_jsbytes("start_pos"),
     cst_line_start$0=caml_string_of_jsbytes("line_start"),
     cst_line_number$0=caml_string_of_jsbytes("line_number"),
     cst_filename$0=caml_string_of_jsbytes("filename"),
     tp_loc=caml_string_of_jsbytes("file.ml.Location.T.t"),
     Base=global_data.Base,
     Base_Ppx_compare_lib=global_data.Base__Ppx_compare_lib,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_filename=global_data.Stdlib__filename,
     Base_String=global_data.Base__String,
     Base_Comparable=global_data.Base__Comparable,
     Expect_test_common=[0];
    caml_register_global(28,Expect_test_common,"Expect_test_common__");
    var Expect_test_common_Import=[0];
    caml_register_global
     (29,Expect_test_common_Import,"Expect_test_common__Import");
    var
     hash_fold_t=Base_String[20],
     t_of_sexp=Base_String[21],
     sexp_of_t=Base_String[22],
     of_string=Base_String[23],
     to_string=Base_String[24],
     symbol=Base_String[25],
     symbol$0=Base_String[26],
     symbol$1=Base_String[27],
     symbol$2=Base_String[28],
     symbol$3=Base_String[29],
     symbol$4=Base_String[30],
     compare=Base_String[31],
     min=Base_String[32],
     max=Base_String[33],
     ascending=Base_String[34],
     descending=Base_String[35],
     between=Base_String[36],
     clamp_exn=Base_String[37],
     clamp=Base_String[38],
     comparator=Base_String[39],
     validate_lbound=Base_String[40],
     validate_ubound=Base_String[41],
     validate_bound=Base_String[42],
     pp=Base_String[43],
     equal=Base_String[108],
     _b_=[0,caml_string_of_jsbytes("end_pos")],
     _c_=[0,caml_string_of_jsbytes("start_pos")],
     _d_=[0,caml_string_of_jsbytes("line_start")],
     _e_=[0,caml_string_of_jsbytes("line_number")],
     _f_=[0,caml_string_of_jsbytes("filename")],
     _a_=[0,caml_string_of_jsbytes("common/file.ml"),74,22],
     _l_=[0,caml_string_of_jsbytes("body_location")],
     _m_=[0,caml_string_of_jsbytes("extid_location")],
     _n_=[0,caml_string_of_jsbytes("body")],
     _o_=[0,caml_string_of_jsbytes("tag")],
     _h_=[0,caml_string_of_jsbytes("Output")],
     _i_=[0,caml_string_of_jsbytes("Unreachable")],
     _j_=[0,caml_string_of_jsbytes("Exact")],
     _k_=[0,caml_string_of_jsbytes("Pretty")];
    function relative_to(dir,t)
     {return caml_call1(Stdlib_filename[5],t)
              ?caml_call2(Stdlib_filename[4],dir,t)
              :t}
    var
     Name=
      [0,
       relative_to,
       hash_fold_t,
       function(_O_){return runtime.Base_hash_string(_O_)},
       t_of_sexp,
       sexp_of_t,
       of_string,
       to_string,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator,
       validate_lbound,
       validate_ubound,
       validate_bound,
       pp];
    try
     {var switch$0=0,v=runtime.caml_sys_getcwd(0);switch$0 = 1}
    catch(exn)
     {exn = caml_wrap_exception(exn);var dir_or_error=[0,3458171,exn]}
    if(switch$0)var dir_or_error=[0,17724,v];
    function initial_dir(param)
     {if(3458171 <= dir_or_error[1]){var exn=dir_or_error[2];throw exn}
      var v=dir_or_error[2];
      return v}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       filename_field=[0,0],
       line_number_field=[0,0],
       line_start_field=[0,0],
       start_pos_field=[0,0],
       end_pos_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _D_=param[1];
          if(1 === _D_[0])
           {var _E_=_D_[1];
            if(_E_)
             {var _F_=_E_[1];
              if(0 === _F_[0])
               {var _G_=_E_[2],_H_=_F_[1],switch$0=0;
                if(! _G_ || ! _G_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$5=
                    function(_N_)
                     {function field_sexp(param)
                       {if(_N_)
                         {if(_N_[2])throw [0,Assert_failure,_a_];
                          var x=_N_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$5(_G_);
                  if(caml_string_notequal(_H_,cst_end_pos))
                   if(caml_string_notequal(_H_,cst_filename))
                    if(caml_string_notequal(_H_,cst_line_number))
                     if(caml_string_notequal(_H_,cst_line_start))
                      if(caml_string_notequal(_H_,cst_start_pos))
                       {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_H_,extra[1]]}
                      else
                       if(start_pos_field[1])
                        duplicates[1] = [0,_H_,duplicates[1]];
                       else
                        {var
                          field_sexp$0=field_sexp(0),
                          fvalue=caml_call1(Base[119],field_sexp$0);
                         start_pos_field[1] = [0,fvalue]}
                     else
                      if(line_start_field[1])
                       duplicates[1] = [0,_H_,duplicates[1]];
                      else
                       {var
                         field_sexp$1=field_sexp(0),
                         fvalue$0=caml_call1(Base[119],field_sexp$1);
                        line_start_field[1] = [0,fvalue$0]}
                    else
                     if(line_number_field[1])
                      duplicates[1] = [0,_H_,duplicates[1]];
                     else
                      {var
                        field_sexp$2=field_sexp(0),
                        fvalue$1=caml_call1(Base[119],field_sexp$2);
                       line_number_field[1] = [0,fvalue$1]}
                   else
                    if(filename_field[1])
                     duplicates[1] = [0,_H_,duplicates[1]];
                    else
                     {var
                       field_sexp$3=field_sexp(0),
                       fvalue$2=caml_call1(Name[4],field_sexp$3);
                      filename_field[1] = [0,fvalue$2]}
                  else
                   if(end_pos_field[1])
                    duplicates[1] = [0,_H_,duplicates[1]];
                   else
                    {var
                      field_sexp$4=field_sexp(0),
                      fvalue$3=caml_call1(Base[119],field_sexp$4);
                     end_pos_field[1] = [0,fvalue$3]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_D_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _I_=filename_field[1],
         _J_=line_number_field[1],
         _K_=line_start_field[1],
         _L_=start_pos_field[1],
         _M_=end_pos_field[1];
        if(_I_ && _J_ && _K_ && _L_ && _M_)
         {var
           end_pos_value=_M_[1],
           start_pos_value=_L_[1],
           line_start_value=_K_[1],
           line_number_value=_J_[1],
           filename_value=_I_[1];
          return [0,
                  filename_value,
                  line_number_value,
                  line_start_value,
                  start_pos_value,
                  end_pos_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === filename_field[1]?1:0,cst_filename$0],
                  [0,
                   [0,0 === line_number_field[1]?1:0,cst_line_number$0],
                   [0,
                    [0,0 === line_start_field[1]?1:0,cst_line_start$0],
                    [0,
                     [0,0 === start_pos_field[1]?1:0,cst_start_pos$0],
                     [0,[0,0 === end_pos_field[1]?1:0,cst_end_pos$0],0]]]]])}}
    function sexp_of_t$0(param)
     {var
       v_end_pos=param[5],
       v_start_pos=param[4],
       v_line_start=param[3],
       v_line_number=param[2],
       v_filename=param[1],
       arg=caml_call1(Base[120],v_end_pos),
       bnds=[0,[1,[0,_b_,[0,arg,0]]],0],
       arg$0=caml_call1(Base[120],v_start_pos),
       bnds$0=[0,[1,[0,_c_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Base[120],v_line_start),
       bnds$1=[0,[1,[0,_d_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Base[120],v_line_number),
       bnds$2=[0,[1,[0,_e_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Name[5],v_filename),
       bnds$3=[0,[1,[0,_f_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function compare$0(a,b)
     {if(caml_call2(Name[14],a[1],b[1]))
       {if(caml_call2(Base_Ppx_compare_lib[1],a,b))return 0;
        var n=caml_call2(Name[15],a[1],b[1]);
        if(0 === n)
         {var n$0=caml_call2(Base[115],a[2],b[2]);
          if(0 === n$0)
           {var n$1=caml_call2(Base[115],a[3],b[3]);
            if(0 === n$1)
             {var n$2=caml_call2(Base[115],a[4],b[4]);
              return 0 === n$2?caml_call2(Base[115],a[5],b[5]):n$2}
            return n$1}
          return n$0}
        return n}
      return caml_call1(Base[221],cst_Expect_test_collector_File)}
    var
     include=caml_call1(Base_Comparable[10],[0,compare$0,sexp_of_t$0]),
     symbol$5=include[1],
     symbol$6=include[2],
     symbol$7=include[3],
     symbol$8=include[4],
     symbol$9=include[5],
     symbol$10=include[6],
     equal$0=include[7],
     compare$1=include[8],
     min$0=include[9],
     max$0=include[10],
     ascending$0=include[11],
     descending$0=include[12],
     between$0=include[13],
     clamp_exn$0=include[14],
     clamp$0=include[15],
     comparator$0=include[16],
     validate_lbound$0=include[17],
     validate_ubound$0=include[18],
     validate_bound$0=include[19];
    function beginning_of_file(filename){return [0,filename,1,0,0,0]}
    var sexp_of_t$1=Base[165],compare$2=Base[160];
    function to_string$0(t){return t}
    function of_string$0(s)
     {var expected_length=32;
      if(caml_call2(Base[201],runtime.caml_ml_string_length(s),32))
       caml_call1(Base[221],cst_Expect_test_collector_File$0);
      var _B_=caml_call2(Base[181],expected_length,1),_A_=0;
      if(! (_B_ < 0))
       {var i=_A_;
        for(;;)
         {var match=runtime.caml_string_get(s,i),switch$0=0;
          if(58 <= match)
           {if(! (5 < (match - 97 | 0) >>> 0))switch$0 = 1}
          else
           if(48 <= match)switch$0 = 1;
          if(! switch$0)
           caml_call1(Base[221],cst_Expect_test_collector_File$1);
          var _C_=i + 1 | 0;
          if(_B_ !== i){var i=_C_;continue}
          break}}
      return s}
    var
     _g_=
      [0,
       t_of_sexp$0,
       sexp_of_t$0,
       beginning_of_file,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$1,
       min$0,
       max$0,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$0,
       validate_lbound$0,
       validate_ubound$0,
       validate_bound$0],
     Expect_test_common_File=
      [0,
       Name,
       initial_dir,
       _g_,
       [0,sexp_of_t$1,compare$2,of_string$0,to_string$0]];
    caml_register_global
     (38,Expect_test_common_File,"Expect_test_common__File");
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_h_:_i_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0);
          return [1,[0,_j_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_a,v0$1);
        return [1,[0,_k_,[0,v0$2,0]]]}}
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 0}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return -1}
        else
         if(typeof match === "number")
          {if(1 === match)return 0;switch$0 = 1}
         else
          if(1 === match[0])return 1}
      else
       {if(0 === a_001[0])
         {var _y_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][8],_y_,b_004)}
          return -1}
        var _z_=a_001[1];
        if(typeof match === "number")
         {if(0 !== match)return -1;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_006=match[1];return caml_call2(cmp_a,_z_,b_006)}}
      return switch$0?1:1}
    function equal$1(cmp_a,a_007,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_007,match))return 1;
      var switch$0=0;
      if(typeof a_007 === "number")
       {if(0 === a_007)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 1}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return 0}
        else
         if(typeof match === "number")
          {if(1 === match)return 1;switch$0 = 1}
         else
          if(1 === match[0])return 0}
      else
       {if(0 === a_007[0])
         {var _w_=a_007[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_010=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][21],_w_,b_010)}
          return 0}
        var _x_=a_007[1];
        if(typeof match === "number")
         {if(0 !== match)return 0;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_012=match[1];return caml_call2(cmp_a,_x_,b_012)}}
      return switch$0?0:0}
    function map_pretty(t,f)
     {if(typeof t !== "number" && 1 === t[0])
       {var x=t[1];return [1,caml_call1(f,x)]}
      return t}
    var Body=[0,sexp_of_t$2,compare$3,equal$1,map_pretty];
    function sexp_of_t$3(of_a,param)
     {var
       v_body_location=param[4],
       v_extid_location=param[3],
       v_body=param[2],
       v_tag=param[1],
       arg=caml_call1(_g_[2],v_body_location),
       bnds=[0,[1,[0,_l_,[0,arg,0]]],0],
       arg$0=caml_call1(_g_[2],v_extid_location),
       bnds$0=[0,[1,[0,_m_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Body[1],of_a,v_body),
       bnds$1=[0,[1,[0,_n_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7],v_tag),
       bnds$2=[0,[1,[0,_o_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function compare$4(cmp_a,a_013,b_014)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_013,b_014))return 0;
      var
       n=
        caml_call3
         (Base_Ppx_compare_lib[4][12],
          Base_Ppx_compare_lib[4][8],
          a_013[1],
          b_014[1]);
      if(0 === n)
       {var n$0=caml_call3(Body[2],cmp_a,a_013[2],b_014[2]);
        if(0 === n$0)
         {var n$1=caml_call2(_g_[11],a_013[3],b_014[3]);
          return 0 === n$1?caml_call2(_g_[11],a_013[4],b_014[4]):n$1}
        return n$0}
      return n}
    function equal$2(cmp_a,a_019,b_020)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_019,b_020))return 1;
      var
       _s_=
        caml_call3
         (Base_Ppx_compare_lib[4][25],
          Base_Ppx_compare_lib[4][21],
          a_019[1],
          b_020[1]);
      if(_s_)
       {var _t_=caml_call3(Body[3],cmp_a,a_019[2],b_020[2]);
        if(_t_)
         {var _u_=caml_call2(_g_[10],a_019[3],b_020[3]);
          if(_u_)return caml_call2(_g_[10],a_019[4],b_020[4]);
          var _v_=_u_}
        else
         var _v_=_t_}
      else
       var _v_=_s_;
      return _v_}
    function sexp_of_t$4(v){return sexp_of_t$3(Sexplib0_Sexp_conv[7],v)}
    function compare$5(a_025,b_026)
     {return compare$4(Base_Ppx_compare_lib[4][8],a_025,b_026)}
    var Raw=[0,sexp_of_t$4,compare$5];
    function map_pretty$0(init,f)
     {var _p_=init[4],_q_=init[3],_r_=caml_call2(Body[4],init[2],f);
      return [0,init[1],_r_,_q_,_p_]}
    var
     Expect_test_common_Expectation=
      [0,Body,sexp_of_t$3,compare$4,equal$2,Raw,map_pretty$0];
    caml_register_global
     (39,Expect_test_common_Expectation,"Expect_test_common__Expectation");
    var Std=[0],Expect_test_common$0=[0,Std];
    caml_register_global(40,Expect_test_common$0,"Expect_test_common");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb21tb24uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImVxdWFsIl0sInNvdXJjZXMiOlsiL2hvbWUvem91Z3Vhbnl1bi8ub3BhbS80LjEyLjAvbGliL29jYW1sL3N0cmluZy5tbGkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrWEFBOzs7Ozs7Ozs7Ozs7Ozs7O007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBQUE7Ozs7Ozs7Ozs7Ozs7OztNIiwic291cmNlc0NvbnRlbnQiOlsiKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQ2FtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgWGF2aWVyIExlcm95LCBwcm9qZXQgQ3Jpc3RhbCwgSU5SSUEgUm9jcXVlbmNvdXJ0ICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBDb3B5cmlnaHQgMTk5NiBJbnN0aXR1dCBOYXRpb25hbCBkZSBSZWNoZXJjaGUgZW4gSW5mb3JtYXRpcXVlIGV0ICAgICAqKVxuKCogICAgIGVuIEF1dG9tYXRpcXVlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBBbGwgcmlnaHRzIHJlc2VydmVkLiAgVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiAgICAqKVxuKCogICB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMi4xLCB3aXRoIHRoZSAgICAgICAgICAqKVxuKCogICBzcGVjaWFsIGV4Y2VwdGlvbiBvbiBsaW5raW5nIGRlc2NyaWJlZCBpbiB0aGUgZmlsZSBMSUNFTlNFLiAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuXG4oKiBOT1RFOlxuICAgSWYgdGhpcyBmaWxlIGlzIHN0cmluZ0xhYmVscy5tbGksIHJ1biB0b29scy9zeW5jX3N0ZGxpYl9kb2NzIGFmdGVyIGVkaXRpbmdcbiAgIGl0IHRvIGdlbmVyYXRlIHN0cmluZy5tbGkuXG5cbiAgIElmIHRoaXMgZmlsZSBpcyBzdHJpbmcubWxpLCBkbyBub3QgZWRpdCBpdCBkaXJlY3RseSAtLSBlZGl0XG4gICBzdHJpbmdMYWJlbHMubWxpIGluc3RlYWQuXG4gKilcblxuKCoqIFN0cmluZ3MuXG5cbiAgICBBIHN0cmluZyBbc10gb2YgbGVuZ3RoIFtuXSBpcyBhbiBpbmRleGFibGUgYW5kIGltbXV0YWJsZSBzZXF1ZW5jZVxuICAgIG9mIFtuXSBieXRlcy4gRm9yIGhpc3RvcmljYWwgcmVhc29ucyB0aGVzZSBieXRlcyBhcmUgcmVmZXJyZWQgdG9cbiAgICBhcyBjaGFyYWN0ZXJzLlxuXG4gICAgVGhlIHNlbWFudGljcyBvZiBzdHJpbmcgZnVuY3Rpb25zIGlzIGRlZmluZWQgaW4gdGVybXMgb2ZcbiAgICBpbmRpY2VzIGFuZCBwb3NpdGlvbnMuIFRoZXNlIGFyZSBkZXBpY3RlZCBhbmQgZGVzY3JpYmVkXG4gICAgYXMgZm9sbG93cy5cblxue3ZcbnBvc2l0aW9ucyAgMCAgIDEgICAyICAgMyAgIDQgICAgbi0xICAgIG5cbiAgICAgICAgICAgKy0tLSstLS0rLS0tKy0tLSsgICAgICstLS0tLStcbiAgaW5kaWNlcyAgfCAwIHwgMSB8IDIgfCAzIHwgLi4uIHwgbi0xIHxcbiAgICAgICAgICAgKy0tLSstLS0rLS0tKy0tLSsgICAgICstLS0tLStcbnZ9XG4gICAge3VsXG4gICAgey0gQW4ge2UgaW5kZXh9IFtpXSBvZiBbc10gaXMgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2UgXFxbWzBdO1tuLTFdXFxdLlxuICAgICAgIEl0IHJlcHJlc2VudHMgdGhlIFtpXXRoIGJ5dGUgKGNoYXJhY3Rlcikgb2YgW3NdIHdoaWNoIGNhbiBiZVxuICAgICAgIGFjY2Vzc2VkIHVzaW5nIHRoZSBjb25zdGFudCB0aW1lIHN0cmluZyBpbmRleGluZyBvcGVyYXRvclxuICAgICAgIFtzLltpXV0ufVxuICAgIHstIEEge2UgcG9zaXRpb259IFtpXSBvZiBbc10gaXMgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2VcbiAgICAgICBcXFtbMF07W25dXFxdLiBJdCByZXByZXNlbnRzIGVpdGhlciB0aGUgcG9pbnQgYXQgdGhlIGJlZ2lubmluZyBvZlxuICAgICAgIHRoZSBzdHJpbmcsIG9yIHRoZSBwb2ludCBiZXR3ZWVuIHR3byBpbmRpY2VzLCBvciB0aGUgcG9pbnQgYXRcbiAgICAgICB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuIFRoZSBbaV10aCBieXRlIGluZGV4IGlzIGJldHdlZW4gcG9zaXRpb25cbiAgICAgICBbaV0gYW5kIFtpKzFdLn19XG5cbiAgICBUd28gaW50ZWdlcnMgW3N0YXJ0XSBhbmQgW2xlbl0gYXJlIHNhaWQgdG8gZGVmaW5lIGEge2UgdmFsaWRcbiAgICBzdWJzdHJpbmd9IG9mIFtzXSBpZiBbbGVuID49IDBdIGFuZCBbc3RhcnRdLCBbc3RhcnQrbGVuXSBhcmVcbiAgICBwb3NpdGlvbnMgb2YgW3NdLlxuXG4gICAge2IgVW5pY29kZSB0ZXh0Ln0gU3RyaW5ncyBiZWluZyBhcmJpdHJhcnkgc2VxdWVuY2VzIG9mIGJ5dGVzLCB0aGV5XG4gICAgY2FuIGhvbGQgYW55IGtpbmQgb2YgdGV4dHVhbCBlbmNvZGluZy4gSG93ZXZlciB0aGUgcmVjb21tZW5kZWRcbiAgICBlbmNvZGluZyBmb3Igc3RvcmluZyBVbmljb2RlIHRleHQgaW4gT0NhbWwgc3RyaW5ncyBpcyBVVEYtOC4gVGhpc1xuICAgIGlzIHRoZSBlbmNvZGluZyB1c2VkIGJ5IFVuaWNvZGUgZXNjYXBlcyBpbiBzdHJpbmcgbGl0ZXJhbHMuIEZvclxuICAgIGV4YW1wbGUgdGhlIHN0cmluZyBbXCJcXHV7MUY0MkJ9XCJdIGlzIHRoZSBVVEYtOCBlbmNvZGluZyBvZiB0aGVcbiAgICBVbmljb2RlIGNoYXJhY3RlciBVKzFGNDJCLlxuXG4gICAge2IgUGFzdCBtdXRhYmlsaXR5Ln0gT0NhbWwgc3RyaW5ncyB1c2VkIHRvIGJlIG1vZGlmaWFibGUgaW4gcGxhY2UsXG4gICAgZm9yIGluc3RhbmNlIHZpYSB0aGUgeyFTdHJpbmcuc2V0fSBhbmQgeyFTdHJpbmcuYmxpdH1cbiAgICBmdW5jdGlvbnMuIFRoaXMgdXNlIGlzIG5vd2FkYXlzIG9ubHkgcG9zc2libGUgd2hlbiB0aGUgY29tcGlsZXIgaXNcbiAgICBwdXQgaW4gXCJ1bnNhZmUtc3RyaW5nXCIgbW9kZSBieSBnaXZpbmcgdGhlIFstdW5zYWZlLXN0cmluZ11cbiAgICBjb21tYW5kLWxpbmUgb3B0aW9uLiBUaGlzIGNvbXBhdGliaWxpdHkgbW9kZSBtYWtlcyB0aGUgdHlwZXNcbiAgICBbc3RyaW5nXSBhbmQgW2J5dGVzXSAoc2VlIHshQnl0ZXMudH0pIGludGVyY2hhbmdlYWJsZSBzbyB0aGF0XG4gICAgZnVuY3Rpb25zIGV4cGVjdGluZyBieXRlIHNlcXVlbmNlcyBjYW4gYWxzbyBhY2NlcHQgc3RyaW5ncyBhc1xuICAgIGFyZ3VtZW50cyBhbmQgbW9kaWZ5IHRoZW0uXG5cbiAgICBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBbYnl0ZXNdIGFuZCBbc3RyaW5nXSB3YXMgaW50cm9kdWNlZCBpblxuICAgIE9DYW1sIDQuMDIsIGFuZCB0aGUgXCJ1bnNhZmUtc3RyaW5nXCIgY29tcGF0aWJpbGl0eSBtb2RlIHdhcyB0aGVcbiAgICBkZWZhdWx0IHVudGlsIE9DYW1sIDQuMDUuIFN0YXJ0aW5nIHdpdGggNC4wNiwgdGhlIGNvbXBhdGliaWxpdHlcbiAgICBtb2RlIGlzIG9wdC1pbjsgd2UgaW50ZW5kIHRvIHJlbW92ZSB0aGUgb3B0aW9uIGluIHRoZSBmdXR1cmUuXG5cbiAgICBUaGUgbGFiZWxlZCB2ZXJzaW9uIG9mIHRoaXMgbW9kdWxlIGNhbiBiZSB1c2VkIGFzIGRlc2NyaWJlZCBpbiB0aGVcbiAgICB7IVN0ZExhYmVsc30gbW9kdWxlLlxuKilcblxuKCoqIHsxOnN0cmluZ3MgU3RyaW5nc30gKilcblxudHlwZSB0ID0gc3RyaW5nXG4oKiogVGhlIHR5cGUgZm9yIHN0cmluZ3MuICopXG5cbnZhbCBtYWtlIDogaW50IC0+IGNoYXIgLT4gc3RyaW5nXG4oKiogW21ha2UgbiBjXSBpcyBhIHN0cmluZyBvZiBsZW5ndGggW25dIHdpdGggZWFjaCBpbmRleCBob2xkaW5nIHRoZVxuICAgIGNoYXJhY3RlciBbY10uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbiA8IDBdIG9yIFtuID4gXXshU3lzLm1heF9zdHJpbmdfbGVuZ3RofS4gKilcblxudmFsIGluaXQgOiBpbnQgLT4gKGludCAtPiBjaGFyKSAtPiBzdHJpbmdcbigqKiBbaW5pdCBuIGZdIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCBbbl0gd2l0aCBpbmRleFxuICAgIFtpXSBob2xkaW5nIHRoZSBjaGFyYWN0ZXIgW2YgaV0gKGNhbGxlZCBpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyKS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LlxuICAgIEBzaW5jZSA0LjAyLjAgKilcblxuZXh0ZXJuYWwgbGVuZ3RoIDogc3RyaW5nIC0+IGludCA9IFwiJXN0cmluZ19sZW5ndGhcIlxuKCoqIFtsZW5ndGggc10gaXMgdGhlIGxlbmd0aCAobnVtYmVyIG9mIGJ5dGVzL2NoYXJhY3RlcnMpIG9mIFtzXS4gKilcblxuZXh0ZXJuYWwgZ2V0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyID0gXCIlc3RyaW5nX3NhZmVfZ2V0XCJcbigqKiBbZ2V0IHMgaV0gaXMgdGhlIGNoYXJhY3RlciBhdCBpbmRleCBbaV0gaW4gW3NdLiBUaGlzIGlzIHRoZSBzYW1lXG4gICAgYXMgd3JpdGluZyBbcy5baV1dLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIG5vdCBhbiBpbmRleCBvZiBbc10uICopXG5cbigqKiB7MTpjb25jYXQgQ29uY2F0ZW5hdGluZ31cblxuICAgIHtiIE5vdGUufSBUaGUgeyFTdGRsaWIuKCBeICl9IGJpbmFyeSBvcGVyYXRvciBjb25jYXRlbmF0ZXMgdHdvXG4gICAgc3RyaW5ncy4gKilcblxudmFsIGNvbmNhdCA6IHN0cmluZyAtPiBzdHJpbmcgbGlzdCAtPiBzdHJpbmdcbigqKiBbY29uY2F0IHNlcCBzc10gY29uY2F0ZW5hdGVzIHRoZSBsaXN0IG9mIHN0cmluZ3MgW3NzXSwgaW5zZXJ0aW5nXG4gICAgdGhlIHNlcGFyYXRvciBzdHJpbmcgW3NlcF0gYmV0d2VlbiBlYWNoLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgdGhlIHJlc3VsdCBpcyBsb25nZXIgdGhhblxuICAgIHshU3lzLm1heF9zdHJpbmdfbGVuZ3RofSBieXRlcy4gKilcblxuKCoqIHsxOnByZWRpY2F0ZXMgUHJlZGljYXRlcyBhbmQgY29tcGFyaXNvbnN9ICopXG5cbnZhbCBlcXVhbCA6IHQgLT4gdCAtPiBib29sXG4oKiogW2VxdWFsIHMwIHMxXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW3MwXSBhbmQgW3MxXSBhcmUgY2hhcmFjdGVyLXdpc2VcbiAgICBlcXVhbC5cbiAgICBAc2luY2UgNC4wMy4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG52YWwgY29tcGFyZSA6IHQgLT4gdCAtPiBpbnRcbigqKiBbY29tcGFyZSBzMCBzMV0gc29ydHMgW3MwXSBhbmQgW3MxXSBpbiBsZXhpY29ncmFwaGljYWwgb3JkZXIuIFtjb21wYXJlXVxuICAgIGJlaGF2ZXMgbGlrZSB7IVN0ZGxpYi5jb21wYXJlfSBvbiBzdHJpbmdzIGJ1dCBtYXkgYmUgbW9yZSBlZmZpY2llbnQuICopXG5cbnZhbCBjb250YWluc19mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGJvb2xcbigqKiBbY29udGFpbnNfZnJvbSBzIHN0YXJ0IGNdIGlzIFt0cnVlXSBpZiBhbmQgb25seSBpZiBbY10gYXBwZWFycyBpbiBbc11cbiAgICBhZnRlciBwb3NpdGlvbiBbc3RhcnRdLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0YXJ0XSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uICopXG5cbnZhbCByY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW3Jjb250YWluc19mcm9tIHMgc3RvcCBjXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2NdIGFwcGVhcnMgaW4gW3NdXG4gICAgYmVmb3JlIHBvc2l0aW9uIFtzdG9wKzFdLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0b3AgPCAwXSBvciBbc3RvcCsxXSBpcyBub3QgYSB2YWxpZFxuICAgIHBvc2l0aW9uIGluIFtzXS4gKilcblxudmFsIGNvbnRhaW5zIDogc3RyaW5nIC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtjb250YWlucyBzIGNdIGlzIHshU3RyaW5nLmNvbnRhaW5zX2Zyb219WyBzIDAgY10uICopXG5cbigqKiB7MTpleHRyYWN0IEV4dHJhY3Rpbmcgc3Vic3RyaW5nc30gKilcblxudmFsIHN1YiA6IHN0cmluZyAtPiBpbnQgLT4gaW50IC0+IHN0cmluZ1xuKCoqIFtzdWIgcyBwb3MgbGVuXSBpcyBhIHN0cmluZyBvZiBsZW5ndGggW2xlbl0sIGNvbnRhaW5pbmcgdGhlXG4gICAgc3Vic3RyaW5nIG9mIFtzXSB0aGF0IHN0YXJ0cyBhdCBwb3NpdGlvbiBbcG9zXSBhbmQgaGFzIGxlbmd0aFxuICAgIFtsZW5dLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3Bvc10gYW5kIFtsZW5dIGRvIG5vdCBkZXNpZ25hdGUgYSB2YWxpZFxuICAgIHN1YnN0cmluZyBvZiBbc10uICopXG5cbnZhbCBzcGxpdF9vbl9jaGFyIDogY2hhciAtPiBzdHJpbmcgLT4gc3RyaW5nIGxpc3RcbigqKiBbc3BsaXRfb25fY2hhciBzZXAgc10gaXMgdGhlIGxpc3Qgb2YgYWxsIChwb3NzaWJseSBlbXB0eSlcbiAgICBzdWJzdHJpbmdzIG9mIFtzXSB0aGF0IGFyZSBkZWxpbWl0ZWQgYnkgdGhlIGNoYXJhY3RlciBbc2VwXS5cblxuICAgIFRoZSBmdW5jdGlvbidzIHJlc3VsdCBpcyBzcGVjaWZpZWQgYnkgdGhlIGZvbGxvd2luZyBpbnZhcmlhbnRzOlxuICAgIHt1bFxuICAgIHstIFRoZSBsaXN0IGlzIG5vdCBlbXB0eS59XG4gICAgey0gQ29uY2F0ZW5hdGluZyBpdHMgZWxlbWVudHMgdXNpbmcgW3NlcF0gYXMgYSBzZXBhcmF0b3IgcmV0dXJucyBhXG4gICAgICBzdHJpbmcgZXF1YWwgdG8gdGhlIGlucHV0IChbY29uY2F0IChtYWtlIDEgc2VwKVxuICAgICAgKHNwbGl0X29uX2NoYXIgc2VwIHMpID0gc10pLn1cbiAgICB7LSBObyBzdHJpbmcgaW4gdGhlIHJlc3VsdCBjb250YWlucyB0aGUgW3NlcF0gY2hhcmFjdGVyLn19XG5cbiAgICBAc2luY2UgNC4wNC4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG4oKiogezE6dHJhbnNmb3JtaW5nIFRyYW5zZm9ybWluZ30gKilcblxudmFsIG1hcCA6IChjaGFyIC0+IGNoYXIpIC0+IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbbWFwIGYgc10gaXMgdGhlIHN0cmluZyByZXN1bHRpbmcgZnJvbSBhcHBseWluZyBbZl0gdG8gYWxsIHRoZVxuICAgIGNoYXJhY3RlcnMgb2YgW3NdIGluIGluY3JlYXNpbmcgb3JkZXIuXG5cbiAgICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBtYXBpIDogKGludCAtPiBjaGFyIC0+IGNoYXIpIC0+IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbbWFwaSBmIHNdIGlzIGxpa2UgeyFtYXB9IGJ1dCB0aGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBpcyBhbHNvXG4gICAgcGFzc2VkIHRvIFtmXS5cblxuICAgIEBzaW5jZSA0LjAyLjAgKilcblxudmFsIHRyaW0gOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3RyaW0gc10gaXMgW3NdIHdpdGhvdXQgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gV2hpdGVzcGFjZVxuICAgIGNoYXJhY3RlcnMgYXJlOiBbJyAnXSwgWydcXHgwQyddIChmb3JtIGZlZWQpLCBbJ1xcbiddLCBbJ1xcciddLCBhbmQgWydcXHQnXS5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIGVzY2FwZWQgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2VzY2FwZWQgc10gaXMgW3NdIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGVzY2FwZVxuICAgIHNlcXVlbmNlcywgZm9sbG93aW5nIHRoZSBsZXhpY2FsIGNvbnZlbnRpb25zIG9mIE9DYW1sLlxuXG4gICAgQWxsIGNoYXJhY3RlcnMgb3V0c2lkZSB0aGUgVVMtQVNDSUkgcHJpbnRhYmxlIHJhbmdlIFxcWzB4MjA7MHg3RVxcXSBhcmVcbiAgICBlc2NhcGVkLCBhcyB3ZWxsIGFzIGJhY2tzbGFzaCAoMHgyRikgYW5kIGRvdWJsZS1xdW90ZSAoMHgyMikuXG5cbiAgICBUaGUgZnVuY3Rpb24geyFTY2FuZi51bmVzY2FwZWR9IGlzIGEgbGVmdCBpbnZlcnNlIG9mIFtlc2NhcGVkXSxcbiAgICBpLmUuIFtTY2FuZi51bmVzY2FwZWQgKGVzY2FwZWQgcykgPSBzXSBmb3IgYW55IHN0cmluZyBbc10gKHVubGVzc1xuICAgIFtlc2NhcGVkIHNdIGZhaWxzKS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbnZhbCB1cHBlcmNhc2VfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3VwcGVyY2FzZV9hc2NpaSBzXSBpcyBbc10gd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgICB0cmFuc2xhdGVkIHRvIHVwcGVyY2FzZSwgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAc2luY2UgNC4wMy4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG52YWwgbG93ZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtsb3dlcmNhc2VfYXNjaWkgc10gaXMgW3NdIHdpdGggYWxsIHVwcGVyY2FzZSBsZXR0ZXJzIHRyYW5zbGF0ZWRcbiAgICB0byBsb3dlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIGNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2NhcGl0YWxpemVfYXNjaWkgc10gaXMgW3NdIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG9cbiAgICB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIHVuY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbdW5jYXBpdGFsaXplX2FzY2lpIHNdIGlzIFtzXSB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIGxvd2VyY2FzZSxcbiAgICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbigqKiB7MTp0cmF2ZXJzaW5nIFRyYXZlcnNpbmd9ICopXG5cbnZhbCBpdGVyIDogKGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlciBmIHNdIGFwcGxpZXMgZnVuY3Rpb24gW2ZdIGluIHR1cm4gdG8gYWxsIHRoZSBjaGFyYWN0ZXJzIG9mIFtzXS5cbiAgICBJdCBpcyBlcXVpdmFsZW50IHRvIFtmIHMuWzBdOyBmIHMuWzFdOyAuLi47IGYgcy5bbGVuZ3RoIHMgLSAxXTsgKCldLiAqKVxuXG52YWwgaXRlcmkgOiAoaW50IC0+IGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlcmldIGlzIGxpa2UgeyFpdGVyfSwgYnV0IHRoZSBmdW5jdGlvbiBpcyBhbHNvIGdpdmVuIHRoZVxuICAgIGNvcnJlc3BvbmRpbmcgY2hhcmFjdGVyIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDAuMCAqKVxuXG4oKiogezE6c2VhcmNoaW5nIFNlYXJjaGluZ30gKilcblxudmFsIGluZGV4X2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50XG4oKiogW2luZGV4X2Zyb20gcyBpIGNdIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBbY10gaW5cbiAgICBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLlxuXG4gICAgQHJhaXNlIE5vdF9mb3VuZCBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG5cbnZhbCBpbmRleF9mcm9tX29wdCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgW2NdXG4gICAgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXSAoaWYgYW55KS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXhfZnJvbSBzIGkgY10gaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgW2NdIGluXG4gICAgW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cblxuICAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgcmluZGV4X2Zyb21fb3B0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbcmluZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBbY11cbiAgICBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdIChpZiBhbnkpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCBpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtpbmRleCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb219WyBzIDAgY10uICopXG5cbnZhbCBpbmRleF9vcHQgOiBzdHJpbmcgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X29wdCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb21fb3B0fVsgcyAwIGNdLlxuXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXggcyBjXSBpcyB7IVN0cmluZy5yaW5kZXhfZnJvbX1bIHMgKGxlbmd0aCBzIC0gMSkgY10uICopXG5cbnZhbCByaW5kZXhfb3B0IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtyaW5kZXhfb3B0IHMgY10gaXMgeyFTdHJpbmcucmluZGV4X2Zyb21fb3B0fVsgcyAobGVuZ3RoIHMgLSAxKSBjXS5cblxuICAgIEBzaW5jZSA0LjA1ICopXG5cbigqKiB7MTpjb252ZXJ0aW5nIENvbnZlcnRpbmd9ICopXG5cbnZhbCB0b19zZXEgOiB0IC0+IGNoYXIgU2VxLnRcbigqKiBbdG9fc2VxIHNdIGlzIGEgc2VxdWVuY2UgbWFkZSBvZiB0aGUgc3RyaW5nJ3MgY2hhcmFjdGVycyBpblxuICAgIGluY3JlYXNpbmcgb3JkZXIuIEluIFtcInVuc2FmZS1zdHJpbmdcIl0gbW9kZSwgbW9kaWZpY2F0aW9ucyBvZiB0aGUgc3RyaW5nXG4gICAgZHVyaW5nIGl0ZXJhdGlvbiB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgaXRlcmF0b3IuXG5cbiAgICBAc2luY2UgNC4wNyAqKVxuXG52YWwgdG9fc2VxaSA6IHQgLT4gKGludCAqIGNoYXIpIFNlcS50XG4oKiogW3RvX3NlcWkgc10gaXMgbGlrZSB7IXRvX3NlcX0gYnV0IGFsc28gdHVwbGVzIHRoZSBjb3JyZXNwb25kaW5nIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIG9mX3NlcSA6IGNoYXIgU2VxLnQgLT4gdFxuKCoqIFtvZl9zZXEgc10gaXMgYSBzdHJpbmcgbWFkZSBvZiB0aGUgc2VxdWVuY2UncyBjaGFyYWN0ZXJzLlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxuKCoqIHsxOmRlcHJlY2F0ZWQgRGVwcmVjYXRlZCBmdW5jdGlvbnN9ICopXG5cbmV4dGVybmFsIGNyZWF0ZSA6IGludCAtPiBieXRlcyA9IFwiY2FtbF9jcmVhdGVfc3RyaW5nXCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5jcmVhdGUvQnl0ZXNMYWJlbHMuY3JlYXRlIGluc3RlYWQuXCJdXG4oKiogW2NyZWF0ZSBuXSByZXR1cm5zIGEgZnJlc2ggYnl0ZSBzZXF1ZW5jZSBvZiBsZW5ndGggW25dLlxuICAgIFRoZSBzZXF1ZW5jZSBpcyB1bmluaXRpYWxpemVkIGFuZCBjb250YWlucyBhcmJpdHJhcnkgYnl0ZXMuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG5cbiAgICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZlxuICAgIHshQnl0ZXMuY3JlYXRlfS97IUJ5dGVzTGFiZWxzLmNyZWF0ZX0uICopXG5cbmV4dGVybmFsIHNldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfc2FmZV9zZXRcIlxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLnNldC9CeXRlc0xhYmVscy5zZXQgaW5zdGVhZC5cIl1cbigqKiBbc2V0IHMgbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgdGhlIGJ5dGUgYXQgaW5kZXggW25dIHdpdGggW2NdLlxuICAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl0gPC0gY10gaW5zdGVhZCBvZiBbc2V0IHMgbiBjXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gaXMgbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLlxuXG4gICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2ZcbiAgICB7IUJ5dGVzLnNldH0veyFCeXRlc0xhYmVscy5zZXR9LiAqKVxuXG52YWwgYmxpdCA6XG4gIHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4oKiogW2JsaXQgc3JjIHNyY19wb3MgZHN0IGRzdF9wb3MgbGVuXSBjb3BpZXMgW2xlbl0gYnl0ZXNcbiAgICBmcm9tIHRoZSBzdHJpbmcgW3NyY10sIHN0YXJ0aW5nIGF0IGluZGV4IFtzcmNfcG9zXSxcbiAgICB0byBieXRlIHNlcXVlbmNlIFtkc3RdLCBzdGFydGluZyBhdCBjaGFyYWN0ZXIgbnVtYmVyIFtkc3RfcG9zXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzcmNfcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW3NyY10sIG9yIGlmIFtkc3RfcG9zXSBhbmQgW2xlbl1cbiAgICBkbyBub3QgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW2RzdF0uICopXG5cbnZhbCBjb3B5IDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiU3RyaW5ncyBub3cgaW1tdXRhYmxlOiBubyBuZWVkIHRvIGNvcHlcIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBnaXZlbiBzdHJpbmcuXG5cbiAgICBAZGVwcmVjYXRlZCBCZWNhdXNlIHN0cmluZ3MgYXJlIGltbXV0YWJsZSwgaXQgZG9lc24ndCBtYWtlIG11Y2hcbiAgICBzZW5zZSB0byBtYWtlIGlkZW50aWNhbCBjb3BpZXMgb2YgdGhlbS4gKilcblxudmFsIGZpbGwgOiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdFxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLmZpbGwvQnl0ZXNMYWJlbHMuZmlsbCBpbnN0ZWFkLlwiXVxuKCoqIFtmaWxsIHMgcG9zIGxlbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgW2xlbl0gYnl0ZXMgYnkgW2NdLCBzdGFydGluZyBhdCBbcG9zXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgc3Vic3RyaW5nIG9mIFtzXS5cblxuICAgIEBkZXByZWNhdGVkIFRoaXMgaXMgYSBkZXByZWNhdGVkIGFsaWFzIG9mXG4gICAgeyFCeXRlcy5maWxsfS97IUJ5dGVzTGFiZWxzLmZpbGx9LiAqKVxuXG52YWwgdXBwZXJjYXNlIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLnVwcGVyY2FzZV9hc2NpaS9TdHJpbmdMYWJlbHMudXBwZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIGluY2x1ZGluZyBhY2NlbnRlZCBsZXR0ZXJzIG9mIHRoZSBJU09cbiAgICBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIGxvd2VyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZFxuICAgIFwiVXNlIFN0cmluZy5sb3dlcmNhc2VfYXNjaWkvU3RyaW5nTGFiZWxzLmxvd2VyY2FzZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgIHRyYW5zbGF0ZWQgdG8gbG93ZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBjYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLmNhcGl0YWxpemVfYXNjaWkvU3RyaW5nTGFiZWxzLmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byB1cHBlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuLlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCB1bmNhcGl0YWxpemUgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRcbiAgICBcIlVzZSBTdHJpbmcudW5jYXBpdGFsaXplX2FzY2lpL1N0cmluZ0xhYmVscy51bmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxuKCoqLyoqKVxuXG4oKiBUaGUgZm9sbG93aW5nIGlzIGZvciBzeXN0ZW0gdXNlIG9ubHkuIERvIG5vdCBjYWxsIGRpcmVjdGx5LiAqKVxuXG5leHRlcm5hbCB1bnNhZmVfZ2V0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyID0gXCIlc3RyaW5nX3Vuc2FmZV9nZXRcIlxuZXh0ZXJuYWwgdW5zYWZlX3NldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfdW5zYWZlX3NldFwiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG5leHRlcm5hbCB1bnNhZmVfYmxpdCA6XG4gIHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPlxuICAgIHVuaXQgPSBcImNhbWxfYmxpdF9zdHJpbmdcIiBbQEBub2FsbG9jXVxuZXh0ZXJuYWwgdW5zYWZlX2ZpbGwgOlxuICBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiY2FtbF9maWxsX3N0cmluZ1wiIFtAQG5vYWxsb2NdXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG4iXX0=
