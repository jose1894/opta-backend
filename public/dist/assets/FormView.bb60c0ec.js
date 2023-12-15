import{u as q,ak as uu,au,ae as eu,r as p,g as v,ax as su,o as L,c as ru,a as G,b as H,i as O,N as _,d as Z,_ as Y,p as d,ay as nu,S as W,h as J,F as tu,k as Eu,t as iu,m as ou,az as Su,ar as cu,j as Iu}from"./index.bf3eb1d4.js";import{b as lu,a as z,_ as Au}from"./BaseButton.1e584900.js";import{_ as w}from"./FormField.ce92b931.js";import{r as x,u as Ou}from"./index.esm.a479acad.js";import{c as k}from"./countries.service.a40d06c4.js";var Q={};const Cu=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKX","983","ISO 3166-2:XK"]],Fu=["br","cy","dv","sw","eu","af","am","ha","ku","ml","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tr","uk","uz","zh"];var P={};P.remove=Bu;var g=[{base:" ",chars:"\xA0"},{base:"0",chars:"\u07C0"},{base:"A",chars:"\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",chars:"\uA732"},{base:"AE",chars:"\xC6\u01FC\u01E2"},{base:"AO",chars:"\uA734"},{base:"AU",chars:"\uA736"},{base:"AV",chars:"\uA738\uA73A"},{base:"AY",chars:"\uA73C"},{base:"B",chars:"\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181"},{base:"C",chars:"\u24B8\uFF23\uA73E\u1E08\u0106C\u0108\u010A\u010C\xC7\u0187\u023B"},{base:"D",chars:"\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779"},{base:"Dh",chars:"\xD0"},{base:"DZ",chars:"\u01F1\u01C4"},{base:"Dz",chars:"\u01F2\u01C5"},{base:"E",chars:"\u025B\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07"},{base:"F",chars:"\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",chars:"\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262"},{base:"H",chars:"\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",chars:"\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",chars:"\u24BF\uFF2A\u0134\u0248\u0237"},{base:"K",chars:"\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",chars:"\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",chars:"\u01C7"},{base:"Lj",chars:"\u01C8"},{base:"M",chars:"\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB"},{base:"N",chars:"\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E"},{base:"NJ",chars:"\u01CA"},{base:"Nj",chars:"\u01CB"},{base:"O",chars:"\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OE",chars:"\u0152"},{base:"OI",chars:"\u01A2"},{base:"OO",chars:"\uA74E"},{base:"OU",chars:"\u0222"},{base:"P",chars:"\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",chars:"\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",chars:"\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",chars:"\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",chars:"\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"Th",chars:"\xDE"},{base:"TZ",chars:"\uA728"},{base:"U",chars:"\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",chars:"\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",chars:"\uA760"},{base:"W",chars:"\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",chars:"\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",chars:"\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",chars:"\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",chars:"\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251"},{base:"aa",chars:"\uA733"},{base:"ae",chars:"\xE6\u01FD\u01E3"},{base:"ao",chars:"\uA735"},{base:"au",chars:"\uA737"},{base:"av",chars:"\uA739\uA73B"},{base:"ay",chars:"\uA73D"},{base:"b",chars:"\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182"},{base:"c",chars:"\uFF43\u24D2\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",chars:"\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA"},{base:"dh",chars:"\xF0"},{base:"dz",chars:"\u01F3\u01C6"},{base:"e",chars:"\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD"},{base:"f",chars:"\u24D5\uFF46\u1E1F\u0192"},{base:"ff",chars:"\uFB00"},{base:"fi",chars:"\uFB01"},{base:"fl",chars:"\uFB02"},{base:"ffi",chars:"\uFB03"},{base:"ffl",chars:"\uFB04"},{base:"g",chars:"\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79"},{base:"h",chars:"\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",chars:"\u0195"},{base:"i",chars:"\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",chars:"\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",chars:"\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",chars:"\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D"},{base:"lj",chars:"\u01C9"},{base:"m",chars:"\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",chars:"\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509"},{base:"nj",chars:"\u01CC"},{base:"o",chars:"\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11"},{base:"oe",chars:"\u0153"},{base:"oi",chars:"\u01A3"},{base:"oo",chars:"\uA74F"},{base:"ou",chars:"\u0223"},{base:"p",chars:"\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1"},{base:"q",chars:"\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",chars:"\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",chars:"\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282"},{base:"ss",chars:"\xDF"},{base:"t",chars:"\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"th",chars:"\xFE"},{base:"tz",chars:"\uA729"},{base:"u",chars:"\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",chars:"\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",chars:"\uA761"},{base:"w",chars:"\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",chars:"\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",chars:"\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",chars:"\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],X={};for(var R=0;R<g.length;R+=1)for(var j=g[R].chars,$=0;$<j.length;$+=1)X[j[$]]=g[R].base;function Bu(s){return s.replace(/[^\u0000-\u007e]/g,function(o){return X[o]||o})}P.replacementList=g;P.diacriticsMap=X;(function(s){const o=Cu,l=Fu,D=P.remove,A={},C={},M={},i={},b={};o.forEach(function(u){const a=u;C[a[0]]=a[1],M[a[1]]=a[0],i[a[2]]=a[0],b[a[0]]=a[2]});function h(u){return String("000"+(u||"")).slice(-3)}function c(u,a){return Object.prototype.hasOwnProperty.call(u,a)}function E(u,a){return Object.keys(u).reduce(function(r,t){const e=u[t];return r[t]=a(e,t),r},{})}function f(u,a){switch(u){case"official":return Array.isArray(a)?a[0]:a;case"all":return typeof a=="string"?[a]:a;case"alias":return Array.isArray(a)?a[1]||a[0]:a;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}s.registerLocale=function(u){if(!u.locale)throw new TypeError("Missing localeData.locale");if(!u.countries)throw new TypeError("Missing localeData.countries");A[u.locale]=u.countries};function T(u){return M[u]}s.alpha3ToAlpha2=T;function F(u){return C[u]}s.alpha2ToAlpha3=F;function K(u){return b[T(u)]}s.alpha3ToNumeric=K;function U(u){return b[u]}s.alpha2ToNumeric=U;function m(u){const a=h(u);return F(i[a])}s.numericToAlpha3=m;function B(u){const a=h(u);return i[a]}s.numericToAlpha2=B;function V(u){if(typeof u=="string"){if(/^[0-9]*$/.test(u))return m(u);if(u.length===2)return F(u.toUpperCase());if(u.length===3)return u.toUpperCase()}if(typeof u=="number")return m(u)}s.toAlpha3=V;function N(u){if(typeof u=="string"){if(/^[0-9]*$/.test(u))return B(u);if(u.length===2)return u.toUpperCase();if(u.length===3)return T(u.toUpperCase())}if(typeof u=="number")return B(u)}s.toAlpha2=N,s.getName=function(u,a,r={}){"select"in r||(r.select="official");try{const e=A[a.toLowerCase()][N(u)];return f(r.select,e)}catch{return}},s.getNames=function(u,a={}){"select"in a||(a.select="official");const r=A[u.toLowerCase()];return r===void 0?{}:E(r,function(t){return f(a.select,t)})},s.getAlpha2Code=function(u,a){const r=e=>e.toLowerCase(),t=(e,n)=>r(e)===r(n);try{const e=A[a.toLowerCase()];for(const n in e)if(!!c(e,n)){if(typeof e[n]=="string"&&t(e[n],u))return n;if(Array.isArray(e[n])){for(const S of e[n])if(t(S,u))return n}}return}catch{return}},s.getSimpleAlpha2Code=function(u,a){const r=e=>D(e.toLowerCase()),t=(e,n)=>r(e)===r(n);try{const e=A[a.toLowerCase()];for(const n in e)if(!!c(e,n)){if(typeof e[n]=="string"&&t(e[n],u))return n;if(Array.isArray(e[n])){for(const S of e[n])if(t(S,u))return n}}return}catch{return}},s.getAlpha2Codes=function(){return C},s.getAlpha3Code=function(u,a){const r=s.getAlpha2Code(u,a);if(r)return s.toAlpha3(r)},s.getSimpleAlpha3Code=function(u,a){const r=s.getSimpleAlpha2Code(u,a);if(r)return s.toAlpha3(r)},s.getAlpha3Codes=function(){return M},s.getNumericCodes=function(){return i},s.langs=function(){return Object.keys(A)},s.getSupportedLanguages=function(){return l},s.isValid=function(u){if(!u)return!1;const a=u.toString().toUpperCase();return c(M,a)||c(C,a)||c(i,a)}})(Q);const du="es",Mu={AF:"Afganist\xE1n",AL:"Albania",DZ:"Argelia",AS:"Samoa Americana",AD:"Andorra",AO:"Angola",AI:"Anguila",AQ:"Ant\xE1rtida",AG:"Antigua y Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaiy\xE1n",BS:"Bahamas",BH:"Bahrein",BD:"Bangladesh",BB:"Barbados",BY:"Bielorrusia",BE:"B\xE9lgica",BZ:"Belice",BJ:"Benin",BM:"Bermudas",BT:"But\xE1n",BO:"Bolivia",BA:"Bosnia y Herzegovina",BW:"Botswana",BV:"Isla Bouvet",BR:"Brasil",IO:"Territorio Brit\xE1nico del Oc\xE9ano \xCDndico",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Camboya",CM:"Camer\xFAn",CA:"Canad\xE1",CV:"Cabo Verde",KY:"Islas Caim\xE1n",CF:"Rep\xFAblica Centroafricana",TD:"Chad",CL:"Chile",CN:"China",CX:"Isla de Navidad",CC:"Islas Cocos (Keeling)",CO:"Colombia",KM:"Comoras",CG:"Congo",CD:"Congo (Rep\xFAblica Democr\xE1tica del)",CK:"Islas Cook",CR:"Costa Rica",CI:"Costa de Marfil",HR:"Croacia",CU:"Cuba",CY:"Chipre",CZ:"Rep\xFAblica Checa",DK:"Dinamarca",DJ:"Yibuti",DM:"Dominica",DO:"Rep\xFAblica Dominicana",EC:"Ecuador",EG:"Egipto",SV:"El Salvador",GQ:"Guinea Ecuatorial",ER:"Eritrea",EE:"Estonia",ET:"Etiop\xEDa",FK:"Islas Malvinas",FO:"Islas Feroe",FJ:"Fiji",FI:"Finlandia",FR:"Francia",GF:"Guayana Francesa",PF:"Polinesia Francesa",TF:"Tierras Australes Francesas",GA:"Gab\xF3n",GM:"Gambia",GE:"Georgia",DE:"Alemania",GH:"Ghana",GI:"Gibraltar",GR:"Grecia",GL:"Groenlandia",GD:"Granada",GP:"Guadalupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea Bissau",GY:"Guyana",HT:"Hait\xED",HM:"Heard e Islas McDonald",VA:"Santa Sede",HN:"Honduras",HK:"Hong Kong",HU:"Hungr\xEDa",IS:"Islandia",IN:"India",ID:"Indonesia",IR:["Ir\xE1n","Rep\xFAblica Isl\xE1mica de Ir\xE1n"],IQ:"Iraq",IE:"Irlanda",IL:"Israel",IT:"Italia",JM:"Jamaica",JP:"Jap\xF3n",JO:"Jordania",KZ:"Kazajist\xE1n",KE:"Kenia",KI:"Kiribati",KP:"Rep\xFAblica Popular Democr\xE1tica de Corea",KR:"Rep\xFAblica de Corea",KW:"Kuwait",KG:"Kirguist\xE1n",LA:"Rep\xFAblica Democr\xE1tica Popular de Lao",LV:"Letonia",LB:"L\xEDbano",LS:"Lesoto",LR:"Liberia",LY:"Libia",LI:"Liechtenstein",LT:"Lituania",LU:"Luxemburgo",MO:"Macao",MK:"Macedonia del Norte",MG:"Madagascar",MW:"Malaui",MY:"Malasia",MV:"Maldivas",ML:"Mal\xED",MT:"Malta",MH:"Islas Marshall",MQ:"Martinica",MR:"Mauritania",MU:"Mauricio",YT:"Mayotte",MX:"M\xE9xico",FM:"Micronesia",MD:"Moldavia",MC:"M\xF3naco",MN:"Mongolia",MS:"Montserrat",MA:"Marruecos",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Pa\xEDses Bajos",NC:"Nueva Caledonia",NZ:"Nueva Zelanda",NI:"Nicaragua",NE:"N\xEDger",NG:"Nigeria",NU:"Niue",NF:"Isla Norfolk",MP:"Islas Marianas del Norte",NO:"Noruega",OM:"Om\xE1n",PK:"Pakist\xE1n",PW:"Palau",PS:"Palestina",PA:"Panam\xE1",PG:"Papua Nueva Guinea",PY:"Paraguay",PE:"Per\xFA",PH:"Filipinas",PN:"Pitcairn",PL:"Polonia",PT:"Portugal",PR:"Puerto Rico",QA:"Catar",RE:"Reuni\xF3n",RO:"Ruman\xEDa",RU:"Rusia",RW:"Ruanda",SH:"Santa Helena, Ascensi\xF3n y Trist\xE1n de Acu\xF1a",KN:"Saint Kitts y Nevis",LC:"Santa Luc\xEDa",PM:"San Pedro y Miquel\xF3n",VC:"San Vicente y las Granadinas",WS:"Samoa",SM:"San Marino",ST:"Santo Tom\xE9 y Pr\xEDncipe",SA:"Arabia Saudita",SN:"Senegal",SC:"Seychelles",SL:"Sierra Leona",SG:"Singapur",SK:"Eslovaquia",SI:"Eslovenia",SB:"Islas Salom\xF3n",SO:"Somalia",ZA:"Sud\xE1frica",GS:"Georgia del Sur y las Islas Sandwich del Sur",ES:"Espa\xF1a",LK:"Sri Lanka",SD:"Sud\xE1n",SR:"Suriname",SJ:"Svalbard y Jan Mayen",SZ:"Esuatini",SE:"Suecia",CH:"Suiza",SY:"Rep\xFAblica \xC1rabe Siria",TW:"Taiw\xE1n",TJ:"Tayikist\xE1n",TZ:"Tanzania",TH:"Tailandia",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad y Tobago",TN:"T\xFAnez",TR:"Turqu\xEDa",TM:"Turkmenist\xE1n",TC:"Islas Turcas y Caicos",TV:"Tuvalu",UG:"Uganda",UA:"Ucrania",AE:"Emiratos \xC1rabes Unidos",GB:"Reino Unido",US:"Estados Unidos",UM:"Islas Ultramarinas Menores de los Estados Unidos",UY:"Uruguay",UZ:"Uzbekist\xE1n",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:"Islas V\xEDrgenes brit\xE1nicas",VI:"Islas V\xEDrgenes de los Estados Unidos",WF:"Wallis y Futuna",EH:"Sahara Occidental",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabue",AX:"Islas \xC5land",BQ:"Bonaire, San Eustaquio y Saba",CW:"Cura\xE7ao",GG:"Guernsey",IM:"Isla de Man",JE:"Jersey",ME:"Montenegro",BL:"Saint Barth\xE9lemy",MF:"Saint Martin (francesa)",RS:"Serbia",SX:"Sint Maarten (neerlandesa)",SS:"Sud\xE1n del Sur",XK:"Kosovo"},hu={locale:du,countries:Mu};const Du={style:{width:"100%",position:"relative"}},bu={key:0,class:"ul-country",style:{position:"absolute"}},Tu=["onClick"],mu={style:{display:"flex","justify-content":"space-between"}},Gu={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(s){const o=s,{t:l}=q(),D=uu(),A=au(),C=eu(),M=p("es"),i=p("");Q.registerLocale(hu);const b=v(()=>Q.getNames(M.value)),h=p(!0),c=[{id:1,label:l("message.country.statuses.active")},{id:0,label:l("message.country.statuses.inactive")}],E=p({_id:"",codigo:"",nombre:"",estado:c[0]}),f=u=>{const{_id:a,codigo:r,nombre:t,estado:e}=u.value,n={_id:a,codigo:r,nombre:t,estado:e.id};return o.path==="create"?k.create(n):k.update(n)};su(async()=>{if(o.path==="update"){console.log(B);const u=await k.read(A.params);console.log(u),E.value=u.data,E.value.estado=c.filter(a=>a.id===u.data.estado)[0]}});const T=v(()=>({nombre:{required:x},estado:{required:x}})),F=Ou(T,E),K=o.path==="create"?l("message.country.created.success"):l("message.country.updated.success"),U=async()=>{await F.value.$validate()?f(E).then(()=>{D.success(K),C.push("/setup/countries")}).catch(a=>{var r,t,e,n;if((r=a.response.data)!=null&&r.msg){const{estado:S=1}=((e=(t=a.response)==null?void 0:t.data)==null?void 0:e.data)||{estado:1};S===1?D.error(`${l("message.country.created.error")} ${a.response.data.msg}`):D.error(`${l("message.country.created.errorStatus")}`);return}if((n=a.response.data)!=null&&n.errors){const S=a.response.data.errors;for(let y of S);}}):console.log("error")},m=()=>C.push("/setup/countries"),B=v(()=>{if(i.value===""||i.value.length<3)return o.path!=="update"&&(E.value.codigo="",E.value.nombre=""),[];const u=Object.entries(b.value).map(([a,r])=>({code:a,name:r})).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase()));return h.value=!0,u}),V=()=>{console.log("Paso ********")},N=u=>{const{code:a,name:r}=u;E.value.codigo=a,E.value.nombre=r,h.value=!1,console.log(E)};return(u,a)=>(L(),ru(Au,{isForm:"",onSubmit:Iu(U,["prevent"])},{footer:G(()=>[H("div",mu,[O(z,{label:u.$t(`message.${o.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),O(z,{label:u.$t("message.return"),color:"info",onClick:a[3]||(a[3]=r=>m())},null,8,["label"])])]),default:G(()=>{var r,t,e,n,S,y;return[H("div",{class:_(s.path!=="update"?"grid md:grid-cols-3 gap-4":"grid md:grid-cols-2 gap-4")},[Z(O(w,{label:u.$t("message.country.code"),class:_(s.path!=="update"?"content-country":"")},{default:G(()=>[Z(H("div",Du,[Z(O(Y,{name:"codigo",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=I=>i.value=I),icon:d(nu),onInput:V},null,8,["modelValue","icon"]),[[W,s.path!=="update"]]),d(B).length>0&&h.value?(L(),J("ul",bu,[(L(!0),J(tu,null,Eu(d(B),I=>(L(),J("li",{class:"li-country",key:I.id,onClick:fu=>N(I)},iu(I.name),9,Tu))),128))])):ou("",!0)],512),[[W,s.path!=="update"]])]),_:1},8,["label","class"]),[[W,s.path!=="update"]]),O(w,{label:u.$t("message.country.name"),help:(e=(t=(r=d(F))==null?void 0:r.nombre)==null?void 0:t.$errors[0])==null?void 0:e.$message},{default:G(()=>[O(Y,{modelValue:E.value.nombre,"onUpdate:modelValue":a[1]||(a[1]=I=>E.value.nombre=I),icon:d(Su)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),O(w,{label:u.$t("message.country.status"),help:(y=(S=(n=d(F))==null?void 0:n.estado)==null?void 0:S.$errors[0])==null?void 0:y.$message},{default:G(()=>[O(Y,{modelValue:E.value.estado,"onUpdate:modelValue":a[2]||(a[2]=I=>E.value.estado=I),icon:d(cu),options:c},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2)]}),_:1},8,["onSubmit"]))}},Pu=lu(Gu,[["__scopeId","data-v-86a9da9e"]]);export{Pu as F};
