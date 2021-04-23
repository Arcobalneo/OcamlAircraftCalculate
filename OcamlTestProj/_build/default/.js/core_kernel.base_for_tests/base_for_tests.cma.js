(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    var
     global_data=runtime.caml_get_global_data(),
     Base_Blit=global_data.Base__Blit,
     Base_Binary_searchable=global_data.Base__Binary_searchable,
     Base_for_tests=[0];
    caml_register_global(0,Base_for_tests,"Base_for_tests");
    var Base_for_tests_Test_blit_intf=[0];
    caml_register_global
     (1,Base_for_tests_Test_blit_intf,"Base_for_tests__Test_blit_intf");
    function _a_(Elt,Sequence)
     {var
       Tested=caml_call1(Base_Blit[5],[0,Sequence[1],Sequence[3],Sequence[2]]),
       blit=Tested[1],
       blito=Tested[2],
       unsafe_blit=Tested[3],
       sub=Tested[4],
       subo=Tested[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _b_(Sequence)
     {var
       Tested=caml_call1(Base_Blit[4],[0,Sequence[1],Sequence[3],Sequence[2]]),
       blit=Tested[1],
       blito=Tested[2],
       unsafe_blit=Tested[3],
       sub=Tested[4],
       subo=Tested[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _c_(Elt,Src,Dst)
     {var
       _u_=[0,Dst[2],Dst[1],Dst[5]],
       Tested=caml_call1(caml_call1(Base_Blit[2],[0,Src[2]]),_u_),
       blit=Tested[1],
       blito=Tested[2],
       unsafe_blit=Tested[3],
       sub=Tested[4],
       subo=Tested[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _d_(Elt,Sequence)
     {var
       Tested=caml_call1(Base_Blit[1],[0,Sequence[2],Sequence[1],Sequence[5]]),
       blit=Tested[1],
       blito=Tested[2],
       unsafe_blit=Tested[3],
       sub=Tested[4],
       subo=Tested[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _e_(_t_,_s_,_r_){return [0]}
    function _f_(_q_,_p_){return [0]}
    function _g_(_o_,_n_,_m_,_l_){return [0]}
    var
     Base_for_tests_Test_blit=
      [0,function(_k_,_j_,_i_){return [0]},_g_,_f_,_e_,_d_,_c_,_b_,_a_];
    caml_register_global
     (4,Base_for_tests_Test_blit,"Base_for_tests__Test_blit");
    var Base_for_tests_Test_binary_sea=[0];
    caml_register_global
     (5,
      Base_for_tests_Test_binary_sea,
      "Base_for_tests__Test_binary_searchable_intf");
    function Test(M){return [0]}
    function Test1(M){return [0]}
    function _h_(M)
     {var
       B=caml_call1(Base_Binary_searchable[2],[0,M[1],M[2]]),
       binary_search=B[1],
       binary_search_segmented=B[2];
      return [0,binary_search,binary_search_segmented]}
    var
     Base_for_tests_Test_binary_sea$0=
      [0,
       Test,
       Test1,
       function(M)
        {var
          B=caml_call1(Base_Binary_searchable[1],[0,M[1],M[2]]),
          binary_search=B[1],
          binary_search_segmented=B[2];
         return [0,binary_search,binary_search_segmented]},
       _h_];
    caml_register_global
     (8,
      Base_for_tests_Test_binary_sea$0,
      "Base_for_tests__Test_binary_searchable");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX2Zvcl90ZXN0cy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
