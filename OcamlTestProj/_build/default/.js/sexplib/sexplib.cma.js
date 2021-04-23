(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_equal=runtime.caml_equal,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    var
     global_data=runtime.caml_get_global_data(),
     zero=[0,0,0],
     origin=[0,1,1],
     cst_parser=caml_string_of_jsbytes("parser"),
     what=caml_string_of_jsbytes("sexp"),
     yylhs=
      caml_string_of_jsbytes
       ("\xff\xff\x01\0\x01\0\x06\0\x06\0\x06\0\x06\0\b\0\b\0\x05\0\x05\0\x02\0\x02\0\x02\0\x02\0\x07\0\x07\0\x07\0\x07\0\x04\0\x04\0\x03\0\x03\0\0\0\0\0\0\0\0\0"),
     yylen=
      caml_string_of_jsbytes
       ("\x02\0\x02\0\x01\0\x01\0\x02\0\x03\0\x01\0\x02\0\x03\0\x01\0\x02\0\x01\0\x02\0\x01\0\x02\0\x01\0\x01\0\x02\0\x02\0\x02\0\x01\0\x02\0\x01\0\x02\0\x02\0\x02\0\x02\0"),
     yydefred=
      caml_string_of_jsbytes
       ("\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x03\0\0\0\0\0\x17\0\0\0\x02\0\t\0\r\0\x18\0\0\0\x0b\0\x16\0\x19\0\x0f\0\0\0\x10\0\x14\0\x1a\0\0\0\x04\0\0\0\0\0\x07\0\x01\0\n\0\x0e\0\f\0\x15\0\x11\0\x12\0\x13\0\x05\0\b\0"),
     yydgoto=
      caml_string_of_jsbytes
       ("\x05\0\n\0\x0f\0\x13\0\x18\0\x0b\0\x14\0\x15\0\r\0"),
     yysindex=
      caml_string_of_jsbytes
       ('(\0"\xff\x01\0\x06\0\x0b\0\0\0\0\0\0\0:\xff"\xff\0\0"\xff\0\0\0\0\0\0\0\0\x10\0\0\0\0\0\0\0\0\0\x15\0\0\0\0\0\0\0\x1a\0\0\0?\xff"\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),
     yyrindex=
      caml_string_of_jsbytes
       ("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
     yygindex=
      caml_string_of_jsbytes("\0\0\0\0\0\0\0\0\0\0\xfe\xff\x03\0\x05\0\x1d\0"),
     yytable=
      caml_string_of_jsbytes
       ("\x10\0\x0e\0\0\0\0\0\f\0\x11\0\x12\0\x1c\0\0\0\x19\0\0\0\x17\0\x1d\0\x1b\0\x1e\0\0\0 \0\0\0\0\0!\0\0\0\"\0\0\0\0\0#\0\0\0%\0\0\0#\0\0\0#\0'\0\x16\0\x16\0\x06\0\x07\0\b\0\x16\0\t\0\0\0\x1f\0\x01\0\x02\0\x03\0\x04\0\x1f\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0$\0\0\0$\0\x1f\0\x06\0\x07\0\b\0\x1a\0\t\0\x06\0\x07\0\b\0&\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x07\0\b\0\0\0\t\0\x06\0\x07\0\b\0\0\0\t\0\x06\0\x07\0\b\0\0\0\t\0\x06\0\x07\0\b\0\0\0\t\0\x06\0\x07\0\b\0\0\0\t\0\x06\0\x07\0\b\0\0\0\t\0"),
     yycheck=
      caml_string_of_jsbytes
       ("\x02\0\0\0\xff\xff\xff\xff\x01\0\x02\0\0\0\t\0\xff\xff\x04\0\xff\xff\0\0\t\0\b\0\x0b\0\xff\xff\0\0\xff\xff\xff\xff\x10\0\xff\xff\0\0\xff\xff\xff\xff\x15\0\xff\xff\0\0\xff\xff\x19\0\xff\xff\x1b\0\x1c\0\x03\0\x04\0\0\x01\x01\x01\x02\x01\b\0\x04\x01\xff\xff\x0b\0\x01\0\x02\0\x03\0\x04\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\x15\0\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\x1b\0\x1c\0\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\x01\x01\x01\x02\x01\xff\xff\x04\x01\0\x01\x01\x01\x02\x01\xff\xff\x04\x01\0\x01\x01\x01\x02\x01\xff\xff\x04\x01\0\x01\x01\x01\x02\x01\xff\xff\x04\x01\0\x01\x01\x01\x02\x01\xff\xff\x04\x01\0\x01\x01\x01\x02\x01\xff\xff\x04\x01"),
     yynames_const=caml_string_of_jsbytes("LPAREN\0RPAREN\0EOF\0HASH_SEMI\0"),
     yynames_block=caml_string_of_jsbytes("STRING\0"),
     cst_parser$0=caml_string_of_jsbytes("parser"),
     what$0=caml_string_of_jsbytes("sexp"),
     yylhs$0=
      caml_string_of_jsbytes
       ("\xff\xff\x06\0\x06\0\x06\0\b\0\b\0\t\0\t\0\n\0\n\0\x07\0\x07\0\x01\0\x02\0\x02\0\x0b\0\x0b\0\x05\0\x05\0\x03\0\x03\0\x04\0\0\0\0\0\0\0\0\0\0\0"),
     yylen$0=
      caml_string_of_jsbytes
       ("\x02\0\x01\0\x03\0\x01\0\x01\0\x03\0\0\0\x02\0\x01\0\x01\0\0\0\x02\0\x01\0\x01\0\x01\0\x01\0\x02\0\x02\0\x01\0\x02\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0"),
     yydefred$0=
      caml_string_of_jsbytes
       ("\0\0\0\0\0\0\0\0\n\0\0\0\0\0\x03\0\x01\0\x04\0\n\0\x06\0\x16\0\b\0\t\0\f\0\x0e\0\r\0\x17\0\x14\0\x0f\0\x18\0\0\0\x19\0\0\0\x12\0\x1a\0\0\0\0\0\0\0\x13\0\x10\0\x15\0\x0b\0\x11\0\x02\0\x05\0\x07\0"),
     yydgoto$0=
      caml_string_of_jsbytes
       ("\x06\0\x14\0\x12\0\x15\0\x17\0\x1a\0\r\0\x18\0\x0e\0\x1d\0\x0f\0\x16\0"),
     yysindex$0=
      caml_string_of_jsbytes
       ("%\0\t\xff\x01\0\x07\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\x19\0\0\0\0\0\x1f\0 \xff\t\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
     yyrindex$0=
      caml_string_of_jsbytes
       ("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
     yygindex$0=
      caml_string_of_jsbytes
       ("\0\0\x02\0\0\0\0\0\0\0\0\0\xe3\xff\xfb\xff\xeb\xff\0\0\xea\xff\n\0"),
     yytable$0=
      caml_string_of_jsbytes
       ('$\0\x10\0!\0\f\0\x11\0\x1c\0!\0\x13\0%\0\x07\0\b\0\t\0\n\0\x19\0\x0b\0\x1b\0\0\0\0\0\0\0\x1e\0\0\0\0\0\0\0\0\0\x1f\0 \0\0\0\0\0\0\0\x1f\0\0\0"\0\x07\0\b\0\t\0\n\0#\0\x0b\0\x01\0\x02\0\x03\0\x04\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\b\0\t\0\n\0\0\0\x0b\0\x07\0\b\0\t\0\n\0\0\0\x0b\0\x07\0\b\0\t\0\n\0\0\0\x0b\0\x07\0\b\0\t\0\n\0\0\0\x0b\0\x07\0\b\0\t\0\n\0\0\0\x0b\0\x07\0\b\0\t\0\n\0\0\0\x0b\0'),
     yycheck$0=
      caml_string_of_jsbytes
       ("\x1d\0\0\0\x18\0\x01\0\x02\0\n\0\x1c\0\0\0\x1d\0\0\x01\x01\x01\x02\x01\x03\x01\0\0\x05\x01\x05\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\x16\0\0\0\xff\xff\xff\xff\xff\xff\x1b\0\xff\xff\0\0\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x01\0\x02\0\x03\0\x04\0\x05\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01\0\x01\x01\x01\x02\x01\x03\x01\xff\xff\x05\x01"),
     yynames_const$0=
      caml_string_of_jsbytes("LPAREN\0RPAREN\0EOF\0HASH_SEMI\0"),
     yynames_block$0=caml_string_of_jsbytes("STRING\0COMMENT\0"),
     cst_illegal_end_of_comment=
      caml_string_of_jsbytes("illegal end of comment"),
     cst_comment_tokens_in_unquoted=
      caml_string_of_jsbytes("comment tokens in unquoted atom"),
     ocaml_lex_tables=
      [0,
       caml_string_of_jsbytes
        ("\0\0\xf4\xff\n\0+\x005\0\xfa\xff\xfb\xff\xfc\xff\x01\0\x06\0\x06\0\xff\xffV\0\xf8\xff\xf9\xff`\0\x81\0\x8b\0\xac\0\xb6\0\xdc\0\xe6\0\x07\x01\xf7\xff\x11\x012\x01<\x01]\x01g\x01\x88\x01\x92\x01\xb5\x01\xbf\x01\xe0\x01\xea\x01\x0b\x02%\0\xf6\xffP\0\xf8\xff\x17\x02\xff\xff\xf9\xff9\x02!\x02\xfc\xff\x07\0\x10\0\x11\0p\x02\xfb\xff\x90\x02\xfa\xffQ\0\xfa\xff\xfd\xffz\0\xff\xff\xa6\0\x82\x01\xfc\xff\xfb\xff\xad\x01\xfb\x01"),
       caml_string_of_jsbytes
        ("\xff\xff\xff\xff\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\x02\0\x01\0\xff\xff\xff\xff\n\0\xff\xff\xff\xff\t\0\n\0\t\0\t\0\t\0\t\0\t\0\n\0\xff\xff\t\0\n\0\t\0\t\0\t\0\t\0\t\0\n\0\n\0\t\0\t\0\t\0\xff\xff\xff\xff\b\0\xff\xff\xff\xff\xff\xff\xff\xff\x06\0\x06\0\xff\xff\x06\0\x01\0\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_string_of_jsbytes
        ('\x02\0\0\0\x02\0\x02\0\x02\0\0\0\0\0\0\0\b\0\xff\xff\xff\xff\0\0\x02\0\0\0\0\0\x14\0\x02\0\x12\0\x12\0\x12\0\x14\0\x14\0\x02\0\0\0\x1d\0\x02\0\x1b\0\x1b\0\x1b\0\x1d\0\x1d\0\x02\0\x02\0"\0"\0"\0&\0\0\0&\0\0\0*\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\x008\0\0\0\0\x008\0\0\x008\x008\0\0\0\0\x008\x008\0'),
       caml_string_of_jsbytes
        ("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\t\0\x0b\0\xff\xff\t\0\n\0\xff\xff\t\0\x0b\x000\0\t\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0/\x000\0\0\0\0\0\0\0\0\0\0\0\t\0\0\0\x05\0\x04\0\0\0\0\0\t\0\0\0\x07\0\x06\0\xff\xff\0\0\xff\xff \0\0\0'\0/\x000\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\b\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0)\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff\x17\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\f\0\0\0\xff\xff9\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\x0e\0\0\0\xff\xff7\0;\0\0\0\xff\xff\0\0\xff\xff\x10\0\0\0\0\0\x03\0\0\0\xff\xff\xff\xff\xff\xff(\0\xff\xff\x13\0\xff\xff\0\0\x1f\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff?\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff\x10\0\0\0\0\0\x16\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\0\x009\0\r\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\x007\0=\0\0\0\0\0\xff\xff:\0\xff\xff\x13\0\0\0\0\0\x0f\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x13\0\0\0\0\0\x0f\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0>\0\0\0\0\0\0\0\0\0\0\0\xff\xff\x11\0\xff\xff\x15\0\x01\0\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\x15\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff:\0\0\0\0\0%\0\0\0\xff\xff\x11\0\xff\xff\x18\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\x18\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff6\0\xff\xff\0\0\xff\xff\x1a\0\xff\xff\0\0\x0f\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x1a\0\xff\xff\0\0\x11\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\0\0\xff\xff\x1a\0\xff\xff\0\0\x19\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x1a\0\xff\xff9\0\x1c\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\x007\0;\0\xff\xff\0\0\xff\xff\0\0\xff\xff\x18\0\xff\xff\0\0\x19\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x1a\0\xff\xff\xff\xff\x1c\0\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff#\0\x1c\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff \0\x1c\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0<\0\0\0\xff\xff\0\0\xff\xff#\0\x1e\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff#\0\x1e\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\xff\xff?\0\0\0\0\0/\0\0\0\0\0.\0\xff\xff\0\0\0\0\0\0>\0\0\0\xff\xff\0\0\xff\xff#\0\0\0\0\0\x1f\0\xff\xff\xff\xff\xff\xff\0\0\0\0-\0\0\0-\0\0\0!\0\xff\xff\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x001\x001\x001\x001\x001\x001\x001\x001\x001\x001\0\0\0!\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\xff\xff\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0-\0\0\0\0\0\0\0\xff\xff\0\0-\x003\x003\x003\x003\x003\x003\0\0\0\0\0\xff\xff\0\0\0\0-\0\0\0!\0\xff\xff-\0\0\0-\0\0\0\0\0\0\0+\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\x003\x003\x003\x003\x003\x003\x002\x002\x002\x002\x002\x002\x002\x002\x002\x002\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x004\x004\x004\x004\x004\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\x004\x004\x004\x004\x004\x004\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
       caml_string_of_jsbytes
        ('\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\b\0\0\0\0\0\b\0\t\0\n\0.\0\t\0\x02\0\x02\0\xff\xff\x02\0\x02\0\xff\xff/\x000\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\t\0\xff\xff\0\0\0\0\x02\0\xff\xff\x02\0\x02\0\xff\xff$\0/\x000\0\x02\0\x02\0\x03\0\x03\0\xff\xff\x03\0\x03\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\x04\0\x04\0\xff\xff\x04\0\x04\0\xff\xff\xff\xff\x02\0\xff\xff$\0\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\x03\0\x04\0\xff\xff\x04\0\x04\0\xff\xff&\x005\0\xff\xff\x04\0\x04\0\f\0\f\0\xff\xff\f\0\f\0\xff\xff\xff\xff\x03\0\xff\xff\xff\xff\x0f\0\x0f\0\xff\xff\x0f\0\x0f\0\xff\xff\xff\xff\x04\0\xff\xff&\x005\x005\0\xff\xff\f\0\xff\xff\f\0\f\0\xff\xff\xff\xff\0\0\xff\xff\f\0\f\0\x0f\0$\0\x0f\0\x0f\x008\0\xff\xff\x02\0\xff\xff\x0f\0\x0f\0\x10\0\x10\0\xff\xff\x10\0\x10\0\xff\xff\xff\xff\f\0\xff\xff\xff\xff\x11\0\x11\0\xff\xff\x11\0\x11\0\xff\xff\xff\xff\x0f\x008\x008\0\xff\xff\xff\xff\xff\xff\x10\0\xff\xff\x10\0\x10\0\xff\xff\xff\xff\x03\0\xff\xff\x10\0\x10\0\x11\0&\0\x11\0\x11\0\xff\xff:\0\x04\0\xff\xff\x11\0\x11\0\x12\0\x12\0\xff\xff\x12\0\x12\0\xff\xff\xff\xff\x10\0\xff\xff\xff\xff\x13\0\x13\0\xff\xff\x13\0\x13\0\xff\xff\xff\xff\x11\0\xff\xff:\0:\0\xff\xff\xff\xff\x12\x005\0\x12\0\x12\0\xff\xff\xff\xff\f\0\xff\xff\x12\0\x12\0\x13\0\xff\xff\x13\0\x13\0\xff\xff\xff\xff\x0f\0\xff\xff\x13\0\x13\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x14\0\x14\0\x12\0\x14\0\x14\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x15\0\x15\0\x13\0\x15\0\x15\0\xff\xff\xff\xff8\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x14\0\x10\0\x14\0\x14\0\0\0\b\0\xff\xff\xff\xff\x14\0\x14\0\x15\0\x11\0\x15\0\x15\0\x02\0\xff\xff\xff\xff\xff\xff\x15\0\x15\0\x16\0\x16\0\xff\xff\x16\0\x16\0\xff\xff\xff\xff\x14\0\xff\xff\xff\xff\x18\0\x18\0\xff\xff\x18\0\x18\0\xff\xff\xff\xff\x15\0:\0\xff\xff\xff\xff$\0\xff\xff\x16\0\x12\0\x16\0\x16\0\x03\0\xff\xff\xff\xff\xff\xff\x16\0\x16\0\x18\0\x13\0\x18\0\x18\0\x04\0\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x19\0\x19\0\xff\xff\x19\0\x19\0\xff\xff\xff\xff\x16\0\xff\xff\xff\xff\x1a\0\x1a\0\xff\xff\x1a\0\x1a\0\xff\xff\xff\xff\x18\0\xff\xff\xff\xff\xff\xff&\x005\0\x19\0\xff\xff\x19\0\x19\0\f\0\xff\xff\x14\0\xff\xff\x19\0\x19\0\x1a\0\xff\xff\x1a\0\x1a\0\x0f\0\xff\xff\x15\0\xff\xff\x1a\0\x1a\0\x1b\0\x1b\0\xff\xff\x1b\0\x1b\0\xff\xff\xff\xff\x19\0\xff\xff\xff\xff\x1c\0\x1c\0\xff\xff\x1c\0\x1c\0\xff\xff\xff\xff\x1a\0\xff\xff\xff\xff8\0\xff\xff\xff\xff\x1b\0\xff\xff\x1b\0\x1b\0\x10\0\xff\xff\x16\0\xff\xff\x1b\0\x1b\0\x1c\0\xff\xff\x1c\0\x1c\0\x11\0;\0\x18\0\xff\xff\x1c\0\x1c\0\x1d\0\x1d\0\xff\xff\x1d\0\x1d\0\xff\xff\xff\xff\x1b\0\xff\xff\xff\xff\x1e\0\x1e\0\xff\xff\x1e\0\x1e\0\xff\xff\xff\xff\x1c\0\xff\xff;\0;\0:\0\xff\xff\x1d\0\xff\xff\x1d\0\x1d\0\x12\0\xff\xff\x19\0\xff\xff\x1d\0\x1d\0\x1e\0\xff\xff\x1e\0\x1e\0\x13\0>\0\x1a\0\xff\xff\x1e\0\x1e\0\xff\xff\xff\xff\x1f\0\x1f\0\xff\xff\x1f\0\x1f\0\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff \0 \0\xff\xff \0 \0\x1e\0\xff\xff>\0>\0\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0\x1b\0\xff\xff\xff\xff\x14\0\x1f\0\x1f\0 \0\xff\xff \0 \0\x1c\0\xff\xff\xff\xff\x15\0 \0 \0!\0!\0\xff\xff!\0!\0\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff"\0"\0\xff\xff"\0"\0\xff\xff\xff\xff \0\xff\xff\xff\xff\xff\xff;\0\xff\xff!\0\xff\xff!\0!\0\x1d\0?\0\xff\xff\x16\0!\0!\0"\0\xff\xff"\0"\0\x1e\0\xff\xff\xff\xff\x18\0"\0"\0#\0#\0\xff\xff#\0#\0\xff\xff\xff\xff!\0\xff\xff?\0?\0\xff\xff\xff\xff(\0\xff\xff\xff\xff(\0"\0\xff\xff\xff\xff\xff\xff>\0\xff\xff#\0\xff\xff#\0#\0\xff\xff\xff\xff\x1f\0\x19\0#\0#\0\xff\xff\xff\xff(\0\xff\xff(\0\xff\xff \0\x1a\0\xff\xff(\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0(\0(\0(\0(\0(\0(\0(\0(\0(\0(\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\xff\xff!\0\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0\x1c\0\xff\xff+\0+\0+\0+\0+\0+\0+\0+\0+\0+\0(\0\xff\xff\xff\xff\xff\xff?\0\xff\xff(\0+\0+\0+\0+\0+\0+\0\xff\xff\xff\xff;\0\xff\xff\xff\xff(\0\xff\xff#\0\x1d\0(\0\xff\xff(\0\xff\xff\xff\xff\xff\xff(\0\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff+\0+\0+\0+\0+\0+\x001\x001\x001\x001\x001\x001\x001\x001\x001\x001\0\xff\xff\xff\xff\xff\xff>\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x003\x003\x003\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x003\x003\x003\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff(\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes("")],
     cst_Sexplib_Sexp_subst_found_s=
      caml_string_of_jsbytes
       ("Sexplib.Sexp.subst_found: short list when position requested"),
     cst_Sexplib_Sexp_subst_found_a=
      caml_string_of_jsbytes
       ("Sexplib.Sexp.subst_found: atom when position requested"),
     cst_Annotated_of_bigstring=
      caml_string_of_jsbytes("Annotated.of_bigstring"),
     cst$5=caml_string_of_jsbytes(" "),
     cst_Annotated_of_string=caml_string_of_jsbytes("Annotated.of_string"),
     cst$4=caml_string_of_jsbytes(" "),
     cst_additional_incomplete_data=
      caml_string_of_jsbytes("additional incomplete data"),
     cst$3=caml_string_of_jsbytes(" "),
     cst_of_bigstring=caml_string_of_jsbytes("of_bigstring"),
     cst$2=caml_string_of_jsbytes(" "),
     cst_of_string=caml_string_of_jsbytes("of_string"),
     cst$1=caml_string_of_jsbytes(" "),
     cst_Sexplib_Sexp_input_rev_sex=
      caml_string_of_jsbytes
       ("Sexplib.Sexp.input_rev_sexps: reached EOF while in state "),
     cst$0=caml_string_of_jsbytes(" "),
     cst_Sexplib_Sexp_parser_contin=
      caml_string_of_jsbytes("Sexplib.Sexp: parser continuation called twice"),
     cst_parse_pos_0=caml_string_of_jsbytes("parse: pos < 0"),
     cst_parse_len_0=caml_string_of_jsbytes("parse: len < 0"),
     cst_parse_pos_len_str_len=
      caml_string_of_jsbytes("parse: pos + len > str_len"),
     cst_Sexplib_Sexp_Parse_pos_cre=
      caml_string_of_jsbytes("Sexplib.Sexp.Parse_pos.create: "),
     cst_text_line_1=caml_string_of_jsbytes("text_line < 1"),
     cst_text_char_0=caml_string_of_jsbytes("text_char < 0"),
     cst_global_offset_0=caml_string_of_jsbytes("global_offset < 0"),
     cst_buf_pos_0=caml_string_of_jsbytes("buf_pos < 0"),
     cst=caml_string_of_jsbytes("\n"),
     cst_tmp=caml_string_of_jsbytes("tmp"),
     cst_Sexplib_Pre_sexp_Annot_Con=
      caml_string_of_jsbytes("Sexplib__Pre_sexp.Annot.Conv_exn"),
     cst_Sexplib_Pre_sexp_Annot_Ann=
      caml_string_of_jsbytes("Sexplib__Pre_sexp.Annot.Annot_sexp"),
     cst_Sexplib_Pre_sexp_Parse_err=
      caml_string_of_jsbytes("Sexplib__Pre_sexp.Parse_error"),
     cst_Sexplib_Pre_sexp_Parser_ou=
      caml_string_of_jsbytes
       ("Sexplib__Pre_sexp.Parser_output.Bare_sexp.Found"),
     cst_Sexplib_Pre_sexp_Parser_ou$0=
      caml_string_of_jsbytes
       ("Sexplib__Pre_sexp.Parser_output.Annotated_sexp.Found"),
     gen_load_sexp_loc=caml_string_of_jsbytes("Sexplib.Sexp.gen_load_sexp"),
     cst_Sexplib_Pre_sexp_Of_string=
      caml_string_of_jsbytes("Sexplib__Pre_sexp.Of_string_conv_exn.E"),
     unit=[1,0],
     cst$6=caml_string_of_jsbytes(""),
     cst$7=caml_string_of_jsbytes("#;"),
     cst_float_mat_of_sexp_not_enou=
      caml_string_of_jsbytes("float_mat_of_sexp: not enough data"),
     cst_float_mat_of_sexp_list_nee=
      caml_string_of_jsbytes("float_mat_of_sexp: list needed"),
     cst_float_mat_of_sexp_list_too=
      caml_string_of_jsbytes("float_mat_of_sexp: list too short"),
     cst_float_mat_of_sexp_too_much=
      caml_string_of_jsbytes("float_mat_of_sexp: too much data"),
     cst_float_vec_of_sexp_list_nee=
      caml_string_of_jsbytes("float_vec_of_sexp: list needed"),
     cst_bigstring_of_sexp_atom_nee=
      caml_string_of_jsbytes("bigstring_of_sexp: atom needed"),
     bigstring_sexp_grammar=[1,[1,0]],
     float64_vec_sexp_grammar=[1,[6,[0,[2,[1,3]],0]]],
     mat_sexp_grammar=[1,[6,[0,[0,[1,4]],[0,[0,[1,4]],[0,[2,[1,3]],0]]]]],
     cst_EOF_reading_index=caml_string_of_jsbytes("EOF reading index"),
     cst_empty_index=caml_string_of_jsbytes("empty index"),
     cst_double=caml_string_of_jsbytes("double '.'"),
     cst_EOF_after_escape=caml_string_of_jsbytes("EOF after escape"),
     cst_path_empty=caml_string_of_jsbytes("path empty"),
     cst_Path_parse=caml_string_of_jsbytes("Path.parse: "),
     cst_extract_rec=caml_string_of_jsbytes("extract_rec"),
     cst_extract_match=caml_string_of_jsbytes("extract_match"),
     cst_extract_match$0=caml_string_of_jsbytes("extract_match"),
     cst_Path_extract_match_unexpec=
      caml_string_of_jsbytes
       ("Path.extract_match: unexpected nested list in: "),
     cst_extract_pos=caml_string_of_jsbytes("extract_pos"),
     cst_extract_pos$0=caml_string_of_jsbytes("extract_pos"),
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_parsing=global_data.Stdlib__parsing,
     Stdlib=global_data.Stdlib,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_lexing=global_data.Stdlib__lexing,
     Stdlib_char=global_data.Stdlib__char,
     Assert_failure=global_data.Assert_failure,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Parsexp_Old_parser_cont_state=global_data.Parsexp__Old_parser_cont_state,
     Parsexp_Parse_error=global_data.Parsexp__Parse_error,
     Parsexp_Positions=global_data.Parsexp__Positions,
     include$2=global_data.Sexplib0__Sexp_conv,
     Stdlib_random=global_data.Stdlib__random,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     Parsexp=global_data.Parsexp,
     Stdlib_bigarray=global_data.Stdlib__bigarray,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_lazy=global_data.Stdlib__lazy,
     Stdlib_obj=global_data.Stdlib__obj,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib=[0];
    caml_register_global(142,Sexplib,"Sexplib");
    var Sexplib_Type=[0];
    caml_register_global(143,Sexplib_Type,"Sexplib__Type");
    var
     _a_=[0,[4,0,0,0,[12,58,[4,0,0,0,0]]],caml_string_of_jsbytes("%d:%d")],
     _e_=[0,caml_string_of_jsbytes("Atom")],
     _f_=[0,caml_string_of_jsbytes("List")],
     _g_=[0,caml_string_of_jsbytes("Sexp")],
     _h_=[0,caml_string_of_jsbytes("Comment")],
     _i_=[0,caml_string_of_jsbytes("Plain_comment")],
     _j_=[0,caml_string_of_jsbytes("Sexp_comment")],
     _d_=[1,0],
     _J_=[1,0],
     _k_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Parser: failed to parse line "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(" char "),
          [4,0,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]]],
       caml_string_of_jsbytes
        ("Sexplib.Parser: failed to parse line %d char %d: %s")],
     _l_=[0,258,259,0,260,0],
     _N_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Parser: failed to parse line "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(" char "),
          [4,0,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]]],
       caml_string_of_jsbytes
        ("Sexplib.Parser: failed to parse line %d char %d: %s")],
     _O_=[0,259,260,0,261,0],
     _ao_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Sexplib.Lexer.scan_string: illegal escape at line "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(" char "),
          [4,0,0,0,[11,caml_string_of_jsbytes(": `\\"),[0,[0,[0,[12,39,0]]]]]]]]],
       caml_string_of_jsbytes
        ("Sexplib.Lexer.scan_string: illegal escape at line %d char %d: `\\%c%c%c'")],
     _ap_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Sexplib.Lexer.scan_string: unterminated string at line "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" char "),[4,0,0,0,0]]]],
       caml_string_of_jsbytes
        ("Sexplib.Lexer.scan_string: unterminated string at line %d char %d")],
     _aq_=[0,caml_string_of_jsbytes("src/lexer.mll"),234,16],
     _ar_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Sexplib.Lexer.scan_block_comment: unterminated block comment at line "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" char "),[4,0,0,0,0]]]],
       caml_string_of_jsbytes
        ("Sexplib.Lexer.scan_block_comment: unterminated block comment at line %d char %d")],
     _as_=[0,caml_string_of_jsbytes("src/lexer.mll"),239,16],
     _an_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Lexer.main: "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" at line "),
          [4,0,0,0,[11,caml_string_of_jsbytes(" char "),[4,0,0,0,0]]]]]],
       caml_string_of_jsbytes("Sexplib.Lexer.main: %s at line %d char %d")],
     _aZ_=[0,caml_string_of_jsbytes("src/pre_sexp.ml"),877,13],
     _aX_=
      [0,
       [2,0,[12,58,[4,0,0,0,[12,58,[4,0,0,0,0]]]]],
       caml_string_of_jsbytes("%s:%d:%d")],
     _aV_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": more than one S-expression in file "),
         [2,0,0]]],
       caml_string_of_jsbytes("%s: more than one S-expression in file %s")],
     _aW_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [2,
          0,
          [11,
           caml_string_of_jsbytes(" in state "),
           [2,0,[11,caml_string_of_jsbytes(" loading file "),[2,0,0]]]]]]],
       caml_string_of_jsbytes("%s: %s in state %s loading file %s")],
     _aU_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": EOF in "),
         [2,0,[11,caml_string_of_jsbytes(" while in state "),[2,0,0]]]]],
       caml_string_of_jsbytes("%s: EOF in %s while in state %s")],
     _aR_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Sexp."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (": got multiple S-expressions where only one was expected."),
          0]]],
       caml_string_of_jsbytes
        ("Sexplib.Sexp.%s: got multiple S-expressions where only one was expected.")],
     _aS_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Sexp."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (": S-expression followed by data at position "),
          [4,0,0,0,[11,caml_string_of_jsbytes("..."),0]]]]],
       caml_string_of_jsbytes
        ("Sexplib.Sexp.%s: S-expression followed by data at position %d...")],
     _aT_=
      [0,
       [11,
        caml_string_of_jsbytes("Sexplib.Sexp."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(": incomplete S-expression while in state "),
          [2,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]]],
       caml_string_of_jsbytes
        ("Sexplib.Sexp.%s: incomplete S-expression while in state %s: %s")],
     _aP_=[0,0],
     _aH_=[0,caml_string_of_jsbytes("buf_pos")],
     _aI_=[0,caml_string_of_jsbytes("global_offset")],
     _aJ_=[0,caml_string_of_jsbytes("text_char")],
     _aK_=[0,caml_string_of_jsbytes("text_line")],
     _aL_=[0,caml_string_of_jsbytes("err_msg")],
     _aM_=[0,caml_string_of_jsbytes("Sexplib.Sexp.Parse_error")],
     _aN_=[0,caml_string_of_jsbytes("src/pre_sexp.ml"),306,11],
     _aE_=[0,caml_string_of_jsbytes("src/pre_sexp.ml"),244,6],
     _aB_=[0,caml_string_of_jsbytes("Result")],
     _aC_=[0,caml_string_of_jsbytes("Error")],
     _az_=[0,caml_string_of_jsbytes("src/pre_sexp.ml"),196,13],
     _av_=[0,caml_string_of_jsbytes("containing_sexp")],
     _aw_=[0,caml_string_of_jsbytes("invalid_sexp")],
     _ax_=[0,[0,caml_string_of_jsbytes("Of_sexp_error")],0],
     _au_=[0,1,[0,3,[0,5,[0,7,0]]]],
     _at_=[0,[2,0,[4,6,[0,2,6],0,[2,0,0]]],caml_string_of_jsbytes("%s%06x%s")],
     _aA_=[0,0],
     _aF_=[0,0],
     _aO_=[0,0],
     _a0_=[0,0],
     _a1_=[0,caml_string_of_jsbytes("src/sexp_with_layout.ml"),109,4],
     _bS_=
      [0,
       [11,
        caml_string_of_jsbytes("of_string failed on "),
        [2,0,[11,caml_string_of_jsbytes(" with "),[2,0,0]]]],
       caml_string_of_jsbytes("of_string failed on %s with %s")],
     _bW_=
      [0,
       [11,caml_string_of_jsbytes("illegal character in index: "),[0,0]],
       caml_string_of_jsbytes("illegal character in index: %c")],
     _bX_=
      [0,
       [11,caml_string_of_jsbytes("'.' expected; got '"),[0,[12,39,0]]],
       caml_string_of_jsbytes("'.' expected; got '%c'")],
     _bV_=
      [0,
       [11,
        caml_string_of_jsbytes('Path.extract_rec: key "'),
        [2,0,[11,caml_string_of_jsbytes('" not found in: '),[2,0,0]]]],
       caml_string_of_jsbytes('Path.extract_rec: key "%s" not found in: %s')],
     _bU_=
      [0,
       [11,
        caml_string_of_jsbytes("Path."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(": illegal index "),
          [4,0,0,0,[11,caml_string_of_jsbytes(" in: "),[2,0,0]]]]]],
       caml_string_of_jsbytes("Path.%s: illegal index %d in: %s")],
     _bT_=
      [0,
       [11,
        caml_string_of_jsbytes("Path."),
        [2,0,[11,caml_string_of_jsbytes(": illegal atom: "),[2,0,0]]]],
       caml_string_of_jsbytes("Path.%s: illegal atom: %s")];
    function sexp_of_t(param)
     {var col=param[2],row=param[1];
      return [0,caml_call3(Stdlib_printf[4],_a_,row,col)]}
    function add(t1,t2){return [0,t1[1] + t2[1] | 0,t1[2] + t2[2] | 0]}
    function sub(t1,t2){return [0,t1[1] - t2[1] | 0,t1[2] - t2[2] | 0]}
    function geq(t1,t2)
     {var
       c2=t2[2],
       r2=t2[1],
       c1=t1[2],
       r1=t1[1],
       _e0_=r1 === r2?c1 - c2 | 0:r1 - r2 | 0;
      return 0 <= _e0_?1:0}
    function of_lexing(param)
     {var pos_cnum=param[4],pos_bol=param[3],pos_lnum=param[2];
      return [0,pos_lnum,(pos_cnum - pos_bol | 0) + 1 | 0]}
    var
     _b_=[0,sexp_of_t,origin,of_lexing,sub,add,sub,geq],
     _c_=[0,sexp_of_t,zero,add,sub],
     Sexplib_Src_pos=[0,_c_,_b_];
    caml_register_global(145,Sexplib_Src_pos,"Sexplib__Src_pos");
    function map(t,f)
     {var _eZ_=caml_call2(Stdlib_list[21],f,t);
      return caml_call1(Stdlib_list[9],_eZ_)}
    function Make(Pos)
     {var T=[0],of_pos=Pos[1];
      function of_list(of_a,xs){return [1,map(xs,of_a)]}
      function of_t(param)
       {if(0 === param[0])
         {var v3=param[3],v2=param[2],v1=param[1],_eV_=0;
          if(v3)var x=v3[1],_eW_=[1,[0,[0,x],0]];else var _eW_=_d_;
          return [1,
                  [0,_e_,[0,caml_call1(of_pos,v1),[0,[0,v2],[0,_eW_,_eV_]]]]]}
        var
         v3$0=param[3],
         v2$0=param[2],
         v1$0=param[1],
         _eX_=[0,caml_call1(of_pos,v3$0),0],
         _eY_=[0,of_list(of_t_or_comment,v2$0),_eX_];
        return [1,[0,_f_,[0,caml_call1(of_pos,v1$0),_eY_]]]}
      function of_comment(param)
       {if(0 === param[0])
         {var v2=param[2],v1=param[1];
          return [1,[0,_i_,[0,caml_call1(of_pos,v1),[0,[0,v2],0]]]]}
        var
         v3=param[3],
         v2$0=param[2],
         v1$0=param[1],
         _eT_=[0,of_t(v3),0],
         _eU_=[0,of_list(of_comment,v2$0),_eT_];
        return [1,[0,_j_,[0,caml_call1(of_pos,v1$0),_eU_]]]}
      function of_t_or_comment(param)
       {if(0 === param[0]){var t=param[1];return [1,[0,_g_,[0,of_t(t),0]]]}
        var c=param[1];
        return [1,[0,_h_,[0,of_comment(c),0]]]}
      var
       To_sexp=[0,of_t,of_comment,of_t_or_comment],
       sexp_of_t=To_sexp[1],
       sexp_of_comment=To_sexp[2],
       sexp_of_t_or_comment=To_sexp[3];
      return [0,T,To_sexp,sexp_of_t,sexp_of_comment,sexp_of_t_or_comment]}
    var
     include=Make([0,_c_[1]]),
     sexp_of_t$0=include[3],
     sexp_of_comment=include[4],
     sexp_of_t_or_comment=include[5],
     Parsed=Make([0,_b_[1]]);
    function rel(outer_p,p){return caml_call2(_b_[4],p,outer_p)}
    function aux_c(outer_p,param)
     {if(0 === param[0])
       {var txt=param[2],pos=param[1];return [0,rel(outer_p,pos),txt]}
      var
       t=param[3],
       cs=param[2],
       pos$0=param[1],
       _eR_=aux_t(outer_p,t),
       _eS_=map(cs,function(c){return aux_c(outer_p,c)});
      return [1,rel(outer_p,pos$0),_eS_,_eR_]}
    function aux_toc(outer_p,param)
     {if(0 === param[0]){var t=param[1];return [0,aux_t(outer_p,t)]}
      var c=param[1];
      return [1,aux_c(outer_p,c)]}
    function aux_t(outer_p,param)
     {if(0 === param[0])
       {var sopt=param[3],s=param[2],pos=param[1];
        return [0,rel(outer_p,pos),s,sopt]}
      var
       end_pos=param[3],
       tocs=param[2],
       start_pos=param[1],
       _eP_=rel(outer_p,end_pos),
       _eQ_=map(tocs,function(toc){return aux_toc(start_pos,toc)});
      return [1,rel(outer_p,start_pos),_eQ_,_eP_]}
    function relativize(toc){return aux_toc(_b_[2],toc)}
    var Parsed$0=[0,Parsed[3],Parsed[4],Parsed[5]];
    function Make$0(_eO_){return [0]}
    var
     include$0=
      [0,
       Make$0,
       Parsed$0,
       sexp_of_t$0,
       sexp_of_comment,
       sexp_of_t_or_comment,
       relativize];
    caml_register_global(147,include$0,"Sexplib__Type_with_layout");
    var yytransl_const=_l_.slice(),yytransl_block=[0,257,0],yytablesize=286;
    function _m_(caml_parser_env)
     {var _eN_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eN_]}
    function _n_(caml_parser_env)
     {var _eM_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eM_]}
    function _o_(caml_parser_env)
     {var _eL_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eL_]}
    function _p_(caml_parser_env)
     {var _eK_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eK_]}
    function _q_(caml_parser_env){return 0}
    function _r_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      return caml_call1(Stdlib_list[9],_1)}
    function _s_(caml_parser_env){return 0}
    function _t_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);return _1}
    function _u_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return _1}
    function _v_(caml_parser_env)
     {var
       _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return [0,_2,_1]}
    function _w_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,0);return 0}
    function _x_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1,0]}
    function _y_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,1);return 0}
    function _z_(caml_parser_env){return 0}
    function _A_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      var _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return [0,_2]}
    function _B_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1]}
    function _C_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return 0}
    function _D_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,0);return 0}
    function _E_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return 0}
    function _F_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,0);return 0}
    function _G_(caml_parser_env)
     {var
       pos=caml_call1(Stdlib_parsing[5],0),
       msg=caml_call4(Stdlib_printf[4],_k_,pos[2],pos[4] - pos[3] | 0,what);
      return caml_call1(Stdlib[2],msg)}
    function _H_(caml_parser_env)
     {var _2=caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      return [1,caml_call1(Stdlib_list[9],_2)]}
    function _I_(caml_parser_env){return _J_}
    function _K_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1]}
    function _L_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return _1}
    function _M_(caml_parser_env)
     {caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      var _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return _2}
    var
     yyact=
      [0,
       function(param){return caml_call1(Stdlib[2],cst_parser)},
       _M_,
       _L_,
       _K_,
       _I_,
       _H_,
       _G_,
       _F_,
       _E_,
       _D_,
       _C_,
       _B_,
       _A_,
       _z_,
       _y_,
       _x_,
       _w_,
       _v_,
       _u_,
       _t_,
       _s_,
       _r_,
       _q_,
       _p_,
       _o_,
       _n_,
       _m_],
     yytables=
      [0,
       yyact,
       yytransl_const,
       yytransl_block,
       yylhs,
       yylen,
       yydefred,
       yydgoto,
       yysindex,
       yyrindex,
       yygindex,
       yytablesize,
       yytable,
       yycheck,
       Stdlib_parsing[16],
       yynames_const,
       yynames_block];
    function sexp(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables,1,lexfun,lexbuf)}
    function sexp_opt(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables,2,lexfun,lexbuf)}
    function sexps(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables,3,lexfun,lexbuf)}
    function rev_sexps(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables,4,lexfun,lexbuf)}
    var Sexplib_Parser=[0,sexp,sexp_opt,sexps,rev_sexps];
    caml_register_global(150,Sexplib_Parser,"Sexplib__Parser");
    var coerce=_b_[3];
    function start_pos(param)
     {return caml_call1(coerce,caml_call1(Stdlib_parsing[5],0))}
    var
     yytransl_const$0=_O_.slice(),
     yytransl_block$0=[0,257,258,0],
     yytablesize$0=292;
    function _P_(caml_parser_env)
     {var _eJ_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eJ_]}
    function _Q_(caml_parser_env)
     {var _eI_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eI_]}
    function _R_(caml_parser_env)
     {var _eH_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eH_]}
    function _S_(caml_parser_env)
     {var _eG_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eG_]}
    function _T_(caml_parser_env)
     {var _eF_=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      throw [0,Stdlib_parsing[12],_eF_]}
    function _U_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      return caml_call1(Stdlib_list[9],_1)}
    function _V_(caml_parser_env){return 0}
    function _W_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);
      return caml_call1(Stdlib_list[9],_1)}
    function _X_(caml_parser_env){return 0}
    function _Y_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1);return _1}
    function _Z_(caml_parser_env)
     {var
       _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return [0,_2,_1]}
    function ___(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1,0]}
    function _$_(caml_parser_env){return 0}
    function _aa_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1]}
    function _ab_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return relativize(_1)}
    function _ac_(caml_parser_env)
     {var
       _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return [0,_2,_1]}
    function _ad_(caml_parser_env){return 0}
    function _ae_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [1,_1]}
    function _af_(caml_parser_env)
     {var _1=caml_call2(Stdlib_parsing[14],caml_parser_env,0);return [0,_1]}
    function _ag_(caml_parser_env)
     {var
       _1=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,0);
      return [0,_2,_1]}
    function _ah_(caml_parser_env){return 0}
    function _ai_(caml_parser_env)
     {var
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       t=caml_call2(Stdlib_parsing[14],caml_parser_env,0),
       cs=caml_call1(Stdlib_list[9],_2);
      return [1,start_pos(0),cs,t]}
    function _aj_(caml_parser_env)
     {var
       param=caml_call2(Stdlib_parsing[14],caml_parser_env,0),
       pos_opt=param[2],
       x=param[1];
      if(pos_opt)
       var pos=pos_opt[1],pos$0=caml_call1(coerce,pos);
      else
       var pos$0=start_pos(0);
      return [0,pos$0,x]}
    function _ak_(caml_parser_env)
     {var
       pos=caml_call1(Stdlib_parsing[5],0),
       msg=caml_call4(Stdlib_printf[4],_N_,pos[2],pos[4] - pos[3] | 0,what$0);
      return caml_call1(Stdlib[2],msg)}
    function _al_(caml_parser_env)
     {var
       _2=caml_call2(Stdlib_parsing[14],caml_parser_env,1),
       ts=caml_call1(Stdlib_list[9],_2),
       p=caml_call1(Stdlib_parsing[6],0),
       _eE_=caml_call1(coerce,[0,p[1],p[2],p[3],p[4] - 1 | 0]);
      return [1,start_pos(0),ts,_eE_]}
    function _am_(caml_parser_env)
     {var
       param=caml_call2(Stdlib_parsing[14],caml_parser_env,0),
       y=param[2],
       x=param[1];
      if(y)
       var
        match=y[1],
        x$0=match[2],
        pos=match[1],
        y$0=[0,x$0],
        y$1=y$0,
        pos$0=caml_call1(coerce,pos);
      else
       var y$2=[0,x],pos$1=start_pos(0),y$1=y$2,pos$0=pos$1;
      return [0,pos$0,x,y$1]}
    var
     yyact$0=
      [0,
       function(param){return caml_call1(Stdlib[2],cst_parser$0)},
       _am_,
       _al_,
       _ak_,
       _aj_,
       _ai_,
       _ah_,
       _ag_,
       _af_,
       _ae_,
       _ad_,
       _ac_,
       _ab_,
       _aa_,
       _$_,
       ___,
       _Z_,
       _Y_,
       _X_,
       _W_,
       _V_,
       _U_,
       _T_,
       _S_,
       _R_,
       _Q_,
       _P_],
     yytables$0=
      [0,
       yyact$0,
       yytransl_const$0,
       yytransl_block$0,
       yylhs$0,
       yylen$0,
       yydefred$0,
       yydgoto$0,
       yysindex$0,
       yyrindex$0,
       yygindex$0,
       yytablesize$0,
       yytable$0,
       yycheck$0,
       Stdlib_parsing[16],
       yynames_const$0,
       yynames_block$0];
    function sexp$0(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables$0,1,lexfun,lexbuf)}
    function sexp_opt$0(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables$0,2,lexfun,lexbuf)}
    function sexps$0(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables$0,3,lexfun,lexbuf)}
    function sexps_abs(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables$0,4,lexfun,lexbuf)}
    function rev_sexps$0(lexfun,lexbuf)
     {return caml_call4(Stdlib_parsing[13],yytables$0,5,lexfun,lexbuf)}
    var
     Sexplib_Parser_with_layout=
      [0,sexp$0,sexp_opt$0,sexps$0,sexps_abs,rev_sexps$0];
    caml_register_global
     (151,Sexplib_Parser_with_layout,"Sexplib__Parser_with_layout");
    var lf=10;
    function found_newline(lexbuf)
     {var lex_curr_p=lexbuf[12];
      return function(diff)
       {lexbuf[12]
        =
        [0,
         lex_curr_p[1],
         lex_curr_p[2] + 1 | 0,
         lex_curr_p[4] - diff | 0,
         lex_curr_p[4]];
        return 0}}
    function lexeme_len(param)
     {var lex_start_pos=param[5],lex_curr_pos=param[6];
      return lex_curr_pos - lex_start_pos | 0}
    function main_failure(lexbuf,msg)
     {var
       match=caml_call1(Stdlib_lexing[12],lexbuf),
       pos_cnum=match[4],
       pos_bol=match[3],
       pos_lnum=match[2],
       msg$0=
        caml_call4(Stdlib_printf[4],_an_,msg,pos_lnum,pos_cnum - pos_bol | 0);
      return caml_call1(Stdlib[2],msg$0)}
    function Make$1(X)
     {function scan_string(buf,start,lexbuf)
       {a:
        for(;;)
         {var ocaml_lex_state=36;
          for(;;)
           {var
             ocaml_lex_state$0=
              caml_call3
               (Stdlib_lexing[20],ocaml_lex_tables,ocaml_lex_state,lexbuf);
            if(9 < ocaml_lex_state$0 >>> 0)
             {caml_call1(lexbuf[1],lexbuf);
              var ocaml_lex_state=ocaml_lex_state$0;
              continue}
            switch(ocaml_lex_state$0)
             {case 0:caml_call2(X[1][4],buf,lexbuf);return 0;
              case 1:
               var len=lexeme_len(lexbuf) - 2 | 0;
               caml_call1(found_newline(lexbuf),len);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 2:
               var len$0=lexeme_len(lexbuf) - 3 | 0;
               caml_call1(found_newline(lexbuf),len$0);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 3:
               var
                c=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 1 | 0),
                switch$0=0;
               if(110 <= c)
                if(117 <= c)
                 switch$0 = 1;
                else
                 {var switcher=c - 110 | 0;
                  switch(switcher)
                   {case 0:var _eB_=10;break;
                    case 4:var _eB_=13;break;
                    case 6:var _eB_=9;break;
                    default:switch$0 = 1}}
               else
                if(98 === c)var _eB_=8;else switch$0 = 1;
               if(switch$0)var _eB_=c;
               caml_call2(X[1][2],buf,_eB_);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 4:
               var
                c1=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 1 | 0),
                c2=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 2 | 0),
                c3=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 3 | 0),
                v=
                 ((100 * (c1 - 48 | 0) | 0) + (10 * (c2 - 48 | 0) | 0) | 0)
                 +
                 (c3 - 48 | 0)
                 |
                 0;
               if(255 < v)
                {var
                  match=caml_call1(Stdlib_lexing[13],lexbuf),
                  pos_cnum=match[4],
                  pos_bol=match[3],
                  pos_lnum=match[2],
                  msg=
                   caml_call6
                    (Stdlib_printf[4],
                     _ao_,
                     pos_lnum,
                     (pos_cnum - pos_bol | 0) - 3 | 0,
                     c1,
                     c2,
                     c3);
                 caml_call1(Stdlib[2],msg)}
               var _eC_=caml_call1(Stdlib_char[1],v);
               caml_call2(X[1][2],buf,_eC_);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 5:
               var
                d1=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 2 | 0),
                c2$0=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 3 | 0),
                val1=97 <= d1?d1 - 87 | 0:65 <= d1?d1 - 55 | 0:d1 - 48 | 0,
                val2=
                 97 <= c2$0
                  ?c2$0 - 87 | 0
                  :65 <= c2$0?c2$0 - 55 | 0:c2$0 - 48 | 0,
                v$0=(val1 * 16 | 0) + val2 | 0,
                _eD_=caml_call1(Stdlib_char[1],v$0);
               caml_call2(X[1][2],buf,_eD_);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 6:
               var c$0=caml_call2(Stdlib_lexing[18],lexbuf,lexbuf[5] + 1 | 0);
               caml_call2(X[1][2],buf,92);
               caml_call2(X[1][2],buf,c$0);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 7:
               caml_call1(found_newline(lexbuf),0);
               caml_call2(X[1][2],buf,lf);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              case 8:
               var ofs=lexbuf[5],len$1=lexbuf[6] - ofs | 0;
               caml_call4(X[1][3],buf,lexbuf[2],ofs,len$1);
               caml_call2(X[1][4],buf,lexbuf);
               continue a;
              default:
               var
                msg$0=
                 caml_call3
                  (Stdlib_printf[4],_ap_,start[2],start[4] - start[3] | 0);
               return caml_call1(Stdlib[2],msg$0)}}}}
      function _ey_(buf,lexbuf)
       {a:
        for(;;)
         {var ocaml_lex_state=0;
          for(;;)
           {var
             ocaml_lex_state$0=
              caml_call3
               (Stdlib_lexing[20],ocaml_lex_tables,ocaml_lex_state,lexbuf);
            if(11 < ocaml_lex_state$0 >>> 0)
             {caml_call1(lexbuf[1],lexbuf);
              var ocaml_lex_state=ocaml_lex_state$0;
              continue}
            switch(ocaml_lex_state$0)
             {case 0:caml_call1(found_newline(lexbuf),0);continue a;
              case 1:continue a;
              case 2:
               var
                text=
                 caml_call3(Stdlib_lexing[16],lexbuf,lexbuf[5],lexbuf[6]);
               return caml_call4(X[2][7],text,_ey_,buf,lexbuf);
              case 3:return X[2][1];
              case 4:return X[2][2];
              case 5:
               var pos=caml_call1(Stdlib_lexing[12],lexbuf);
               caml_call2(X[1][4],buf,lexbuf);
               scan_string(buf,pos,lexbuf);
               var tok=caml_call2(X[2][6],pos,buf);
               caml_call1(X[1][5],buf);
               return tok;
              case 6:return X[2][5];
              case 7:
               var pos$0=caml_call1(Stdlib_lexing[12],lexbuf);
               caml_call2(X[1][4],buf,lexbuf);
               var locs=[0,pos$0,0],locs$0=locs;
               b:
               for(;;)
                {var ocaml_lex_state$1=53;
                 for(;;)
                  {var
                    ocaml_lex_state$2=
                     caml_call3
                      (Stdlib_lexing[20],
                       ocaml_lex_tables,
                       ocaml_lex_state$1,
                       lexbuf);
                   if(5 < ocaml_lex_state$2 >>> 0)
                    {caml_call1(lexbuf[1],lexbuf);
                     var ocaml_lex_state$1=ocaml_lex_state$2;
                     continue}
                   switch(ocaml_lex_state$2)
                    {case 0:
                      caml_call2(X[1][4],buf,lexbuf);
                      caml_call1(found_newline(lexbuf),0);
                      continue b;
                     case 1:caml_call2(X[1][4],buf,lexbuf);continue b;
                     case 2:
                      caml_call2(X[1][4],buf,lexbuf);
                      var
                       cur=caml_call1(Stdlib_lexing[13],lexbuf),
                       start=[0,cur[1],cur[2],cur[3],cur[4] - 1 | 0];
                      scan_string(buf,start,lexbuf);
                      continue b;
                     case 3:
                      caml_call2(X[1][4],buf,lexbuf);
                      var
                       cur$0=caml_call1(Stdlib_lexing[13],lexbuf),
                       start$0=[0,cur$0[1],cur$0[2],cur$0[3],cur$0[4] - 2 | 0],
                       locs$1=[0,start$0,locs$0],
                       locs$0=locs$1;
                      continue b;
                     case 4:
                      caml_call2(X[1][4],buf,lexbuf);
                      if(! locs$0)throw [0,Assert_failure,_aq_];
                      var _eA_=locs$0[2];
                      if(_eA_){var locs$0=_eA_;continue b}
                      break;
                     default:
                      if(! locs$0)throw [0,Assert_failure,_as_];
                      var
                       match=locs$0[1],
                       pos_cnum=match[4],
                       pos_bol=match[3],
                       pos_lnum=match[2],
                       msg=
                        caml_call3
                         (Stdlib_printf[4],_ar_,pos_lnum,pos_cnum - pos_bol | 0);
                      caml_call1(Stdlib[2],msg)}
                   var tok$0=caml_call4(X[2][8],pos$0,_ey_,buf,lexbuf);
                   caml_call1(X[1][5],buf);
                   return tok$0}}
              case 8:return main_failure(lexbuf,cst_illegal_end_of_comment);
              case 9:
               return main_failure(lexbuf,cst_comment_tokens_in_unquoted);
              case 10:
               var
                str=
                 caml_call3(Stdlib_lexing[16],lexbuf,lexbuf[5],lexbuf[6]);
               return caml_call1(X[2][4],str);
              default:return X[2][3]}}}}
      function main(buf)
       {if(buf)
         {var buf$0=buf[1];
          caml_call1(Stdlib_buffer[8],buf$0);
          var buf$1=caml_call1(X[1][6],buf$0)}
        else
         var buf$1=caml_call1(X[1][1],64);
        return function(_ez_){return _ey_(buf$1,_ez_)}}
      return [0,main]}
    var
     create=Stdlib_buffer[1],
     clear=Stdlib_buffer[8],
     add_char=Stdlib_buffer[10],
     add_subbytes=Stdlib_buffer[17];
    function add_lexeme(param,_ex_){return 0}
    function of_buffer(b){return b}
    var eof=2,lparen=0,rparen=1,hash_semi=3;
    function simple_string(x){return [0,x]}
    function quoted_string(param,buf)
     {return [0,caml_call1(Stdlib_buffer[2],buf)]}
    function block_comment(pos,main,buf,lexbuf)
     {return caml_call2(main,buf,lexbuf)}
    function comment(text,main,buf,lexbuf){return caml_call2(main,buf,lexbuf)}
    var
     Vanilla=
      Make$1
       ([0,
         [0,create,add_char,add_subbytes,add_lexeme,clear,of_buffer],
         [0,
          lparen,
          rparen,
          eof,
          simple_string,
          hash_semi,
          quoted_string,
          comment,
          block_comment]]);
    function create$0(n)
     {var _ew_=caml_call1(Stdlib_buffer[1],n);
      return [0,caml_call1(Stdlib_buffer[1],n),_ew_]}
    function of_buffer$0(contents)
     {return [0,contents,caml_call1(Stdlib_buffer[1],64)]}
    function add_char$0(t,ch){return caml_call2(Stdlib_buffer[10],t[1],ch)}
    function add_subbytes$0(t,str,ofs,len)
     {return caml_call4(Stdlib_buffer[17],t[1],str,ofs,len)}
    function add_lexeme$0(t,lexbuf)
     {var _ev_=caml_call1(Stdlib_lexing[8],lexbuf);
      return caml_call2(Stdlib_buffer[14],t[2],_ev_)}
    function clear$0(t)
     {caml_call1(Stdlib_buffer[8],t[2]);
      return caml_call1(Stdlib_buffer[8],t[1])}
    var eof$0=2,lparen$0=0,rparen$0=1,hash_semi$0=3;
    function simple_string$0(x){return [0,[0,x,0]]}
    function quoted_string$0(pos,param)
     {var
       lexeme=param[2],
       contents=param[1],
       _eu_=[0,[0,pos,caml_call1(Stdlib_buffer[2],lexeme)]];
      return [0,[0,caml_call1(Stdlib_buffer[2],contents),_eu_]]}
    function block_comment$0(pos,param,_et_,lexbuf)
     {var lexeme=_et_[2];
      return [1,[0,caml_call1(Stdlib_buffer[2],lexeme),[0,pos]]]}
    function comment$0(text,param,buf,lexbuf){return [1,[0,text,0]]}
    var
     With_layout=
      Make$1
       ([0,
         [0,
          create$0,
          add_char$0,
          add_subbytes$0,
          add_lexeme$0,
          clear$0,
          of_buffer$0],
         [0,
          lparen$0,
          rparen$0,
          eof$0,
          simple_string$0,
          hash_semi$0,
          quoted_string$0,
          comment$0,
          block_comment$0]]),
     main=Vanilla[1],
     main$0=With_layout[1],
     Sexplib_Lexer=[0,main,main$0];
    caml_register_global(156,Sexplib_Lexer,"Sexplib__Lexer");
    var
     of_int_style=Sexplib0_Sexp[18],
     of_float_style=Sexplib0_Sexp[17],
     to_string=Sexplib0_Sexp[16],
     to_string_mach=Sexplib0_Sexp[15],
     to_string_hum=Sexplib0_Sexp[14],
     pp=Sexplib0_Sexp[13],
     pp_mach=Sexplib0_Sexp[12],
     pp_hum_indent=Sexplib0_Sexp[11],
     pp_hum=Sexplib0_Sexp[10],
     default_indent=Sexplib0_Sexp[9],
     message=Sexplib0_Sexp[8],
     Of_sexp_error=Sexplib0_Sexp[7],
     Not_found_s=Sexplib0_Sexp[6],
     compare=Sexplib0_Sexp[5],
     equal=Sexplib0_Sexp[4],
     t_sexp_grammar=Sexplib0_Sexp[3],
     include$1=Sexplib0_Sexp[19],
     Raw_grammar=include$1[1],
     size=include$1[2],
     buffer=include$1[3],
     to_buffer=include$1[4],
     to_buffer_hum=include$1[5],
     to_buffer_mach=include$1[6],
     to_buffer_gen=include$1[7],
     mach_maybe_esc_str=include$1[8],
     must_escape=include$1[9],
     esc_str=include$1[10];
    function with_new_buffer(oc,f)
     {var buf=caml_call1(buffer,0);
      caml_call1(f,buf);
      return caml_call2(Stdlib_buffer[21],oc,buf)}
    function output_hum(oc,sexp)
     {return with_new_buffer
              (oc,function(buf){return caml_call3(to_buffer_hum,buf,0,sexp)})}
    function output_hum_indent(indent,oc,sexp)
     {return with_new_buffer
              (oc,
               function(buf)
                {return caml_call3(to_buffer_hum,buf,[0,indent],sexp)})}
    function output(oc,sexp)
     {return with_new_buffer
              (oc,function(buf){return caml_call2(to_buffer_mach,buf,sexp)})}
    var prng=[0,0];
    function temp_file_name(prefix,suffix)
     {var _es_=prng[1];
      if(_es_)
       var v=_es_[1],rand_state=v;
      else
       {var ret=caml_call1(Stdlib_random[11][2],0);
        prng[1] = [0,ret];
        var rand_state=ret}
      var rnd=caml_call1(Stdlib_random[11][4],rand_state) & 16777215;
      return caml_call4(Stdlib_printf[4],_at_,prefix,rnd,suffix)}
    function open_temp_file(opt,prefix,suffix)
     {if(opt)var sth=opt[1],perm=sth;else var perm=438;
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(prefix,suffix);
          try
           {var oc=caml_call3(Stdlib[62],_au_,perm,name),_er_=[0,name,oc];
            return _er_}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Stdlib[11])
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    var Tmp_file=[0,prng,temp_file_name,open_temp_file];
    function save_of_output(perm,output_function,file,sexp)
     {var
       match=caml_call3(Tmp_file[3],perm,file,cst_tmp),
       oc=match[2],
       tmp_name=match[1];
      try
       {caml_call2(output_function,oc,sexp);caml_call1(Stdlib[76],oc)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[77],oc);
        try {runtime.caml_sys_remove(tmp_name)}catch(_eq_){}
        throw e}
      return runtime.caml_sys_rename(tmp_name,file)}
    function output_sexp_nl(do_output,oc,sexp)
     {caml_call2(do_output,oc,sexp);return caml_call2(Stdlib[66],oc,cst)}
    function save_hum(perm,file,sexp)
     {return save_of_output
              (perm,
               function(_eo_,_ep_)
                {return output_sexp_nl(output_hum,_eo_,_ep_)},
               file,
               sexp)}
    function save(perm,file,sexp)
     {return save_of_output(perm,output,file,sexp)}
    function output_sexps_nl(do_output,oc,sexps)
     {function _em_(_en_){return output_sexp_nl(do_output,oc,_en_)}
      return caml_call2(Stdlib_list[17],_em_,sexps)}
    function save_sexps_hum(perm,file,sexps)
     {return save_of_output
              (perm,
               function(_ek_,_el_)
                {return output_sexps_nl(output_hum,_ek_,_el_)},
               file,
               sexps)}
    function save_sexps(perm,file,sexps)
     {return save_of_output
              (perm,
               function(_ei_,_ej_){return output_sexps_nl(output,_ei_,_ej_)},
               file,
               sexps)}
    function scan_sexp(buf,lexbuf){return sexp(caml_call1(main,buf),lexbuf)}
    function scan_sexp_opt(buf,lexbuf)
     {return sexp_opt(caml_call1(main,buf),lexbuf)}
    function scan_sexps(buf,lexbuf){return sexps(caml_call1(main,buf),lexbuf)}
    function scan_rev_sexps(buf,lexbuf)
     {return rev_sexps(caml_call1(main,buf),lexbuf)}
    function get_main_buf(buf)
     {if(buf)
       var buf$0=buf[1],buf$1=buf$0;
      else
       var buf$1=caml_call1(Stdlib_buffer[1],128);
      return caml_call1(main,[0,buf$1])}
    function scan_fold_sexps(buf,f,acc,lexbuf)
     {var main=get_main_buf(buf),acc$0=acc;
      for(;;)
       {var match=sexp_opt(main,lexbuf);
        if(match)
         {var sexp=match[1],acc$1=caml_call2(f,acc$0,sexp),acc$0=acc$1;
          continue}
        return acc$0}}
    function scan_iter_sexps(buf,f,lexbuf)
     {var _eh_=0;
      return scan_fold_sexps
              (buf,
               function(param,sexp){return caml_call1(f,sexp)},
               _eh_,
               lexbuf)}
    function scan_sexps_conv(buf,f,lexbuf)
     {function coll(acc,sexp){return [0,caml_call1(f,sexp),acc]}
      var _eg_=scan_fold_sexps(buf,coll,0,lexbuf);
      return caml_call1(Stdlib_list[9],_eg_)}
    function sexp_conversion_error_message
     (containing_sexp,location,invalid_sexp,param,exn)
     {var _d9_=0;
      if(containing_sexp)
       var x=containing_sexp[1],_d__=[0,[1,[0,_av_,[0,x,0]]],0];
      else
       var _d__=0;
      var _d$_=[0,_d__,_d9_];
      if(invalid_sexp)
       var x$0=invalid_sexp[1],_ea_=[0,[1,[0,_aw_,[0,x$0,0]]],0];
      else
       var _ea_=0;
      var _eb_=[0,_ea_,_d$_],_ec_=0;
      if(exn[1] === Stdlib[7])
       var x$1=exn[2],_ed_=[0,x$1];
      else
       var _ed_=caml_call1(include$2[49],exn);
      var _ee_=[0,[0,_ed_,_ec_],_eb_];
      if(location)var x$2=location[1],_ef_=[0,[0,x$2],0];else var _ef_=0;
      return [1,caml_call1(Stdlib_list[13],[0,_ax_,[0,_ef_,_ee_]])]}
    var Conv_exn=[248,cst_Sexplib_Pre_sexp_Annot_Con,caml_fresh_oo_id(0)];
    function _ay_(param)
     {if(param[1] === Conv_exn)
       {var exn=param[3],location=param[2];
        return sexp_conversion_error_message(0,[0,location],0,0,exn)}
      throw [0,Assert_failure,_az_]}
    caml_call3(include$2[51][2],_aA_,Conv_exn,_ay_);
    function get_sexp(param)
     {var sexp=0 === param[0]?param[2]:param[3];return sexp}
    function get_range(param){var range=param[1];return range}
    function sexp_of_conv(sexp_of_a,param)
     {if(1025039613 <= param[1])
       {var a=param[2];return [1,[0,_aB_,[0,caml_call1(sexp_of_a,a),0]]]}
      var match=param[2],t=match[2],exn=match[1],_d8_=[0,get_sexp(t),0];
      return [1,[0,_aC_,[0,[1,[0,caml_call1(include$2[49],exn),_d8_]],0]]]}
    var Annot_sexp=[248,cst_Sexplib_Pre_sexp_Annot_Ann,caml_fresh_oo_id(0)];
    function find_sexp(annot_sexp,sexp)
     {function loop(annot_sexp)
       {var sub_sexp=0 === annot_sexp[0]?annot_sexp[2]:annot_sexp[3];
        if(sexp === sub_sexp)throw [0,Annot_sexp,annot_sexp];
        if(0 === annot_sexp[0])return 0;
        var annots=annot_sexp[2];
        return caml_call2(Stdlib_list[17],loop,annots)}
      try
       {loop(annot_sexp);var _d7_=0;return _d7_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Annot_sexp){var res=exn[2];return [0,res]}
        throw exn}}
    var
     Annot=
      [0,Conv_exn,get_sexp,get_range,sexp_of_conv,Annot_sexp,find_sexp];
    function _aD_(param)
     {if(param[1] === Of_sexp_error)
       {var _d6_=param[2];
        if(_d6_[1] === Annot[1])
         {var invalid_sexp=param[3],exn=_d6_[3],location=_d6_[2];
          return sexp_conversion_error_message
                  (0,[0,location],[0,invalid_sexp],0,exn)}
        var invalid_sexp$0=param[3];
        return sexp_conversion_error_message(0,0,[0,invalid_sexp$0],0,_d6_)}
      throw [0,Assert_failure,_aE_]}
    caml_call3(include$2[51][2],_aF_,Of_sexp_error,_aD_);
    function create$1(opt,_d4_,_d3_,_d2_,param)
     {if(opt)var sth=opt[1],text_line=sth;else var text_line=1;
      if(_d4_)var sth$0=_d4_[1],text_char=sth$0;else var text_char=0;
      if(_d3_)var sth$1=_d3_[1],buf_pos=sth$1;else var buf_pos=0;
      if(_d2_)var sth$2=_d2_[1],global_offset=sth$2;else var global_offset=0;
      function fail(msg)
       {var _d5_=caml_call2(Stdlib[28],cst_Sexplib_Sexp_Parse_pos_cre,msg);
        return caml_call1(Stdlib[2],_d5_)}
      return 1 <= text_line
              ?0 <= text_char
                ?0 <= global_offset
                  ?0 <= buf_pos
                    ?[0,text_line,text_char,global_offset,buf_pos]
                    :fail(cst_buf_pos_0)
                  :fail(cst_global_offset_0)
                :fail(cst_text_char_0)
              :fail(cst_text_line_1)}
    function with_buf_pos(t,buf_pos){return [0,t[1],t[2],t[3],buf_pos]}
    var
     Parse_pos=[0,create$1,with_buf_pos],
     Parse_error=[248,cst_Sexplib_Pre_sexp_Parse_err,caml_fresh_oo_id(0)];
    function _aG_(param)
     {if(param[1] === Parse_error)
       {var
         pe=param[2],
         match=pe[2],
         ppos=match[2][1],
         _dY_=[0,[1,[0,_aH_,[0,caml_call1(include$2[10],ppos[4]),0]]],0],
         _dZ_=[0,[1,[0,_aI_,[0,caml_call1(include$2[10],ppos[3]),0]]],_dY_],
         _d0_=[0,[1,[0,_aJ_,[0,caml_call1(include$2[10],ppos[2]),0]]],_dZ_],
         _d1_=[0,[1,[0,_aK_,[0,caml_call1(include$2[10],ppos[1]),0]]],_d0_];
        return [1,[0,_aM_,[0,[1,[0,[1,[0,_aL_,[0,[0,pe[1]],0]]],_d1_]],0]]]}
      throw [0,Assert_failure,_aN_]}
    caml_call3(include$2[51][2],_aO_,Parse_error,_aG_);
    function annotate_sexp(sexp,iter)
     {if(0 === sexp[0])
       {var
         start_pos=caml_call2(Parsexp_Positions[17][3],iter,0),
         end_pos=caml_call2(Parsexp_Positions[17][3],iter,0);
        return [0,[0,start_pos,end_pos],sexp]}
      var l=sexp[1],start_pos$0=caml_call2(Parsexp_Positions[17][3],iter,0);
      function _dW_(sexp){return annotate_sexp(sexp,iter)}
      var
       _dX_=caml_call2(Stdlib_list[21],_dW_,l),
       annot=caml_call1(Stdlib_list[9],_dX_),
       end_pos$0=caml_call2(Parsexp_Positions[17][3],iter,0);
      return [1,[0,start_pos$0,end_pos$0],annot,sexp]}
    var Found=[248,cst_Sexplib_Pre_sexp_Parser_ou,caml_fresh_oo_id(0)];
    function raise_found(state,sexp){throw [0,Found,sexp]}
    var Found$0=[248,cst_Sexplib_Pre_sexp_Parser_ou$0,caml_fresh_oo_id(0)];
    function raise_found$0(state,param)
     {var
       positions=param[2],
       sexp=param[1],
       annot=
        annotate_sexp(sexp,caml_call1(Parsexp_Positions[17][1],positions));
      throw [0,Found$0,annot]}
    var
     Parser_output=
      [0,
       [0,Parsexp[5],Found,raise_found],
       [0,Parsexp[8],Found$0,raise_found$0]];
    function Make_parser(T)
     {function parse_pos_of_state(state,buf_pos)
       {var
         _dU_=caml_call1(T[1][1][2],state),
         _dV_=caml_call1(T[1][1][4],state);
        return [0,caml_call1(T[1][1][3],state),_dV_,_dU_,buf_pos]}
      function check_str_bounds(pos,len,str)
       {if(pos < 0)caml_call1(Stdlib[1],cst_parse_pos_0);
        if(len < 0)caml_call1(Stdlib[1],cst_parse_len_0);
        var str_len=caml_call1(T[4],str),pos_len=pos + len | 0;
        if(str_len < pos_len)caml_call1(Stdlib[1],cst_parse_pos_len_str_len);
        return pos_len - 1 | 0}
      function handle_parsexp_error(state,pos,e)
       {var
         msg=caml_call1(Parsexp_Parse_error[3],e),
         match=caml_call1(Parsexp_Parse_error[6][1],e);
        if(434889564 <= match)
         {var
           parse_state=[0,parse_pos_of_state(state,pos)],
           parse_error=[0,msg,[0,925483562,parse_state]];
          throw [0,Parse_error,parse_error]}
        return caml_call1(Stdlib[2],msg)}
      function run_feed_loop(state,stack,pos,len,str)
       {var
         max_pos=check_str_bounds(pos,len,str),
         previous_offset=caml_call1(T[1][1][2],state);
        try
         {var stack$0=caml_call5(T[5],state,stack,str,max_pos,pos)}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === T[2])
           {var
             result=exn[2],
             offset=caml_call1(T[1][1][2],state),
             next_pos=pos + (offset - previous_offset | 0) | 0;
            return [0,result,parse_pos_of_state(state,next_pos)]}
          if(exn[1] === Parsexp_Parse_error[5])
           {var err=exn[2];
            return handle_parsexp_error
                    (state,
                     pos
                     +
                     (caml_call1(T[1][1][2],state) - previous_offset | 0)
                     |
                     0,
                     err)}
          throw exn}
        return mk_cont_state(state,stack$0)}
      function mk_cont_state(state,stack)
       {var used_ref=[0,0];
        function parse_fun(pos,len,str)
         {return used_ref[1]
                  ?caml_call1(Stdlib[2],cst_Sexplib_Sexp_parser_contin)
                  :(used_ref[1] = 1,run_feed_loop(state,stack,pos,len,str))}
        var cont_state=caml_call1(T[1][1][9],state);
        return [1,cont_state,parse_fun]}
      function parse(opt,len,str)
       {if(opt)
         var sth=opt[1],parse_pos=sth;
        else
         var parse_pos=caml_call5(Parse_pos[1],0,0,0,0,0);
        var
         text_line=parse_pos[1],
         text_char=parse_pos[2],
         global_offset=parse_pos[3],
         buf_pos=parse_pos[4],
         pos=[0,text_line,text_char,global_offset],
         state=caml_call3(T[1][1][8],[0,pos],_aP_,T[3]),
         stack=T[1][2][1];
        if(len)
         var x=len[1],len$0=x;
        else
         var len$0=caml_call1(T[4],str) - buf_pos | 0;
        return run_feed_loop(state,stack,buf_pos,len$0,str)}
      return [0,parse]}
    var
     include$3=Parser_output[1],
     Impl=include$3[1],
     Found$1=include$3[2],
     raise_found$1=include$3[3],
     length=caml_ml_string_length;
    function unsafe_feed_loop(state,stack,str,max_pos,pos)
     {var stack$0=stack,pos$0=pos;
      for(;;)
       {if(pos$0 <= max_pos)
         {var
           stack$1=
            caml_call3
             (Impl[3],state,caml_string_unsafe_get(str,pos$0),stack$0),
           pos$1=pos$0 + 1 | 0,
           stack$0=stack$1,
           pos$0=pos$1;
          continue}
        return stack$0}}
    var
     String_single_sexp=
      Make_parser([0,Impl,Found$1,raise_found$1,length,unsafe_feed_loop]),
     parse_str=String_single_sexp[1],
     parse=String_single_sexp[1],
     include$4=Parser_output[2],
     Impl$0=include$4[1],
     Found$2=include$4[2],
     raise_found$2=include$4[3],
     length$0=caml_ml_string_length;
    function unsafe_feed_loop$0(state,stack,str,max_pos,pos)
     {var stack$0=stack,pos$0=pos;
      for(;;)
       {if(pos$0 <= max_pos)
         {var
           stack$1=
            caml_call3
             (Impl$0[3],state,caml_string_unsafe_get(str,pos$0),stack$0),
           pos$1=pos$0 + 1 | 0,
           stack$0=stack$1,
           pos$0=pos$1;
          continue}
        return stack$0}}
    var
     String_single_annot=
      Make_parser
       ([0,Impl$0,Found$2,raise_found$2,length$0,unsafe_feed_loop$0]),
     parse_str_annot=String_single_annot[1],
     include$5=Parser_output[1],
     Impl$1=include$5[1],
     Found$3=include$5[2],
     raise_found$3=include$5[3],
     length$1=caml_ba_dim_1;
    function unsafe_feed_loop$1(state,stack,str,max_pos,pos)
     {var stack$0=stack,pos$0=pos;
      for(;;)
       {if(pos$0 <= max_pos)
         {var
           _dT_=caml_ba_get_1(str,pos$0),
           stack$1=caml_call3(Impl$1[3],state,_dT_,stack$0),
           pos$1=pos$0 + 1 | 0,
           stack$0=stack$1,
           pos$0=pos$1;
          continue}
        return stack$0}}
    var
     Bigstring_single_sexp=
      Make_parser
       ([0,Impl$1,Found$3,raise_found$3,length$1,unsafe_feed_loop$1]),
     parse_bigstring=Bigstring_single_sexp[1],
     include$6=Parser_output[2],
     Impl$2=include$6[1],
     Found$4=include$6[2],
     raise_found$4=include$6[3],
     length$2=caml_ba_dim_1;
    function unsafe_feed_loop$2(state,stack,str,max_pos,pos)
     {var stack$0=stack,pos$0=pos;
      for(;;)
       {if(pos$0 <= max_pos)
         {var
           _dS_=caml_ba_get_1(str,pos$0),
           stack$1=caml_call3(Impl$2[3],state,_dS_,stack$0),
           pos$1=pos$0 + 1 | 0,
           stack$0=stack$1,
           pos$0=pos$1;
          continue}
        return stack$0}}
    var
     Bigstring_single_annot=
      Make_parser
       ([0,Impl$2,Found$4,raise_found$4,length$2,unsafe_feed_loop$2]),
     _aQ_=Bigstring_single_annot[1];
    function mk_this_parse(parse_pos,my_parse)
     {return function(pos,len,str)
       {if(parse_pos)
         {var parse_pos$0=parse_pos[1];
          parse_pos$0[4] = pos;
          var parse_pos$1=parse_pos$0}
        else
         var parse_pos$1=caml_call5(Parse_pos[1],0,0,[0,pos],0,0);
        return caml_call3(my_parse,[0,parse_pos$1],[0,len],str)}}
    function feed_end_of_input(this_parse,ws_buf)
     {var match=caml_call3(this_parse,0,1,ws_buf);
      if(0 === match[0]){var sexp=match[1];return [0,sexp]}
      var cont_state=match[1];
      return [1,cont_state]}
    function gen_input_sexp(my_parse,parse_pos,ic)
     {var buf=caml_create_bytes(1);
      function loop(this_parse)
       {var this_parse$0=this_parse;
        for(;;)
         {try
           {var c=caml_call1(Stdlib[82],ic)}
          catch(_dR_)
           {_dR_ = caml_wrap_exception(_dR_);
            if(_dR_ === Stdlib[12])
             {var match=feed_end_of_input(this_parse$0,cst$0);
              if(0 === match[0]){var sexp=match[1];return sexp}
              throw Stdlib[12]}
            throw _dR_;
            var _dQ_=_dR_}
          caml_bytes_set(buf,0,c);
          var
           match$0=
            caml_call3(this_parse$0,0,1,caml_call1(Stdlib_bytes[42],buf));
          if(0 === match$0[0]){var sexp$0=match$0[1];return sexp$0}
          var this_parse$1=match$0[2],this_parse$0=this_parse$1;
          continue}}
      return loop(mk_this_parse(parse_pos,my_parse))}
    function input_sexp(parse_pos,ic)
     {return gen_input_sexp(parse,parse_pos,ic)}
    function gen_input_rev_sexps(my_parse,ws_buf,parse_pos,opt,ic)
     {if(opt)var sth=opt[1],buf=sth;else var buf=caml_create_bytes(8192);
      var
       rev_sexps_ref=[0,0],
       buf_len=caml_ml_bytes_length(buf),
       len$3=caml_call4(Stdlib[84],ic,buf,0,buf_len),
       this_parse$2=mk_this_parse(parse_pos,my_parse),
       this_parse=this_parse$2,
       pos=0,
       len=len$3;
      for(;;)
       {if(0 < len)
         {var
           match=
            caml_call3(this_parse,pos,len,caml_call1(Stdlib_bytes[42],buf));
          if(0 === match[0])
           {var parse_pos$0=match[2],sexp=match[1],buf_pos=parse_pos$0[4];
            rev_sexps_ref[1] = [0,sexp,rev_sexps_ref[1]];
            var
             n_parsed=buf_pos - pos | 0,
             this_parse$0=mk_this_parse([0,parse_pos$0],my_parse);
            if(n_parsed === len)
             {var
               len$0=caml_call4(Stdlib[84],ic,buf,0,buf_len),
               this_parse=this_parse$0,
               pos=0,
               len=len$0;
              continue}
            var
             len$1=len - n_parsed | 0,
             this_parse=this_parse$0,
             pos=buf_pos,
             len=len$1;
            continue}
          var
           this_parse$1=match[2],
           len$2=caml_call4(Stdlib[84],ic,buf,0,buf_len),
           this_parse=this_parse$1,
           pos=0,
           len=len$2;
          continue}
        var match$0=feed_end_of_input(this_parse,ws_buf);
        if(0 === match$0[0])
         {var sexp$0=match$0[1];return [0,sexp$0,rev_sexps_ref[1]]}
        var _dN_=match$0[1];
        if(_dN_)
         {var
           _dO_=caml_call1(Parsexp_Old_parser_cont_state[2],_dN_),
           _dP_=caml_call2(Stdlib[28],cst_Sexplib_Sexp_input_rev_sex,_dO_);
          return caml_call1(Stdlib[2],_dP_)}
        return rev_sexps_ref[1]}}
    function input_rev_sexps(parse_pos,buf,ic)
     {return gen_input_rev_sexps(parse,cst$1,parse_pos,buf,ic)}
    function input_sexps(parse_pos,buf,ic)
     {var _dM_=input_rev_sexps(parse_pos,buf,ic);
      return caml_call1(Stdlib_list[9],_dM_)}
    function of_string_bigstring(loc,my_parse,ws_buf,get_len,get_sub,str)
     {var match=caml_call3(my_parse,0,0,str);
      if(0 === match[0])
       {var
         parse_pos=match[2],
         sexp=match[1],
         match$0=caml_call3(my_parse,[0,parse_pos],0,str);
        if(0 === match$0[0])
         {var _dI_=caml_call2(Stdlib_format[129],_aR_,loc);
          return caml_call1(Stdlib[2],_dI_)}
        if(match$0[1])
         {var _dJ_=caml_call3(Stdlib_format[129],_aS_,loc,parse_pos[4]);
          return caml_call1(Stdlib[2],_dJ_)}
        return sexp}
      var this_parse=match[2],match$1=feed_end_of_input(this_parse,ws_buf);
      if(0 === match$1[0]){var sexp$0=match$1[1];return sexp$0}
      var
       cont_state=match$1[1],
       cont_state_str=caml_call1(Parsexp_Old_parser_cont_state[2],cont_state),
       _dK_=caml_call3(get_sub,str,0,caml_call1(get_len,str)),
       _dL_=caml_call4(Stdlib_format[129],_aT_,loc,cont_state_str,_dK_);
      return caml_call1(Stdlib[2],_dL_)}
    function of_string(str)
     {return of_string_bigstring
              (cst_of_string,
               parse,
               cst$2,
               caml_ml_string_length,
               Stdlib_string[9],
               str)}
    function get_bstr_sub_str(bstr,pos,len)
     {var str=caml_create_bytes(len),_dG_=len - 1 | 0,_dF_=0;
      if(! (_dG_ < 0))
       {var i=_dF_;
        for(;;)
         {caml_bytes_set(str,i,caml_ba_get_1(bstr,pos + i | 0));
          var _dH_=i + 1 | 0;
          if(_dG_ !== i){var i=_dH_;continue}
          break}}
      return caml_call1(Stdlib_bytes[42],str)}
    var
     bstr_ws_buf=
      caml_call3
       (Stdlib_bigarray[19][1],Stdlib_bigarray[13],Stdlib_bigarray[15],1);
    caml_ba_set_1(bstr_ws_buf,0,32);
    function of_bigstring(bstr)
     {return of_string_bigstring
              (cst_of_bigstring,
               parse_bigstring,
               bstr_ws_buf,
               caml_ba_dim_1,
               get_bstr_sub_str,
               bstr)}
    function gen_load_rev_sexps(input_rev_sexps,buf,file)
     {var ic=caml_call1(Stdlib[79],file);
      try
       {var sexps=caml_call3(input_rev_sexps,0,buf,ic);
        caml_call1(Stdlib[93],ic);
        return sexps}
      catch(exc)
       {exc = caml_wrap_exception(exc);caml_call1(Stdlib[94],ic);throw exc}}
    function load_rev_sexps(buf,file)
     {return gen_load_rev_sexps(input_rev_sexps,buf,file)}
    function load_sexps(buf,file)
     {var _dE_=load_rev_sexps(buf,file);
      return caml_call1(Stdlib_list[9],_dE_)}
    function gen_load_sexp(my_parse,opt,_dy_,file)
     {if(opt)var sth=opt[1],strict=sth;else var strict=1;
      if(_dy_)
       var sth$0=_dy_[1],buf=sth$0;
      else
       var buf=caml_create_bytes(8192);
      var buf_len=caml_ml_bytes_length(buf),ic=caml_call1(Stdlib[79],file);
      function loop(this_parse)
       {var this_parse$0=this_parse;
        for(;;)
         {var len=caml_call4(Stdlib[84],ic,buf,0,buf_len);
          if(0 === len)
           {var match=feed_end_of_input(this_parse$0,cst$3);
            if(0 === match[0]){var sexp=match[1];return sexp}
            var
             cont_state=match[1],
             _dz_=caml_call1(Parsexp_Old_parser_cont_state[2],cont_state),
             _dA_=
              caml_call4(Stdlib_format[129],_aU_,gen_load_sexp_loc,file,_dz_);
            return caml_call1(Stdlib[2],_dA_)}
          var
           match$0=
            caml_call3(this_parse$0,0,len,caml_call1(Stdlib_bytes[42],buf));
          if(0 === match$0[0])
           {var sexp$0=match$0[1],parse_pos=match$0[2],buf_pos=parse_pos[4];
            if(strict)
             {var
               this_parse$3=mk_this_parse([0,parse_pos],my_parse),
               len$2=len - buf_pos | 0,
               this_parse$1=this_parse$3,
               pos=buf_pos,
               len$0=len$2;
              for(;;)
               {var
                 match$1=
                  caml_call3
                   (this_parse$1,pos,len$0,caml_call1(Stdlib_bytes[42],buf));
                if(0 === match$1[0])
                 {var
                   _dB_=
                    caml_call3(Stdlib_format[129],_aV_,gen_load_sexp_loc,file);
                  return caml_call1(Stdlib[2],_dB_)}
                var
                 this_parse$2=match$1[2],
                 cont_state$0=match$1[1],
                 len$1=caml_call4(Stdlib[84],ic,buf,0,buf_len);
                if(0 < len$1)
                 {var this_parse$1=this_parse$2,pos=0,len$0=len$1;continue}
                if(0 === cont_state$0)return sexp$0;
                var
                 _dC_=
                  caml_call1(Parsexp_Old_parser_cont_state[2],cont_state$0),
                 _dD_=
                  caml_call5
                   (Stdlib_format[129],
                    _aW_,
                    gen_load_sexp_loc,
                    cst_additional_incomplete_data,
                    _dC_,
                    file);
                return caml_call1(Stdlib[2],_dD_)}}
            return sexp$0}
          var this_parse$4=match$0[2],this_parse$0=this_parse$4;
          continue}}
      try
       {var sexp=loop(mk_this_parse(0,my_parse));
        caml_call1(Stdlib[93],ic);
        return sexp}
      catch(exc)
       {exc = caml_wrap_exception(exc);caml_call1(Stdlib[94],ic);throw exc}}
    function load_sexp(strict,buf,file)
     {return gen_load_sexp(parse,strict,buf,file)}
    var
     Conv_exn$0=Annot[1],
     get_sexp$0=Annot[2],
     get_range$0=Annot[3],
     sexp_of_conv$0=Annot[4],
     Annot_sexp$0=Annot[5],
     find_sexp$0=Annot[6];
    function input_rev_sexps$0(parse_pos,buf,ic)
     {return gen_input_rev_sexps(parse_str_annot,cst$4,parse_pos,buf,ic)}
    function input_sexp$0(parse_pos,ic)
     {return gen_input_sexp(parse_str_annot,parse_pos,ic)}
    function input_sexps$0(parse_pos,buf,ic)
     {var _dx_=input_rev_sexps$0(parse_pos,buf,ic);
      return caml_call1(Stdlib_list[9],_dx_)}
    function of_string$0(str)
     {return of_string_bigstring
              (cst_Annotated_of_string,
               parse_str_annot,
               cst$5,
               caml_ml_string_length,
               Stdlib_string[9],
               str)}
    function of_bigstring$0(bstr)
     {return of_string_bigstring
              (cst_Annotated_of_bigstring,
               _aQ_,
               bstr_ws_buf,
               caml_ba_dim_1,
               get_bstr_sub_str,
               bstr)}
    function load_rev_sexps$0(buf,file)
     {return gen_load_rev_sexps(input_rev_sexps$0,buf,file)}
    function load_sexps$0(buf,file)
     {var _dw_=load_rev_sexps$0(buf,file);
      return caml_call1(Stdlib_list[9],_dw_)}
    function load_sexp$0(strict,buf,file)
     {return gen_load_sexp(parse_str_annot,strict,buf,file)}
    function conv(f,annot_sexp)
     {var sexp=caml_call1(get_sexp$0,annot_sexp);
      try
       {var _dv_=[0,1025039613,caml_call1(f,sexp)];return _dv_}
      catch(e)
       {e = caml_wrap_exception(e);
        if(e[1] === Of_sexp_error)
         {var
           bad_sexp=e[3],
           exc=e[2],
           match=caml_call2(find_sexp$0,annot_sexp,bad_sexp);
          if(match)
           {var bad_annot_sexp=match[1];
            return [0,106380200,[0,exc,bad_annot_sexp]]}
          throw e}
        throw e}}
    function get_conv_exn(file,exc,annot_sexp)
     {var
       range=caml_call1(get_range$0,annot_sexp),
       match=range[1],
       col=match[2],
       line=match[1],
       loc=caml_call4(Stdlib_format[129],_aX_,file,line,col),
       _du_=caml_call1(get_sexp$0,annot_sexp);
      return [0,Of_sexp_error,[0,Annot[1],loc,exc],_du_]}
    var
     Annotated=
      [0,
       Conv_exn$0,
       get_sexp$0,
       get_range$0,
       sexp_of_conv$0,
       Annot_sexp$0,
       find_sexp$0,
       parse_str_annot,
       _aQ_,
       input_rev_sexps$0,
       input_sexp$0,
       input_sexps$0,
       of_string$0,
       of_bigstring$0,
       load_rev_sexps$0,
       load_sexps$0,
       load_sexp$0,
       conv,
       get_conv_exn];
    function load_sexp_conv(opt,_dq_,file,f)
     {if(opt)var sth=opt[1],strict=sth;else var strict=1;
      if(_dq_)
       var sth$0=_dq_[1],buf=sth$0;
      else
       var buf=caml_create_bytes(8192);
      var sexp=load_sexp([0,strict],[0,buf],file);
      try
       {var _ds_=[0,1025039613,caml_call1(f,sexp)];return _ds_}
      catch(_dt_)
       {_dt_ = caml_wrap_exception(_dt_);
        if(_dt_[1] === Of_sexp_error)
         {var _dr_=caml_call3(Annotated[16],[0,strict],[0,buf],file);
          return caml_call2(Annotated[17],f,_dr_)}
        throw _dt_}}
    function raise_conv_exn(file,param)
     {if(1025039613 <= param[1]){var res=param[2];return res}
      var match=param[2],annot_sexp=match[2],exc=match[1];
      throw caml_call3(Annotated[18],file,exc,annot_sexp)}
    function load_sexp_conv_exn(strict,buf,file,f)
     {return raise_conv_exn(file,load_sexp_conv(strict,buf,file,f))}
    function load_sexps_conv(opt,file,f)
     {if(opt)var sth=opt[1],buf=sth;else var buf=caml_create_bytes(8192);
      var rev_sexps=load_rev_sexps([0,buf],file);
      try
       {var
         _do_=function(sexp){return [0,1025039613,caml_call1(f,sexp)]},
         _dp_=caml_call2(Stdlib_list[21],_do_,rev_sexps);
        return _dp_}
      catch(e)
       {e = caml_wrap_exception(e);
        if(e[1] === Of_sexp_error)
         {var rev_annot_sexps=caml_call2(Annotated[14],[0,buf],file);
          if(rev_annot_sexps)
           {var
             _dn_=
              function(annot_sexp)
               {return caml_call2(Annotated[17],f,annot_sexp)};
            return caml_call2(Stdlib_list[21],_dn_,rev_annot_sexps)}
          throw e}
        throw e}}
    function load_sexps_conv_exn(opt,file,f)
     {if(opt)var sth=opt[1],buf=sth;else var buf=caml_create_bytes(8192);
      var rev_sexps=load_rev_sexps([0,buf],file);
      try
       {var _dm_=caml_call2(Stdlib_list[21],f,rev_sexps);return _dm_}
      catch(e)
       {e = caml_wrap_exception(e);
        if(e[1] === Of_sexp_error)
         {var rev_annot_sexps=caml_call2(Annotated[14],[0,buf],file);
          if(rev_annot_sexps)
           {var
             _dl_=
              function(annot_sexp)
               {return raise_conv_exn
                        (file,caml_call2(Annotated[17],f,annot_sexp))};
            return caml_call2(Stdlib_list[21],_dl_,rev_annot_sexps)}
          throw e}
        throw e}}
    function gen_of_string_conv(of_string,annot_of_string,str,f)
     {var sexp=caml_call1(of_string,str);
      try
       {var _dj_=[0,1025039613,caml_call1(f,sexp)];return _dj_}
      catch(_dk_)
       {_dk_ = caml_wrap_exception(_dk_);
        if(_dk_[1] === Of_sexp_error)
         {var _di_=caml_call1(annot_of_string,str);
          return caml_call2(Annotated[17],f,_di_)}
        throw _dk_}}
    function of_string_conv(str,f)
     {return gen_of_string_conv(of_string,Annotated[12],str,f)}
    function of_bigstring_conv(bstr,f)
     {return gen_of_string_conv(of_bigstring,Annotated[13],bstr,f)}
    var E=[248,cst_Sexplib_Pre_sexp_Of_string,caml_fresh_oo_id(0)];
    function _aY_(param)
     {if(param[1] === E)
       {var osce=param[2];
        return sexp_conversion_error_message
                ([0,osce[2]],0,[0,osce[3]],0,osce[1])}
      throw [0,Assert_failure,_aZ_]}
    caml_call3(include$2[51][2],_a0_,E,_aY_);
    var Of_string_conv_exn=[0,E];
    function gen_of_string_conv_exn(of_string,str,f)
     {var sexp=caml_call1(of_string,str);
      try
       {var _dh_=caml_call1(f,sexp);return _dh_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Of_sexp_error)
         {var sub_sexp=exn[3],exc=exn[2];
          throw [0,Of_string_conv_exn[1],[0,exc,sexp,sub_sexp]]}
        throw exn}}
    function of_string_conv_exn(str,f)
     {return gen_of_string_conv_exn(of_string,str,f)}
    function of_bigstring_conv_exn(bstr,f)
     {return gen_of_string_conv_exn(of_bigstring,bstr,f)}
    function is_unit(param){if(1 === param[0] && ! param[1])return 1;return 0}
    function search_physical(sexp,contained)
     {if(sexp === contained)return 398750242;
      if(0 === sexp[0])return -358247754;
      var lst=sexp[1],i=0,param=lst;
      for(;;)
       {if(param)
         {var t=param[2],h=param[1],res=search_physical(h,contained);
          if(typeof res === "number" && ! (398750242 <= res))
           {var i$0=i + 1 | 0,i=i$0,param=t;continue}
          return [0,4003188,[0,i,res]]}
        return -358247754}}
    function subst_found(sexp,subst,param)
     {if(typeof param === "number")return subst;
      var match=param[2],found=match[2],pos=match[1];
      if(0 === sexp[0])
       return caml_call1(Stdlib[2],cst_Sexplib_Sexp_subst_found_a);
      var lst=sexp[1],acc=0,pos$0=pos,param$0=lst;
      for(;;)
       {if(param$0)
         {var h=param$0[1],t=param$0[2];
          if(0 === pos$0)
           {var t$0=param$0[2],_dg_=[0,subst_found(h,subst,found),t$0];
            return [1,caml_call2(Stdlib_list[12],acc,_dg_)]}
          var
           pos$1=pos$0 - 1 | 0,
           acc$0=[0,h,acc],
           acc=acc$0,
           pos$0=pos$1,
           param$0=t;
          continue}
        return caml_call1(Stdlib[2],cst_Sexplib_Sexp_subst_found_s)}}
    var
     include$7=
      [0,
       t_sexp_grammar,
       equal,
       compare,
       Not_found_s,
       Of_sexp_error,
       message,
       default_indent,
       pp_hum,
       pp_hum_indent,
       pp_mach,
       pp,
       to_string_hum,
       to_string_mach,
       to_string,
       of_float_style,
       of_int_style,
       Raw_grammar,
       size,
       buffer,
       to_buffer,
       to_buffer_hum,
       to_buffer_mach,
       to_buffer_gen,
       mach_maybe_esc_str,
       must_escape,
       esc_str,
       with_new_buffer,
       output_hum,
       output_hum_indent,
       output,
       output,
       Tmp_file,
       save_of_output,
       output_sexp_nl,
       save_hum,
       save,
       save,
       output_sexps_nl,
       save_sexps_hum,
       save_sexps,
       save_sexps,
       scan_sexp,
       scan_sexp_opt,
       scan_sexps,
       scan_rev_sexps,
       get_main_buf,
       scan_fold_sexps,
       scan_iter_sexps,
       scan_sexps_conv,
       sexp_conversion_error_message,
       Annot,
       Parse_pos,
       Parse_error,
       Parser_output,
       Make_parser,
       String_single_sexp,
       parse_str,
       parse,
       String_single_annot,
       parse_str_annot,
       Bigstring_single_sexp,
       parse_bigstring,
       Bigstring_single_annot,
       _aQ_,
       mk_this_parse,
       feed_end_of_input,
       gen_input_sexp,
       input_sexp,
       gen_input_rev_sexps,
       input_rev_sexps,
       input_sexps,
       of_string_bigstring,
       of_string,
       get_bstr_sub_str,
       bstr_ws_buf,
       of_bigstring,
       gen_load_rev_sexps,
       load_rev_sexps,
       load_sexps,
       gen_load_sexp_loc,
       gen_load_sexp,
       load_sexp,
       Annotated,
       load_sexp_conv,
       raise_conv_exn,
       load_sexp_conv_exn,
       load_sexps_conv,
       load_sexps_conv_exn,
       gen_of_string_conv,
       of_string_conv,
       of_bigstring_conv,
       Of_string_conv_exn,
       gen_of_string_conv_exn,
       of_string_conv_exn,
       of_bigstring_conv_exn,
       unit,
       is_unit,
       search_physical,
       subst_found];
    caml_register_global(168,include$7,"Sexplib__Pre_sexp");
    function iter(t,f){return caml_call2(Stdlib_list[17],f,t)}
    function map$0(t,f)
     {var _df_=caml_call2(Stdlib_list[21],f,t);
      return caml_call1(Stdlib_list[9],_df_)}
    var List=[0,iter,map$0],sexp_of_pos=_c_[1],Lexer=[0,main$0];
    function return$0(a,putc,st){return a}
    function bind(m,f,putc,st)
     {return caml_call3(f,caml_call2(m,putc,st),putc,st)}
    function run(putc,m){return caml_call2(m,putc,[0,_c_[2],_b_[2],0,0])}
    function emit_char(putc,st,c)
     {var match=st[2],col=match[2],row=match[1];
      caml_call1(putc,c);
      return 10 === c
              ?(st[2] = [0,1 + row | 0,1],0)
              :(st[2] = [0,row,1 + col | 0],0)}
    function emit_string(putc,st,str)
     {var n=caml_ml_string_length(str),_dd_=n - 1 | 0,_dc_=0;
      if(! (_dd_ < 0))
       {var i=_dc_;
        for(;;)
         {emit_char(putc,st,caml_string_get(str,i));
          var _de_=i + 1 | 0;
          if(_dd_ !== i){var i=_de_;continue}
          break}}
      return 0}
    function emit_chars(putc,st,c,n)
     {return emit_string(putc,st,caml_call2(Stdlib_string[1],n,c))}
    function advance(putc,anchor,st,delta,unescaped_atom,line_comment)
     {var
       _c9_=st[1],
       _c__=caml_call2(_b_[5],anchor,delta),
       new_pos=caml_call2(_b_[5],_c__,_c9_);
      if(unescaped_atom)
       {var _c$_=st[3];
        if(_c$_)
         var
          match=_c$_[1],
          prev_unescaped=match[2],
          immed_after=match[1],
          _da_=caml_equal(new_pos,immed_after),
          prev_unescaped$0=_da_?prev_unescaped:_da_,
          prev_unescaped$1=prev_unescaped$0;
        else
         var prev_unescaped$1=0;
        var need_to_leave_room_between_two=prev_unescaped$1}
      else
       var need_to_leave_room_between_two=unescaped_atom;
      var
       need_to_clear_line_comment=new_pos[1] === st[4]?1:0,
       _db_=1 - caml_call2(_b_[7],new_pos,st[2]),
       need_to_reposition=
        _db_
        ||
        need_to_clear_line_comment
        ||
        need_to_leave_room_between_two;
      if(need_to_reposition)
       var
        new_row=1 + st[2][1] | 0,
        row_delta=new_row - new_pos[1] | 0,
        new_pos$0=[0,new_row,new_pos[2]],
        row_delta$0=row_delta;
      else
       var new_pos$0=new_pos,row_delta$0=0;
      if(st[2][1] < new_pos$0[1])
       {var n=new_pos$0[1] - st[2][1] | 0;emit_chars(putc,st,10,n)}
      if(st[2][2] < new_pos$0[2])
       {var n$0=new_pos$0[2] - st[2][2] | 0;emit_chars(putc,st,32,n$0)}
      if(caml_equal(new_pos$0,st[2]))
       {if(line_comment)st[4] = st[2][1];
        st[1] = [0,st[1][1] + row_delta$0 | 0,st[1][2]];
        return 0}
      throw [0,Assert_failure,_a1_]}
    function render_toc(putc,anchor,st,param)
     {if(0 === param[0]){var t=param[1];return render_t(putc,anchor,st,t)}
      var c=param[1];
      return render_c(putc,anchor,st,c)}
    function render_c(putc,anchor,st,param)
     {if(0 === param[0])
       {var
         text=param[2],
         delta=param[1],
         _c6_=0 < caml_ml_string_length(text)?1:0,
         line_comment=_c6_?59 === caml_string_get(text,0)?1:0:_c6_;
        advance(putc,anchor,st,delta,0,line_comment);
        return emit_string(putc,st,text)}
      var t=param[3],cs=param[2],delta$0=param[1];
      advance(putc,anchor,st,delta$0,0,0);
      emit_string(putc,st,cst$7);
      function _c7_(_c8_){return render_c(putc,anchor,st,_c8_)}
      caml_call2(List[1],cs,_c7_);
      return render_t(putc,anchor,st,t)}
    function render_t(putc,anchor,st,t)
     {if(0 === t[0])
       {var fmt_text=t[3],text=t[2],delta=t[1],switch$0=0;
        if(fmt_text)
         {var _c4_=fmt_text[1];
          if(runtime.caml_string_notequal(_c4_,cst$6))
           {var fmt_text$0=_c4_;switch$0 = 1}}
        if(! switch$0)var fmt_text$0=caml_call1(mach_maybe_esc_str,text);
        var unescaped=34 !== caml_string_get(fmt_text$0,0)?1:0;
        advance(putc,anchor,st,delta,unescaped,0);
        emit_string(putc,st,fmt_text$0);
        st[3] = [0,[0,st[2],unescaped]];
        return 0}
      var end_delta=t[3],tocs=t[2],start_delta=t[1];
      advance(putc,anchor,st,start_delta,0,0);
      var child_anchor=caml_call2(_b_[6],st[2],st[1]);
      emit_char(putc,st,40);
      function _c5_(toc){return render_toc(putc,child_anchor,st,toc)}
      caml_call2(List[1],tocs,_c5_);
      advance(putc,anchor,st,end_delta,0,0);
      emit_char(putc,st,41);
      return 0}
    function render(asexp,putc,st){return render_toc(putc,_b_[2],st,asexp)}
    var
     Render=
      [0,
       return$0,
       bind,
       run,
       emit_char,
       emit_string,
       emit_chars,
       advance,
       render_t,
       render_toc,
       render_c,
       render,
       render];
    function forget_t$0(counter,t,k)
     {if(0 === t[0]){var x=t[2];return caml_call1(k,[0,x])}
      var tocs=t[2];
      function _c3_(xs){return caml_call1(k,[1,xs])}
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return forget_tocs$0(counter$0,tocs,_c3_)}
      return caml_trampoline_return(forget_tocs$0,[0,tocs,_c3_])}
    function forget_tocs$0(counter,tocs,k)
     {if(tocs)
       {var
         tocs$0=tocs[2],
         toc=tocs[1],
         _c2_=
          function(param)
           {if(param)
             {var x=param[1];
              return forget_tocs
                      (tocs$0,function(xs){return caml_call1(k,[0,x,xs])})}
            return forget_tocs(tocs$0,k)};
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return forget_toc$0(counter$0,toc,_c2_)}
        return caml_trampoline_return(forget_toc$0,[0,toc,_c2_])}
      return caml_call1(k,0)}
    function forget_toc$0(counter,toc,k)
     {if(0 === toc[0])
       {var t=toc[1],_c1_=function(x){return caml_call1(k,[0,x])};
        if(counter < 50)
         {var counter$0=counter + 1 | 0;return forget_t$0(counter$0,t,_c1_)}
        return caml_trampoline_return(forget_t$0,[0,t,_c1_])}
      return caml_call1(k,0)}
    function forget_t(t,k){return caml_trampoline(forget_t$0(0,t,k))}
    function forget_tocs(tocs,k)
     {return caml_trampoline(forget_tocs$0(0,tocs,k))}
    function forget_toc(toc,k){return caml_trampoline(forget_toc$0(0,toc,k))}
    var Cps=[0,forget_t,forget_toc,forget_tocs];
    function t(x){function _c0_(y){return y}return caml_call2(Cps[1],x,_c0_)}
    function t_or_comment(x)
     {function _cZ_(y){return y}return caml_call2(Cps[2],x,_cZ_)}
    function t_or_comments(x)
     {function _cY_(y){return y}return caml_call2(Cps[3],x,_cY_)}
    var
     Forget=[0,Cps,t,t_or_comment,t_or_comments],
     Sexplib_Sexp_with_layout=
      [0,
       List,
       Make$0,
       Parsed$0,
       sexp_of_t$0,
       sexp_of_comment,
       sexp_of_t_or_comment,
       relativize,
       sexp_of_pos,
       Lexer,
       Render,
       Forget];
    caml_register_global
     (169,Sexplib_Sexp_with_layout,"Sexplib__Sexp_with_layout");
    var
     _a2_=
      [0,
       sexp_of_pos,
       sexp_of_t$0,
       sexp_of_comment,
       sexp_of_t_or_comment,
       [0,Forget[2],Forget[3],Forget[4]],
       [0,Render[1],Render[2],Render[12],Render[3]],
       [0,sexp$0,sexp_opt$0,sexps$0,rev_sexps$0,sexps_abs],
       Lexer];
    function _a3_(_cX_){return _cX_}
    function _a4_(_cW_){return _cW_}
    var
     Sexplib_Sexp=
      [0,
       compare,
       equal,
       default_indent,
       size,
       scan_sexp,
       scan_sexps,
       scan_rev_sexps,
       scan_sexp_opt,
       scan_iter_sexps,
       scan_fold_sexps,
       scan_sexps_conv,
       Parse_pos,
       [0,Parsexp_Old_parser_cont_state[2]],
       [0,
        Annotated[4],
        Annotated[1],
        Annotated[2],
        Annotated[3],
        Annotated[6],
        Annotated[7],
        Annotated[8],
        Annotated[10],
        Annotated[11],
        Annotated[9],
        Annotated[16],
        Annotated[15],
        Annotated[14],
        Annotated[12],
        Annotated[13],
        Annotated[17],
        Annotated[18]],
       Parse_error,
       parse,
       parse_bigstring,
       input_sexp,
       input_sexps,
       input_rev_sexps,
       load_sexp,
       load_sexps,
       load_rev_sexps,
       load_sexp_conv,
       load_sexp_conv_exn,
       load_sexps_conv,
       load_sexps_conv_exn,
       output_hum,
       output_hum_indent,
       output,
       output,
       save_hum,
       save,
       save,
       save_sexps_hum,
       save_sexps,
       save_sexps,
       pp_hum,
       pp_hum_indent,
       pp_mach,
       pp,
       Of_string_conv_exn,
       of_string,
       of_string_conv,
       of_string_conv_exn,
       of_bigstring,
       of_bigstring_conv,
       of_bigstring_conv_exn,
       to_string_hum,
       to_string_mach,
       to_string,
       to_buffer_hum,
       to_buffer_mach,
       to_buffer,
       to_buffer_gen,
       unit,
       is_unit,
       _a4_,
       _a3_,
       t_sexp_grammar,
       search_physical,
       subst_found,
       _a2_];
    caml_register_global(170,Sexplib_Sexp,"Sexplib__Sexp");
    var Sexplib_Sexp_intf=[0];
    caml_register_global(171,Sexplib_Sexp_intf,"Sexplib__Sexp_intf");
    var
     _a9_=include$2[5],
     _a__=include$2[6],
     _a$_=include$2[7],
     _bb_=include$2[9],
     _bc_=include$2[10],
     _bd_=include$2[11],
     _be_=include$2[12],
     _bf_=include$2[13],
     _bg_=include$2[14],
     _bh_=include$2[15],
     _bi_=include$2[16],
     _bj_=include$2[17],
     _bm_=include$2[20],
     _bn_=include$2[21],
     _bo_=include$2[22],
     _bt_=include$2[27],
     _bv_=include$2[29],
     _bw_=include$2[30],
     _bx_=include$2[31],
     _bz_=include$2[33],
     _bA_=include$2[34],
     _bB_=include$2[35],
     _bC_=include$2[36],
     _bD_=include$2[37],
     _bE_=include$2[38],
     _bF_=include$2[39],
     _bG_=include$2[40],
     _bH_=include$2[41],
     _bK_=include$2[44],
     _bL_=include$2[45],
     _bM_=include$2[46],
     _bP_=include$2[49],
     _bR_=include$2[51],
     _a5_=include$2[1],
     _a6_=include$2[2],
     _a7_=include$2[3],
     _a8_=include$2[4],
     _ba_=include$2[8],
     _bk_=include$2[18],
     _bl_=include$2[19],
     _bp_=include$2[23],
     _bq_=include$2[24],
     _br_=include$2[25],
     _bs_=include$2[26],
     _bu_=include$2[28],
     _by_=include$2[32],
     _bI_=include$2[42],
     _bJ_=include$2[43],
     _bN_=include$2[47],
     _bO_=include$2[48],
     _bQ_=include$2[50];
    function sexp_of_float_vec(vec)
     {var lst_ref=[0,0],_cT_=caml_ba_dim_1(vec);
      if(! (_cT_ < 1))
       {var i=_cT_;
        for(;;)
         {var _cU_=lst_ref[1];
          lst_ref[1] = [0,caml_call1(_bd_,caml_ba_get_1(vec,i)),_cU_];
          var _cV_=i - 1 | 0;
          if(1 !== i){var i=_cV_;continue}
          break}}
      return [1,lst_ref[1]]}
    function sexp_of_bigstring(bstr)
     {var
       n=caml_ba_dim_1(bstr),
       str=caml_create_bytes(n),
       _cR_=n - 1 | 0,
       _cQ_=0;
      if(! (_cR_ < 0))
       {var i=_cQ_;
        for(;;)
         {caml_bytes_set(str,i,caml_ba_get_1(bstr,i));
          var _cS_=i + 1 | 0;
          if(_cR_ !== i){var i=_cS_;continue}
          break}}
      return [0,caml_call1(Stdlib_bytes[42],str)]}
    function sexp_of_float32_vec(vec){return sexp_of_float_vec(vec)}
    function sexp_of_float64_vec(vec){return sexp_of_float_vec(vec)}
    function sexp_of_vec(vec){return sexp_of_float_vec(vec)}
    function sexp_of_float_mat(mat)
     {var m=caml_ba_dim_1(mat),n=runtime.caml_ba_dim_2(mat),lst_ref=[0,0];
      if(! (n < 1))
       {var row=n;
        for(;;)
         {if(! (m < 1))
           {var col=m;
            for(;;)
             {var _cO_=lst_ref[1];
              lst_ref[1]
              =
              [0,caml_call1(_bd_,runtime.caml_ba_get_2(mat,col,row)),_cO_];
              var _cP_=col - 1 | 0;
              if(1 !== col){var col=_cP_;continue}
              break}}
          var _cN_=row - 1 | 0;
          if(1 !== row){var row=_cN_;continue}
          break}}
      var _cL_=lst_ref[1],_cM_=[0,caml_call1(_bc_,n),_cL_];
      return [1,[0,caml_call1(_bc_,m),_cM_]]}
    function sexp_of_float32_mat(mat){return sexp_of_float_mat(mat)}
    function sexp_of_float64_mat(mat){return sexp_of_float_mat(mat)}
    function sexp_of_mat(mat){return sexp_of_float_mat(mat)}
    function bigstring_of_sexp(sexp)
     {if(0 === sexp[0])
       {var
         str=sexp[1],
         len=caml_ml_string_length(str),
         bstr=
          caml_call3
           (Stdlib_bigarray[19][1],
            Stdlib_bigarray[13],
            Stdlib_bigarray[15],
            len),
         _cJ_=len - 1 | 0,
         _cI_=0;
        if(! (_cJ_ < 0))
         {var i=_cI_;
          for(;;)
           {caml_ba_set_1(bstr,i,caml_string_get(str,i));
            var _cK_=i + 1 | 0;
            if(_cJ_ !== i){var i=_cK_;continue}
            break}}
        return bstr}
      return caml_call2(_bt_,cst_bigstring_of_sexp_atom_nee,sexp)}
    function float_vec_of_sexp(empty_float_vec,create_float_vec,sexp)
     {if(0 === sexp[0])
       return caml_call2(_bt_,cst_float_vec_of_sexp_list_nee,sexp);
      var _cH_=sexp[1];
      if(_cH_)
       {var
         len=caml_call1(Stdlib_list[1],_cH_),
         res=caml_call1(create_float_vec,len),
         i=1,
         param=_cH_;
        for(;;)
         {if(param)
           {var t=param[2],h=param[1];
            caml_ba_set_1(res,i,caml_call1(_bB_,h));
            var i$0=i + 1 | 0,i=i$0,param=t;
            continue}
          return res}}
      return empty_float_vec}
    var
     create_float32_vec=
      caml_call2
       (Stdlib_bigarray[19][1],Stdlib_bigarray[1],Stdlib_bigarray[16]),
     create_float64_vec=
      caml_call2
       (Stdlib_bigarray[19][1],Stdlib_bigarray[2],Stdlib_bigarray[16]),
     empty_float32_vec=caml_call1(create_float32_vec,0),
     empty_float64_vec=caml_call1(create_float64_vec,0);
    function float32_vec_of_sexp(_cG_)
     {return float_vec_of_sexp(empty_float32_vec,create_float32_vec,_cG_)}
    function float64_vec_of_sexp(_cF_)
     {return float_vec_of_sexp(empty_float64_vec,create_float64_vec,_cF_)}
    function vec_of_sexp(_cE_)
     {return float_vec_of_sexp(empty_float64_vec,create_float64_vec,_cE_)}
    function check_too_much_data(sexp,data,res)
     {return 0 === data
              ?res
              :caml_call2(_bt_,cst_float_mat_of_sexp_too_much,sexp)}
    function float_mat_of_sexp(create_float_mat,sexp)
     {if(0 === sexp[0])
       return caml_call2(_bt_,cst_float_mat_of_sexp_list_nee,sexp);
      var _cC_=sexp[1];
      if(_cC_)
       {var _cD_=_cC_[2];
        if(_cD_)
         {var
           data=_cD_[2],
           sn=_cD_[1],
           sm=_cC_[1],
           m=caml_call1(_bA_,sm),
           n=caml_call1(_bA_,sn),
           res=caml_call2(create_float_mat,m,n);
          if(0 !== m && 0 !== n)
           {var col=1,data$0=data;
            a:
            for(;;)
             {var
               vec=caml_call2(Stdlib_bigarray[20][6],res,col),
               row=1,
               param=data$0;
              for(;;)
               {if(param)
                 {var t=param[2],h=param[1];
                  caml_ba_set_1(vec,row,caml_call1(_bB_,h));
                  if(row === m)
                   {if(col === n)return check_too_much_data(sexp,t,res);
                    var col$0=col + 1 | 0,col=col$0,data$0=t;
                    continue a}
                  var row$0=row + 1 | 0,row=row$0,param=t;
                  continue}
                return caml_call2(_bt_,cst_float_mat_of_sexp_not_enou,sexp)}}}
          return check_too_much_data(sexp,data,res)}}
      return caml_call2(_bt_,cst_float_mat_of_sexp_list_too,sexp)}
    var
     create_float32_mat=
      caml_call2
       (Stdlib_bigarray[20][1],Stdlib_bigarray[1],Stdlib_bigarray[16]),
     create_float64_mat=
      caml_call2
       (Stdlib_bigarray[20][1],Stdlib_bigarray[2],Stdlib_bigarray[16]);
    function float32_mat_of_sexp(_cB_)
     {return float_mat_of_sexp(create_float32_mat,_cB_)}
    function float64_mat_of_sexp(_cA_)
     {return float_mat_of_sexp(create_float64_mat,_cA_)}
    function mat_of_sexp(_cz_)
     {return float_mat_of_sexp(create_float64_mat,_cz_)}
    function string_of_of_sexp_of(to_sexp,x)
     {return caml_call1(to_string,caml_call1(to_sexp,x))}
    function of_string_of_of_sexp(of_sexp,s)
     {try
       {var sexp=of_string(s),_cy_=caml_call1(of_sexp,sexp);return _cy_}
      catch(e)
       {e = caml_wrap_exception(e);
        var
         _cw_=caml_call2(to_string_hum,0,caml_call1(_bP_,e)),
         _cx_=caml_call3(Stdlib_printf[4],_bS_,s,_cw_);
        return caml_call1(Stdlib[2],_cx_)}}
    var
     Sexplib_Conv=
      [0,
       _a5_,
       _a6_,
       _a7_,
       _a8_,
       _a9_,
       _a__,
       _a$_,
       _ba_,
       _bb_,
       _bc_,
       _bd_,
       _be_,
       _bf_,
       _bg_,
       _bh_,
       _bi_,
       _bj_,
       _bk_,
       _bl_,
       _bm_,
       _bn_,
       _bo_,
       _bp_,
       _bq_,
       _br_,
       _bs_,
       _bt_,
       _bu_,
       _bv_,
       _bw_,
       _bx_,
       _by_,
       _bz_,
       _bA_,
       _bB_,
       _bC_,
       _bD_,
       _bE_,
       _bF_,
       _bG_,
       _bH_,
       _bI_,
       _bJ_,
       _bK_,
       _bL_,
       _bM_,
       _bN_,
       _bO_,
       _bP_,
       _bQ_,
       _bR_,
       sexp_of_bigstring,
       sexp_of_float32_vec,
       sexp_of_float64_vec,
       sexp_of_vec,
       sexp_of_float32_mat,
       sexp_of_float64_mat,
       sexp_of_mat,
       string_of_of_sexp_of,
       bigstring_sexp_grammar,
       bigstring_of_sexp,
       float64_vec_sexp_grammar,
       float32_vec_of_sexp,
       float64_vec_sexp_grammar,
       float64_vec_of_sexp,
       float64_vec_sexp_grammar,
       vec_of_sexp,
       mat_sexp_grammar,
       float32_mat_of_sexp,
       mat_sexp_grammar,
       float64_mat_of_sexp,
       mat_sexp_grammar,
       mat_of_sexp,
       of_string_of_of_sexp];
    caml_register_global(172,Sexplib_Conv,"Sexplib__Conv");
    var
     create$2=Stdlib_hashtbl[1],
     clear$1=Stdlib_hashtbl[2],
     reset=Stdlib_hashtbl[3],
     copy=Stdlib_hashtbl[4],
     add$0=Stdlib_hashtbl[5],
     find=Stdlib_hashtbl[6],
     find_opt=Stdlib_hashtbl[7],
     find_all=Stdlib_hashtbl[8],
     mem=Stdlib_hashtbl[9],
     remove=Stdlib_hashtbl[10],
     replace=Stdlib_hashtbl[11],
     iter$0=Stdlib_hashtbl[12],
     filter_map_inplace=Stdlib_hashtbl[13],
     fold=Stdlib_hashtbl[14],
     length$3=Stdlib_hashtbl[15],
     randomize=Stdlib_hashtbl[16],
     is_randomized=Stdlib_hashtbl[17],
     rebuild=Stdlib_hashtbl[18],
     stats=Stdlib_hashtbl[19],
     to_seq=Stdlib_hashtbl[20],
     to_seq_keys=Stdlib_hashtbl[21],
     to_seq_values=Stdlib_hashtbl[22],
     add_seq=Stdlib_hashtbl[23],
     replace_seq=Stdlib_hashtbl[24],
     of_seq=Stdlib_hashtbl[25],
     Make$2=Stdlib_hashtbl[26],
     MakeSeeded=Stdlib_hashtbl[27],
     hash=Stdlib_hashtbl[28],
     seeded_hash=Stdlib_hashtbl[29],
     hash_param=Stdlib_hashtbl[30],
     seeded_hash_param=Stdlib_hashtbl[31],
     Hashtbl=
      [0,
       create$2,
       clear$1,
       reset,
       copy,
       add$0,
       find,
       find_opt,
       find_all,
       mem,
       remove,
       replace,
       iter$0,
       filter_map_inplace,
       fold,
       length$3,
       randomize,
       is_randomized,
       rebuild,
       stats,
       to_seq,
       to_seq_keys,
       to_seq_values,
       add_seq,
       replace_seq,
       of_seq,
       Make$2,
       MakeSeeded,
       hash,
       seeded_hash,
       hash_param,
       seeded_hash_param,
       _bo_,
       _bM_],
     Undefined=Stdlib_lazy[1],
     force_val=Stdlib_lazy[2],
     from_fun=Stdlib_lazy[3],
     from_val=Stdlib_lazy[4],
     is_val=Stdlib_lazy[5],
     lazy_from_fun=Stdlib_lazy[6],
     lazy_from_val=Stdlib_lazy[7],
     lazy_is_val=Stdlib_lazy[8],
     t_sexp_grammar$0=Sexplib0_Sexp[19][1][1][12],
     Lazy=
      [0,
       Undefined,
       force_val,
       from_fun,
       from_val,
       is_val,
       lazy_from_fun,
       lazy_from_val,
       lazy_is_val,
       _bG_,
       _bi_,
       t_sexp_grammar$0],
     unit_sexp_grammar=Sexplib0_Sexp[19][1][1][1],
     bool_sexp_grammar=Sexplib0_Sexp[19][1][1][2],
     string_sexp_grammar=Sexplib0_Sexp[19][1][1][3],
     char_sexp_grammar=Sexplib0_Sexp[19][1][1][5],
     int_sexp_grammar=Sexplib0_Sexp[19][1][1][6],
     float_sexp_grammar=Sexplib0_Sexp[19][1][1][7],
     int32_sexp_grammar=Sexplib0_Sexp[19][1][1][8],
     int64_sexp_grammar=Sexplib0_Sexp[19][1][1][9],
     nativeint_sexp_grammar=Sexplib0_Sexp[19][1][1][10],
     ref_sexp_grammar=Sexplib0_Sexp[19][1][1][11],
     lazy_t_sexp_grammar=Sexplib0_Sexp[19][1][1][12],
     option_sexp_grammar=Sexplib0_Sexp[19][1][1][13],
     list_sexp_grammar=Sexplib0_Sexp[19][1][1][14],
     array_sexp_grammar=Sexplib0_Sexp[19][1][1][15],
     exn_sexp_grammar=Sexplib0_Sexp[3],
     Sexplib_Std=
      [0,
       Hashtbl,
       Lazy,
       _a9_,
       _bv_,
       unit_sexp_grammar,
       _a__,
       _bw_,
       bool_sexp_grammar,
       _a$_,
       _bx_,
       string_sexp_grammar,
       _bb_,
       _bz_,
       char_sexp_grammar,
       _bc_,
       _bA_,
       int_sexp_grammar,
       _bd_,
       _bB_,
       float_sexp_grammar,
       _be_,
       _bC_,
       int32_sexp_grammar,
       _bf_,
       _bD_,
       int64_sexp_grammar,
       _bg_,
       _bE_,
       nativeint_sexp_grammar,
       _bh_,
       _bF_,
       ref_sexp_grammar,
       _bi_,
       _bG_,
       lazy_t_sexp_grammar,
       _bj_,
       _bH_,
       option_sexp_grammar,
       _bm_,
       _bK_,
       list_sexp_grammar,
       _bn_,
       _bL_,
       array_sexp_grammar,
       _bP_,
       exn_sexp_grammar];
    caml_register_global(175,Sexplib_Std,"Sexplib__Std");
    function illegal_atom(loc,sexp)
     {var
       _cu_=caml_call1(to_string,sexp),
       _cv_=caml_call3(Stdlib_format[129],_bT_,loc,_cu_);
      return caml_call1(Stdlib[2],_cv_)}
    function extract_pos_lst(loc,sexp,ix,param)
     {var acc=0,n=ix,param$0=param;
      for(;;)
       {if(param$0)
         {var t=param$0[2],h=param$0[1];
          if(0 === n)
           {var
             subst=
              function(param)
               {if(param)
                 {var x=param[1];
                  return caml_call2(Stdlib_list[12],acc,[0,x,t])}
                return caml_call2(Stdlib_list[12],acc,t)};
            return [0,subst,h]}
          var n$0=n - 1 | 0,acc$0=[0,h,acc],acc=acc$0,n=n$0,param$0=t;
          continue}
        var
         sexp_str=caml_call1(to_string,sexp),
         _ct_=caml_call4(Stdlib_format[129],_bU_,loc,ix,sexp_str);
        return caml_call1(Stdlib[2],_ct_)}}
    function extract_pos(n,sexp)
     {if(0 === sexp[0])return illegal_atom(cst_extract_pos,sexp);
      var
       lst=sexp[1],
       match=extract_pos_lst(cst_extract_pos$0,sexp,n,lst),
       el=match[2],
       subst=match[1];
      return [0,function(x){return [1,caml_call1(subst,x)]},el]}
    function extract_match(tag,arg_ix,sexp)
     {if(0 === sexp[0])return illegal_atom(cst_extract_match,sexp);
      var _cq_=sexp[1];
      if(_cq_)
       {var _cr_=_cq_[1];
        if(0 === _cr_[0])
         {var args=_cq_[2],str=_cr_[1];
          if(caml_string_equal(str,tag))
           {var
             match=extract_pos_lst(cst_extract_match$0,[1,args],arg_ix,args),
             el=match[2],
             subst=match[1];
            return [0,
                    function(maybe_x)
                     {return [1,[0,_cr_,caml_call1(subst,maybe_x)]]},
                    el]}}}
      var
       sexp_str=caml_call1(to_string,sexp),
       _cs_=caml_call2(Stdlib[28],cst_Path_extract_match_unexpec,sexp_str);
      return caml_call1(Stdlib[2],_cs_)}
    function extract_rec(key,sexp)
     {if(0 === sexp[0])return illegal_atom(cst_extract_rec,sexp);
      var lst=sexp[1],acc=0,param=lst;
      for(;;)
       {if(param)
         {var _cl_=param[1];
          if(1 === _cl_[0])
           {var _cm_=_cl_[1];
            if(_cm_)
             {var _cn_=_cm_[1];
              if(0 === _cn_[0])
               {var _co_=_cm_[2];
                if(_co_ && ! _co_[2])
                 {var rest=param[2],v=_co_[1],str=_cn_[1];
                  if(caml_string_equal(str,key))
                   {var
                     subst=
                      function(x)
                       {return [1,
                                caml_call2
                                 (Stdlib_list[12],acc,[0,[1,[0,_cn_,[0,x,0]]],rest])]};
                    return [0,subst,v]}}}}}
          var param$0=param[2],acc$0=[0,_cl_,acc],acc=acc$0,param=param$0;
          continue}
        var
         sexp_str=caml_call1(to_string,sexp),
         _cp_=caml_call3(Stdlib_format[129],_bV_,key,sexp_str);
        return caml_call1(Stdlib[2],_cp_)}}
    function id(x){return x}
    function subst_option(param,rest)
     {var
       el=param[2],
       sup_subst=param[1],
       match=subst_path(el,rest),
       sub_el=match[2],
       sub_subst=match[1];
      function subst(x)
       {return caml_call1(sup_subst,[0,caml_call1(sub_subst,x)])}
      return [0,subst,sub_el]}
    function subst_path(sexp,param)
     {if(param)
       {var _ck_=param[1];
        switch(_ck_[0])
         {case 0:
           var t=param[2],n=_ck_[1];
           return subst_option(extract_pos(n,sexp),t);
          case 1:
           var t$0=param[2],arg_ix=_ck_[2],tag=_ck_[1];
           return subst_option(extract_match(tag,arg_ix,sexp),t$0);
          default:
           var
            rest=param[2],
            key=_ck_[1],
            match=extract_rec(key,sexp),
            el=match[2],
            rec_subst=match[1],
            match$0=subst_path(el,rest),
            sub_el=match$0[2],
            sub_subst=match$0[1],
            subst=
             function(x){return caml_call1(rec_subst,caml_call1(sub_subst,x))};
           return [0,subst,sub_el]}}
      return [0,id,sexp]}
    function implode(param)
     {var
       len=caml_call1(Stdlib_list[1],param),
       str=caml_create_bytes(len),
       ix=0,
       param$0=param;
      for(;;)
       {if(param$0)
         {var t=param$0[2],h=param$0[1];
          caml_bytes_set(str,ix,h);
          var ix$0=ix + 1 | 0,ix=ix$0,param$0=t;
          continue}
        return caml_call1(Stdlib_bytes[42],str)}}
    function fail_parse(msg)
     {var _cj_=caml_call2(Stdlib[28],cst_Path_parse,msg);
      return caml_call1(Stdlib[2],_cj_)}
    function parse$0(str)
     {var len=caml_ml_string_length(str);
      if(0 === len)return fail_parse(cst_path_empty);
      var acc=0,dot_ix=0;
      a:
      for(;;)
       {var c=caml_string_get(str,dot_ix);
        if(46 === c)
         {var ix=dot_ix + 1 | 0;
          if(ix === len)return caml_call1(Stdlib_list[9],acc);
          var acc$0=acc,str_acc=0,ix$0=ix;
          for(;;)
           {if(ix$0 === len)
             {var _ci_=[0,[2,implode(caml_call1(Stdlib_list[9],str_acc))],0];
              return caml_call2(Stdlib_list[12],acc$0,_ci_)}
            var c$0=caml_string_get(str,ix$0),switcher=c$0 - 91 | 0;
            if(1 < switcher >>> 0)
             {if(-45 === switcher)
               {if(0 === str_acc)fail_parse(cst_double);
                var
                 path_el=[2,implode(caml_call1(Stdlib_list[9],str_acc))],
                 ix$1=ix$0 + 1 | 0,
                 acc$1=[0,path_el,acc$0],
                 acc$0=acc$1,
                 str_acc=0,
                 ix$0=ix$1;
                continue}
              var
               ix$2=ix$0 + 1 | 0,
               str_acc$0=[0,c$0,str_acc],
               str_acc=str_acc$0,
               ix$0=ix$2;
              continue}
            if(switcher)
             {var ix1=ix$0 + 1 | 0;
              if(ix1 === len)return fail_parse(cst_EOF_after_escape);
              var
               ix$3=ix$0 + 1 | 0,
               str_acc$1=[0,caml_string_get(str,ix1),str_acc],
               str_acc=str_acc$1,
               ix$0=ix$3;
              continue}
            var ix$7=ix$0 + 1 | 0,index_acc=0,ix$4=ix$7;
            for(;;)
             {if(ix$4 === len)return fail_parse(cst_EOF_reading_index);
              var c$1=caml_string_get(str,ix$4);
              if(58 <= c$1)
               {if(93 === c$1)
                 {if(index_acc)
                   {var
                     index_acc$0=index_acc[1],
                     path_el$0=
                      0 === str_acc
                       ?[0,index_acc$0]
                       :[1,implode(caml_call1(Stdlib_list[9],str_acc)),index_acc$0],
                     dot_ix$0=ix$4 + 1 | 0;
                    if(dot_ix$0 === len)
                     return caml_call2(Stdlib_list[12],acc$0,[0,path_el$0,0]);
                    var acc$2=[0,path_el$0,acc$0],acc=acc$2,dot_ix=dot_ix$0;
                    continue a}
                  return fail_parse(cst_empty_index)}}
              else
               if(48 <= c$1)
                {if(index_acc)
                  {var
                    index_acc$1=index_acc[1],
                    index_acc$2=[0,((10 * index_acc$1 | 0) + c$1 | 0) - 48 | 0],
                    ix$5=ix$4 + 1 | 0,
                    index_acc=index_acc$2,
                    ix$4=ix$5;
                   continue}
                 var
                  ix$6=ix$4 + 1 | 0,
                  index_acc$3=[0,c$1 - 48 | 0],
                  index_acc=index_acc$3,
                  ix$4=ix$6;
                 continue}
              return fail_parse(caml_call2(Stdlib_format[129],_bW_,c$1))}}}
        return fail_parse(caml_call2(Stdlib_format[129],_bX_,c))}}
    function get_subst(path,match,sexp)
     {if(path)
       var path$0=path[1],path$1=path$0;
      else
       if(match)var str=match[1],path$1=parse$0(str);else var path$1=0;
      return subst_path(sexp,path$1)}
    function get(path,str,sexp){return get_subst(path,str,sexp)[2]}
    function replace$0(path,str,sexp,subst)
     {var match=get_subst(path,str,sexp),subst_fun=match[1];
      return caml_call1(subst_fun,subst)}
    function replace_no_path(str,sexp,subst)
     {return replace$0(0,[0,str],sexp,subst)}
    var
     Sexplib_Path=
      [0,
       parse$0,
       get,
       replace$0,
       replace_no_path,
       subst_path,
       extract_pos,
       extract_match,
       extract_rec];
    caml_register_global(176,Sexplib_Path,"Sexplib__Path");
    var of_val=Stdlib_obj[23];
    function register(exc,exc_name)
     {function _cg_(exc){return [0,exc_name]}
      var _ch_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_ch_,_cg_)}
    function register1(make_exc,exc_name,sexp_of_arg1)
     {var exc=caml_call1(make_exc,0);
      function _ce_(exc)
       {var sexp1=caml_call1(sexp_of_arg1,exc[2]);
        return [1,[0,[0,exc_name],[0,sexp1,0]]]}
      var _cf_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_cf_,_ce_)}
    function register2(make_exc,exc_name,sexp_of_arg1,sexp_of_arg2)
     {var exc=caml_call2(make_exc,0,0);
      function _cc_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]);
        return [1,[0,[0,exc_name],[0,sexp1,[0,sexp2,0]]]]}
      var _cd_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_cd_,_cc_)}
    function register3
     (make_exc,exc_name,sexp_of_arg1,sexp_of_arg2,sexp_of_arg3)
     {var exc=caml_call3(make_exc,0,0,0);
      function _ca_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]);
        return [1,[0,[0,exc_name],[0,sexp1,[0,sexp2,[0,sexp3,0]]]]]}
      var _cb_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_cb_,_ca_)}
    function register4
     (make_exc,exc_name,sexp_of_arg1,sexp_of_arg2,sexp_of_arg3,sexp_of_arg4)
     {var exc=caml_call4(make_exc,0,0,0,0);
      function _b__(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]);
        return [1,[0,[0,exc_name],[0,sexp1,[0,sexp2,[0,sexp3,[0,sexp4,0]]]]]]}
      var _b$_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b$_,_b__)}
    function register5
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5)
     {var exc=caml_call5(make_exc,0,0,0,0,0);
      function _b8_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,sexp1,[0,sexp2,[0,sexp3,[0,sexp4,[0,sexp5,0]]]]]]]}
      var _b9_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b9_,_b8_)}
    function register6
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5,
      sexp_of_arg6)
     {var exc=caml_call6(make_exc,0,0,0,0,0,0);
      function _b6_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]),
         sexp6=caml_call1(sexp_of_arg6,repr[7]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,sexp1,[0,sexp2,[0,sexp3,[0,sexp4,[0,sexp5,[0,sexp6,0]]]]]]]]}
      var _b7_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b7_,_b6_)}
    function register7
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5,
      sexp_of_arg6,
      sexp_of_arg7)
     {var exc=caml_call7(make_exc,0,0,0,0,0,0,0);
      function _b4_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]),
         sexp6=caml_call1(sexp_of_arg6,repr[7]),
         sexp7=caml_call1(sexp_of_arg7,repr[8]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,
                  sexp1,
                  [0,
                   sexp2,
                   [0,sexp3,[0,sexp4,[0,sexp5,[0,sexp6,[0,sexp7,0]]]]]]]]]}
      var _b5_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b5_,_b4_)}
    function register8
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5,
      sexp_of_arg6,
      sexp_of_arg7,
      sexp_of_arg8)
     {var exc=caml_call8(make_exc,0,0,0,0,0,0,0,0);
      function _b2_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]),
         sexp6=caml_call1(sexp_of_arg6,repr[7]),
         sexp7=caml_call1(sexp_of_arg7,repr[8]),
         sexp8=caml_call1(sexp_of_arg8,repr[9]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,
                  sexp1,
                  [0,
                   sexp2,
                   [0,
                    sexp3,
                    [0,sexp4,[0,sexp5,[0,sexp6,[0,sexp7,[0,sexp8,0]]]]]]]]]]}
      var _b3_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b3_,_b2_)}
    function register9
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5,
      sexp_of_arg6,
      sexp_of_arg7,
      sexp_of_arg8,
      sexp_of_arg9)
     {var exc=caml_call9(make_exc,0,0,0,0,0,0,0,0,0);
      function _b0_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]),
         sexp6=caml_call1(sexp_of_arg6,repr[7]),
         sexp7=caml_call1(sexp_of_arg7,repr[8]),
         sexp8=caml_call1(sexp_of_arg8,repr[9]),
         sexp9=caml_call1(sexp_of_arg9,repr[10]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,
                  sexp1,
                  [0,
                   sexp2,
                   [0,
                    sexp3,
                    [0,
                     sexp4,
                     [0,sexp5,[0,sexp6,[0,sexp7,[0,sexp8,[0,sexp9,0]]]]]]]]]]]}
      var _b1_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_b1_,_b0_)}
    function register10
     (make_exc,
      exc_name,
      sexp_of_arg1,
      sexp_of_arg2,
      sexp_of_arg3,
      sexp_of_arg4,
      sexp_of_arg5,
      sexp_of_arg6,
      sexp_of_arg7,
      sexp_of_arg8,
      sexp_of_arg9,
      sexp_of_arg10)
     {var exc=caml_call10(make_exc,0,0,0,0,0,0,0,0,0,0);
      function _bY_(repr)
       {var
         sexp1=caml_call1(sexp_of_arg1,repr[2]),
         sexp2=caml_call1(sexp_of_arg2,repr[3]),
         sexp3=caml_call1(sexp_of_arg3,repr[4]),
         sexp4=caml_call1(sexp_of_arg4,repr[5]),
         sexp5=caml_call1(sexp_of_arg5,repr[6]),
         sexp6=caml_call1(sexp_of_arg6,repr[7]),
         sexp7=caml_call1(sexp_of_arg7,repr[8]),
         sexp8=caml_call1(sexp_of_arg8,repr[9]),
         sexp9=caml_call1(sexp_of_arg9,repr[10]),
         sexp10=caml_call1(sexp_of_arg10,repr[11]);
        return [1,
                [0,
                 [0,exc_name],
                 [0,
                  sexp1,
                  [0,
                   sexp2,
                   [0,
                    sexp3,
                    [0,
                     sexp4,
                     [0,
                      sexp5,
                      [0,sexp6,[0,sexp7,[0,sexp8,[0,sexp9,[0,sexp10,0]]]]]]]]]]]]}
      var _bZ_=caml_call1(of_val,exc);
      return caml_call3(_bR_[2],0,_bZ_,_bY_)}
    var
     Sexplib_Exn_magic=
      [0,
       register,
       register1,
       register2,
       register3,
       register4,
       register5,
       register6,
       register7,
       register8,
       register9,
       register10];
    caml_register_global(178,Sexplib_Exn_magic,"Sexplib__Exn_magic");
    var
     Of_sexp_error$0=Sexplib0_Sexp_conv_error[1],
     tuple_of_size_n_expected=Sexplib0_Sexp_conv_error[2],
     stag_no_args=Sexplib0_Sexp_conv_error[3],
     stag_incorrect_n_args=Sexplib0_Sexp_conv_error[4],
     stag_takes_args=Sexplib0_Sexp_conv_error[5],
     nested_list_invalid_sum=Sexplib0_Sexp_conv_error[6],
     empty_list_invalid_sum=Sexplib0_Sexp_conv_error[7],
     unexpected_stag=Sexplib0_Sexp_conv_error[8],
     record_sexp_bool_with_payload=Sexplib0_Sexp_conv_error[9],
     record_only_pairs_expected=Sexplib0_Sexp_conv_error[10],
     record_superfluous_fields=Sexplib0_Sexp_conv_error[11],
     record_duplicate_fields=Sexplib0_Sexp_conv_error[12],
     record_extra_fields=Sexplib0_Sexp_conv_error[13],
     record_get_undefined_loop=Sexplib0_Sexp_conv_error[14],
     record_undefined_elements=Sexplib0_Sexp_conv_error[15],
     record_list_instead_atom=Sexplib0_Sexp_conv_error[16],
     record_poly_field_value=Sexplib0_Sexp_conv_error[17],
     No_variant_match=Sexplib0_Sexp_conv_error[18],
     no_variant_match=Sexplib0_Sexp_conv_error[19],
     no_matching_variant_found=Sexplib0_Sexp_conv_error[20],
     ptag_no_args=Sexplib0_Sexp_conv_error[21],
     ptag_incorrect_n_args=Sexplib0_Sexp_conv_error[22],
     ptag_takes_args=Sexplib0_Sexp_conv_error[23],
     nested_list_invalid_poly_var=Sexplib0_Sexp_conv_error[24],
     empty_list_invalid_poly_var=Sexplib0_Sexp_conv_error[25],
     empty_type=Sexplib0_Sexp_conv_error[26],
     Sexplib_Conv_error=
      [0,
       Of_sexp_error$0,
       tuple_of_size_n_expected,
       stag_no_args,
       stag_incorrect_n_args,
       stag_takes_args,
       nested_list_invalid_sum,
       empty_list_invalid_sum,
       unexpected_stag,
       record_sexp_bool_with_payload,
       record_only_pairs_expected,
       record_superfluous_fields,
       record_duplicate_fields,
       record_extra_fields,
       record_get_undefined_loop,
       record_undefined_elements,
       record_list_instead_atom,
       record_poly_field_value,
       No_variant_match,
       no_variant_match,
       no_matching_variant_found,
       ptag_no_args,
       ptag_incorrect_n_args,
       ptag_takes_args,
       nested_list_invalid_poly_var,
       empty_list_invalid_poly_var,
       empty_type];
    caml_register_global(180,Sexplib_Conv_error,"Sexplib__Conv_error");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXhwbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
