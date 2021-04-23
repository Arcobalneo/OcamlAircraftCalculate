(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Error_checking_mutex_Impor=
      caml_string_of_jsbytes("Error_checking_mutex__Import"),
     cst_error_checking_mutex=caml_string_of_jsbytes("error_checking_mutex"),
     cst_error_checking_mutex_src_i=
      caml_string_of_jsbytes("error_checking_mutex/src/import.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_error_checking_mutex$0=caml_string_of_jsbytes("error_checking_mutex"),
     cst_error_checking_mutex$1=caml_string_of_jsbytes("error_checking_mutex"),
     cst_Error_checking_mutex_Impor$0=
      caml_string_of_jsbytes("Error_checking_mutex__Import"),
     cst_Error_checking_mutex=caml_string_of_jsbytes("Error_checking_mutex"),
     cst_error_checking_mutex$2=caml_string_of_jsbytes("error_checking_mutex"),
     cst_error_checking_mutex_src_e=
      caml_string_of_jsbytes
       ("error_checking_mutex/src/error_checking_mutex.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_error_checking_mutex$3=caml_string_of_jsbytes("error_checking_mutex"),
     cst_error_checking_mutex$4=caml_string_of_jsbytes("error_checking_mutex"),
     cst_Error_checking_mutex$0=caml_string_of_jsbytes("Error_checking_mutex"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Condition=global_data.Condition,
     Base_Exn=global_data.Base__Exn,
     include=global_data.Mutex,
     Error_checking_mutex=[0];
    caml_register_global(14,Error_checking_mutex,"Error_checking_mutex__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Error_checking_mutex_Impor);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_error_checking_mutex);
    caml_call1(Expect_test_collector[4][1],cst_error_checking_mutex_src_i);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_error_checking_mutex$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_error_checking_mutex$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Error_checking_mutex_Impor$0);
    var Error_checking_mutex_Import=[0];
    caml_register_global
     (19,Error_checking_mutex_Import,"Error_checking_mutex__Import");
    caml_call1(Ppx_module_timer_runtime[4],cst_Error_checking_mutex);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_error_checking_mutex$2);
    caml_call1(Expect_test_collector[4][1],cst_error_checking_mutex_src_e);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_error_checking_mutex$3,cst$0);
    var _a_=include[2],_c_=include[4],_b_=include[3];
    function create(_e_){return runtime.unix_create_error_checking_mutex(_e_)}
    function equal(t$0,t){return t$0 === t?1:0}
    function critical_section(l,f)
     {caml_call1(_a_,l);
      function _d_(param){return caml_call1(_c_,l)}
      return caml_call2(Base_Exn[12],f,_d_)}
    function synchronize(f)
     {var mtx=runtime.unix_create_error_checking_mutex(0);
      function f$0(x)
       {return critical_section(mtx,function(param){return caml_call1(f,x)})}
      return f$0}
    function update_signal(mtx,cnd,f)
     {return critical_section
              (mtx,
               function(param)
                {var res=caml_call1(f,0);
                 caml_call1(Condition[3],cnd);
                 return res})}
    function update_broadcast(mtx,cnd,f)
     {return critical_section
              (mtx,
               function(param)
                {var res=caml_call1(f,0);
                 caml_call1(Condition[4],cnd);
                 return res})}
    function try_lock(m){return caml_call1(_b_,m)?-326120466:-888951082}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_error_checking_mutex$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Error_checking_mutex$0);
    var
     Error_checking_mutex$0=
      [0,
       create,
       equal,
       _a_,
       try_lock,
       _c_,
       critical_section,
       synchronize,
       update_signal,
       update_broadcast];
    caml_register_global(23,Error_checking_mutex$0,"Error_checking_mutex");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJlcnJvcl9jaGVja2luZ19tdXRleC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
