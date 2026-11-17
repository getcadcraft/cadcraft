---
title: Qaabka darbiyada, jarista, kala-fogaynta iyo xidhista darbiyada 2D
summary: Samee darbiyo afar-geesle, poligon iyo qaanso, kala qaybi oo dib isugu xidh, u guuri cabbir ahaan, ama xidh darbi darbi kale ama khadka gridka. Qalabka oo kale sida darbiyada BimCraft.
keywords: darbi, badhamada darbiyada, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, habka isku xidhka, miitar, jeex, afar geesood, qufac, grip, jiid dhamaadka, wareeji, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, isku xidh, ka reeb isku xidhka, xidh, khadka gridka, kala qaybi, furasho, kala-fogee, xariiqda goobta
from: f41e7433
---

Qalabyadan waxay shaqeeyaan darbiyada 2D ee `WALL` (eeg "Samee darbiyo caqli leh, albaabo iyo daaqado 2D"). Waxay isticmaalaan isla xeerarka qalabka darbiyada ee BimCraft, si darbigu isku mid ugu dhaqmo labadaba.

## Meesha qalabyadu ku yaallaan

- Dhinaca badhamada, kooxda {{ui:Darbiyada}} waxay leedahay {{ui:Darbi}}, {{ui:Afar-geesle}}, {{ui:Kala qaybi}} iyo {{ui:Kala-fogee}}. Menu-ga {{ui:Wax dheeraad ah}} wuxuu leeyahay qalabka darbiga kale oo dhan, mid kastaa calaamaddiisa.
- Qaababka menu-ga ribbon-ka, tab-ka {{ui:Darbiyada}} wuxuu leeyahay panels {{ui:Samee darbiyada}}, {{ui:Jar}}, {{ui:Deji oo beddel}}, {{ui:Hay}} iyo {{ui:Isku xidh}}.
- Qaabeynta, safafka qalabka iyo sanduuqa qalabka waxay muujiyaan isla kooxda {{ui:Darbiyada}}.
- Waxaad sidoo kale ku qori kartaa amar kasta oo hoos magacaabmay.

## Isku xidhku waa la kaydiyaa

Marka dhamaadka darbi uu ku dhaco darbi kale, CadCraft wuxuu kaydiyaa isku xidhkaas labada darbiba. Ma dib u xisaabiyo meelaha dhamaadyadu ku dhacaan. Sidaas darteed:

- Darbiyada lagu xidhay darbi aad u guurto ayaa raacaya oo isku xidhan ayay ku sii jiraan. Dhamaadkooda wuxuu u socdaa khadkooda, sidaas darteed wax ma wareegaan.
- Dhamaad darbi ah oo aad gripkiisa ka jiidayso, darbiga lagu xidhay meeshaas ayaa iyana jihadiisa hayn. Dhamaadkiisa wuxuu u socdaa khadkiisa si uu ula kulmo darbiga la jiiday, sidaas darteed dhamaadka la jiiday wuxuu ku dhacaa khadkaas, ma aha had iyo jeer hoosta cursor-ka. Hordhacu wuxuu tusaa meesha. Darbi jeex u ah darbiga la jiiday wuxuu raacaa khadkiisa. Jiidista dhamaadka si toos ah ee darbiga waxay beddeshaa dhererka, darbiga lagu xidhay meeshaas ayaa la socda.
- `ROTATE` darbi xidhan wuxuu u shaqeeyaa sidaas oo kale: dhamaadyada deriskiisa waxay u socdaan khadadkooda ilaa darbiga la wareejiyey.
- Si aad geeska u dhaqaajiso, dooro labada darbi ee halkaas kulma, kadibna jiid gripka geeska. Labadooduba geeska way sii joogaan, labadooduba way wareegaan. Darbiyada dhinaca dambe way sii joogaan sidii ay ahaayeen.
- Hay {{key:Alt}} marka aad riixayso meesha cusub ee gripka si aad isku xidhka ugu jebiso ula kac ah: darbigu wuxuu tagaa meesha aad dhigtay, wax kale ma raacaan.
- Haddii jiidistu darbi xidhan u wareejineyso gadaasha dhamaadkiisa fog, waa la diidaa, waxna ma beddelo.
- Darbi aad ku sawirtay {{ui:Ma ogolaan isku xidhka}} (`D` gudaha `WALL`), ama aad ka demisay sifooyinka ({{ui:Ka ma xidhmo bilowga}}, {{ui:Ka ma xidhmo dhamaadka}}), wuxuu ahaan doonaa mid xor ah dhamaadkaas, xitaa haddii uu taabto darbi kale, ilaa aad mar kale ogolaato.
- `WALLDISJOIN` ({{ui:Ka reeb isku xidhka}} kooxda {{ui:Darbiyada}}) wuxuu sameeyaa isla waxa riix kaliya: riix darbi u dhow hal dhamaad si aad u diido isku xidhka dhamaadkaas, mar kale riixna si aad u ogolaato.
- Xaashi hore ma leh isku xidh la kaydiyay. Isbeddelka ugu horreeya ee aad samayso wuxuu mar keliya helaa isku xidhkii, markuu darbiyadu u taagnaayeen ka hor isbeddelka, kadibna wuu kaydiyaa. `WALLJOINS` wuxuu sameeyaa isla markiiba.
- DWG iyo DXF waxay xambaarayaan isku xidhka gudaha darbi kasta. CadCraft wuxuu dib u akhriyaa sida la kaydiyay. Barnaamij aan xogta dheeraadka ah haynin wuxuu darbiyada u muujiyaa sida bloog fudud, wuxuuna tirtiraa isku xidhka; isku xidh oo darbiyadiisa laga guuray barnaamij kale ayaa la tirtiraa marka mid darbiyada ka mid ah dib loo beddelo.

## Habka isku xidhka geeska

Geeska uu labada darbi ku kulmaan dhamaad ilaa dhamaad waxaa lagu sawiraa sida miitar haddii aadan dooran habka kale.

- `WALLJOINSTYLE` ({{ui:Habka isku xidhka}} kooxda {{ui:Darbiyada}}): riix geeska. Riix kasta wuxuu u gudbaa habka xiga: {{ui:Miitar}}, {{ui:Jeex}}, {{ui:Afar geesood}}, kadibna mar kale {{ui:Miitar}}. Ku qor `T` si aad u beddesho darbiga labadood ee dhex mara geeska aad ugu dambeeyay riixday. Riix {{key:Enter}} si aad u dhamaysto. Hal socodsiin oo amarka ah waa hal tallaabo oo ka noqo.
- {{ui:Jeex}}: hal darbi wuxuu dhex maraa ilaa wejiga fog ee darbiga kale, kan kalena wuxuu joogsadaa dhinacyadiisa. {{ui:Afar geesood}}: isku mid, laakiin darbiga dhex maraya wuxuu dhamaadaa xagal-toosan isaga. Xagal qumman labaduba way u eg yihiin.
- Sifooyinka darbi: {{ui:Habka isku xidhka bilowga}}, {{ui:Habka isku xidhka dhamaadka}}, iyo {{ui:Dhex mara bilowga}}, {{ui:Dhex mara dhamaadka}}.
- Habka waa la kaydiyaa darbiyada labadooda wuxuuna u safraa faylasha DWG iyo DXF. Nuqul darbi ah ma leh habka, wuu bilaabaa isagoo aan lahayn.
- Isku xidh T ah ma leh habka la doorto: darbiga dhinaciisa la taabto ayaa dhex maraya. Geeska ay saddex darbi ama ka badan kulmaan wuxuu sii ahaanayaa miitar. Sidaas oo kale geeska aad u fiican (ka yar qiyaastii 30 darajo) iyo laba darbi oo hal khad ah.

## Samee qaabab darbi

Mid kastaa wuxuu sameeyaa darbiyada hal tallaabo oo ka noqo, geesahooduna isku xidhan yihiin. Gudaha `WALL`, `O` wuxuu dejiyaa kala-fogaanshaha meel-dhigga (intee le'eg ayay darbigu ugu dhacaa bidix ee riixyadaada), `D` wuxuu damiyaa isku xidhka darbiyada aad soo rido xiga.

- `WALLRECT` (`WR`): laba geesood oo ka soo horjeeda, sida `RECTANG`.
- `WALLROT`: jibbaarka hore, kadibna sida fog ee dhinaca kale u tagayo, si loo sameeyo afar-geesle xagal kasta.
- `WALLPOLY` (`WP`): tirada dhinacyada (3 ilaa 64), dhexdhexaadka, `I` oo gudaha ku qoran ama `C` oo bannaanka ku qoran, kadibna radius-ka, sida `POLYGON`.
- `WALLARC` (`WARC`): dhexdhexaadka, bilowga, dhamaadka. `D` wuxuu qaansada u rogaa jihada kale.
- `WALLTAN`: riix meel u dhow dhamaadka darbi, kadibna dhamaadka qaansada, kaas oo ka bilaabmaya darbigaas.
- `WALLPICK`: riix khad ama polilayn, oo sheeg in khadadka isku xidhan ay iyaga bedba qaadanayaan.
- `WALLTRACE`: riix gudaha meel xiran oo khadad iyo darbiyo ah si aad darbiyo ugu sameysid kan ugu yar.

Darbiyada qorshaha waa toosan yihiin, sidaas darteed qaansada waxaa loo sawiraa darbiyo toos ah oo gaagaaban oo 15 darajo kasta. Waxay isku xidhaan sida geeska kasta.

## Jar darbiyada

- `WALLSPLIT` (`WS`): riix darbiga, kadibna barta. `C` wuxuu jaraa meesha darbi kale ka gudbo, `G` wuxuu u tagaa furasho u dhexeysa qaybaha, `F` wuxuu ka dhigaa dhamaadyada jarka kuwo xor ah halkii ay isku xidhan yihiin. Qaybta koowaad waxay haysaa meesha darbiga ku jirta naqshadda, albaabyada iyo daaqadaha waxay la socdaan qaybtooda. Jar dhex mara albaab ama daaqad waa la diidaa.
- `WALLSPLITGAP` ({{ui:Kala qaybi furasho ku jirta}}): isla kala qaybinta, laakiin marka hore wuxuu weydiiyaa furashada.
- `WALLDELSEG`: riix darbiga, kadibna labada dhamaad ee qaybta la tirtirayo.
- `WALLREJOIN`: riix laba qaybood oo darbi keliya si aad mar kale u dhigto mid.

## U guuri darbiyada masaafo

- `WALLDIM`: riix cabbir toos ah ama is-waafaqa ah oo ka bilaabma darbi ilaa darbi kale, kadibna qor qiimaha cusub. Darbiga dhamaadka fog wuxuu u guurayaa xagal-toosan isaga, darbiga bilowga wuu joogsadaa, darbiyada isku xidhan ayaa raacaya.
- `WALLOFFSET` (`WO`): riix darbi, kadibna dhinaca loo guurinayo (`D` wuxuu qoraa masaafo, `C` wuxuu sameeyaa nuqul halkii).
- `WALLSTRETCH`: daaqad ku wareegsan dhamaadyada darbiga, kadibna barta saldhigga iyo barta labaad.
- Sifooyinka, {{ui:Dherer}} la qoray wuxuu hayaa bilowga oo wuxuu darbiga isku xidhan ee dhamaadka fog la socodsiiyaa, {{ui:Dhumucda}} cusub wuxuu ka kortaa {{ui:Xariiqda goobta}} aad dooratay (dhinaca bidix, dhinaca midig ama dhexdhexaadka).

## Xidh darbiyada

Xidhku wuxuu la jiraa darbiga faylka dhexdiisa. Haddii aad dhaqaajiso hal darbi oo xidhan, kan kale ayaa raacaya. Haddii hal isbeddel uu labada darbi si kala duwan u dhaqaajiyo, waa la diidaa waxna ma beddelo.

- `WALLHOLD`: xidh darbi darbi kale. `A` wuxuu horta u guuraa khadka darbiga kale, `K` wuxuu ilaaliyaa masaafada uu leeyahay.
- `WALLHOLDDIM`: xidh masaafada u dhexaysa laba darbi oo is-barbar socda.
- `WALLGRID`: xidh darbi khadka gridka (khad ku yaal lakabka grid-ka oo calaamaddiisa qoraal ku yaal hal dhamaad), dhererkiisa oo dhan ama hal dhamaad oo ku yaal. Darbi xidhan dhererkiisa wuxuu ilaaliyaa masaafada uu ka leeyahay. Khadka gridka `GRIDMOVE` ayaa lagu dhaqaajiyaa, darbigu wuu raacaa oo dhan, darbiyadii isku xidhnaana way raacaan. Darbi ku dhex jira khadka gridka ayaa dhaqaaja oo dhan xitaa xidh la'aan, darbi dhamaadkiisa keliya ku jira khadka ayaa dhamaadkaas lagu fidiyaa.
- `WALLHOLDS` wuxuu liistaa xidhayaasha. `WALLUNHOLD` wuxuu ka qaadaa xidhayaasha darbi.
- Xidh kasta wuxuu muujiyaa qufac yar naqshadda: dhinaca darbiga xidhan ee dhexe, ama dhinaca dhamaadka oo khadka gridka lagu xidhay. Riix qufaca si aad xidhkaas u qaaddo.

## Waxa aan wali jirin

Xidhayaashu waxay isticmaalaan khadadka dhexe ee darbiyada. Darbiyada halkan lakab ma lahan, sidaas darteed ma jiro mudnaanta lakabka goobta isku xidhka, darbiyaduna ma wareegaan (eeg qaansada kor). Ma jiro qof isku dayay qalabyadan naqshad weyn, lamana hubin barnaamij CAD kale.
