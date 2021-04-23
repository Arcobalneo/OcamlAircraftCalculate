(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ml_string_length=runtime.caml_ml_string_length,
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
     cst_Timezone_Timezone_intf=
      caml_string_of_jsbytes("Timezone__Timezone_intf"),
     cst_timezone=caml_string_of_jsbytes("timezone"),
     cst_src_timezone_intf_ml=caml_string_of_jsbytes("src/timezone_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_timezone$0=caml_string_of_jsbytes("timezone"),
     cst_timezone$1=caml_string_of_jsbytes("timezone"),
     cst_Timezone_Timezone_intf$0=
      caml_string_of_jsbytes("Timezone__Timezone_intf"),
     cst_etc_localtime$2=caml_string_of_jsbytes("/etc/localtime"),
     cst_the_local_time_zone_cannot$0=
      caml_string_of_jsbytes("the local time zone cannot be serialized"),
     cst_etc_localtime$1=caml_string_of_jsbytes("/etc/localtime"),
     cst_the_local_time_zone_cannot=
      caml_string_of_jsbytes("the local time zone cannot be serialized"),
     cst_Local=caml_string_of_jsbytes("Local"),
     cst_GMT$0=caml_string_of_jsbytes("GMT-"),
     cst_GMT$2=caml_string_of_jsbytes("GMT+"),
     cst_UTC$1=caml_string_of_jsbytes("UTC-"),
     cst_UTC$2=caml_string_of_jsbytes("UTC+"),
     cst_GMT$3=caml_string_of_jsbytes("GMT"),
     cst_UTC$3=caml_string_of_jsbytes("UTC"),
     cst_GMT$1=caml_string_of_jsbytes("GMT"),
     cst_UTC$0=caml_string_of_jsbytes("UTC"),
     cst_Timezone_t_of_sexp_expecte=
      caml_string_of_jsbytes("Timezone.t_of_sexp: expected atom"),
     cst_etc_localtime=caml_string_of_jsbytes("/etc/localtime"),
     cst_etc_localtime$0=caml_string_of_jsbytes("/etc/localtime"),
     cst_unknown_zone=caml_string_of_jsbytes("unknown zone"),
     cst_chi=caml_string_of_jsbytes("chi"),
     cst_gmt=caml_string_of_jsbytes("gmt"),
     cst_hkg=caml_string_of_jsbytes("hkg"),
     cst_ldn=caml_string_of_jsbytes("ldn"),
     cst_lon=caml_string_of_jsbytes("lon"),
     cst_nyc=caml_string_of_jsbytes("nyc"),
     cst_tyo=caml_string_of_jsbytes("tyo"),
     cst_utc=caml_string_of_jsbytes("utc"),
     cst_UTC=caml_string_of_jsbytes("UTC"),
     cst_Asia_Tokyo=caml_string_of_jsbytes("Asia/Tokyo"),
     cst_America_New_York=caml_string_of_jsbytes("America/New_York"),
     cst_Asia_Hong_Kong=caml_string_of_jsbytes("Asia/Hong_Kong"),
     cst_GMT=caml_string_of_jsbytes("GMT"),
     cst_America_Chicago=caml_string_of_jsbytes("America/Chicago"),
     cst_Europe_London=caml_string_of_jsbytes("Europe/London"),
     cst$2=caml_string_of_jsbytes("/"),
     skip_prefixes=
      [0,
       caml_string_of_jsbytes("Etc/GMT"),
       [0,
        caml_string_of_jsbytes("right/"),
        [0,caml_string_of_jsbytes("posix/"),0]]],
     cst$1=caml_string_of_jsbytes("/"),
     cst_Timezone=caml_string_of_jsbytes("Timezone"),
     cst_timezone$2=caml_string_of_jsbytes("timezone"),
     cst_src_timezone_ml=caml_string_of_jsbytes("src/timezone.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_timezone$3=caml_string_of_jsbytes("timezone"),
     cst_usr_share_zoneinfo=caml_string_of_jsbytes("/usr/share/zoneinfo/"),
     cst_TZDIR=caml_string_of_jsbytes("TZDIR"),
     cst_TZ=caml_string_of_jsbytes("TZ"),
     module_name=caml_string_of_jsbytes("Timezone"),
     cst_timezone$4=caml_string_of_jsbytes("timezone"),
     cst_Timezone$0=caml_string_of_jsbytes("Timezone"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel=global_data.Core_kernel,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Assert_failure=global_data.Assert_failure,
     Base_Exn=global_data.Base__Exn,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Md5=global_data.Core_kernel__Md5,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_List=global_data.Core_kernel__List,
     Stdio_In_channel=global_data.Stdio__In_channel,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Array=global_data.Core_kernel__Array,
     include=global_data.Core_kernel__Zone,
     Stdlib_sys=global_data.Stdlib__sys,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Base_Hash=global_data.Base__Hash,
     Core_kernel_Binable=global_data.Core_kernel__Binable,
     Core_kernel_Identifiable=global_data.Core_kernel__Identifiable,
     Timezone=[0];
    caml_register_global(57,Timezone,"Timezone__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Timezone_Timezone_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_timezone);
    caml_call1(Expect_test_collector[4][1],cst_src_timezone_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_timezone$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_timezone$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Timezone_Timezone_intf$0);
    var Timezone_Timezone_intf=[0];
    caml_register_global(62,Timezone_Timezone_intf,"Timezone__Timezone_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Timezone);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_timezone$2);
    caml_call1(Expect_test_collector[4][1],cst_src_timezone_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_timezone$3,cst$0);
    var
     _a_=include[3],
     _b_=include[4],
     _c_=include[5],
     _e_=include[7],
     _f_=include[8],
     _g_=include[9],
     _d_=include[6],
     _h_=include[10],
     _i_=include[11],
     _j_=include[12],
     _k_=include[13],
     _l_=include[14],
     _m_=include[15],
     _n_=include[16],
     _o_=include[17],
     _p_=include[18],
     _q_=include[19],
     _r_=include[20],
     _s_=include[21],
     _t_=include[22],
     _u_=caml_call3(Core_kernel_String[130][4],0,0,0),
     _v_=caml_call1(Stdlib_sys[2],cst_TZDIR),
     the_one_and_only=
      [0,0,caml_call2(Core_kernel_Option[49],_v_,cst_usr_share_zoneinfo),_u_],
     _z_=[0,caml_string_of_jsbytes("src/timezone.ml"),186,25],
     _y_=
      [0,
       [11,caml_string_of_jsbytes("Timezone.t_of_sexp: "),[2,0,0]],
       caml_string_of_jsbytes("Timezone.t_of_sexp: %s")],
     _x_=[0,caml_string_of_jsbytes("zone")],
     _w_=[0,caml_string_of_jsbytes("/")];
    function find(zone)
     {return caml_call2(Core_kernel_Hashtbl[52],the_one_and_only[3],zone)}
    function find_or_load(zonename)
     {var match=find(zonename);
      if(match){var z=match[1];return [0,z]}
      if(the_one_and_only[1])return 0;
      try
       {var
         _ah_=caml_call2(Core_kernel[15],cst$1,zonename),
         filename=caml_call2(Core_kernel[15],the_one_and_only[2],_ah_),
         zone=caml_call2(_a_,zonename,filename);
        caml_call3(Core_kernel_Hashtbl[34],the_one_and_only[3],zonename,zone);
        var _ai_=[0,zone];
        return _ai_}
      catch(_aj_){return 0}}
    function traverse(basedir,f)
     {var basedir_len=caml_ml_string_length(basedir) + 1 | 0,maxdepth=10;
      function dfs(dir,depth)
       {if(caml_call2(Core_kernel[89],depth,1))return 0;
        function _ac_(fn)
         {var
           _ae_=caml_call2(Core_kernel[15],cst$2,fn),
           fn$0=caml_call2(Core_kernel[15],dir,_ae_),
           relative_fn=caml_call2(Core_kernel_String[80],fn$0,basedir_len),
           match=runtime.caml_sys_is_directory(fn$0);
          if(match)
           {var
             _af_=
              function(prefix)
               {return caml_call2(Core_kernel_String[51],relative_fn,prefix)},
             _ag_=1 - caml_call2(Core_kernel_List[13],skip_prefixes,_af_);
            return _ag_?dfs(fn$0,depth - 1 | 0):_ag_}
          return caml_call1(f,relative_fn)}
        var _ad_=runtime.caml_sys_read_directory(dir);
        return caml_call2(Core_kernel_Array[20],_ad_,_ac_)}
      return dfs(basedir,maxdepth)}
    function init(param)
     {var _$_=1 - the_one_and_only[1];
      if(_$_)
       {var _aa_=function(zone_name){find_or_load(zone_name);return 0};
        traverse(the_one_and_only[2],_aa_);
        the_one_and_only[1] = 1;
        var _ab_=0}
      else
       var _ab_=_$_;
      return _ab_}
    function initialized_zones(t)
     {function ___(a,b){return caml_call2(Core_kernel_String[115],a[1],b[1])}
      var _Z_=caml_call1(Core_kernel_Hashtbl[74],the_one_and_only[3]);
      return caml_call2(Core_kernel_List[58],_Z_,___)}
    function find$0(zone)
     {if(caml_string_notequal(zone,cst_chi))
       if(caml_string_notequal(zone,cst_gmt))
        if(caml_string_notequal(zone,cst_hkg))
         {var switch$0=0;
          if
           (caml_string_notequal(zone,cst_ldn)
            &&
            caml_string_notequal(zone,cst_lon))
           var
            zone$0=
             caml_string_notequal(zone,cst_nyc)
              ?caml_string_notequal(zone,cst_tyo)
                ?caml_string_notequal(zone,cst_utc)?zone:cst_UTC
                :cst_Asia_Tokyo
              :cst_America_New_York;
          else
           switch$0 = 1;
          if(switch$0)var zone$0=cst_Europe_London}
        else
         var zone$0=cst_Asia_Hong_Kong;
       else
        var zone$0=cst_GMT;
      else
       var zone$0=cst_America_Chicago;
      return find_or_load(zone$0)}
    function find_exn(zone)
     {var match=find$0(zone);
      if(match){var z=match[1];return z}
      var
       _X_=[0,[1,[0,_x_,[0,caml_call1(Core_kernel[455],zone),0]]],0],
       _Y_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_unknown_zone),_X_]];
      return caml_call1(Core_kernel_Error[26],_Y_)}
    var local_zone_name=caml_call1(Stdlib_sys[2],cst_TZ);
    function load(param)
     {if(local_zone_name)
       {var zone_name=local_zone_name[1];return find_exn(zone_name)}
      var t1=caml_call2(_a_,cst_etc_localtime$0,cst_etc_localtime);
      function file_size(filename)
       {var
         c=caml_call2(Stdio_In_channel[3],0,filename),
         l=caml_call1(Stdio_In_channel[22],c);
        caml_call1(Stdio_In_channel[5],c);
        return l}
      var
       _L_=caml_call1(_f_,t1),
       t1_file_size=caml_call2(Core_kernel_Option[39],_L_,file_size);
      function _M_(r)
       {function return_if_matches(zone_name)
         {var
           filename=
            caml_call2
             (Core_kernel_String[26],
              _w_,
              [0,the_one_and_only[2],[0,zone_name,0]]);
          try
           {var
             _N_=[0,file_size(filename)],
             _O_=
              function(x_001,x_002)
                {function _W_(a_005,b_006)
                  {return caml_call2(Core_kernel[370],a_005,b_006)}
                 var match=caml_call3(Core_kernel[435],_W_,x_001,x_002);
                 return 0 === match?1:0}
               (t1_file_size,_N_);
            if(_O_)
             var
              _P_=find_or_load(zone_name),
              _Q_=caml_call2(Core_kernel_Option[39],_P_,_g_),
              _R_=caml_call1(Core_kernel_Option[40],_Q_),
              _S_=caml_call1(_g_,t1),
              _T_=
               function(x_007,x_008)
                 {function _V_(a_011,b_012)
                   {return caml_call2(Core_kernel_Md5[34],a_011,b_012)}
                  var match=caml_call3(Core_kernel[435],_V_,x_007,x_008);
                  return 0 === match?1:0}
                (_S_,_R_);
            else
             var _T_=_O_;
            var matches=_T_}
          catch(_U_){var matches=0}
          return matches?caml_call1(r,find_or_load(zone_name)):0}
        caml_call2(Core_kernel_List[9],_b_[1],return_if_matches);
        traverse(the_one_and_only[2],return_if_matches);
        return 0}
      var match=caml_call1(Core_kernel[244],_M_);
      if(match){var t=match[1];return t}
      return t1}
    var
     local=caml_call1(Core_kernel_Lazy[29],load),
     include$0=include[23],
     Full_data=include$0[1];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _F_=sexp[1];
        if(caml_string_notequal(_F_,cst_Local))
         try
          {var switch$0=0;
           if
            (!
             caml_call2(Core_kernel_String[51],_F_,cst_GMT$0)
             &&
             !
             caml_call2(Core_kernel_String[51],_F_,cst_GMT$2)
             &&
             !
             caml_call2(Core_kernel_String[51],_F_,cst_UTC$1)
             &&
             !
             caml_call2(Core_kernel_String[51],_F_,cst_UTC$2)
             &&
             !
             caml_call2(Core_kernel_String[111],_F_,cst_GMT$3)
             &&
             !
             caml_call2(Core_kernel_String[111],_F_,cst_UTC$3))
            {var _I_=find_exn(_F_);switch$0 = 1}
           if(! switch$0)
            {var switch$1=0;
             if
              (!
               caml_call2(Core_kernel_String[111],_F_,cst_GMT$1)
               &&
               !
               caml_call2(Core_kernel_String[111],_F_,cst_UTC$0))
              {var
                _J_=
                 caml_call3
                  (Core_kernel_String[2],
                   _F_,
                   4,
                   caml_ml_string_length(_F_) - 4 | 0),
                base=caml_call1(Core_kernel_Int[102],_J_),
                match=runtime.caml_string_get(_F_,3),
                switcher=match - 43 | 0,
                switch$2=0;
               if(! (2 < switcher >>> 0))
                {var switch$3=0;
                 switch(switcher)
                  {case 0:var base$0=base;break;
                   case 1:switch$3 = 1;break;
                   default:var base$0=-1 * base | 0}
                 if(! switch$3){var offset=base$0;switch$1 = 1;switch$2 = 1}}
               if(! switch$2)throw [0,Assert_failure,_z_]}
             if(! switch$1)var offset=0;
             var _I_=caml_call1(_c_,offset)}
           return _I_}
         catch(exc)
          {exc = caml_wrap_exception(exc);
           var
            _G_=caml_call1(Base_Exn[9],exc),
            _H_=caml_call2(Core_kernel[241],_y_,_G_);
           return caml_call2(Core_kernel[140],_H_,sexp)}
        var _K_=runtime.caml_obj_tag(local);
        return 250 === _K_
                ?local[1]
                :246 === _K_?caml_call1(CamlinternalLazy[2],local):local}
      return caml_call2(Core_kernel[140],cst_Timezone_t_of_sexp_expecte,sexp)}
    function sexp_of_t(t)
     {var name=caml_call1(_e_,t);
      if(caml_call2(Core_kernel_String[111],name,cst_etc_localtime$1))
       caml_call1(Core_kernel[3],cst_the_local_time_zone_cannot);
      return [0,name]}
    var
     include$1=
      caml_call1(Core_kernel_Sexpable[2][6][1],[0,t_of_sexp,sexp_of_t]),
     _B_=include$1[2],
     _A_=include$1[1];
    function compare(t1,t2)
     {var _D_=caml_call1(_B_,t2),_E_=caml_call1(_B_,t1);
      return caml_call2(Core_kernel_String[112],_E_,_D_)}
    function hash_fold_t(state,t)
     {var _C_=caml_call1(_B_,t);
      return caml_call2(Core_kernel_String[127],state,_C_)}
    var hash=caml_call1(Base_Hash[12],hash_fold_t);
    function to_binable(t)
     {var name=caml_call1(_e_,t);
      if(caml_call2(Core_kernel_String[111],name,cst_etc_localtime$2))
       caml_call1(Core_kernel[3],cst_the_local_time_zone_cannot$0);
      return name}
    function of_binable(s){return t_of_sexp([0,s])}
    var
     include$2=
      caml_call1
       (caml_call1
         (Core_kernel_Binable[18][1][1],
          [0,
           Core_kernel_String[96],
           Core_kernel_String[92],
           Core_kernel_String[93],
           Core_kernel_String[94],
           Core_kernel_String[95]]),
        [0,to_binable,of_binable]),
     bin_size_t=include$2[1],
     bin_write_t=include$2[2],
     bin_read_t=include$2[3],
     bin_read_t$0=include$2[4],
     bin_shape_t=include$2[5],
     bin_writer_t=include$2[6],
     bin_reader_t=include$2[7],
     bin_t=include$2[8],
     include$3=
      caml_call1
       (Core_kernel_Identifiable[2],
        [0,
         bin_size_t,
         bin_write_t,
         bin_read_t,
         bin_read_t$0,
         bin_shape_t,
         bin_writer_t,
         bin_reader_t,
         bin_t,
         compare,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t,
         _A_,
         _B_,
         module_name]),
     bin_size_t$0=include$3[1],
     bin_write_t$0=include$3[2],
     bin_read_t$1=include$3[3],
     bin_read_t$2=include$3[4],
     bin_shape_t$0=include$3[5],
     bin_writer_t$0=include$3[6],
     bin_reader_t$0=include$3[7],
     bin_t$0=include$3[8],
     t_of_sexp$0=include$3[9],
     sexp_of_t$0=include$3[10],
     of_string=include$3[11],
     to_string=include$3[12],
     pp=include$3[13],
     symbol=include$3[14],
     symbol$0=include$3[15],
     symbol$1=include$3[16],
     symbol$2=include$3[17],
     symbol$3=include$3[18],
     symbol$4=include$3[19],
     equal=include$3[20],
     compare$0=include$3[21],
     min=include$3[22],
     max=include$3[23],
     ascending=include$3[24],
     descending=include$3[25],
     between=include$3[26],
     clamp_exn=include$3[27],
     clamp=include$3[28],
     validate_lbound=include$3[29],
     validate_ubound=include$3[30],
     validate_bound=include$3[31],
     Replace_polymorphic_compare=include$3[32],
     comparator=include$3[33],
     Map=include$3[34],
     Set=include$3[35],
     hash_fold_t$0=include$3[36],
     hash$0=include$3[37],
     hashable=include$3[38],
     Table=include$3[39],
     Hash_set=include$3[40],
     Hash_queue=include$3[41];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_timezone$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Timezone$0);
    var
     Timezone$0=
      [0,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$1,
       bin_read_t$2,
       bin_shape_t$0,
       bin_writer_t$0,
       bin_reader_t$0,
       bin_t$0,
       t_of_sexp$0,
       sexp_of_t$0,
       of_string,
       to_string,
       pp,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare$0,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       validate_lbound,
       validate_ubound,
       validate_bound,
       Replace_polymorphic_compare,
       comparator,
       Map,
       Set,
       hash_fold_t$0,
       hash$0,
       hashable,
       Table,
       Hash_set,
       Hash_queue,
       find$0,
       find_exn,
       local,
       initialized_zones,
       init,
       [0,
        [0,
         bin_size_t,
         bin_write_t,
         bin_read_t,
         bin_read_t$0,
         bin_shape_t,
         bin_writer_t,
         bin_reader_t,
         bin_t,
         compare,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t],
        Full_data],
       [0,[0,the_one_and_only,init,find]]];
    caml_register_global(84,Timezone$0,"Timezone");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aW1lem9uZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
