import{l as _}from"./index.e27aaed2.js";function s(e){return e>1&&e<5&&~~(e/10)!==1}function n(e,t,o,r){var m=e+" ";switch(o){case"s":return t||r?"p\xE1r sek\xFAnd":"p\xE1r sekundami";case"m":return t?"min\xFAta":r?"min\xFAtu":"min\xFAtou";case"mm":return t||r?m+(s(e)?"min\xFAty":"min\xFAt"):m+"min\xFAtami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?m+(s(e)?"hodiny":"hod\xEDn"):m+"hodinami";case"d":return t||r?"de\u0148":"d\u0148om";case"dd":return t||r?m+(s(e)?"dni":"dn\xED"):m+"d\u0148ami";case"M":return t||r?"mesiac":"mesiacom";case"MM":return t||r?m+(s(e)?"mesiace":"mesiacov"):m+"mesiacmi";case"y":return t||r?"rok":"rokom";case"yy":return t||r?m+(s(e)?"roky":"rokov"):m+"rokmi"}}var a={name:"sk",weekdays:"nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),months:"janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_"),monthsShort:"jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};_.locale(a,null,!0);export{a as default};
