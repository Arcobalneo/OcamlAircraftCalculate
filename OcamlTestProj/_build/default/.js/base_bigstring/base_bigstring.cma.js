(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_ba_uint8_get16=runtime.caml_ba_uint8_get16,
     caml_ba_uint8_get32=runtime.caml_ba_uint8_get32,
     caml_ba_uint8_get64=runtime.caml_ba_uint8_get64,
     caml_ba_uint8_set16=runtime.caml_ba_uint8_set16,
     caml_ba_uint8_set32=runtime.caml_ba_uint8_set32,
     caml_ba_uint8_set64=runtime.caml_ba_uint8_set64,
     caml_bswap16=runtime.caml_bswap16,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_to_int32=runtime.caml_int64_to_int32,
     caml_lessthan=runtime.caml_lessthan,
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
     cst_Bigstring_set_uint32_be_ex=
      caml_string_of_jsbytes("Bigstring.set_uint32_be_exn"),
     cst_Bigstring_set_uint32_le_ex=
      caml_string_of_jsbytes("Bigstring.set_uint32_le_exn"),
     loc$0=caml_string_of_jsbytes("Bigstring.set_int8_exn"),
     loc=caml_string_of_jsbytes("Bigstring.set_uint8_exn"),
     cst_Bigstring_set_uint64_le_ex=
      caml_string_of_jsbytes("Bigstring.set_uint64_le_exn"),
     cst_Bigstring_set_uint64_be_ex=
      caml_string_of_jsbytes("Bigstring.set_uint64_be_exn"),
     cst_unsafe_read_uint64_value_c=
      caml_string_of_jsbytes
       ("unsafe_read_uint64: value cannot be represented unboxed!"),
     cst_unsafe_read_int64_value_ca=
      caml_string_of_jsbytes
       ("unsafe_read_int64: value cannot be represented unboxed!"),
     cst_Bigstring_write_int32_int$0=
      caml_string_of_jsbytes("Bigstring.write_int32_int"),
     cst_Bigstring_write_int32_int=
      caml_string_of_jsbytes("Bigstring.write_int32_int"),
     cst_Bigstring_write_uint16$0=
      caml_string_of_jsbytes("Bigstring.write_uint16"),
     cst_Bigstring_write_uint16=
      caml_string_of_jsbytes("Bigstring.write_uint16"),
     cst_Bigstring_write_int16$0=
      caml_string_of_jsbytes("Bigstring.write_int16"),
     cst_Bigstring_write_int16=caml_string_of_jsbytes("Bigstring.write_int16"),
     cst_set_64=caml_string_of_jsbytes("set_64"),
     cst_set_32=caml_string_of_jsbytes("set_32"),
     cst_set_16=caml_string_of_jsbytes("set_16"),
     cst_get_64=caml_string_of_jsbytes("get_64"),
     cst_get_32=caml_string_of_jsbytes("get_32"),
     cst_get_16=caml_string_of_jsbytes("get_16"),
     cst_find=caml_string_of_jsbytes("find"),
     cst_bigstring_of_sexp_atom_nee=
      caml_string_of_jsbytes("bigstring_of_sexp: atom needed"),
     cst_pos_0=caml_string_of_jsbytes(": pos < 0"),
     cst_len_0=caml_string_of_jsbytes(": len < 0"),
     cst_Base_bigstring=caml_string_of_jsbytes("Base_bigstring"),
     cst_base_bigstring=caml_string_of_jsbytes("base_bigstring"),
     cst_src_base_bigstring_ml=caml_string_of_jsbytes("src/base_bigstring.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_base_bigstring$0=caml_string_of_jsbytes("base_bigstring"),
     cst_base_bigstring$1=caml_string_of_jsbytes("base_bigstring"),
     cst_Base_bigstring$0=caml_string_of_jsbytes("Base_bigstring"),
     Base=global_data.Base,
     Base_Char=global_data.Base__Char,
     Base_Int=global_data.Base__Int,
     Base_Ordered_collection_common=
      global_data.Base__Ordered_collection_common,
     Base_Option=global_data.Base__Option,
     Base_List=global_data.Base__List,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Bytes=global_data.Base__Bytes,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Printf=global_data.Base__Printf,
     Stdlib_sys=global_data.Stdlib__sys,
     Base_Blit=global_data.Base__Blit,
     Base_Hash=global_data.Base__Hash;
    caml_call1(Ppx_module_timer_runtime[4],cst_Base_bigstring);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_base_bigstring);
    caml_call1(Expect_test_collector[4][1],cst_src_base_bigstring_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_bigstring$0,cst);
    var
     Bigstring0=[0],
     _a_=Base_Printf[2],
     arch_sixtyfour=caml_call2(Base[202],Stdlib_sys[9],64),
     _b_=Stdlib_sys[11],
     not_on_32bit=caml_call2(Base[203],Stdlib_sys[9],32),
     _v_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _w_=runtime.caml_int64_create_lo_mi_hi(0,0,16384),
     _x_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _y_=runtime.caml_int64_create_lo_mi_hi(0,64,0),
     _r_=runtime.caml_int64_create_lo_mi_hi(0,0,49152),
     _s_=runtime.caml_int64_create_lo_mi_hi(0,0,16384),
     _t_=runtime.caml_int64_create_lo_mi_hi(0,16777152,65535),
     _u_=runtime.caml_int64_create_lo_mi_hi(0,64,0),
     _q_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 64-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 64-bit integer")],
     _o_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 32-bit integer")],
     _z_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 32-bit integer")],
     _m_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 32-bit integer")],
     _l_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 8-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 8-bit integer")],
     _k_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 8-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 8-bit integer")],
     _j_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 16-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 16-bit integer")],
     _i_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 16-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 16-bit integer")],
     _h_=[0,caml_string_of_jsbytes("src/base_bigstring.ml"),209,6],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("Bigstring."),
        [2,0,[11,caml_string_of_jsbytes(": length(bstr) < pos + len"),0]]],
       caml_string_of_jsbytes("Bigstring.%s: length(bstr) < pos + len")],
     _c_=
      [0,
       [11,
        caml_string_of_jsbytes("create: size = "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" < 0"),0]]],
       caml_string_of_jsbytes("create: size = %d < 0")];
    function create(max_mem_waiting_gc_in_bytes,size)
     {var
       max_mem_waiting_gc_in_bytes$0=
        caml_call2(Base_Option[41],max_mem_waiting_gc_in_bytes,-1);
      if(caml_call2(Base[199],size,0))
       {var _aZ_=caml_call2(_a_,_c_,size);caml_call1(Base[221],_aZ_)}
      return runtime.bigstring_alloc(max_mem_waiting_gc_in_bytes$0,size)}
    var length=caml_ba_dim_1;
    function init(n,f)
     {var t=create(0,n),_aX_=caml_call2(Base[181],n,1),_aW_=0;
      if(! (_aX_ < 0))
       {var i=_aW_;
        for(;;)
         {caml_ba_set_1(t,i,caml_call1(f,i));
          var _aY_=i + 1 | 0;
          if(_aX_ !== i){var i=_aY_;continue}
          break}}
      return t}
    function check_args(loc,pos,len,bstr)
     {if(caml_call2(Base[199],pos,0))
       {var _aR_=caml_call2(Base[217],loc,cst_pos_0);
        caml_call1(Base[221],_aR_)}
      if(caml_call2(Base[199],len,0))
       {var _aS_=caml_call2(Base[217],loc,cst_len_0);
        caml_call1(Base[221],_aS_)}
      var
       bstr_len=caml_ba_dim_1(bstr),
       _aT_=caml_call2(Base[181],bstr_len,pos),
       _aU_=caml_call2(Base[199],_aT_,len);
      if(_aU_)
       {var _aV_=caml_call2(_a_,_d_,loc);return caml_call1(Base[221],_aV_)}
      return _aU_}
    function get_opt_len(bstr,pos,param)
     {if(param){var len=param[1];return len}
      var _aQ_=caml_ba_dim_1(bstr);
      return caml_call2(Base[181],_aQ_,pos)}
    function create$0(len){return create(0,len)}
    function create$1(len){return caml_call1(Base_Bytes[34],len)}
    var length$0=Base_Bytes[41];
    function unsafe_blit(_aP_,_aO_,_aN_,_aM_,_aL_)
     {return runtime.bigstring_blit_stub(_aP_,_aO_,_aN_,_aM_,_aL_)}
    var
     include=caml_call1(Base_Blit[1],[0,length,create$0,unsafe_blit]),
     blit=include[1],
     blito=include[2],
     unsafe_blit$0=include[3],
     sub=include[4],
     subo=include[5],
     _e_=
      [0,
       length,
       create$0,
       function(_aK_,_aJ_,_aI_,_aH_,_aG_)
        {return runtime.bigstring_blit_bytes_bigstring_stub
                 (_aK_,_aJ_,_aI_,_aH_,_aG_)}],
     From_bytes=caml_call1(caml_call1(Base_Blit[2],[0,length$0]),_e_),
     _f_=
      [0,
       length$0,
       create$1,
       function(_aF_,_aE_,_aD_,_aC_,_aB_)
        {return runtime.bigstring_blit_bigstring_bytes_stub
                 (_aF_,_aE_,_aD_,_aC_,_aB_)}],
     To_bytes=caml_call1(caml_call1(Base_Blit[2],[0,length]),_f_),
     length$1=runtime.caml_ml_string_length,
     _g_=
      [0,
       length,
       create$0,
       function(_aA_,_az_,_ay_,_ax_,_aw_)
        {return runtime.bigstring_blit_string_bigstring_stub
                 (_aA_,_az_,_ay_,_ax_,_aw_)}],
     From_string=caml_call1(caml_call1(Base_Blit[2],[0,length$1]),_g_),
     blit$0=To_bytes[1],
     blito$0=To_bytes[2],
     unsafe_blit$1=To_bytes[3],
     include$0=caml_call1(caml_call1(Base_Blit[3],Bigstring0),To_bytes),
     sub$0=include$0[1],
     subo$0=include$0[2],
     To_string=[0,blit$0,blito$0,unsafe_blit$1,sub$0,subo$0],
     of_string=From_string[5],
     of_bytes=From_bytes[5],
     to_string=To_string[5],
     to_bytes=To_bytes[5];
    function sexp_of_t_frozen(t){return [0,caml_call3(to_string,0,0,t)]}
    function t_frozen_of_sexp(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return caml_call3(of_string,0,0,str)}
      return caml_call2
              (Sexplib0_Sexp_conv[27],cst_bigstring_of_sexp_atom_nee,sexp)}
    function copy(t){return caml_call3(sub,t,0,caml_ba_dim_1(t))}
    function append(src,dst,dst_pos_ref)
     {var len=caml_ba_dim_1(src),dst_pos=dst_pos_ref[1];
      caml_call5(blit,src,0,dst,dst_pos,len);
      dst_pos_ref[1] = caml_call2(Base[180],dst_pos,len);
      return 0}
    function concat(sep,list)
     {if(list)
       {var
         tail=list[2],
         head=list[1],
         head_len=caml_ba_dim_1(head),
         sep_len=caml_call3(Base_Option[38],sep,0,length),
         tail_count=caml_call1(Base_List[7],tail),
         _as_=
          caml_call3(Base_List[15],[0,Base_Int[44],Base_Int[47]],tail,length),
         _at_=caml_call2(Base[182],sep_len,tail_count),
         _au_=caml_call2(Base[180],head_len,_at_),
         len=caml_call2(Base[180],_au_,_as_),
         dst=create(0,len),
         dst_pos_ref=[0,0];
        append(head,dst,dst_pos_ref);
        var
         _av_=
          function(src)
           {if(sep){var sep$0=sep[1];append(sep$0,dst,dst_pos_ref)}
            return append(src,dst,dst_pos_ref)};
        caml_call2(Base_List[9],tail,_av_);
        if(caml_call2(Base[202],dst_pos_ref[1],len))return dst;
        throw [0,Assert_failure,_h_]}
      return create(0,0)}
    function memset(t,pos,len,c)
     {var _ar_=caml_ba_dim_1(t);
      caml_call3(Base_Ordered_collection_common[3],pos,len,_ar_);
      return runtime.bigstring_memset_stub(t,pos,len,c)}
    function memcmp(t1,pos1,t2,pos2,len)
     {var _ap_=caml_ba_dim_1(t1);
      caml_call3(Base_Ordered_collection_common[3],pos1,len,_ap_);
      var _aq_=caml_ba_dim_1(t2);
      caml_call3(Base_Ordered_collection_common[3],pos2,len,_aq_);
      return runtime.bigstring_memcmp_stub(t1,pos1,t2,pos2,len)}
    function compare_t_frozen(t1,t2)
     {if(caml_call2(Base[223],t1,t2))return 0;
      var
       len1=caml_ba_dim_1(t1),
       len2=caml_ba_dim_1(t2),
       len=caml_call2(Base_Int[20],len1,len2),
       n=runtime.bigstring_memcmp_stub(t1,0,t2,0,len);
      return 0 === n
              ?caml_call2(Base[199],len1,len2)
                ?-1
                :caml_call2(Base[203],len1,len2)?1:0
              :n}
    function hash_fold_t_frozen(_ao_,_an_)
     {return runtime.internalhash_fold_bigstring(_ao_,_an_)}
    var hash=caml_call1(Base_Hash[12],hash_fold_t_frozen);
    function hash_t_frozen(x){return caml_call1(hash,x)}
    function equal(t1,t2)
     {if(caml_call2(Base[223],t1,t2))return 1;
      var
       len1=caml_ba_dim_1(t1),
       len2=caml_ba_dim_1(t2),
       _al_=caml_call2(Base_Int[18],len1,len2);
      if(_al_)
       {var _am_=runtime.bigstring_memcmp_stub(t1,0,t2,0,len1);
        return caml_call2(Base_Int[18],_am_,0)}
      return _al_}
    function find(opt,len,chr,bstr)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      var len$0=get_opt_len(bstr,pos,len);
      check_args(cst_find,pos,len$0,bstr);
      var res=runtime.bigstring_find(bstr,chr,pos,len$0);
      return caml_call2(Base[199],res,0)?0:[0,res]}
    function get_16(t,pos)
     {check_args(cst_get_16,pos,2,t);return caml_ba_uint8_get16(t,pos)}
    function get_32(t,pos)
     {check_args(cst_get_32,pos,4,t);return caml_ba_uint8_get32(t,pos)}
    function get_64(t,pos)
     {check_args(cst_get_64,pos,8,t);return caml_ba_uint8_get64(t,pos)}
    function set_16_trunc(t,pos,v)
     {check_args(cst_set_16,pos,2,t);return caml_ba_uint8_set16(t,pos,v)}
    function set_32(t,pos,v)
     {check_args(cst_set_32,pos,4,t);return caml_ba_uint8_set32(t,pos,v)}
    function set_64(t,pos,v)
     {check_args(cst_set_64,pos,8,t);return caml_ba_uint8_set64(t,pos,v)}
    function sign_extend_16(u)
     {var
       _ai_=caml_call2(Base[181],Base_Int[89],16),
       _aj_=caml_call2(Base[181],Base_Int[89],16),
       _ak_=caml_call2(Base[196],u,_aj_);
      return caml_call2(Base[197],_ak_,_ai_)}
    function check_valid_uint16(x,loc)
     {var
       _af_=caml_call2(Base[199],x,0),
       _ag_=_af_ || caml_call2(Base[203],x,65535);
      if(_ag_)
       {var _ah_=caml_call3(_a_,_i_,loc,x);return caml_call1(Base[221],_ah_)}
      return _ag_}
    function check_valid_int16(x,loc)
     {var
       _ac_=caml_call2(Base[199],x,-32768),
       _ad_=_ac_ || caml_call2(Base[203],x,32767);
      if(_ad_)
       {var _ae_=caml_call3(_a_,_j_,loc,x);return caml_call1(Base[221],_ae_)}
      return _ad_}
    var
     _n_=
      arch_sixtyfour
       ?function(x,loc)
         {var ___=caml_call2(Base[196],-1,31);
          if(caml_call2(Base[204],x,___))
           {var _$_=caml_call2(Base[196],1,31);
            if(caml_call2(Base[199],x,_$_))return 0}
          var _aa_=caml_call3(_a_,_m_,loc,x);
          return caml_call1(Base[221],_aa_)}
       :function(param,_ab_){return 0},
     _p_=
      arch_sixtyfour
       ?function(x,loc)
         {if(caml_call2(Base[204],x,0))
           {var _X_=caml_call2(Base[196],1,32);
            if(caml_call2(Base[199],x,_X_))return 0}
          var _Y_=caml_call3(_a_,_o_,loc,x);
          return caml_call1(Base[221],_Y_)}
       :function(x,loc)
         {if(caml_call2(Base[204],x,0))return 0;
          var _Z_=caml_call3(_a_,_z_,loc,x);
          return caml_call1(Base[221],_Z_)};
    function check_valid_uint64(x,loc)
     {if(caml_call2(Base[204],x,0))return 0;
      var _W_=caml_call3(_a_,_q_,loc,x);
      return caml_call1(Base[221],_W_)}
    function unsafe_read_int16(t,pos)
     {return sign_extend_16(caml_ba_uint8_get16(t,pos))}
    function unsafe_read_int16_swap(t,pos)
     {return sign_extend_16(caml_bswap16(caml_ba_uint8_get16(t,pos)))}
    function unsafe_write_int16(t,pos,x){return caml_ba_uint8_set16(t,pos,x)}
    function unsafe_write_int16_swap(t,pos,x)
     {return caml_ba_uint8_set16(t,pos,caml_bswap16(x))}
    function read_int16(t,pos){return sign_extend_16(get_16(t,pos))}
    function read_int16_swap(t,pos)
     {return sign_extend_16(caml_bswap16(get_16(t,pos)))}
    function write_int16_exn(t,pos,x)
     {check_valid_int16(x,cst_Bigstring_write_int16);
      return set_16_trunc(t,pos,x)}
    function write_int16_swap_exn(t,pos,x)
     {check_valid_int16(x,cst_Bigstring_write_int16$0);
      return set_16_trunc(t,pos,caml_bswap16(x))}
    function unsafe_read_uint16(t,pos){return caml_ba_uint8_get16(t,pos)}
    function unsafe_read_uint16_swap(t,pos)
     {return caml_bswap16(caml_ba_uint8_get16(t,pos))}
    function unsafe_write_uint16(t,pos,x){return caml_ba_uint8_set16(t,pos,x)}
    function unsafe_write_uint16_swap(t,pos,x)
     {return caml_ba_uint8_set16(t,pos,caml_bswap16(x))}
    function read_uint16(t,pos){return get_16(t,pos)}
    function read_uint16_swap(t,pos){return caml_bswap16(get_16(t,pos))}
    function write_uint16_exn(t,pos,x)
     {check_valid_uint16(x,cst_Bigstring_write_uint16);
      return set_16_trunc(t,pos,x)}
    function write_uint16_swap_exn(t,pos,x)
     {check_valid_uint16(x,cst_Bigstring_write_uint16$0);
      return set_16_trunc(t,pos,caml_bswap16(x))}
    function unsafe_read_int32_int(t,pos){return caml_ba_uint8_get32(t,pos)}
    function unsafe_read_int32_int_swap(t,pos)
     {return caml_int32_bswap(caml_ba_uint8_get32(t,pos))}
    function unsafe_read_int32(t,pos){return caml_ba_uint8_get32(t,pos)}
    function unsafe_read_int32_swap(t,pos)
     {return caml_int32_bswap(caml_ba_uint8_get32(t,pos))}
    function unsafe_write_int32(t,pos,x){return caml_ba_uint8_set32(t,pos,x)}
    function unsafe_write_int32_swap(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,caml_int32_bswap(x))}
    function unsafe_write_int32_int(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,x)}
    function unsafe_write_int32_int_swap(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,caml_int32_bswap(x))}
    function read_int32_int(t,pos){return get_32(t,pos)}
    function read_int32_int_swap(t,pos)
     {return caml_int32_bswap(get_32(t,pos))}
    function read_int32(t,pos){return get_32(t,pos)}
    function read_int32_swap(t,pos){return caml_int32_bswap(get_32(t,pos))}
    function write_int32(t,pos,x){return set_32(t,pos,x)}
    function write_int32_swap(t,pos,x)
     {return set_32(t,pos,caml_int32_bswap(x))}
    function write_int32_int_exn(t,pos,x)
     {_n_(x,cst_Bigstring_write_int32_int);return set_32(t,pos,x)}
    function write_int32_int_swap_exn(t,pos,x)
     {_n_(x,cst_Bigstring_write_int32_int$0);
      return set_32(t,pos,caml_int32_bswap(x))}
    function unsafe_read_int64_int(t,pos)
     {return caml_int64_to_int32(caml_ba_uint8_get64(t,pos))}
    function unsafe_read_int64_int_swap(t,pos)
     {return caml_int64_to_int32(caml_int64_bswap(caml_ba_uint8_get64(t,pos)))}
    function unsafe_read_int64(t,pos){return caml_ba_uint8_get64(t,pos)}
    function unsafe_read_int64_swap(t,pos)
     {return caml_int64_bswap(caml_ba_uint8_get64(t,pos))}
    function unsafe_write_int64(t,pos,x){return caml_ba_uint8_set64(t,pos,x)}
    function unsafe_write_int64_swap(t,pos,x)
     {return caml_ba_uint8_set64(t,pos,caml_int64_bswap(x))}
    function unsafe_write_int64_int(t,pos,x)
     {return caml_ba_uint8_set64(t,pos,caml_int64_of_int32(x))}
    function unsafe_write_int64_int_swap(t,pos,x)
     {return caml_ba_uint8_set64
              (t,pos,caml_int64_bswap(caml_int64_of_int32(x)))}
    function read_int64_int(t,pos){return caml_int64_to_int32(get_64(t,pos))}
    function read_int64_int_swap(t,pos)
     {return caml_int64_to_int32(caml_int64_bswap(get_64(t,pos)))}
    function read_int64(t,pos){return get_64(t,pos)}
    function read_int64_swap(t,pos){return caml_int64_bswap(get_64(t,pos))}
    function write_int64(t,pos,x){return set_64(t,pos,x)}
    function write_int64_swap(t,pos,x)
     {return set_64(t,pos,caml_int64_bswap(x))}
    function write_int64_int(t,pos,x)
     {return set_64(t,pos,caml_int64_of_int32(x))}
    function write_int64_int_swap(t,pos,x)
     {return set_64(t,pos,caml_int64_bswap(caml_int64_of_int32(x)))}
    var
     unsafe_read_int16$0=_b_?unsafe_read_int16:unsafe_read_int16_swap,
     unsafe_read_int16_swap$0=_b_?unsafe_read_int16_swap:unsafe_read_int16,
     unsafe_read_uint16$0=_b_?unsafe_read_uint16:unsafe_read_uint16_swap,
     unsafe_read_uint16_swap$0=_b_?unsafe_read_uint16_swap:unsafe_read_uint16,
     read_int16$0=_b_?read_int16:read_int16_swap,
     read_int16_swap$0=_b_?read_int16_swap:read_int16,
     read_uint16$0=_b_?read_uint16:read_uint16_swap,
     read_uint16_swap$0=_b_?read_uint16_swap:read_uint16,
     unsafe_write_int16$0=_b_?unsafe_write_int16:unsafe_write_int16_swap,
     unsafe_write_int16_swap$0=_b_?unsafe_write_int16_swap:unsafe_write_int16,
     unsafe_write_uint16$0=_b_?unsafe_write_uint16:unsafe_write_uint16_swap,
     unsafe_write_uint16_swap$0=
      _b_?unsafe_write_uint16_swap:unsafe_write_uint16,
     write_int16_exn$0=_b_?write_int16_exn:write_int16_swap_exn,
     write_int16_swap_exn$0=_b_?write_int16_swap_exn:write_int16_exn,
     write_uint16_exn$0=_b_?write_uint16_exn:write_uint16_swap_exn,
     write_uint16_swap_exn$0=_b_?write_uint16_swap_exn:write_uint16_exn,
     unsafe_read_int32$0=_b_?unsafe_read_int32:unsafe_read_int32_swap,
     unsafe_read_int32_swap$0=_b_?unsafe_read_int32_swap:unsafe_read_int32,
     unsafe_write_int32$0=_b_?unsafe_write_int32:unsafe_write_int32_swap,
     unsafe_write_int32_swap$0=_b_?unsafe_write_int32_swap:unsafe_write_int32,
     read_int32$0=_b_?read_int32:read_int32_swap,
     read_int32_swap$0=_b_?read_int32_swap:read_int32,
     write_int32$0=_b_?write_int32:write_int32_swap,
     write_int32_swap$0=_b_?write_int32_swap:write_int32,
     unsafe_read_int32_int$0=
      _b_?unsafe_read_int32_int:unsafe_read_int32_int_swap,
     unsafe_read_int32_int_swap$0=
      _b_?unsafe_read_int32_int_swap:unsafe_read_int32_int,
     unsafe_write_int32_int$0=
      _b_?unsafe_write_int32_int:unsafe_write_int32_int_swap,
     unsafe_write_int32_int_swap$0=
      _b_?unsafe_write_int32_int_swap:unsafe_write_int32_int,
     read_int32_int$0=_b_?read_int32_int:read_int32_int_swap,
     read_int32_int_swap$0=_b_?read_int32_int_swap:read_int32_int,
     write_int32_int_exn$0=_b_?write_int32_int_exn:write_int32_int_swap_exn,
     write_int32_int_swap_exn$0=
      _b_?write_int32_int_swap_exn:write_int32_int_exn,
     unsafe_read_int64_int$0=
      _b_?unsafe_read_int64_int:unsafe_read_int64_int_swap,
     unsafe_read_int64_int_swap$0=
      _b_?unsafe_read_int64_int_swap:unsafe_read_int64_int,
     unsafe_write_int64_int$0=
      _b_?unsafe_write_int64_int:unsafe_write_int64_int_swap,
     unsafe_write_int64_int_swap$0=
      _b_?unsafe_write_int64_int_swap:unsafe_write_int64_int,
     read_int64_int$0=_b_?read_int64_int:read_int64_int_swap,
     read_int64_int_swap$0=_b_?read_int64_int_swap:read_int64_int,
     write_int64_int$0=_b_?write_int64_int:write_int64_int_swap,
     write_int64_int_swap$0=_b_?write_int64_int_swap:write_int64_int,
     unsafe_read_int64$0=_b_?unsafe_read_int64:unsafe_read_int64_swap,
     unsafe_read_int64_swap$0=_b_?unsafe_read_int64_swap:unsafe_read_int64,
     unsafe_write_int64$0=_b_?unsafe_write_int64:unsafe_write_int64_swap,
     unsafe_write_int64_swap$0=_b_?unsafe_write_int64_swap:unsafe_write_int64,
     read_int64$0=_b_?read_int64:read_int64_swap,
     read_int64_swap$0=_b_?read_int64_swap:read_int64,
     write_int64$0=_b_?write_int64:write_int64_swap,
     set_int64_t_le=_b_?write_int64_swap:write_int64;
    function int64_conv_error(param)
     {return caml_call1(Base[220],cst_unsafe_read_int64_value_ca)}
    function uint64_conv_error(param)
     {return caml_call1(Base[220],cst_unsafe_read_uint64_value_c)}
    function int64_to_int_exn(n)
     {if(arch_sixtyfour)
       {if(caml_greaterequal(n,_r_) && caml_lessthan(n,_s_))
         return caml_int64_to_int32(n);
        return int64_conv_error(0)}
      if(caml_greaterequal(n,_t_) && caml_lessthan(n,_u_))
       return caml_int64_to_int32(n);
      return int64_conv_error(0)}
    function uint64_to_int_exn(n)
     {if(arch_sixtyfour)
       {if(caml_greaterequal(n,_v_) && caml_lessthan(n,_w_))
         return caml_int64_to_int32(n);
        return uint64_conv_error(0)}
      if(caml_greaterequal(n,_x_) && caml_lessthan(n,_y_))
       return caml_int64_to_int32(n);
      return uint64_conv_error(0)}
    function unsafe_get_int64_be_exn(t,pos)
     {return int64_to_int_exn(unsafe_read_int64$0(t,pos))}
    function unsafe_get_int64_le_exn(t,pos)
     {return int64_to_int_exn(unsafe_read_int64_swap$0(t,pos))}
    function get_int64_be_exn(t,pos)
     {return int64_to_int_exn(read_int64$0(t,pos))}
    function get_int64_le_exn(t,pos)
     {return int64_to_int_exn(read_int64_swap$0(t,pos))}
    function unsafe_get_uint64_be_exn(t,pos)
     {return uint64_to_int_exn(unsafe_read_int64$0(t,pos))}
    function unsafe_get_uint64_le_exn(t,pos)
     {return uint64_to_int_exn(unsafe_read_int64_swap$0(t,pos))}
    function get_uint64_be_exn(t,pos)
     {return uint64_to_int_exn(read_int64$0(t,pos))}
    function get_uint64_le_exn(t,pos)
     {return uint64_to_int_exn(read_int64_swap$0(t,pos))}
    function set_uint64_be_exn(t,pos,n)
     {check_valid_uint64(n,cst_Bigstring_set_uint64_be_ex);
      return write_int64_int$0(t,pos,n)}
    function set_uint64_le_exn(t,pos,n)
     {check_valid_uint64(n,cst_Bigstring_set_uint64_le_ex);
      return write_int64_int_swap$0(t,pos,n)}
    function unsafe_set_uint8(t,pos,n)
     {return caml_ba_set_1(t,pos,caml_call1(Base_Char[34],n))}
    function unsafe_set_int8(t,pos,n)
     {var n$0=caml_call2(Base[199],n,0)?caml_call2(Base[180],n,256):n;
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[34],n$0))}
    function unsafe_get_uint8(t,pos)
     {var _V_=caml_ba_get_1(t,pos);return caml_call1(Base_Char[31],_V_)}
    function unsafe_get_int8(t,pos)
     {var _U_=caml_ba_get_1(t,pos),n=caml_call1(Base_Char[31],_U_);
      return caml_call2(Base[204],n,128)?caml_call2(Base[181],n,256):n}
    function set_uint8_exn(t,pos,n)
     {var
       _R_=caml_call2(Base[199],n,0),
       _S_=_R_ || caml_call2(Base[203],n,255);
      if(_S_){var _T_=caml_call3(_a_,_k_,loc,n);caml_call1(Base[221],_T_)}
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[34],n))}
    function set_int8_exn(t,pos,n)
     {var
       _O_=caml_call2(Base[199],n,-128),
       _P_=_O_ || caml_call2(Base[203],n,127);
      if(_P_){var _Q_=caml_call3(_a_,_l_,loc$0,n);caml_call1(Base[221],_Q_)}
      var n$0=caml_call2(Base[199],n,0)?caml_call2(Base[180],n,256):n;
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[34],n$0))}
    function get_uint8(t,pos)
     {var _N_=caml_ba_get_1(t,pos);return caml_call1(Base_Char[31],_N_)}
    function get_int8(t,pos)
     {var _M_=caml_ba_get_1(t,pos),n=caml_call1(Base_Char[31],_M_);
      return caml_call2(Base[204],n,128)?caml_call2(Base[181],n,256):n}
    function unsafe_set_uint32_le(t,pos,n)
     {var switch$0=0;
      if(not_on_32bit)
       {var _K_=caml_call2(Base[196],1,31);
        if(caml_call2(Base[204],n,_K_))
         {var _L_=caml_call2(Base[196],1,32),n$0=caml_call2(Base[181],n,_L_);
          switch$0 = 1}}
      if(! switch$0)var n$0=n;
      return unsafe_write_int32_int_swap$0(t,pos,n$0)}
    function unsafe_set_uint32_be(t,pos,n)
     {var switch$0=0;
      if(not_on_32bit)
       {var _I_=caml_call2(Base[196],1,31);
        if(caml_call2(Base[204],n,_I_))
         {var _J_=caml_call2(Base[196],1,32),n$0=caml_call2(Base[181],n,_J_);
          switch$0 = 1}}
      if(! switch$0)var n$0=n;
      return unsafe_write_int32_int$0(t,pos,n$0)}
    function unsafe_get_uint32_le(t,pos)
     {var n=unsafe_read_int32_int_swap$0(t,pos);
      if(not_on_32bit && caml_call2(Base[199],n,0))
       {var _H_=caml_call2(Base[196],1,32);return caml_call2(Base[180],n,_H_)}
      return n}
    function unsafe_get_uint32_be(t,pos)
     {var n=unsafe_read_int32_int$0(t,pos);
      if(not_on_32bit && caml_call2(Base[199],n,0))
       {var _G_=caml_call2(Base[196],1,32);return caml_call2(Base[180],n,_G_)}
      return n}
    function set_uint32_le_exn(t,pos,n)
     {_p_(n,cst_Bigstring_set_uint32_le_ex);
      var switch$0=0;
      if(not_on_32bit)
       {var _E_=caml_call2(Base[196],1,31);
        if(caml_call2(Base[204],n,_E_))
         {var _F_=caml_call2(Base[196],1,32),n$0=caml_call2(Base[181],n,_F_);
          switch$0 = 1}}
      if(! switch$0)var n$0=n;
      return write_int32_int_swap_exn$0(t,pos,n$0)}
    function set_uint32_be_exn(t,pos,n)
     {_p_(n,cst_Bigstring_set_uint32_be_ex);
      var switch$0=0;
      if(not_on_32bit)
       {var _C_=caml_call2(Base[196],1,31);
        if(caml_call2(Base[204],n,_C_))
         {var _D_=caml_call2(Base[196],1,32),n$0=caml_call2(Base[181],n,_D_);
          switch$0 = 1}}
      if(! switch$0)var n$0=n;
      return write_int32_int_exn$0(t,pos,n$0)}
    function get_uint32_le(t,pos)
     {var n=read_int32_int_swap$0(t,pos);
      if(not_on_32bit && caml_call2(Base[199],n,0))
       {var _B_=caml_call2(Base[196],1,32);return caml_call2(Base[180],n,_B_)}
      return n}
    function get_uint32_be(t,pos)
     {var n=read_int32_int$0(t,pos);
      if(not_on_32bit && caml_call2(Base[199],n,0))
       {var _A_=caml_call2(Base[196],1,32);return caml_call2(Base[180],n,_A_)}
      return n}
    var Private=[0,sign_extend_16];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_bigstring$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Base_bigstring$0);
    var
     Base_bigstring=
      [0,
       compare_t_frozen,
       t_frozen_of_sexp,
       sexp_of_t_frozen,
       compare_t_frozen,
       hash_fold_t_frozen,
       hash_t_frozen,
       sexp_of_t_frozen,
       t_frozen_of_sexp,
       equal,
       create,
       init,
       of_string,
       of_bytes,
       to_string,
       to_bytes,
       concat,
       check_args,
       get_opt_len,
       length,
       blit,
       blito,
       unsafe_blit$0,
       sub,
       subo,
       copy,
       To_string,
       From_string,
       To_bytes,
       From_bytes,
       memset,
       memcmp,
       find,
       get_int8,
       set_int8_exn,
       get_uint8,
       set_uint8_exn,
       unsafe_get_int8,
       unsafe_set_int8,
       unsafe_get_uint8,
       unsafe_set_uint8,
       read_int16_swap$0,
       read_int16$0,
       write_int16_swap_exn$0,
       write_int16_exn$0,
       unsafe_read_int16_swap$0,
       unsafe_read_int16$0,
       unsafe_write_int16_swap$0,
       unsafe_write_int16$0,
       read_uint16_swap$0,
       read_uint16$0,
       write_uint16_swap_exn$0,
       write_uint16_exn$0,
       unsafe_read_uint16_swap$0,
       unsafe_read_uint16$0,
       unsafe_write_uint16_swap$0,
       unsafe_write_uint16$0,
       read_int32_int_swap$0,
       read_int32_int$0,
       write_int32_int_swap_exn$0,
       write_int32_int_exn$0,
       unsafe_read_int32_int_swap$0,
       unsafe_read_int32_int$0,
       unsafe_write_int32_int_swap$0,
       unsafe_write_int32_int$0,
       get_uint32_le,
       get_uint32_be,
       set_uint32_le_exn,
       set_uint32_be_exn,
       unsafe_get_uint32_le,
       unsafe_get_uint32_be,
       unsafe_set_uint32_le,
       unsafe_set_uint32_be,
       get_int64_le_exn,
       get_int64_be_exn,
       read_int64_int_swap$0,
       read_int64_int$0,
       write_int64_int_swap$0,
       write_int64_int$0,
       unsafe_get_int64_le_exn,
       unsafe_get_int64_be_exn,
       unsafe_read_int64_int_swap$0,
       unsafe_read_int64_int$0,
       unsafe_write_int64_int_swap$0,
       unsafe_write_int64_int$0,
       get_uint64_be_exn,
       get_uint64_le_exn,
       set_uint64_le_exn,
       set_uint64_be_exn,
       unsafe_get_uint64_be_exn,
       unsafe_get_uint64_le_exn,
       unsafe_write_int64_int_swap$0,
       unsafe_write_int64_int$0,
       read_int32_swap$0,
       read_int32$0,
       write_int32_swap$0,
       write_int32$0,
       unsafe_read_int32_swap$0,
       unsafe_read_int32$0,
       unsafe_write_int32_swap$0,
       unsafe_write_int32$0,
       read_int64_swap$0,
       read_int64$0,
       set_int64_t_le,
       write_int64$0,
       unsafe_read_int64_swap$0,
       unsafe_read_int64$0,
       unsafe_write_int64_swap$0,
       unsafe_write_int64$0,
       Private];
    runtime.caml_register_global(67,Base_bigstring,"Base_bigstring");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX2JpZ3N0cmluZy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
