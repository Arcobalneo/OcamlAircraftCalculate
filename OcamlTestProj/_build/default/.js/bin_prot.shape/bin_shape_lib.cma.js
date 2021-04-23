(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Free_type_variable_Vid=
      caml_string_of_jsbytes("Free type variable: '%{Vid}"),
     cst_Free_type_variable=caml_string_of_jsbytes("Free type variable: '"),
     cst_apply_incorrect_type_appli=
      caml_string_of_jsbytes("apply, incorrect type application arity"),
     cst_top_level=caml_string_of_jsbytes("top-level"),
     cst_impossible_lookup_group_un=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: %{Tid}"),
     cst_impossible_lookup_group_un$0=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: "),
     cst_Exp=caml_string_of_jsbytes("Exp"),
     cst_exp=caml_string_of_jsbytes("exp"),
     cst_Exp$0=caml_string_of_jsbytes("Exp"),
     cst_exp$0=caml_string_of_jsbytes("exp"),
     cst_annotate$1=caml_string_of_jsbytes("annotate"),
     cst_base$1=caml_string_of_jsbytes("base"),
     cst_tuple$1=caml_string_of_jsbytes("tuple"),
     cst_record$1=caml_string_of_jsbytes("record"),
     cst_variant$1=caml_string_of_jsbytes("variant"),
     cst_poly_variant$1=caml_string_of_jsbytes("poly_variant"),
     cst_application$1=caml_string_of_jsbytes("application"),
     cst_rec_app$1=caml_string_of_jsbytes("rec_app"),
     cst_var$1=caml_string_of_jsbytes("var"),
     cst_annotate=caml_string_of_jsbytes("annotate"),
     cst_Annotate=caml_string_of_jsbytes("Annotate"),
     cst_Application=caml_string_of_jsbytes("Application"),
     cst_Base=caml_string_of_jsbytes("Base"),
     cst_Poly_variant=caml_string_of_jsbytes("Poly_variant"),
     cst_Rec_app=caml_string_of_jsbytes("Rec_app"),
     cst_Record=caml_string_of_jsbytes("Record"),
     cst_Tuple=caml_string_of_jsbytes("Tuple"),
     cst_Var=caml_string_of_jsbytes("Var"),
     cst_Variant=caml_string_of_jsbytes("Variant"),
     cst_application=caml_string_of_jsbytes("application"),
     cst_base=caml_string_of_jsbytes("base"),
     cst_poly_variant=caml_string_of_jsbytes("poly_variant"),
     cst_rec_app=caml_string_of_jsbytes("rec_app"),
     cst_record=caml_string_of_jsbytes("record"),
     cst_tuple=caml_string_of_jsbytes("tuple"),
     cst_var=caml_string_of_jsbytes("var"),
     cst_variant=caml_string_of_jsbytes("variant"),
     cst_annotate$0=caml_string_of_jsbytes("annotate"),
     cst_Annotate$0=caml_string_of_jsbytes("Annotate"),
     cst_Application$0=caml_string_of_jsbytes("Application"),
     cst_Base$0=caml_string_of_jsbytes("Base"),
     cst_Poly_variant$0=caml_string_of_jsbytes("Poly_variant"),
     cst_Rec_app$0=caml_string_of_jsbytes("Rec_app"),
     cst_Record$0=caml_string_of_jsbytes("Record"),
     cst_Tuple$0=caml_string_of_jsbytes("Tuple"),
     cst_Var$0=caml_string_of_jsbytes("Var"),
     cst_Variant$0=caml_string_of_jsbytes("Variant"),
     cst_application$0=caml_string_of_jsbytes("application"),
     cst_base$0=caml_string_of_jsbytes("base"),
     cst_poly_variant$0=caml_string_of_jsbytes("poly_variant"),
     cst_rec_app$0=caml_string_of_jsbytes("rec_app"),
     cst_record$0=caml_string_of_jsbytes("record"),
     cst_tuple$0=caml_string_of_jsbytes("tuple"),
     cst_var$0=caml_string_of_jsbytes("var"),
     cst_variant$0=caml_string_of_jsbytes("variant"),
     cst_some=caml_string_of_jsbytes("some"),
     cst_none=caml_string_of_jsbytes("none"),
     cst_sorted=caml_string_of_jsbytes("sorted"),
     cst_sorted$0=caml_string_of_jsbytes("sorted"),
     cst_Location_s=caml_string_of_jsbytes("%{Location}: %s"),
     tp_loc=caml_string_of_jsbytes("shape/src/bin_shape.ml.Sorted_table.t"),
     tp_loc$0=
      caml_string_of_jsbytes
       ("shape/src/bin_shape.ml.Canonical_exp_constructor.t"),
     tp_loc$1=
      caml_string_of_jsbytes("shape/src/bin_shape.ml.Canonical_full.Exp1.t0"),
     cst_Bin_shape_lib_Bin_shape_Fo=
      caml_string_of_jsbytes
       ("Bin_shape_lib.Bin_shape.For_typerep.Not_a_tuple"),
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Base_Option=global_data.Base__Option,
     Base_Map=global_data.Base__Map,
     Base_Comparator=global_data.Base__Comparator,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Base_String=global_data.Base__String,
     Base_Int=global_data.Base__Int,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Printf=global_data.Base__Printf,
     Md5_lib=global_data.Md5_lib,
     Bin_shape_lib=[0];
    caml_register_global(121,Bin_shape_lib,"Bin_shape_lib");
    var
     sexp_of_t=Base_String[22],
     of_string=Base_String[23],
     to_string=Base_String[24],
     t_of_sexp=Base_String[21],
     sexp_of_t$0=Base_String[22],
     of_string$0=Base_String[23],
     to_string$0=Base_String[24],
     compare=Base_String[31],
     _N_=
      [0,
       caml_string_of_jsbytes
        ("shape/src/bin_shape.ml.For_typerep.Not_a_tuple")],
     _O_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _J_=[0,0],
     _K_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("The shape for an inherited type is not described as a polymorphic-variant: "),
        [2,0,0]],
       caml_string_of_jsbytes
        ("The shape for an inherited type is not described as a polymorphic-variant: %s")],
     _y_=[0,caml_string_of_jsbytes("Annotate")],
     _z_=[0,caml_string_of_jsbytes("Base")],
     _A_=[0,caml_string_of_jsbytes("Record")],
     _B_=[0,caml_string_of_jsbytes("Variant")],
     _C_=[0,caml_string_of_jsbytes("Tuple")],
     _D_=[0,caml_string_of_jsbytes("Poly_variant")],
     _E_=[0,caml_string_of_jsbytes("Var")],
     _F_=[0,caml_string_of_jsbytes("Rec_app")],
     _G_=[0,caml_string_of_jsbytes("Top_app")],
     _x_=[0,0],
     _u_=[0,caml_string_of_jsbytes("members")],
     _v_=[0,caml_string_of_jsbytes("loc")],
     _w_=[0,caml_string_of_jsbytes("gid")],
     _s_=[0,caml_string_of_jsbytes("Constr")],
     _t_=[0,caml_string_of_jsbytes("Inherit")],
     _r_=[0,caml_string_of_jsbytes("Exp")],
     _q_=[0,caml_string_of_jsbytes("...")],
     _h_=[0,caml_string_of_jsbytes("Annotate")],
     _i_=[0,caml_string_of_jsbytes("Base")],
     _j_=[0,caml_string_of_jsbytes("Tuple")],
     _k_=[0,caml_string_of_jsbytes("Record")],
     _l_=[0,caml_string_of_jsbytes("Variant")],
     _m_=[0,caml_string_of_jsbytes("Poly_variant")],
     _n_=[0,caml_string_of_jsbytes("Application")],
     _o_=[0,caml_string_of_jsbytes("Rec_app")],
     _p_=[0,caml_string_of_jsbytes("Var")],
     _g_=[0,caml_string_of_jsbytes("")],
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Different shapes for duplicated polymorphic constructor: `"),
        [2,0,0]],
       caml_string_of_jsbytes
        ("Different shapes for duplicated polymorphic constructor: `%s")],
     _e_=[0,17724,0],
     _d_=[0,caml_string_of_jsbytes("sorted")],
     _c_=[0,caml_string_of_jsbytes("shape/src/bin_shape.ml"),33,2],
     _a_=[11,caml_string_of_jsbytes(": "),[2,0,0]],
     _b_=[0,0];
    function eval_fail(loc,fmt)
     {function _b$_(s)
       {var
         _ca_=
          [0,
           [24,
            _b_,
            function(param,custom_printf_001)
             {return caml_call1(to_string,custom_printf_001)},
            _a_],
           cst_Location_s],
         _cb_=caml_call3(Base_Printf[2],_ca_,loc,s);
        return caml_call1(Base[220],_cb_)}
      return caml_call2(Base_Printf[4],_b$_,fmt)}
    function equal_option(equal,a,b)
     {if(a)
       {if(b){var y=b[1],x=a[1];return caml_call2(equal,x,y)}}
      else
       if(! b)return 1;
      return 0}
    function create(loc,eq,xs$1)
     {function _b9_(param,_b__)
       {var s2=_b__[1],s1=param[1];return caml_call2(Base_String[31],s1,s2)}
      var param$0=caml_call2(Base_List[61],xs$1,_b9_);
      if(param$0)
       {var
         xs$0=param$0[2],
         match$0=param$0[1],
         value$0=match$0[2],
         key$0=match$0[1],
         acc$1=[0,[0,key$0,value$0],0],
         acc=acc$1,
         last_key=key$0,
         last_value=value$0,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],match=param[1],value=match[2],key=match[1];
            if(! caml_call2(Base_String[27],last_key,key))
             {var
               acc$0=[0,[0,key,value],acc],
               acc=acc$0,
               last_key=key,
               last_value=value,
               param=xs;
              continue}
            if(caml_call2(eq,last_value,value)){var param=xs;continue}
            var match$1=[0,-1062743954,key]}
          else
           var match$1=[0,17724,caml_call1(Base_List[37],acc)];
          break}}
      else
       var match$1=_e_;
      if(17724 <= match$1[1]){var sorted=match$1[2];return [0,sorted]}
      var s=match$1[2];
      return caml_call2(eval_fail(loc,_f_),s,0)}
    function map(t,f)
     {function _b8_(param)
       {var v=param[2],k=param[1];return [0,k,caml_call1(f,v)]}
      return [0,caml_call2(Base_List[74],t[1],_b8_)]}
    var
     compare$0=Md5_lib[1],
     to_binary=Md5_lib[3],
     to_hex=Md5_lib[6],
     of_hex_exn=Md5_lib[7],
     string=Md5_lib[8];
    function to_md5(t){return t}
    function of_md5(t){return t}
    function sexp_of_t$1(t)
     {var _b7_=caml_call1(to_hex,t);return caml_call1(Base[165],_b7_)}
    function t_of_sexp$0(s)
     {return caml_call1(of_hex_exn,caml_call1(Base[164],s))}
    function uuid(u){return caml_call1(string,caml_call1(to_string$0,u))}
    function int$0(x){return caml_call1(string,caml_call1(Base_Int[11],x))}
    function pair(x,y)
     {var _b5_=caml_call1(to_binary,y),_b6_=caml_call1(to_binary,x);
      return caml_call1(string,caml_call2(Base[217],_b6_,_b5_))}
    function list(l)
     {var _b4_=caml_call2(Base_List[74],l,to_binary);
      return caml_call1(string,caml_call2(Base_String[50],_g_,_b4_))}
    function constructor(s,l)
     {var _b3_=caml_call1(to_binary,list(l));
      return caml_call1(string,caml_call2(Base[217],s,_b3_))}
    function sexp_of_t$2(of_a,param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=caml_call1(of_a,v1);
         return [1,[0,_h_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[140],of_a,v1$1);
         return [1,[0,_i_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var v0$4=param[1],v0$5=caml_call2(Base[140],of_a,v0$4);
         return [1,[0,_j_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _b1_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call1(of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[140],_b1_,v0$6);
         return [1,[0,_k_,[0,v0$7,0]]];
        case 4:
         var
          v0$8=param[1],
          _b2_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call2(Base[140],of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$9=caml_call2(Base[140],_b2_,v0$8);
         return [1,[0,_l_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          of_a$0=caml_call1(Base[153],of_a),
          v_sorted=v0$10[1],
          bnds=0,
          _b0_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call1(of_a$0,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          arg=caml_call2(Base[140],_b0_,v_sorted),
          bnds$0=[0,[1,[0,_d_,[0,arg,0]]],bnds],
          v0=[1,bnds$0];
         return [1,[0,_m_,[0,v0,0]]];
        case 6:
         var
          v1$3=param[2],
          v0$11=param[1],
          v0$12=caml_call1(of_a,v0$11),
          v1$4=caml_call2(Base[140],of_a,v1$3);
         return [1,[0,_n_,[0,v0$12,[0,v1$4,0]]]];
        case 7:
         var
          v1$5=param[2],
          v0$13=param[1],
          v0$14=caml_call1(Base[120],v0$13),
          v1$6=caml_call2(Base[140],of_a,v1$5);
         return [1,[0,_o_,[0,v0$14,[0,v1$6,0]]]];
        default:
         var v0$15=param[1],v0$16=caml_call1(Base[120],v0$15);
         return [1,[0,_p_,[0,v0$16,0]]]}}
    function map$0(x,f)
     {switch(x[0])
       {case 0:var x$0=x[2],u=x[1];return [0,u,caml_call1(f,x$0)];
        case 1:var xs=x[2],s=x[1];return [1,s,caml_call2(Base_List[74],xs,f)];
        case 2:var xs$0=x[1];return [2,caml_call2(Base_List[74],xs$0,f)];
        case 3:
         var
          l=x[1],
          _bV_=
           function(param)
            {var x=param[2],s=param[1];return [0,s,caml_call1(f,x)]};
         return [3,caml_call2(Base_List[74],l,_bV_)];
        case 4:
         var
          l$0=x[1],
          _bW_=
           function(param)
            {var xs=param[2],s=param[1];
             return [0,s,caml_call2(Base_List[74],xs,f)]};
         return [4,caml_call2(Base_List[74],l$0,_bW_)];
        case 5:
         var t=x[1],_bX_=Base_Option[30];
         return [5,map(t,function(_bZ_){return caml_call2(_bX_,_bZ_,f)})];
        case 6:
         var l$1=x[2],x$1=x[1],_bY_=caml_call2(Base_List[74],l$1,f);
         return [6,caml_call1(f,x$1),_bY_];
        case 7:
         var l$2=x[2],t$0=x[1];return [7,t$0,caml_call2(Base_List[74],l$2,f)];
        default:var v=x[1];return [8,v]}}
    function to_string$1(t)
     {var _bU_=sexp_of_t$2(function(param){return _q_},t);
      return caml_call1(Base[84][16],_bU_)}
    function digest_layer(param)
     {switch(param[0])
       {case 0:
         var x=param[2],u=param[1];
         return constructor(cst_annotate$1,[0,uuid(u),[0,x,0]]);
        case 1:
         var l=param[2],u$0=param[1],_bK_=[0,list(l),0];
         return constructor(cst_base$1,[0,uuid(u$0),_bK_]);
        case 2:
         var l$0=param[1];return constructor(cst_tuple$1,[0,list(l$0),0]);
        case 3:
         var
          l$1=param[1],
          _bL_=0,
          _bM_=
           function(param)
            {var t=param[2],s=param[1];return pair(caml_call1(string,s),t)};
         return constructor
                 (cst_record$1,
                  [0,list(caml_call2(Base_List[74],l$1,_bM_)),_bL_]);
        case 4:
         var
          l$2=param[1],
          _bN_=0,
          _bO_=
           function(param)
            {var l=param[2],s=param[1],_bT_=list(l);
             return pair(caml_call1(string,s),_bT_)};
         return constructor
                 (cst_variant$1,
                  [0,list(caml_call2(Base_List[74],l$2,_bO_)),_bN_]);
        case 5:
         var
          table=param[1],
          _bP_=0,
          _bQ_=
           function(param)
            {var y=param[2],x$0=param[1];
             if(y)
              var x=y[1],_bS_=constructor(cst_some,[0,x,0]);
             else
              var _bS_=constructor(cst_none,0);
             return pair(caml_call1(string,x$0),_bS_)};
         return constructor
                 (cst_poly_variant$1,
                  [0,list(caml_call2(Base_List[74],table[1],_bQ_)),_bP_]);
        case 6:
         var l$3=param[2],x$0=param[1];
         return constructor(cst_application$1,[0,x$0,[0,list(l$3),0]]);
        case 7:
         var l$4=param[2],n=param[1],_bR_=[0,list(l$4),0];
         return constructor(cst_rec_app$1,[0,int$0(n),_bR_]);
        default:
         var n$0=param[1];return constructor(cst_var$1,[0,int$0(n$0),0])}}
    function to_digest(param){var x=param[1];return x}
    function to_digest$0(x)
     {switch(x[0])
       {case 0:var x$0=x[1];return digest_layer([5,x$0]);
        case 1:var match=x[1],x$1=match[2];return x$1;
        default:var x$2=x[1];return x$2}}
    function equal(x,y)
     {var _bI_=to_digest$0(y),_bJ_=caml_call2(compare$0,to_digest$0(x),_bI_);
      return caml_call2(Base[202],_bJ_,0)}
    function opaque(x){return [2,to_digest$0(x)]}
    function create$0(x)
     {var x$0=map$0(x,to_digest$0),desc=to_string$1(x$0);
      switch(x$0[0])
       {case 0:return [1,[0,desc,digest_layer(x$0)]];
        case 1:return [1,[0,desc,digest_layer(x$0)]];
        case 5:var l=x$0[1];return [0,l];
        case 6:return [1,[0,desc,digest_layer(x$0)]];
        case 7:return [1,[0,desc,digest_layer(x$0)]];
        default:return [1,[0,desc,digest_layer(x$0)]]}}
    function var$0(x){return create$0([8,x])}
    function apply(def,l){return create$0([6,def,l])}
    function recurse(tid,l){return create$0([7,tid,l])}
    function get_poly_variant(x)
     {if(1 === x[0]){var match=x[1],desc=match[1];return [1,desc]}
      var l=x[1],_bF_=Base_Option[30];
      function _bG_(x){return [2,x]}
      return [0,map(l,function(_bH_){return caml_call2(_bF_,_bH_,_bG_)})]}
    var Def=[0];
    function annotate(u,x){return create$0([0,u,x])}
    function basetype(u,l){return create$0([1,u,l])}
    function tuple(l){return create$0([2,l])}
    function poly_variant(loc,l)
     {return create$0
              ([5,
                create
                 (loc,
                  function(_bD_,_bE_){return equal_option(equal,_bD_,_bE_)},
                  l)])}
    function var$1(x){return create$0([8,x])}
    function apply$0(x,l){return create$0([6,x,l])}
    function recurse$0(t,l){return create$0([7,t,l])}
    function define(x){return x}
    function record(l){return create$0([3,l])}
    function variant(l){return create$0([4,l])}
    function create$1(e){return [0,to_digest$0(e)]}
    var
     Canonical_digest=
      [0,
       to_digest,
       [0,var$0,recurse,apply,opaque,get_poly_variant],
       Def,
       [0,
        annotate,
        basetype,
        tuple,
        poly_variant,
        var$1,
        recurse$0,
        apply$0,
        define,
        record,
        variant,
        create$1]];
    function compare$1(a_064,b_065)
     {if(caml_call2(Ppx_compare_lib[1],a_064,b_065))return 0;
      var b_067=b_065[1],a_066=a_064[1];
      function cmp_a(a_068,b_069){return compare$1(a_068,b_069)}
      if(caml_call2(Ppx_compare_lib[1],a_066,b_067))return 0;
      var switch$0=0;
      switch(a_066[0])
       {case 0:
         var _bj_=a_066[1];
         if(0 === b_067[0])
          {var
            b_015=b_067[2],
            b_013=b_067[1],
            a_014=a_066[2],
            n=caml_call2(compare,_bj_,b_013);
           return 0 === n?cmp_a(a_014,b_015):n}
         return -1;
        case 1:
         var _bk_=a_066[2],_bl_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:
            var
             b_019=b_067[2],
             b_017=b_067[1],
             n$0=caml_call2(compare,_bl_,b_017);
            if(0 === n$0)
             {var _bm_=function(a_020,b_021){return cmp_a(a_020,b_021)};
              return caml_call3(Base[136],_bm_,_bk_,b_019)}
            return n$0;
           default:return -1}
         break;
        case 2:
         var _bn_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:
            var
             b_023=b_067[1],
             _bo_=function(a_024,b_025){return cmp_a(a_024,b_025)};
            return caml_call3(Base[136],_bo_,_bn_,b_023);
           default:return -1}
         break;
        case 3:
         var _bp_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:
            var
             b_027=b_067[1],
             _bq_=
              function(a_028,b_029)
               {var
                 t_031=a_028[2],
                 t_030=a_028[1],
                 t_033=b_029[2],
                 t_032=b_029[1],
                 n=caml_call2(Base[160],t_030,t_032);
                return 0 === n?cmp_a(t_031,t_033):n};
            return caml_call3(Base[136],_bq_,_bp_,b_027);
           default:return -1}
         break;
        case 4:
         var _br_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:
            var
             b_035=b_067[1],
             _bs_=
              function(a_036,b_037)
               {var
                 t_039=a_036[2],
                 t_038=a_036[1],
                 t_041=b_037[2],
                 t_040=b_037[1],
                 n=caml_call2(Base[160],t_038,t_040);
                if(0 === n)
                 {var _bC_=function(a_042,b_043){return cmp_a(a_042,b_043)};
                  return caml_call3(Base[136],_bC_,t_039,t_041)}
                return n};
            return caml_call3(Base[136],_bs_,_br_,b_035);
           default:return -1}
         break;
        case 5:
         var _bt_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:
            var b_045=b_067[1];
            if(caml_call2(Ppx_compare_lib[1],_bt_,b_045))return 0;
            var
             _bg_=b_045[1],
             _bh_=_bt_[1],
             _bi_=
              function(a_004,b_005)
               {var
                 t_007=a_004[2],
                 t_006=a_004[1],
                 t_009=b_005[2],
                 t_008=b_005[1],
                 n=caml_call2(Base[160],t_006,t_008);
                if(0 === n)
                 {var _bB_=function(a_048,b_049){return cmp_a(a_048,b_049)};
                  return caml_call3(Base[149],_bB_,t_007,t_009)}
                return n};
            return caml_call3(Base[136],_bi_,_bh_,_bg_);
           default:return -1}
         break;
        case 6:
         var _bu_=a_066[2],_bv_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:
            var b_053=b_067[2],b_051=b_067[1],n$1=cmp_a(_bv_,b_051);
            if(0 === n$1)
             {var _bw_=function(a_054,b_055){return cmp_a(a_054,b_055)};
              return caml_call3(Base[136],_bw_,_bu_,b_053)}
            return n$1;
           default:return -1}
         break;
        case 7:
         var _bx_=a_066[2],_by_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:
            var
             b_059=b_067[2],
             b_057=b_067[1],
             n$2=caml_call2(Base[115],_by_,b_057);
            if(0 === n$2)
             {var _bz_=function(a_060,b_061){return cmp_a(a_060,b_061)};
              return caml_call3(Base[136],_bz_,_bx_,b_059)}
            return n$2;
           default:return -1}
         break;
        default:
         var _bA_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:return 1;
           default:var b_063=b_067[1];return caml_call2(Base[115],_bA_,b_063)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        case 4:return 1;
        case 5:return 1;
        default:return 1}}
    var of_a=function _bf_(_be_){return _bf_.fun(_be_)};
    runtime.caml_update_dummy
     (of_a,
      function(sexp)
       {if(0 === sexp[0])
         {var _a6_=sexp[1],switch$0=0;
          if
           (caml_string_notequal(_a6_,cst_Exp)
            &&
            caml_string_notequal(_a6_,cst_exp))
           switch$0 = 1;
          if(! switch$0)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)}
        else
         {var _a7_=sexp[1];
          if(! _a7_)
           return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
          var _a8_=_a7_[1];
          if(0 !== _a8_[0])
           return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
          var _a9_=_a8_[1],switch$1=0;
          if
           (caml_string_notequal(_a9_,cst_Exp$0)
            &&
            caml_string_notequal(_a9_,cst_exp$0))
           switch$1 = 1;
          if(! switch$1)
           {var sexp_args$8=_a7_[2];
            if(sexp_args$8 && ! sexp_args$8[2])
             {var v0$17=sexp_args$8[1],switch$2=0;
              if(0 === v0$17[0])
               {var
                 _aU_=v0$17[1],
                 _aV_=caml_string_compare(_aU_,cst_annotate),
                 switch$3=0;
                if(0 <= _aV_)
                 {if(0 < _aV_)
                   if(caml_string_notequal(_aU_,cst_application))
                    if(caml_string_notequal(_aU_,cst_base))
                     if(caml_string_notequal(_aU_,cst_poly_variant))
                      if(caml_string_notequal(_aU_,cst_rec_app))
                       if(caml_string_notequal(_aU_,cst_record))
                        if(caml_string_notequal(_aU_,cst_tuple))
                         if(caml_string_notequal(_aU_,cst_var))
                          if(caml_string_notequal(_aU_,cst_variant))
                           {switch$2 = 1;switch$3 = 9}
                          else
                           switch$3 = 4;
                         else
                          switch$3 = 8;
                        else
                         switch$3 = 2;
                       else
                        switch$3 = 3;
                      else
                       switch$3 = 7;
                     else
                      switch$3 = 5;
                    else
                     switch$3 = 1;
                   else
                    switch$3 = 6}
                else
                 if(caml_string_notequal(_aU_,cst_Annotate))
                  if(caml_string_notequal(_aU_,cst_Application))
                   if(caml_string_notequal(_aU_,cst_Base))
                    if(caml_string_notequal(_aU_,cst_Poly_variant))
                     if(caml_string_notequal(_aU_,cst_Rec_app))
                      if(caml_string_notequal(_aU_,cst_Record))
                       if(caml_string_notequal(_aU_,cst_Tuple))
                        if(caml_string_notequal(_aU_,cst_Var))
                         if(caml_string_notequal(_aU_,cst_Variant))
                          {switch$2 = 1;switch$3 = 9}
                         else
                          switch$3 = 4;
                        else
                         switch$3 = 8;
                       else
                        switch$3 = 2;
                      else
                       switch$3 = 3;
                     else
                      switch$3 = 7;
                    else
                     switch$3 = 5;
                   else
                    switch$3 = 1;
                  else
                   switch$3 = 6;
                switch(switch$3)
                 {case 9:break;
                  case 0:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 1:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 2:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 3:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 4:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 5:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 6:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  case 7:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17);
                   break;
                  default:
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17)}}
              else
               {var _aW_=v0$17[1];
                if(_aW_)
                 {var _aX_=_aW_[1];
                  if(0 === _aX_[0])
                   {var
                     _aY_=_aX_[1],
                     _aZ_=caml_string_compare(_aY_,cst_annotate$0),
                     switch$4=0;
                    if(0 <= _aZ_)
                     {if(0 < _aZ_)
                       if(caml_string_notequal(_aY_,cst_application$0))
                        if(caml_string_notequal(_aY_,cst_base$0))
                         if(caml_string_notequal(_aY_,cst_poly_variant$0))
                          if(caml_string_notequal(_aY_,cst_rec_app$0))
                           if(caml_string_notequal(_aY_,cst_record$0))
                            if(caml_string_notequal(_aY_,cst_tuple$0))
                             if(caml_string_notequal(_aY_,cst_var$0))
                              if(caml_string_notequal(_aY_,cst_variant$0))
                               {switch$2 = 1;switch$4 = 9}
                              else
                               switch$4 = 4;
                             else
                              switch$4 = 8;
                            else
                             switch$4 = 2;
                           else
                            switch$4 = 3;
                          else
                           switch$4 = 7;
                         else
                          switch$4 = 5;
                        else
                         switch$4 = 1;
                       else
                        switch$4 = 6}
                    else
                     if(caml_string_notequal(_aY_,cst_Annotate$0))
                      if(caml_string_notequal(_aY_,cst_Application$0))
                       if(caml_string_notequal(_aY_,cst_Base$0))
                        if(caml_string_notequal(_aY_,cst_Poly_variant$0))
                         if(caml_string_notequal(_aY_,cst_Rec_app$0))
                          if(caml_string_notequal(_aY_,cst_Record$0))
                           if(caml_string_notequal(_aY_,cst_Tuple$0))
                            if(caml_string_notequal(_aY_,cst_Var$0))
                             if(caml_string_notequal(_aY_,cst_Variant$0))
                              {switch$2 = 1;switch$4 = 9}
                             else
                              switch$4 = 4;
                            else
                             switch$4 = 8;
                           else
                            switch$4 = 2;
                          else
                           switch$4 = 3;
                         else
                          switch$4 = 7;
                        else
                         switch$4 = 5;
                       else
                        switch$4 = 1;
                      else
                       switch$4 = 6;
                    switch(switch$4)
                     {case 9:break;
                      case 0:
                       var sexp_args$7=_aW_[2],switch$5=0;
                       if(sexp_args$7)
                        {var _a5_=sexp_args$7[2];
                         if(_a5_ && ! _a5_[2])
                          {var
                            v1$5=_a5_[1],
                            v0$15=sexp_args$7[1],
                            v0$16=caml_call1(t_of_sexp,v0$15),
                            v1$6=caml_call1(of_a,v1$5),
                            v0$18=[0,v0$16,v1$6];
                           switch$5 = 1}}
                       if(! switch$5)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 1:
                       var sexp_args$5=_aW_[2],switch$6=0;
                       if(sexp_args$5)
                        {var _a3_=sexp_args$5[2];
                         if(_a3_ && ! _a3_[2])
                          var
                           v1$1=_a3_[1],
                           v0$11=sexp_args$5[1],
                           v0$12=caml_call1(t_of_sexp,v0$11),
                           v1$2=caml_call2(Base[139],of_a,v1$1),
                           v0$18=[1,v0$12,v1$2];
                         else
                          switch$6 = 1}
                       else
                        switch$6 = 1;
                       if(switch$6)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 2:
                       var sexp_args$1=_aW_[2],switch$7=0;
                       if(sexp_args$1 && ! sexp_args$1[2])
                        var
                         v0$3=sexp_args$1[1],
                         v0$4=caml_call2(Base[139],of_a,v0$3),
                         v0$18=[2,v0$4];
                       else
                        switch$7 = 1;
                       if(switch$7)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 3:
                       var sexp_args$2=_aW_[2],switch$8=0;
                       if(sexp_args$2 && ! sexp_args$2[2])
                        var
                         v0$5=sexp_args$2[1],
                         _a1_=
                          function(sexp)
                           {if(1 === sexp[0])
                             {var _bc_=sexp[1];
                              if(_bc_)
                               {var _bd_=_bc_[2];
                                if(_bd_ && ! _bd_[2])
                                 {var
                                   v1=_bd_[1],
                                   v0=_bc_[1],
                                   v0$0=caml_call1(Base[164],v0),
                                   v1$0=caml_call1(of_a,v1);
                                  return [0,v0$0,v1$0]}}}
                            return caml_call3
                                    (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                         v0$6=caml_call2(Base[139],_a1_,v0$5),
                         v0$18=[3,v0$6];
                       else
                        switch$8 = 1;
                       if(switch$8)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 4:
                       var sexp_args=_aW_[2],switch$9=0;
                       if(sexp_args && ! sexp_args[2])
                        var
                         v0=sexp_args[1],
                         _a0_=
                          function(sexp)
                           {if(1 === sexp[0])
                             {var _ba_=sexp[1];
                              if(_ba_)
                               {var _bb_=_ba_[2];
                                if(_bb_ && ! _bb_[2])
                                 {var
                                   v1=_bb_[1],
                                   v0=_ba_[1],
                                   v0$0=caml_call1(Base[164],v0),
                                   v1$0=caml_call2(Base[139],of_a,v1);
                                  return [0,v0$0,v1$0]}}}
                            return caml_call3
                                    (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                         v0$0=caml_call2(Base[139],_a0_,v0),
                         v0$18=[4,v0$0];
                       else
                        switch$9 = 1;
                       if(switch$9)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 5:
                       var sexp_args$4=_aW_[2],switch$10=0;
                       if(sexp_args$4 && ! sexp_args$4[2])
                        {var v0$9=sexp_args$4[1],of_a$0=caml_call1(Base[152],of_a);
                         if(0 === v0$9[0])
                          var
                           v0$10=
                            caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,v0$9);
                         else
                          {var
                            field_sexps=v0$9[1],
                            sorted_field=[0,0],
                            duplicates=[0,0],
                            extra=[0,0],
                            param=field_sexps;
                           for(;;)
                            {if(param)
                              {var _aN_=param[1];
                               if(1 === _aN_[0])
                                {var _aO_=_aN_[1];
                                 if(_aO_)
                                  {var _aP_=_aO_[1];
                                   if(0 === _aP_[0])
                                    {var _aQ_=_aO_[2],_aR_=_aP_[1],switch$11=0;
                                     if(! _aQ_ || ! _aQ_[2])switch$11 = 1;
                                     if(switch$11)
                                      {var tail=param[2];
                                       if(caml_string_notequal(_aR_,cst_sorted))
                                        {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aR_,extra[1]]}
                                       else
                                        if(sorted_field[1])
                                         duplicates[1] = [0,_aR_,duplicates[1]];
                                        else
                                         {if(_aQ_)
                                           {if(_aQ_[2])throw [0,Assert_failure,_c_];
                                            var x=_aQ_[1],field_sexp=x}
                                          else
                                           var
                                            field_sexp=
                                             caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,v0$9);
                                          var
                                           _aS_=
                                            function(sexp)
                                             {if(1 === sexp[0])
                                               {var _a__=sexp[1];
                                                if(_a__)
                                                 {var _a$_=_a__[2];
                                                  if(_a$_ && ! _a$_[2])
                                                   {var
                                                     v1=_a$_[1],
                                                     v0=_a__[1],
                                                     v0$0=caml_call1(Base[164],v0),
                                                     v1$0=caml_call1(of_a$0,v1);
                                                    return [0,v0$0,v1$0]}}}
                                              return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                                           fvalue=caml_call2(Base[139],_aS_,field_sexp);
                                          sorted_field[1] = [0,fvalue]}
                                       var param=tail;
                                       continue}}}}
                               caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_aN_)}
                             if(duplicates[1])
                              var
                               v0$10=
                                caml_call3
                                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],v0$9);
                             else
                              if(extra[1])
                               var
                                v0$10=
                                 caml_call3
                                  (Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],v0$9);
                              else
                               {var _aT_=sorted_field[1];
                                if(_aT_)
                                 var sorted_value=_aT_[1],v0$10=[0,sorted_value];
                                else
                                 var
                                  v0$10=
                                   caml_call3
                                    (Sexplib0_Sexp_conv_error[15],
                                     tp_loc,
                                     v0$9,
                                     [0,[0,0 === sorted_field[1]?1:0,cst_sorted$0],0])}
                             break}}
                         var v0$18=[5,v0$10]}
                       else
                        switch$10 = 1;
                       if(switch$10)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 6:
                       var sexp_args$6=_aW_[2],switch$12=0;
                       if(sexp_args$6)
                        {var _a4_=sexp_args$6[2];
                         if(_a4_ && ! _a4_[2])
                          var
                           v1$3=_a4_[1],
                           v0$13=sexp_args$6[1],
                           v0$14=caml_call1(of_a,v0$13),
                           v1$4=caml_call2(Base[139],of_a,v1$3),
                           v0$18=[6,v0$14,v1$4];
                         else
                          switch$12 = 1}
                       else
                        switch$12 = 1;
                       if(switch$12)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      case 7:
                       var sexp_args$3=_aW_[2],switch$13=0;
                       if(sexp_args$3)
                        {var _a2_=sexp_args$3[2];
                         if(_a2_ && ! _a2_[2])
                          var
                           v1=_a2_[1],
                           v0$7=sexp_args$3[1],
                           v0$8=caml_call1(Base[119],v0$7),
                           v1$0=caml_call2(Base[139],of_a,v1),
                           v0$18=[7,v0$8,v1$0];
                         else
                          switch$13 = 1}
                       else
                        switch$13 = 1;
                       if(switch$13)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17);
                       break;
                      default:
                       var sexp_args$0=_aW_[2],switch$14=0;
                       if(sexp_args$0 && ! sexp_args$0[2])
                        var
                         v0$1=sexp_args$0[1],
                         v0$2=caml_call1(Base[119],v0$1),
                         v0$18=[8,v0$2];
                       else
                        switch$14 = 1;
                       if(switch$14)
                        var
                         v0$18=
                          caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aY_,v0$17)}}
                  else
                   var
                    v0$18=
                     caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,v0$17)}
                else
                 var
                  v0$18=
                   caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,v0$17)}
              if(switch$2)
               var
                v0$18=
                 caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,v0$17);
              return [0,v0$18]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_a9_,sexp)}}
        return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)});
    function sexp_of_t$3(param)
     {var v0=param[1],v0$0=sexp_of_t$2(sexp_of_t$3,v0);
      return [1,[0,_r_,[0,v0$0,0]]]}
    function equal_t0(x,y)
     {var _aM_=compare$1(x,y);return caml_call2(Base[202],_aM_,0)}
    function var$2(x){return [0,[8,x]]}
    function apply$1(d,xs){return [0,[6,d,xs]]}
    function recurse$1(r,xs){return [0,[7,r,xs]]}
    function get_poly_variant$0(param)
     {var _aL_=param[1];
      if(5 === _aL_[0]){var tab=_aL_[1];return [0,tab]}
      return [1,to_string$1(_aL_)]}
    function opaque$0(t){return t}
    function to_digest$1(param)
     {var e=param[1];return digest_layer(map$0(e,to_digest$1))}
    function to_digest$2(e){return to_digest$1(e)}
    function annotate$0(u,x){return [0,[0,u,x]]}
    function basetype$0(u,xs){return [0,[1,u,xs]]}
    function tuple$0(xs){return [0,[2,xs]]}
    function poly_variant$0(loc,xs)
     {return [0,
              [5,
               create
                (loc,
                 function(_aJ_,_aK_){return equal_option(equal_t0,_aJ_,_aK_)},
                 xs)]]}
    function var$3(n){return [0,[8,n]]}
    function recurse$2(r,xs){return recurse$1(r,xs)}
    function apply$2(d,xs){return apply$1(d,xs)}
    function define$0(x){return x}
    function record$0(xs){return [0,[3,xs]]}
    function variant$0(xs){return [0,[4,xs]]}
    function create$2(exp){return exp}
    var
     Create=
      [0,
       annotate$0,
       basetype$0,
       tuple$0,
       poly_variant$0,
       var$3,
       recurse$2,
       apply$2,
       define$0,
       record$0,
       variant$0,
       create$2];
    function to_string_hum(t)
     {var _aI_=sexp_of_t$3(t);return caml_call2(Base[84][14],0,_aI_)}
    var
     Def$0=[0],
     Exp1=[0,var$2,recurse$1,apply$1,opaque$0,get_poly_variant$0],
     sexp_of_t$4=Base_String[22],
     of_string$1=Base_String[23],
     to_string$2=Base_String[24],
     symbol=Base_String[27],
     compare$2=Base_String[31],
     equal$0=Base_String[108],
     sexp_of_t$5=Base_String[22],
     of_string$2=Base_String[23],
     to_string$3=Base_String[24],
     comparator=Base_String[39],
     compare$3=Base[115],
     sexp_of_t$6=Base[120],
     r=[0,0];
    function group(loc,trips)
     {var u=r[1];
      r[1] = caml_call2(Base[180],1,u);
      function _aH_(param)
       {var t=param[3],vs=param[2],x=param[1];return [0,x,[0,vs,t]]}
      var members=caml_call2(Base_List[74],trips,_aH_);
      return [0,u,loc,members]}
    function lookup(g,tid)
     {var match=caml_call3(Base_List[125][4],g[3],symbol,tid);
      if(match){var scheme=match[1];return scheme}
      var
       _aE_=0,
       _aF_=0,
       _aG_=
        [0,
         [11,
          cst_impossible_lookup_group_un$0,
          [24,
           _x_,
           function(param,custom_printf_108)
            {return caml_call1(to_string$2,custom_printf_108)},
           _aF_]],
         cst_impossible_lookup_group_un];
      return caml_call2(eval_fail(g[2],_aG_),tid,_aE_)}
    function annotate$1(v0,v1){return [0,v0,v1]}
    function basetype$1(v0,v1){return [1,v0,v1]}
    function record$1(v0){return [2,v0]}
    function variant$1(v0){return [3,v0]}
    function tuple$1(v0){return [4,v0]}
    function rec_app(v0,v1){return [7,v0,v1]}
    function top_app(v0,v1,v2){return [8,v0,v1,v2]}
    function of_a$0(param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=of_a$0(v1);
         return [1,[0,_y_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[140],of_a$0,v1$1);
         return [1,[0,_z_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var
          v0$4=param[1],
          _aB_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=of_a$0(v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$5=caml_call2(Base[140],_aB_,v0$4);
         return [1,[0,_A_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _aC_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call2(Base[140],of_a$0,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[140],_aC_,v0$6);
         return [1,[0,_B_,[0,v0$7,0]]];
        case 4:
         var v0$8=param[1],v0$9=caml_call2(Base[140],of_a$0,v0$8);
         return [1,[0,_C_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          v1$3=v0$10[2],
          v0$11=v0$10[1],
          v0$12=caml_call1(sexp_of_t,v0$11),
          _aD_=
           function(param)
            {if(-59723313 <= param[1])
              {var
                v0=param[2],
                v1=v0[2],
                v0$0=v0[1],
                v0$1=caml_call1(Base[165],v0$0),
                v1$0=caml_call2(Base[153],of_a$0,v1);
               return [1,[0,_s_,[0,[1,[0,v0$1,[0,v1$0,0]]],0]]]}
             var
              v0$2=param[2],
              v1$1=v0$2[2],
              v0$3=v0$2[1],
              v0$4=caml_call1(sexp_of_t,v0$3),
              v1$2=of_a$0(v1$1);
             return [1,[0,_t_,[0,[1,[0,v0$4,[0,v1$2,0]]],0]]]},
          v1$4=caml_call2(Base[140],_aD_,v1$3),
          v0$13=[1,[0,v0$12,[0,v1$4,0]]];
         return [1,[0,_D_,[0,v0$13,0]]];
        case 6:
         var
          v0$14=param[1],
          v1$5=v0$14[2],
          v0$15=v0$14[1],
          v0$16=caml_call1(sexp_of_t,v0$15),
          v1$6=caml_call1(sexp_of_t$5,v1$5),
          v0$17=[1,[0,v0$16,[0,v1$6,0]]];
         return [1,[0,_E_,[0,v0$17,0]]];
        case 7:
         var
          v1$7=param[2],
          v0$18=param[1],
          v0$19=caml_call1(sexp_of_t$4,v0$18),
          v1$8=caml_call2(Base[140],of_a$0,v1$7);
         return [1,[0,_F_,[0,v0$19,[0,v1$8,0]]]];
        default:
         var
          v2=param[3],
          v1$9=param[2],
          v0$20=param[1],
          v_members=v0$20[3],
          v_loc=v0$20[2],
          v_gid=v0$20[1],
          bnds=0,
          _aA_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(sexp_of_t$4,v0),
              v1$0=v1[2],
              v0$1=v1[1],
              v0$2=caml_call2(Base[140],sexp_of_t$5,v0$1),
              v1$1=of_a$0(v1$0),
              v1$2=[1,[0,v0$2,[0,v1$1,0]]];
             return [1,[0,v0$0,[0,v1$2,0]]]},
          arg=caml_call2(Base[140],_aA_,v_members),
          bnds$0=[0,[1,[0,_u_,[0,arg,0]]],bnds],
          arg$0=caml_call1(sexp_of_t,v_loc),
          bnds$1=[0,[1,[0,_v_,[0,arg$0,0]]],bnds$0],
          arg$1=caml_call1(sexp_of_t$6,v_gid),
          bnds$2=[0,[1,[0,_w_,[0,arg$1,0]]],bnds$1],
          v0=[1,bnds$2],
          v1$10=caml_call1(sexp_of_t$4,v1$9),
          v2$0=caml_call2(Base[140],of_a$0,v2);
         return [1,[0,_G_,[0,v0,[0,v1$10,[0,v2$0,0]]]]]}}
    function constr(s,t){return [0,-59723313,[0,s,t]]}
    function inherit(loc,t){return [0,-72987685,[0,loc,t]]}
    function var$4(loc,t){return [6,[0,loc,t]]}
    function poly_variant$1(loc,xs){return [5,[0,loc,xs]]}
    function is_cyclic_0(via_VR,group,tid)
     {var set=[0,0];
      function visited(tid)
       {return caml_call3(Base_List[6],set[1],tid,equal$0)}
      function trav_tid(tid)
       {var match=lookup(group,tid),body=match[2];return trav(body)}
      function trav(param)
       {var param$0=param;
        for(;;)
         {switch(param$0[0])
           {case 0:var param$1=param$0[2],param$0=param$1;continue;
            case 1:var ts=param$0[2];break;
            case 2:
             var xs=param$0[1];
             if(via_VR)
              {var _aw_=function(param){var t=param[2];return trav(t)};
               return caml_call2(Base_List[9],xs,_aw_)}
             return 0;
            case 3:
             var xs$0=param$0[1];
             if(via_VR)
              {var
                _ax_=
                 function(param)
                  {var ts=param[2];return caml_call2(Base_List[9],ts,trav)};
               return caml_call2(Base_List[9],xs$0,_ax_)}
             return 0;
            case 4:var ts=param$0[1];break;
            case 5:
             var
              match=param$0[1],
              cs=match[2],
              _ay_=
               function(param)
                {if(-59723313 <= param[1])
                  {var _az_=param[2][2];
                   if(_az_){var t=_az_[1];return trav(t)}
                   return 0}
                 var match=param[2],t$0=match[2];
                 return trav(t$0)};
             return caml_call2(Base_List[9],cs,_ay_);
            case 6:return 0;
            case 7:
             var ts$0=param$0[2],tid=param$0[1];
             if(! visited(tid)){set[1] = [0,tid,set[1]];trav_tid(tid)}
             return caml_call2(Base_List[9],ts$0,trav);
            default:var ts=param$0[3]}
          return caml_call2(Base_List[9],ts,trav)}}
      trav_tid(tid);
      var res=visited(tid);
      return res}
    var _H_=1,_I_=0;
    function Evaluation(Canonical)
     {var _Q_=Base_List[10],_R_=caml_call1(Base_Map[5],[0,comparator]);
      function _S_(t,param)
       {var v=param[2],k=param[1];return caml_call3(Base_Map[26],t,k,v)}
      function create(_av_){return caml_call3(_Q_,_av_,_R_,_S_)}
      function lookup$0(t,k){return caml_call2(Base_Map[34],t,k)}
      var Venv=[0,lookup$0,create],Applicand=[0];
      function compare(a_109,b_110)
       {var
         t_112=a_109[2],
         t_111=a_109[1],
         t_114=b_110[2],
         t_113=b_110[1],
         n=caml_call2(compare$3,t_111,t_113);
        return 0 === n?caml_call2(compare$2,t_112,t_114):n}
      function sexp_of_t(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(sexp_of_t$6,v0),
         v1$0=caml_call1(sexp_of_t$4,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       T=[0,compare,sexp_of_t],
       include=caml_call1(Base_Comparator[4],T),
       comparator$0=include[1];
      function find(t,k){return caml_call2(Base_Map[34],t,k)}
      var empty=caml_call1(Base_Map[5],[0,comparator$0]);
      function extend(t,k,v){return caml_call3(Base_Map[26],t,k,v)}
      var Tenv=[0,find,empty,extend];
      function return$0(x,param,tenv){return x}
      function bind(t,f,depth,tenv)
       {var x=caml_call2(t,depth,tenv);
        return caml_call2(caml_call1(f,x),depth,tenv)}
      function look_env(key,param,tenv)
       {var result=caml_call2(Tenv[1],tenv,key);
        function _au_(param){var x=param[2];return [0,x]}
        return caml_call2(Base_Option[30],result,_au_)}
      function extend_new_tid(key,def_t,depth,tenv)
       {var
         value=[0,-271630457,depth],
         tenv$0=caml_call3(Tenv[3],tenv,key,value);
        return [1,caml_call2(def_t,caml_call2(Base[180],depth,1),tenv$0)]}
      function exec(t){return caml_call2(t,0,Tenv[2])}
      var
       Defining=[0,return$0,bind,look_env,extend_new_tid,exec],
       symbol_bind=Defining[2],
       return$1=Defining[1];
      function sequence_defining(xs,f)
       {function loop(acc_ys,param)
         {if(param)
           {var
             xs=param[2],
             x=param[1],
             _at_=function(y){return loop([0,y,acc_ys],xs)};
            return caml_call2(symbol_bind,caml_call1(f,x),_at_)}
          return caml_call1(return$1,caml_call1(Base_List[37],acc_ys))}
        return loop(0,xs)}
      function eval_app(group,tid,args)
       {var
         gid=group[1],
         match=lookup(group,tid),
         body=match[2],
         formals=match[1];
        switch(body[0])
         {case 2:
          case 3:var record_or_normal_variant=1;break;
          default:var record_or_normal_variant=0}
        var
         cyclic=is_cyclic_0(_H_,group,tid),
         cyclic_no_VR=is_cyclic_0(_I_,group,tid),
         switch$0=0;
        if(record_or_normal_variant && cyclic)switch$0 = 1;
        if(! switch$0 && ! cyclic_no_VR)
         {var match$0=caml_call2(Base_List[92],formals,args);
          if(match$0)
           var x=match$0[1],venv=caml_call1(Venv[2],x);
          else
           var venv=caml_call1(Base[220],cst_apply_incorrect_type_appli);
          return _T_(group,venv,body)}
        function _aq_(param)
         {if(0 === param[0])
           {var r=param[1];
            return caml_call1(return$1,caml_call2(Canonical[2][2],r,args))}
          var def=param[1];
          return caml_call1(return$1,caml_call2(Canonical[2][3],def,args))}
        function _ar_(param)
         {if(param){var recurse=param[1];return caml_call1(return$1,recurse)}
          var _as_=eval_definition(group,formals,body);
          return caml_call2(Defining[4],[0,gid,tid],_as_)}
        return caml_call2
                (symbol_bind,
                 caml_call2
                  (symbol_bind,caml_call1(Defining[3],[0,gid,tid]),_ar_),
                 _aq_)}
      function eval_definition(group,formals,body)
       {function _an_(i,x){return [0,x,caml_call1(Canonical[2][1],i)]}
        var
         _ao_=caml_call2(Base_List[94],formals,_an_),
         venv=caml_call1(Venv[2],_ao_);
        function _ap_(v)
         {return caml_call1(return$1,caml_call1(Canonical[4][8],v))}
        return caml_call2(symbol_bind,_T_(group,venv,body),_ap_)}
      function eval_poly_constr(group,venv,c)
       {if(-59723313 <= c[1])
         {var _ai_=c[2],_aj_=_ai_[2],_ak_=_ai_[1];
          if(_aj_)
           {var
             t=_aj_[1],
             _al_=
              function(v)
               {return caml_call1
                        (return$1,[0,[0,_ak_,[0,caml_call1(Canonical[2][4],v)]],0])};
            return caml_call2(symbol_bind,_T_(group,venv,t),_al_)}
          return caml_call1(return$1,[0,[0,_ak_,0],0])}
        var match=c[2],t$0=match[2],loc=match[1];
        function _am_(v)
         {var match=caml_call1(Canonical[2][5],v);
          if(0 === match[0])
           {var tab=match[1];return caml_call1(return$1,tab[1])}
          var desc=match[1];
          return caml_call2(eval_fail(loc,_K_),desc,0)}
        return caml_call2(symbol_bind,_T_(group,venv,t$0),_am_)}
      function eval_list(group,venv,ts)
       {return sequence_defining
                (ts,function(_ah_){return _T_(group,venv,_ah_)})}
      function _T_(group,venv,t)
       {switch(t[0])
         {case 0:
           var
            t$0=t[2],
            s=t[1],
            _V_=
             function(v)
              {return caml_call1(return$1,caml_call2(Canonical[4][1],s,v))};
           return caml_call2(symbol_bind,_T_(group,venv,t$0),_V_);
          case 1:
           var
            ts=t[2],
            s$0=t[1],
            _W_=
             function(vs)
              {return caml_call1(return$1,caml_call2(Canonical[4][2],s$0,vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts),_W_);
          case 2:
           var
            binds=t[1],
            _X_=
             function(binds)
              {return caml_call1(return$1,caml_call1(Canonical[4][9],binds))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (binds,
                      function(param)
                       {var x=param[2],s=param[1];
                        function _ag_(y){return caml_call1(return$1,[0,s,y])}
                        return caml_call2(symbol_bind,_T_(group,venv,x),_ag_)}),
                    _X_);
          case 3:
           var
            alts=t[1],
            _Y_=
             function(alts)
              {return caml_call1(return$1,caml_call1(Canonical[4][10],alts))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (alts,
                      function(param)
                       {var xs=param[2],s=param[1];
                        function _af_(ys){return caml_call1(return$1,[0,s,ys])}
                        return caml_call2(symbol_bind,eval_list(group,venv,xs),_af_)}),
                    _Y_);
          case 4:
           var
            ts$0=t[1],
            _Z_=
             function(vs)
              {return caml_call1(return$1,caml_call1(Canonical[4][3],vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts$0),_Z_);
          case 5:
           var
            match=t[1],
            cs=match[2],
            loc=match[1],
            ___=
             function(xss)
              {var _ae_=caml_call1(Base_List[134],xss);
               return caml_call1
                       (return$1,caml_call2(Canonical[4][4],loc,_ae_))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (cs,
                      function(_ad_){return eval_poly_constr(group,venv,_ad_)}),
                    ___);
          case 6:
           var
            match$0=t[1],
            vid=match$0[2],
            loc$0=match$0[1],
            match$1=caml_call2(Venv[1],venv,vid);
           if(match$1){var x=match$1[1];return caml_call1(return$1,x)}
           var _$_=0,_aa_=0;
           return caml_call2
                   (eval_fail
                     (loc$0,
                      [0,
                       [11,
                        cst_Free_type_variable,
                        [24,
                         _J_,
                         function(param,custom_printf_115)
                          {return caml_call1(to_string$3,custom_printf_115)},
                         _aa_]],
                       cst_Free_type_variable_Vid]),
                    vid,
                    _$_);
          case 7:
           var
            args=t[2],
            tid=t[1],
            _ab_=function(args){return eval_app(group,tid,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args),_ab_);
          default:
           var
            args$0=t[3],
            tid$0=t[2],
            in_group=t[1],
            _ac_=function(args){return eval_app(in_group,tid$0,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args$0),_ac_)}}
      function eval$0(t)
       {var
         group$0=group(caml_call1(of_string,cst_top_level),0),
         venv=caml_call1(Venv[2],0),
         _U_=_T_(group$0,venv,t),
         v=caml_call1(Defining[5],_U_);
        return caml_call1(Canonical[4][11],v)}
      return [0,
              Venv,
              Applicand,
              Tenv,
              Defining,
              symbol_bind,
              return$1,
              sequence_defining,
              eval_list,
              eval_poly_constr,
              eval_definition,
              eval_app,
              eval$0]}
    var
     Exp=[0],
     include=Evaluation([0,to_digest$2,Exp1,Def$0,Create]),
     _L_=include[12],
     Evaluation_to_digest=Evaluation(Canonical_digest);
    function eval_to_digest(exp)
     {var _P_=caml_call1(Evaluation_to_digest[12],exp);
      return caml_call1(Canonical_digest[1],_P_)}
    function eval_to_digest_string(exp)
     {return caml_call1(to_hex,eval_to_digest(exp))}
    var
     Not_a_tuple=
      [248,cst_Bin_shape_lib_Bin_shape_Fo,runtime.caml_fresh_oo_id(0)];
    function _M_(param)
     {if(param[1] === Not_a_tuple)
       {var v0=param[2],v0$0=of_a$0(v0);return [1,[0,_N_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_O_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Not_a_tuple,_M_);
    function deconstruct_tuple_exn(t)
     {if(4 === t[0]){var ts=t[1];return ts}throw [0,Not_a_tuple,t]}
    var
     Bin_shape_lib_Bin_shape=
      [0,
       of_a$0,
       [0,of_string$1],
       [0,of_string$2],
       [0,of_string],
       [0,of_string$0],
       group,
       tuple$1,
       record$1,
       variant$1,
       constr,
       inherit,
       poly_variant$1,
       rec_app,
       top_app,
       var$4,
       basetype$1,
       annotate$1,
       [0,compare$0,t_of_sexp$0,sexp_of_t$1,to_hex,to_md5,of_md5],
       [0,
        compare$1,
        sexp_of_t$3,
        to_string_hum,
        to_digest$2,
        Exp,
        Def$0,
        [0,
         Create[1],
         Create[2],
         Create[3],
         Create[4],
         Create[5],
         Create[7],
         Create[6],
         Create[8],
         Create[9],
         Create[10],
         Create[11]]],
       _L_,
       eval_to_digest,
       eval_to_digest_string,
       [0,deconstruct_tuple_exn]];
    caml_register_global
     (135,Bin_shape_lib_Bin_shape,"Bin_shape_lib__Bin_shape");
    var Bin_shape_lib_Std=[0];
    caml_register_global(136,Bin_shape_lib_Std,"Bin_shape_lib__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fc2hhcGVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJlcXVhbCQwIl0sInNvdXJjZXMiOlsiL2hvbWUvem91Z3Vhbnl1bi8ub3BhbS80LjEyLjAvbGliL29jYW1sL3N0cmluZy5tbGkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtYQUE7Ozs7Ozs7OztNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQUEsUSIsInNvdXJjZXNDb250ZW50IjpbIigqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0NhbWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgICAgICAgICAgIFhhdmllciBMZXJveSwgcHJvamV0IENyaXN0YWwsIElOUklBIFJvY3F1ZW5jb3VydCAgICAgICAgICAgKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgQ29weXJpZ2h0IDE5OTYgSW5zdGl0dXQgTmF0aW9uYWwgZGUgUmVjaGVyY2hlIGVuIEluZm9ybWF0aXF1ZSBldCAgICAgKilcbigqICAgICBlbiBBdXRvbWF0aXF1ZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqICAgQWxsIHJpZ2h0cyByZXNlcnZlZC4gIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgICAgKilcbigqICAgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDIuMSwgd2l0aCB0aGUgICAgICAgICAgKilcbigqICAgc3BlY2lhbCBleGNlcHRpb24gb24gbGlua2luZyBkZXNjcmliZWQgaW4gdGhlIGZpbGUgTElDRU5TRS4gICAgICAgICAgKilcbigqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKilcblxuKCogTk9URTpcbiAgIElmIHRoaXMgZmlsZSBpcyBzdHJpbmdMYWJlbHMubWxpLCBydW4gdG9vbHMvc3luY19zdGRsaWJfZG9jcyBhZnRlciBlZGl0aW5nXG4gICBpdCB0byBnZW5lcmF0ZSBzdHJpbmcubWxpLlxuXG4gICBJZiB0aGlzIGZpbGUgaXMgc3RyaW5nLm1saSwgZG8gbm90IGVkaXQgaXQgZGlyZWN0bHkgLS0gZWRpdFxuICAgc3RyaW5nTGFiZWxzLm1saSBpbnN0ZWFkLlxuICopXG5cbigqKiBTdHJpbmdzLlxuXG4gICAgQSBzdHJpbmcgW3NdIG9mIGxlbmd0aCBbbl0gaXMgYW4gaW5kZXhhYmxlIGFuZCBpbW11dGFibGUgc2VxdWVuY2VcbiAgICBvZiBbbl0gYnl0ZXMuIEZvciBoaXN0b3JpY2FsIHJlYXNvbnMgdGhlc2UgYnl0ZXMgYXJlIHJlZmVycmVkIHRvXG4gICAgYXMgY2hhcmFjdGVycy5cblxuICAgIFRoZSBzZW1hbnRpY3Mgb2Ygc3RyaW5nIGZ1bmN0aW9ucyBpcyBkZWZpbmVkIGluIHRlcm1zIG9mXG4gICAgaW5kaWNlcyBhbmQgcG9zaXRpb25zLiBUaGVzZSBhcmUgZGVwaWN0ZWQgYW5kIGRlc2NyaWJlZFxuICAgIGFzIGZvbGxvd3MuXG5cbnt2XG5wb3NpdGlvbnMgIDAgICAxICAgMiAgIDMgICA0ICAgIG4tMSAgICBuXG4gICAgICAgICAgICstLS0rLS0tKy0tLSstLS0rICAgICArLS0tLS0rXG4gIGluZGljZXMgIHwgMCB8IDEgfCAyIHwgMyB8IC4uLiB8IG4tMSB8XG4gICAgICAgICAgICstLS0rLS0tKy0tLSstLS0rICAgICArLS0tLS0rXG52fVxuICAgIHt1bFxuICAgIHstIEFuIHtlIGluZGV4fSBbaV0gb2YgW3NdIGlzIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIFxcW1swXTtbbi0xXVxcXS5cbiAgICAgICBJdCByZXByZXNlbnRzIHRoZSBbaV10aCBieXRlIChjaGFyYWN0ZXIpIG9mIFtzXSB3aGljaCBjYW4gYmVcbiAgICAgICBhY2Nlc3NlZCB1c2luZyB0aGUgY29uc3RhbnQgdGltZSBzdHJpbmcgaW5kZXhpbmcgb3BlcmF0b3JcbiAgICAgICBbcy5baV1dLn1cbiAgICB7LSBBIHtlIHBvc2l0aW9ufSBbaV0gb2YgW3NdIGlzIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlXG4gICAgICAgXFxbWzBdO1tuXVxcXS4gSXQgcmVwcmVzZW50cyBlaXRoZXIgdGhlIHBvaW50IGF0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICAgICB0aGUgc3RyaW5nLCBvciB0aGUgcG9pbnQgYmV0d2VlbiB0d28gaW5kaWNlcywgb3IgdGhlIHBvaW50IGF0XG4gICAgICAgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLiBUaGUgW2lddGggYnl0ZSBpbmRleCBpcyBiZXR3ZWVuIHBvc2l0aW9uXG4gICAgICAgW2ldIGFuZCBbaSsxXS59fVxuXG4gICAgVHdvIGludGVnZXJzIFtzdGFydF0gYW5kIFtsZW5dIGFyZSBzYWlkIHRvIGRlZmluZSBhIHtlIHZhbGlkXG4gICAgc3Vic3RyaW5nfSBvZiBbc10gaWYgW2xlbiA+PSAwXSBhbmQgW3N0YXJ0XSwgW3N0YXJ0K2xlbl0gYXJlXG4gICAgcG9zaXRpb25zIG9mIFtzXS5cblxuICAgIHtiIFVuaWNvZGUgdGV4dC59IFN0cmluZ3MgYmVpbmcgYXJiaXRyYXJ5IHNlcXVlbmNlcyBvZiBieXRlcywgdGhleVxuICAgIGNhbiBob2xkIGFueSBraW5kIG9mIHRleHR1YWwgZW5jb2RpbmcuIEhvd2V2ZXIgdGhlIHJlY29tbWVuZGVkXG4gICAgZW5jb2RpbmcgZm9yIHN0b3JpbmcgVW5pY29kZSB0ZXh0IGluIE9DYW1sIHN0cmluZ3MgaXMgVVRGLTguIFRoaXNcbiAgICBpcyB0aGUgZW5jb2RpbmcgdXNlZCBieSBVbmljb2RlIGVzY2FwZXMgaW4gc3RyaW5nIGxpdGVyYWxzLiBGb3JcbiAgICBleGFtcGxlIHRoZSBzdHJpbmcgW1wiXFx1ezFGNDJCfVwiXSBpcyB0aGUgVVRGLTggZW5jb2Rpbmcgb2YgdGhlXG4gICAgVW5pY29kZSBjaGFyYWN0ZXIgVSsxRjQyQi5cblxuICAgIHtiIFBhc3QgbXV0YWJpbGl0eS59IE9DYW1sIHN0cmluZ3MgdXNlZCB0byBiZSBtb2RpZmlhYmxlIGluIHBsYWNlLFxuICAgIGZvciBpbnN0YW5jZSB2aWEgdGhlIHshU3RyaW5nLnNldH0gYW5kIHshU3RyaW5nLmJsaXR9XG4gICAgZnVuY3Rpb25zLiBUaGlzIHVzZSBpcyBub3dhZGF5cyBvbmx5IHBvc3NpYmxlIHdoZW4gdGhlIGNvbXBpbGVyIGlzXG4gICAgcHV0IGluIFwidW5zYWZlLXN0cmluZ1wiIG1vZGUgYnkgZ2l2aW5nIHRoZSBbLXVuc2FmZS1zdHJpbmddXG4gICAgY29tbWFuZC1saW5lIG9wdGlvbi4gVGhpcyBjb21wYXRpYmlsaXR5IG1vZGUgbWFrZXMgdGhlIHR5cGVzXG4gICAgW3N0cmluZ10gYW5kIFtieXRlc10gKHNlZSB7IUJ5dGVzLnR9KSBpbnRlcmNoYW5nZWFibGUgc28gdGhhdFxuICAgIGZ1bmN0aW9ucyBleHBlY3RpbmcgYnl0ZSBzZXF1ZW5jZXMgY2FuIGFsc28gYWNjZXB0IHN0cmluZ3MgYXNcbiAgICBhcmd1bWVudHMgYW5kIG1vZGlmeSB0aGVtLlxuXG4gICAgVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gW2J5dGVzXSBhbmQgW3N0cmluZ10gd2FzIGludHJvZHVjZWQgaW5cbiAgICBPQ2FtbCA0LjAyLCBhbmQgdGhlIFwidW5zYWZlLXN0cmluZ1wiIGNvbXBhdGliaWxpdHkgbW9kZSB3YXMgdGhlXG4gICAgZGVmYXVsdCB1bnRpbCBPQ2FtbCA0LjA1LiBTdGFydGluZyB3aXRoIDQuMDYsIHRoZSBjb21wYXRpYmlsaXR5XG4gICAgbW9kZSBpcyBvcHQtaW47IHdlIGludGVuZCB0byByZW1vdmUgdGhlIG9wdGlvbiBpbiB0aGUgZnV0dXJlLlxuXG4gICAgVGhlIGxhYmVsZWQgdmVyc2lvbiBvZiB0aGlzIG1vZHVsZSBjYW4gYmUgdXNlZCBhcyBkZXNjcmliZWQgaW4gdGhlXG4gICAgeyFTdGRMYWJlbHN9IG1vZHVsZS5cbiopXG5cbigqKiB7MTpzdHJpbmdzIFN0cmluZ3N9ICopXG5cbnR5cGUgdCA9IHN0cmluZ1xuKCoqIFRoZSB0eXBlIGZvciBzdHJpbmdzLiAqKVxuXG52YWwgbWFrZSA6IGludCAtPiBjaGFyIC0+IHN0cmluZ1xuKCoqIFttYWtlIG4gY10gaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIFtuXSB3aXRoIGVhY2ggaW5kZXggaG9sZGluZyB0aGVcbiAgICBjaGFyYWN0ZXIgW2NdLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uICopXG5cbnZhbCBpbml0IDogaW50IC0+IChpbnQgLT4gY2hhcikgLT4gc3RyaW5nXG4oKiogW2luaXQgbiBmXSBpcyBhIHN0cmluZyBvZiBsZW5ndGggW25dIHdpdGggaW5kZXhcbiAgICBbaV0gaG9sZGluZyB0aGUgY2hhcmFjdGVyIFtmIGldIChjYWxsZWQgaW4gaW5jcmVhc2luZyBpbmRleCBvcmRlcikuXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbiA8IDBdIG9yIFtuID4gXXshU3lzLm1heF9zdHJpbmdfbGVuZ3RofS5cbiAgICBAc2luY2UgNC4wMi4wICopXG5cbmV4dGVybmFsIGxlbmd0aCA6IHN0cmluZyAtPiBpbnQgPSBcIiVzdHJpbmdfbGVuZ3RoXCJcbigqKiBbbGVuZ3RoIHNdIGlzIHRoZSBsZW5ndGggKG51bWJlciBvZiBieXRlcy9jaGFyYWN0ZXJzKSBvZiBbc10uICopXG5cbmV4dGVybmFsIGdldCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciA9IFwiJXN0cmluZ19zYWZlX2dldFwiXG4oKiogW2dldCBzIGldIGlzIHRoZSBjaGFyYWN0ZXIgYXQgaW5kZXggW2ldIGluIFtzXS4gVGhpcyBpcyB0aGUgc2FtZVxuICAgIGFzIHdyaXRpbmcgW3MuW2ldXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBub3QgYW4gaW5kZXggb2YgW3NdLiAqKVxuXG4oKiogezE6Y29uY2F0IENvbmNhdGVuYXRpbmd9XG5cbiAgICB7YiBOb3RlLn0gVGhlIHshU3RkbGliLiggXiApfSBiaW5hcnkgb3BlcmF0b3IgY29uY2F0ZW5hdGVzIHR3b1xuICAgIHN0cmluZ3MuICopXG5cbnZhbCBjb25jYXQgOiBzdHJpbmcgLT4gc3RyaW5nIGxpc3QgLT4gc3RyaW5nXG4oKiogW2NvbmNhdCBzZXAgc3NdIGNvbmNhdGVuYXRlcyB0aGUgbGlzdCBvZiBzdHJpbmdzIFtzc10sIGluc2VydGluZ1xuICAgIHRoZSBzZXBhcmF0b3Igc3RyaW5nIFtzZXBdIGJldHdlZW4gZWFjaC5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbigqKiB7MTpwcmVkaWNhdGVzIFByZWRpY2F0ZXMgYW5kIGNvbXBhcmlzb25zfSAqKVxuXG52YWwgZXF1YWwgOiB0IC0+IHQgLT4gYm9vbFxuKCoqIFtlcXVhbCBzMCBzMV0gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtzMF0gYW5kIFtzMV0gYXJlIGNoYXJhY3Rlci13aXNlXG4gICAgZXF1YWwuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIGNvbXBhcmUgOiB0IC0+IHQgLT4gaW50XG4oKiogW2NvbXBhcmUgczAgczFdIHNvcnRzIFtzMF0gYW5kIFtzMV0gaW4gbGV4aWNvZ3JhcGhpY2FsIG9yZGVyLiBbY29tcGFyZV1cbiAgICBiZWhhdmVzIGxpa2UgeyFTdGRsaWIuY29tcGFyZX0gb24gc3RyaW5ncyBidXQgbWF5IGJlIG1vcmUgZWZmaWNpZW50LiAqKVxuXG52YWwgY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW2NvbnRhaW5zX2Zyb20gcyBzdGFydCBjXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2NdIGFwcGVhcnMgaW4gW3NdXG4gICAgYWZ0ZXIgcG9zaXRpb24gW3N0YXJ0XS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdGFydF0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgcmNvbnRhaW5zX2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtyY29udGFpbnNfZnJvbSBzIHN0b3AgY10gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtjXSBhcHBlYXJzIGluIFtzXVxuICAgIGJlZm9yZSBwb3NpdGlvbiBbc3RvcCsxXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdG9wIDwgMF0gb3IgW3N0b3ArMV0gaXMgbm90IGEgdmFsaWRcbiAgICBwb3NpdGlvbiBpbiBbc10uICopXG5cbnZhbCBjb250YWlucyA6IHN0cmluZyAtPiBjaGFyIC0+IGJvb2xcbigqKiBbY29udGFpbnMgcyBjXSBpcyB7IVN0cmluZy5jb250YWluc19mcm9tfVsgcyAwIGNdLiAqKVxuXG4oKiogezE6ZXh0cmFjdCBFeHRyYWN0aW5nIHN1YnN0cmluZ3N9ICopXG5cbnZhbCBzdWIgOiBzdHJpbmcgLT4gaW50IC0+IGludCAtPiBzdHJpbmdcbigqKiBbc3ViIHMgcG9zIGxlbl0gaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIFtsZW5dLCBjb250YWluaW5nIHRoZVxuICAgIHN1YnN0cmluZyBvZiBbc10gdGhhdCBzdGFydHMgYXQgcG9zaXRpb24gW3Bvc10gYW5kIGhhcyBsZW5ndGhcbiAgICBbbGVuXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtwb3NdIGFuZCBbbGVuXSBkbyBub3QgZGVzaWduYXRlIGEgdmFsaWRcbiAgICBzdWJzdHJpbmcgb2YgW3NdLiAqKVxuXG52YWwgc3BsaXRfb25fY2hhciA6IGNoYXIgLT4gc3RyaW5nIC0+IHN0cmluZyBsaXN0XG4oKiogW3NwbGl0X29uX2NoYXIgc2VwIHNdIGlzIHRoZSBsaXN0IG9mIGFsbCAocG9zc2libHkgZW1wdHkpXG4gICAgc3Vic3RyaW5ncyBvZiBbc10gdGhhdCBhcmUgZGVsaW1pdGVkIGJ5IHRoZSBjaGFyYWN0ZXIgW3NlcF0uXG5cbiAgICBUaGUgZnVuY3Rpb24ncyByZXN1bHQgaXMgc3BlY2lmaWVkIGJ5IHRoZSBmb2xsb3dpbmcgaW52YXJpYW50czpcbiAgICB7dWxcbiAgICB7LSBUaGUgbGlzdCBpcyBub3QgZW1wdHkufVxuICAgIHstIENvbmNhdGVuYXRpbmcgaXRzIGVsZW1lbnRzIHVzaW5nIFtzZXBdIGFzIGEgc2VwYXJhdG9yIHJldHVybnMgYVxuICAgICAgc3RyaW5nIGVxdWFsIHRvIHRoZSBpbnB1dCAoW2NvbmNhdCAobWFrZSAxIHNlcClcbiAgICAgIChzcGxpdF9vbl9jaGFyIHNlcCBzKSA9IHNdKS59XG4gICAgey0gTm8gc3RyaW5nIGluIHRoZSByZXN1bHQgY29udGFpbnMgdGhlIFtzZXBdIGNoYXJhY3Rlci59fVxuXG4gICAgQHNpbmNlIDQuMDQuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxuKCoqIHsxOnRyYW5zZm9ybWluZyBUcmFuc2Zvcm1pbmd9ICopXG5cbnZhbCBtYXAgOiAoY2hhciAtPiBjaGFyKSAtPiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW21hcCBmIHNdIGlzIHRoZSBzdHJpbmcgcmVzdWx0aW5nIGZyb20gYXBwbHlpbmcgW2ZdIHRvIGFsbCB0aGVcbiAgICBjaGFyYWN0ZXJzIG9mIFtzXSBpbiBpbmNyZWFzaW5nIG9yZGVyLlxuXG4gICAgQHNpbmNlIDQuMDAuMCAqKVxuXG52YWwgbWFwaSA6IChpbnQgLT4gY2hhciAtPiBjaGFyKSAtPiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW21hcGkgZiBzXSBpcyBsaWtlIHshbWFwfSBidXQgdGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgaXMgYWxzb1xuICAgIHBhc3NlZCB0byBbZl0uXG5cbiAgICBAc2luY2UgNC4wMi4wICopXG5cbnZhbCB0cmltIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFt0cmltIHNdIGlzIFtzXSB3aXRob3V0IGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuIFdoaXRlc3BhY2VcbiAgICBjaGFyYWN0ZXJzIGFyZTogWycgJ10sIFsnXFx4MEMnXSAoZm9ybSBmZWVkKSwgWydcXG4nXSwgWydcXHInXSwgYW5kIFsnXFx0J10uXG5cbiAgICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBlc2NhcGVkIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtlc2NhcGVkIHNdIGlzIFtzXSB3aXRoIHNwZWNpYWwgY2hhcmFjdGVycyByZXByZXNlbnRlZCBieSBlc2NhcGVcbiAgICBzZXF1ZW5jZXMsIGZvbGxvd2luZyB0aGUgbGV4aWNhbCBjb252ZW50aW9ucyBvZiBPQ2FtbC5cblxuICAgIEFsbCBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIFVTLUFTQ0lJIHByaW50YWJsZSByYW5nZSBcXFsweDIwOzB4N0VcXF0gYXJlXG4gICAgZXNjYXBlZCwgYXMgd2VsbCBhcyBiYWNrc2xhc2ggKDB4MkYpIGFuZCBkb3VibGUtcXVvdGUgKDB4MjIpLlxuXG4gICAgVGhlIGZ1bmN0aW9uIHshU2NhbmYudW5lc2NhcGVkfSBpcyBhIGxlZnQgaW52ZXJzZSBvZiBbZXNjYXBlZF0sXG4gICAgaS5lLiBbU2NhbmYudW5lc2NhcGVkIChlc2NhcGVkIHMpID0gc10gZm9yIGFueSBzdHJpbmcgW3NdICh1bmxlc3NcbiAgICBbZXNjYXBlZCBzXSBmYWlscykuXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGFuXG4gICAgeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9IGJ5dGVzLiAqKVxuXG52YWwgdXBwZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFt1cHBlcmNhc2VfYXNjaWkgc10gaXMgW3NdIHdpdGggYWxsIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIGxvd2VyY2FzZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbbG93ZXJjYXNlX2FzY2lpIHNdIGlzIFtzXSB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVycyB0cmFuc2xhdGVkXG4gICAgdG8gbG93ZXJjYXNlLCB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbnZhbCBjYXBpdGFsaXplX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtjYXBpdGFsaXplX2FzY2lpIHNdIGlzIFtzXSB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvXG4gICAgdXBwZXJjYXNlLCB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbnZhbCB1bmNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3VuY2FwaXRhbGl6ZV9hc2NpaSBzXSBpcyBbc10gd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICAgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAc2luY2UgNC4wMy4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG4oKiogezE6dHJhdmVyc2luZyBUcmF2ZXJzaW5nfSAqKVxuXG52YWwgaXRlciA6IChjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogW2l0ZXIgZiBzXSBhcHBsaWVzIGZ1bmN0aW9uIFtmXSBpbiB0dXJuIHRvIGFsbCB0aGUgY2hhcmFjdGVycyBvZiBbc10uXG4gICAgSXQgaXMgZXF1aXZhbGVudCB0byBbZiBzLlswXTsgZiBzLlsxXTsgLi4uOyBmIHMuW2xlbmd0aCBzIC0gMV07ICgpXS4gKilcblxudmFsIGl0ZXJpIDogKGludCAtPiBjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogW2l0ZXJpXSBpcyBsaWtlIHshaXRlcn0sIGJ1dCB0aGUgZnVuY3Rpb24gaXMgYWxzbyBnaXZlbiB0aGVcbiAgICBjb3JyZXNwb25kaW5nIGNoYXJhY3RlciBpbmRleC5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxuKCoqIHsxOnNlYXJjaGluZyBTZWFyY2hpbmd9ICopXG5cbnZhbCBpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtpbmRleF9mcm9tIHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgW2NdIGluXG4gICAgW3NdIGFmdGVyIHBvc2l0aW9uIFtpXS5cblxuICAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS4gKilcblxuXG52YWwgaW5kZXhfZnJvbV9vcHQgOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtpbmRleF9mcm9tX29wdCBzIGkgY10gaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIFtjXVxuICAgIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0gKGlmIGFueSkuXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCByaW5kZXhfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnRcbigqKiBbcmluZGV4X2Zyb20gcyBpIGNdIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIFtjXSBpblxuICAgIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG5cbiAgICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdLlxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpKzFdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS4gKilcblxudmFsIHJpbmRleF9mcm9tX29wdCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW3JpbmRleF9mcm9tX29wdCBzIGkgY10gaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgW2NdXG4gICAgaW4gW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXSAoaWYgYW55KS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpKzFdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cbiAgICBAc2luY2UgNC4wNSAqKVxuXG52YWwgaW5kZXggOiBzdHJpbmcgLT4gY2hhciAtPiBpbnRcbigqKiBbaW5kZXggcyBjXSBpcyB7IVN0cmluZy5pbmRleF9mcm9tfVsgcyAwIGNdLiAqKVxuXG52YWwgaW5kZXhfb3B0IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtpbmRleF9vcHQgcyBjXSBpcyB7IVN0cmluZy5pbmRleF9mcm9tX29wdH1bIHMgMCBjXS5cblxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCByaW5kZXggOiBzdHJpbmcgLT4gY2hhciAtPiBpbnRcbigqKiBbcmluZGV4IHMgY10gaXMgeyFTdHJpbmcucmluZGV4X2Zyb219WyBzIChsZW5ndGggcyAtIDEpIGNdLiAqKVxuXG52YWwgcmluZGV4X29wdCA6IHN0cmluZyAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbcmluZGV4X29wdCBzIGNdIGlzIHshU3RyaW5nLnJpbmRleF9mcm9tX29wdH1bIHMgKGxlbmd0aCBzIC0gMSkgY10uXG5cbiAgICBAc2luY2UgNC4wNSAqKVxuXG4oKiogezE6Y29udmVydGluZyBDb252ZXJ0aW5nfSAqKVxuXG52YWwgdG9fc2VxIDogdCAtPiBjaGFyIFNlcS50XG4oKiogW3RvX3NlcSBzXSBpcyBhIHNlcXVlbmNlIG1hZGUgb2YgdGhlIHN0cmluZydzIGNoYXJhY3RlcnMgaW5cbiAgICBpbmNyZWFzaW5nIG9yZGVyLiBJbiBbXCJ1bnNhZmUtc3RyaW5nXCJdIG1vZGUsIG1vZGlmaWNhdGlvbnMgb2YgdGhlIHN0cmluZ1xuICAgIGR1cmluZyBpdGVyYXRpb24gd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlIGl0ZXJhdG9yLlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIHRvX3NlcWkgOiB0IC0+IChpbnQgKiBjaGFyKSBTZXEudFxuKCoqIFt0b19zZXFpIHNdIGlzIGxpa2UgeyF0b19zZXF9IGJ1dCBhbHNvIHR1cGxlcyB0aGUgY29ycmVzcG9uZGluZyBpbmRleC5cblxuICAgIEBzaW5jZSA0LjA3ICopXG5cbnZhbCBvZl9zZXEgOiBjaGFyIFNlcS50IC0+IHRcbigqKiBbb2Zfc2VxIHNdIGlzIGEgc3RyaW5nIG1hZGUgb2YgdGhlIHNlcXVlbmNlJ3MgY2hhcmFjdGVycy5cblxuICAgIEBzaW5jZSA0LjA3ICopXG5cbigqKiB7MTpkZXByZWNhdGVkIERlcHJlY2F0ZWQgZnVuY3Rpb25zfSAqKVxuXG5leHRlcm5hbCBjcmVhdGUgOiBpbnQgLT4gYnl0ZXMgPSBcImNhbWxfY3JlYXRlX3N0cmluZ1wiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuY3JlYXRlL0J5dGVzTGFiZWxzLmNyZWF0ZSBpbnN0ZWFkLlwiXVxuKCoqIFtjcmVhdGUgbl0gcmV0dXJucyBhIGZyZXNoIGJ5dGUgc2VxdWVuY2Ugb2YgbGVuZ3RoIFtuXS5cbiAgICBUaGUgc2VxdWVuY2UgaXMgdW5pbml0aWFsaXplZCBhbmQgY29udGFpbnMgYXJiaXRyYXJ5IGJ5dGVzLlxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LlxuXG4gICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2ZcbiAgICB7IUJ5dGVzLmNyZWF0ZX0veyFCeXRlc0xhYmVscy5jcmVhdGV9LiAqKVxuXG5leHRlcm5hbCBzZXQgOiBieXRlcyAtPiBpbnQgLT4gY2hhciAtPiB1bml0ID0gXCIlc3RyaW5nX3NhZmVfc2V0XCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5zZXQvQnl0ZXNMYWJlbHMuc2V0IGluc3RlYWQuXCJdXG4oKiogW3NldCBzIG4gY10gbW9kaWZpZXMgYnl0ZSBzZXF1ZW5jZSBbc10gaW4gcGxhY2UsXG4gICAgcmVwbGFjaW5nIHRoZSBieXRlIGF0IGluZGV4IFtuXSB3aXRoIFtjXS5cbiAgICBZb3UgY2FuIGFsc28gd3JpdGUgW3MuW25dIDwtIGNdIGluc3RlYWQgb2YgW3NldCBzIG4gY10uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW25dIGlzIG5vdCBhIHZhbGlkIGluZGV4IGluIFtzXS5cblxuICAgIEBkZXByZWNhdGVkIFRoaXMgaXMgYSBkZXByZWNhdGVkIGFsaWFzIG9mXG4gICAgeyFCeXRlcy5zZXR9L3shQnl0ZXNMYWJlbHMuc2V0fS4gKilcblxudmFsIGJsaXQgOlxuICBzdHJpbmcgLT4gaW50IC0+IGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gdW5pdFxuKCoqIFtibGl0IHNyYyBzcmNfcG9zIGRzdCBkc3RfcG9zIGxlbl0gY29waWVzIFtsZW5dIGJ5dGVzXG4gICAgZnJvbSB0aGUgc3RyaW5nIFtzcmNdLCBzdGFydGluZyBhdCBpbmRleCBbc3JjX3Bvc10sXG4gICAgdG8gYnl0ZSBzZXF1ZW5jZSBbZHN0XSwgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIG51bWJlciBbZHN0X3Bvc10uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3JjX3Bvc10gYW5kIFtsZW5dIGRvIG5vdFxuICAgIGRlc2lnbmF0ZSBhIHZhbGlkIHJhbmdlIG9mIFtzcmNdLCBvciBpZiBbZHN0X3Bvc10gYW5kIFtsZW5dXG4gICAgZG8gbm90IGRlc2lnbmF0ZSBhIHZhbGlkIHJhbmdlIG9mIFtkc3RdLiAqKVxuXG52YWwgY29weSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlN0cmluZ3Mgbm93IGltbXV0YWJsZTogbm8gbmVlZCB0byBjb3B5XCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgZ2l2ZW4gc3RyaW5nLlxuXG4gICAgQGRlcHJlY2F0ZWQgQmVjYXVzZSBzdHJpbmdzIGFyZSBpbW11dGFibGUsIGl0IGRvZXNuJ3QgbWFrZSBtdWNoXG4gICAgc2Vuc2UgdG8gbWFrZSBpZGVudGljYWwgY29waWVzIG9mIHRoZW0uICopXG5cbnZhbCBmaWxsIDogYnl0ZXMgLT4gaW50IC0+IGludCAtPiBjaGFyIC0+IHVuaXRcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5maWxsL0J5dGVzTGFiZWxzLmZpbGwgaW5zdGVhZC5cIl1cbigqKiBbZmlsbCBzIHBvcyBsZW4gY10gbW9kaWZpZXMgYnl0ZSBzZXF1ZW5jZSBbc10gaW4gcGxhY2UsXG4gICAgcmVwbGFjaW5nIFtsZW5dIGJ5dGVzIGJ5IFtjXSwgc3RhcnRpbmcgYXQgW3Bvc10uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3Bvc10gYW5kIFtsZW5dIGRvIG5vdFxuICAgIGRlc2lnbmF0ZSBhIHZhbGlkIHN1YnN0cmluZyBvZiBbc10uXG5cbiAgICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZlxuICAgIHshQnl0ZXMuZmlsbH0veyFCeXRlc0xhYmVscy5maWxsfS4gKilcblxudmFsIHVwcGVyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZFxuICAgIFwiVXNlIFN0cmluZy51cHBlcmNhc2VfYXNjaWkvU3RyaW5nTGFiZWxzLnVwcGVyY2FzZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCBsb3dlcmNhc2UgbGV0dGVyc1xuICAgIHRyYW5zbGF0ZWQgdG8gdXBwZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBsb3dlcmNhc2UgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRcbiAgICBcIlVzZSBTdHJpbmcubG93ZXJjYXNlX2FzY2lpL1N0cmluZ0xhYmVscy5sb3dlcmNhc2VfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBhbGwgdXBwZXJjYXNlIGxldHRlcnNcbiAgICB0cmFuc2xhdGVkIHRvIGxvd2VyY2FzZSwgaW5jbHVkaW5nIGFjY2VudGVkIGxldHRlcnMgb2YgdGhlIElTT1xuICAgIExhdGluLTEgKDg4NTktMSkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgY2FwaXRhbGl6ZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZFxuICAgIFwiVXNlIFN0cmluZy5jYXBpdGFsaXplX2FzY2lpL1N0cmluZ0xhYmVscy5jYXBpdGFsaXplX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gdXBwZXJjYXNlLFxuICAgIHVzaW5nIHRoZSBJU08gTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0Li5cblxuICAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgdW5jYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLnVuY2FwaXRhbGl6ZV9hc2NpaS9TdHJpbmdMYWJlbHMudW5jYXBpdGFsaXplX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gbG93ZXJjYXNlLFxuICAgIHVzaW5nIHRoZSBJU08gTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbigqKi8qKilcblxuKCogVGhlIGZvbGxvd2luZyBpcyBmb3Igc3lzdGVtIHVzZSBvbmx5LiBEbyBub3QgY2FsbCBkaXJlY3RseS4gKilcblxuZXh0ZXJuYWwgdW5zYWZlX2dldCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciA9IFwiJXN0cmluZ191bnNhZmVfZ2V0XCJcbmV4dGVybmFsIHVuc2FmZV9zZXQgOiBieXRlcyAtPiBpbnQgLT4gY2hhciAtPiB1bml0ID0gXCIlc3RyaW5nX3Vuc2FmZV9zZXRcIlxuICBbQEBvY2FtbC5kZXByZWNhdGVkXVxuZXh0ZXJuYWwgdW5zYWZlX2JsaXQgOlxuICBzdHJpbmcgLT4gaW50IC0+IGJ5dGVzIC0+IGludCAtPiBpbnQgLT5cbiAgICB1bml0ID0gXCJjYW1sX2JsaXRfc3RyaW5nXCIgW0BAbm9hbGxvY11cbmV4dGVybmFsIHVuc2FmZV9maWxsIDpcbiAgYnl0ZXMgLT4gaW50IC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcImNhbWxfZmlsbF9zdHJpbmdcIiBbQEBub2FsbG9jXVxuICBbQEBvY2FtbC5kZXByZWNhdGVkXVxuIl19
