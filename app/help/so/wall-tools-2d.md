---
title: Qaababka darbiga, goyn, kala-fogaan iyo qufulka darbiyada 2D
summary: Samee darbiyo sida afar-geesood, poligon iyo qaansho, kala jar oo mar kale isku xidh, u guuri masaafo ahaan, oo qufulka darbi mid kale ama xariiq shabakad. Qalabyo isku mid ah darbiyada BimCraft.
keywords: darbi, qalabka darbiyada, badhamada darbiga, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, habka isku xidhka, mitre, butt, square off, qufulka, grip, jiid geesaha, wareeji, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, isku xidh, ka xidh isku xidhka, xariiqda shabakadda, kala goy, god, kala-fogaan, xariiqda booska
from: 49044181
---

Qalabkaan waxay ku shaqeeyaan darbiyada 2D ee ka timid `WALL` (eeg "Samee darbiyo caqli leh, albaabbo iyo daaqado 2D"). Waxay isticmaalaan xeerarka isku mid ah qalabka darbiyada BimCraft, sidaas darteed darbiga labadaba si isku mid ah ayuu u dhaqmaa.

## Meesha qalabyadu ku yaallaan

- Qalabka, kooxda {{ui:Darbiyada}} waxay leedahay {{ui:Darbi}}, {{ui:Afar-geesle}}, {{ui:Kala qaybi}} iyo {{ui:Kala-fogee}}. Menu-ga {{ui:Wax dheeraad ah}} wuxuu leeyahay qalab kasta oo darbi kale, mid kasta astaantiisa.
- Qaababka menu-ga ribbon-ka, tab-ka {{ui:Darbiyada}} wuxuu leeyahay panelada {{ui:Samee darbiyada}}, {{ui:Jar}}, {{ui:Deji oo beddel}}, {{ui:Hay}} iyo {{ui:Isku xidh}}.
- Habaynta, safka qalabka iyo sanduuqa qalabka waxay muujiyaan isla kooxda {{ui:Darbiyada}}.
- Waxa kale oo aad ku qori kartaa amar kasta oo hoos ku magacaaban.

## Isku xidhka waa la kaydiyaa

Marka geeska darbi uu ku dhacayo darbi kale, CadCraft wuxuu kaydiyaa isku xidhkaas labada darbiba. Mar dambe wuxuu ma dib-u-xisaabiyo isku xidhka meesha geesaha ay ku dhaceen. Sidaas darteed:

- Darbiyada la isugu xidhay darbi aad u guurto way raacaan oo way isku xidhan yihiin. Geesahooda waxay ku dhex-dhaqaaqaan xariiqdooda, sidaas darteed waxba ma wareegmo.
- Jiid geesta darbi mid ah grip-kiisa, darbiga halkaas isku xidhan wuxuu sidoo kale hayaa jihadiisa. Geeskiisa wuxuu ku dhex-dhaqaaqaa xariiqdiisa si uu ula kulmo darbiga la jiiday, sidaas darteed geeska la jiiday wuxuu ku dhacaa xariiqdaas, dhammaantiis kursorka hoostiisa ma aha. Hordhac-eegis ayaa tusaysa meesha. Darbi u dhufta darbiga la jiiday wuxuu raacaa xariiqdiisa. Jiidista geeska toos ah ee darbiga dheeriyo waxay beddeshaa dherarkiisa, darbiga halkaas isku xidhan wuu la socdaa.
- `ROTATE` darbi isku xidhan waxa uu u shaqeeyaa isla siyaabo: geesaha deriskiisa waxay ku dhex-dhaqaaqaan xariiqyadooda ilaa darbiga la wareegay.
- Si aad geeska u guurto, dooro labada darbi ee halkaas kulmaya oo jiid gripka geeska. Labada darbiba geeska ayay ku sii jiraan oo labadaba way wareegaan. Darbiyada ka sii fog waxay sii jiraan sidii ay ahaayeen.
- {{key:Alt}} hay markaad riixayso meesha cusub ee gripka si aad isku xidhka uga jarto si ula kac ah: darbigu wuxuu tagayaa meesha aad dhigtay, waxna ma raacaan.
- Haddii jiidku darbi isku xidhan ku soo celin lahaa geeskiisa fog, waa la diidaa oo wax ma beddelmo.
- Darbi aad ku sawirto {{ui:Ka reeb isku xidhka}} (`D` gudaha `WALL`), ama aad damiso Sifooyinka ({{ui:Ka ma xidhmo bilowga}}, {{ui:Ka ma xidhmo dhamaadka}}), geeskaas wuu bilaa ahaan, xitaa haddii uu taabto darbi kale, ilaa aad mar kale oggolaatid.
- `WALLDISJOIN` ({{ui:Ka reeb isku xidhka}} kooxda {{ui:Darbiyada}}) wuxuu sameeyaa isla riix: riix darbi u dhow geeska si aad isku xidhka geeskaas uga reebto, mar kale riix si aad u oggolaato.
- Naqshad hore ma leh isku xidhka la kaydiyay. Beddelka ugu horreeya ee aad sameyso wuxuu soo helaa mar keliya, iyada oo ka eegaysa sida darbiyadu ahaayeen ka hor beddelka, kadibna wuu kaydiyaa. `WALLJOINS` wuxuu sameeyaa mar keliya.
- Faylasha DWG iyo DXF waxay qaadaan isku xidhka gudaha darbi kasta. CadCraft wuu akhrinayaa sida la kaydiyay. Barnaamij aan xogta ballaadhan hayn wuxuu muujiyaa darbiyada sida bloogyo caadi ah wuxuuna tirtiraa isku xidhka, isku xidh oo darbiyadiisa barnaamij kale lagu guuray ayaa lagu tirtiraa marka mid ka mid ah darbiyada la beddelo marka xiga.

## Habka isku xidhka geeska

Geesa laba darbi oo isku geesaan dhamaad ilaa dhamaad waxa lagu sawiraa mitre (miitar), haddii aadan dooran qaab kale.

- `WALLJOINSTYLE` ({{ui:Habka isku xidhka}} kooxda {{ui:Darbiyada}}): riix geeska. Riix kasta wuxuu gudbaa qaabka xiga: {{ui:Miitar}}, {{ui:Jeex}}, {{ui:Afar geesood}}, kadibna {{ui:Miitar}} mar kale. Ku qor `T` si aad u beddesho darbigii labada ka mid ah ee geeska aad ugu dambaysay riixday uu dhex mari doono. Riix {{key:Enter}} si aad u dhamaysato. Hal socod oo amarka waa hal tallaabo oo dib loo celin karo.
- {{ui:Jeex}}: hal darbi wuxuu ku dhex-maraa wejiga fog ee kan kale, kanina wuxuu istaagaa dhinaceeda. {{ui:Afar geesood}}: isku mid, laakiin darbiga dhex-maraa wuxuu u dhammaadaa afar-geesle isaga. Xagal toosan ayuu labadaba isku eegan.
- Sifooyinka darbi kasta: {{ui:Habka isku xidhka bilowga}}, {{ui:Habka isku xidhka dhamaadka}}, iyo {{ui:Dhex mara bilowga}}, {{ui:Dhex mara dhamaadka}}.
- Qaabka waa la kaydiyaa labada darbiba oo wuu u safraa faylasha DWG iyo DXF. Nuqul darbi ah ma bilaabmo isaga.
- Isku xidh T ma leh qaab la doorto: darbiga dhinaciisa la kulmo ayaa dhex maraa. Geesa saddex darbi ama ka badan halkaas kulmaan wuxuu ahaan doonaa miitar. Sidaas oo kale geesa aad u sheeg ah (ka hooseeya qiyaastii 30 darajo) iyo laba darbi oo hal xariiq ah.

## Sawir qaababka darbiga

Mid kasta wuxuu sameeyaa darbiyada hal tallaabo oo dib loo celin karo, geesaha isku xidhan. Gudaha `WALL`, `O` wuxuu dejiyaa kala-fogaanta meesha (intee le'eg bidixda riixdaadu darbigu uu tago) iyo `D` wuxuu damiyaa isku xidhka darbiyada aad xiga sawirto.

- `WALLRECT` (`WR`): laba geesood oo iska soo horjeedda, sida `RECTANG`.
- `WALLROT`: dhinaca koowaad, kadibna dhinaca kale intee le'eg ayuu u tagayaa, afar-geesle xagal kasta.
- `WALLPOLY` (`WP`): tirada dhinacyada (3 ilaa 64), dhexda, `I` ee ku-qorsan ama `C` ee ku-wareegsan, kadibna radius-ka, sida `POLYGON`: riix, ama ku qor (radius la qoray wuxuu u socdaa xagga kursorka, ama dhinaca X marka kursorku wali dhexda joogo).
- `WALLARC` (`WARC`): dhexda, bilowga, dhamaadka. `D` wuxuu qaansada u wareejiyaa jihada kale.
- `WALLTAN`: riix u dhow geeska darbi, kadibna dhamaadka qaanso, taas oo ka baxda darbigaas.
- `WALLPICK`: riix xariiq ama polilayn oo sheeg in xariiqyada isku xidhan ay sidoo kale qaadanayaan.
- `WALLTRACE`: riix gudaha aag xidhan oo xariiqyo iyo darbiyo ah si aad darbiyada ugu samaysid kan ugu yar ee ku wareegsan.

Darbiyada qorshaha waa toosan yihiin, sidaas darteed qaansadu waxa loo sawiraa darbiyo toosan oo gaaban oo 15 darajo mid walba. Waxay isku xidhaan sida geesa kasta.

## Jar darbiyada

- `WALLSPLIT` (`WS`): riix darbiga, kadibna dhibcaha. `C` wuxuu jaraa halka darbi kale ku gooyo, `G` wuxuu kala-fogeeyaa qaybaha, `F` wuxuu geeska jarka ka dhigaa mid bilaa ah halkii uu isku xidhnaa. Qaybta koowaad waxay hayaa meesha darbiga naqshadda, albaabbada iyo daaqadaha waxay raacaan qaybtooda. Jar albaab ama daaqad mara waa la diidaa.
- `WALLSPLITGAP` ({{ui:Kala qaybi furasho ku jirta}}): isla kala qaybinta, laakiin marka hore wuxuu weydiiyaa furashada.
- `WALLDELSEG`: riix darbiga, kadibna labada geesood ee qaybta la tirtirayo.
- `WALLREJOIN`: riix laba qaybood oo darbi hal ah si aad mar kale u dhigto hal.

## U guuri darbiyada masaafo ahaan

- `WALLDIM` ({{ui:Wax ka beddel cabbir}}): riix cabbir toosan ama isku-jihayn oo ka dhex maraysa darbi ilaa darbi kale, kadibna ku qor qiimaha cusub. Darbiga geeska fog wuxuu isu guuraa isagoo afar-geesle, darbiga geeska hore wuu hayaa, darbiyada isku xidhan ayaa raacda. Dhibcaha fog ee cabbirku wuxuu la guurtaa darbigiisa, sidaas darteed cabbirku wuxuu muujiyaa qiimaha aad qortay.
- `WALLOFFSET` (`WO`): riix darbi, kadibna dhinaca loo guurayo (`D` wuxuu qoraa masaafo, `C` wuxuu sameeyaa nuqul halkiisa).
- `WALLSTRETCH`: daaqad ku wareegsan geesaha darbiga, kadibna dhibcaha saldhigga iyo dhibcaha labaad.
- Sifooyinka, {{ui:Dherer}} la qoray wuxuu hayaa bilowga oo wuxuu la socdaa darbiga isku xidhan geeska fog, {{ui:Dhumucda}} cusub wuxuu ka kortaa {{ui:Xariiqda booska}} aad dooratay (wejiga bidix, wejiga midig ama dhexe).

## Cabbir u dhexeeya xariiqyada dhexe ee darbiyada

Xariiqda dhexe ee darbi ma sawirmo, laakiin dhibcaha walxaha ayaa helaa. Marka dhibcaha walxaha uu furan yahay ({{key:F3}}), ku dhaqaaq kursorka dhexda dhumucda darbiga: calaamaddu waxay akhrisaa `Wall center: endpoint` ama `Wall center: midpoint`, xariiqda dhexe waxay muujinaysaa xariiq dashed ah intii calaamaddu ku sii jirto. Marka {{ui:Xagas-qumman}} ama {{ui:Ugu dhow (N)}} la furo liiska dhibcaha walxaha, kuwaas xariiqda dhexe ayay shaqeeyaan.

1. Bilow `DIMLINEAR` (ama `DIMALIGNED`).
2. Riix darbiga koowaad halka calaamaddu akhrinayso `Wall center: midpoint` ama `Wall center: endpoint`.
3. Riix darbiga labaad si isku mid ah, kadibna riix meesha xariiqda cabbirku tagayso.
4. Si aad masaafada u beddesho, bilow `WALLDIM`, riix cabbirka oo ku qor qiimaha cusub. Darbiga labaad wuu dhaqaaqaa.

Dhibcaha xariiqda dhexe waxay shaqeeyaan amar kasta oo dhibic weydiiya.

## Qufulka darbiyada

Qufulku wuxuu la sii joogaa darbiga faylka. Haddii aad darbi qufulan guurto, kan kale ayaa raacda. Haddii beddel mid uu labada darbiba si kala duwan u guuro, waa la diidaa oo waxba ma beddelo.

- `WALLHOLD`: quful darbi darbi kale. `A` wuxuu marka hore u guurtaa xariiqda darbiga kale, `K` wuxuu hayaa masaafada uu leeyahay.
- `WALLHOLDDIM`: qufulka masaafada u dhexeysa laba darbi oo is-barbar socda.
- `WALLGRID`: quful darbi xariiq shabakad (xariiq lakab shabakad ah oo calaamaddeeda qoraal ku taal geesa hal), ama xagga xariiqda ama hal geeska ku taal. Darbi qufulan xariiqda dhexdeeda wuxuu hayaa masaafada uu ka leeyahay. U guuri xariiqda shabakadda `GRIDMOVE` darbigu wuu raacaa oo dhan, darbiyadiisa isku xidhan la socda. Darbi xariiqda shabakadda ku jira wuxuu dhaqaaqaa oo dhan xitaa qufulka la'aan, darbi kaliya geesihiisu xariiqda ku dhamaado wuxuu geeskaas ku fidsanayaa.
- `WALLHOLDS` wuxuu liistaa qufulada. `WALLUNHOLD` wuxuu qufulada ka qaadaa darbi.
- Quful kasta wuxuu muujiyaa qufulka yar qorshaha: dhinaca dhexda darbiga qufulan, ama dhinaca geeska ay xariiqda shabakadda ku qufulan tahay. Riix qufulka si aad qufulkaas uga qaado.

## Waxa aan weli jirin

Qufuluhu waxay isticmaalaan xariiqyada dhexe ee darbiyada. Darbiyadu halkan lakabyo ma lahaan, sidaas darteed ma jiro mudnaanta lakabka isku xidhka, darbiyaduna ma foororaan (eeg qaansooyinka kor). Qof ma isku dayin qalabyadan naqshad weyn, mana la hubin barnaamij CAD kale.
