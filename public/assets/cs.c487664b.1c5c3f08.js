import{l as m}from"./index.94f69dfc.js";function _(e){return e>1&&e<5&&~~(e/10)!==1}function n(e,t,r,u){var s=e+" ";switch(r){case"s":return t||u?"p\xE1r sekund":"p\xE1r sekundami";case"m":return t?"minuta":u?"minutu":"minutou";case"mm":return t||u?s+(_(e)?"minuty":"minut"):s+"minutami";case"h":return t?"hodina":u?"hodinu":"hodinou";case"hh":return t||u?s+(_(e)?"hodiny":"hodin"):s+"hodinami";case"d":return t||u?"den":"dnem";case"dd":return t||u?s+(_(e)?"dny":"dn\xED"):s+"dny";case"M":return t||u?"m\u011Bs\xEDc":"m\u011Bs\xEDcem";case"MM":return t||u?s+(_(e)?"m\u011Bs\xEDce":"m\u011Bs\xEDc\u016F"):s+"m\u011Bs\xEDci";case"y":return t||u?"rok":"rokem";case"yy":return t||u?s+(_(e)?"roky":"let"):s+"lety"}}var a={name:"cs",weekdays:"ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"),weekdaysShort:"ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),weekdaysMin:"ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),months:"leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_"),monthsShort:"led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};m.locale(a,null,!0);export{a as default};
