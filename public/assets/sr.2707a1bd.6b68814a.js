import{l as n}from"./index.fced531f.js";var e={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(a,t){return a%10>=1&&a%10<=4&&(a%100<10||a%100>=20)?a%10===1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(a,t,r,i){var d=e.words[r];if(r.length===1)return r==="y"&&t?"jedna godina":i||t?d[0]:d[1];var m=e.correctGrammarCase(a,d);return r==="yy"&&t&&m==="%d godinu"?a+" godina":m.replace("%d",a)}},o={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_\u010Cetvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._\u010Cet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010De_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:e.relativeTimeFormatter,mm:e.relativeTimeFormatter,h:e.relativeTimeFormatter,hh:e.relativeTimeFormatter,d:e.relativeTimeFormatter,dd:e.relativeTimeFormatter,M:e.relativeTimeFormatter,MM:e.relativeTimeFormatter,y:e.relativeTimeFormatter,yy:e.relativeTimeFormatter},ordinal:function(a){return a+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};n.locale(o,null,!0);export{o as default};
