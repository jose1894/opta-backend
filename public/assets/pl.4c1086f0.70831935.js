import{l as m}from"./index.7c3ce38a.js";function _(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function i(e,a,s){var t=e+" ";switch(s){case"m":return a?"minuta":"minut\u0119";case"mm":return t+(_(e)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return t+(_(e)?"godziny":"godzin");case"MM":return t+(_(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return t+(_(e)?"lata":"lat")}}var u="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_"),n="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"),o=/D MMMM/,r=function(e,a){return o.test(a)?u[e.month()]:n[e.month()]};r.s=n;r.f=u;var d={name:"pl",weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),months:r,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};m.locale(d,null,!0);export{d as default};
