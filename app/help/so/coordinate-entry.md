---
title: Gelinta kooxdhuraanta iyo masaafada
summary: Dhammaan siyaabaha loo qoro barta, masaafada, xagasha ama lambarka khadka amarka CadCraft, oo leh tusaalooyin.
keywords: gelinta firfircoon, dyn, f12, tab, kooxdhuraanta, buuxa, qaraabo, polar, @, masaafada toosa, xagasha, darajooyin, barta ugu dambeysa, lastpoint, qorista barta, gelin, xisaab, xisaabiye, cal, plus, qeybo, qaacido
from: 7de9252d
---

## Barta

Marka amarku weydiiyo barta, qor mid ka mid ah kuwan oo riix {{key:Enter}}:

| Waxaad qortaa | Macnaha | Tusaale |
|---|---|---|
| `x,y` | Buuxa: waxaa laga cabbiraa asalka 0,0 | `2500,1200` |
| `#x,y` | Sidoo kale buuxa (waa la aqbalaa si loo yaqaan) | `#2500,1200` |
| `@dx,dy` | Qaraabo: dhinac iyo dhinac sare ee barta ugu dambeysay | `@600,0` |
| `@d<a` | Polar qaraabo: masaafada iyo xagasha barta ugu dambeysay | `@1500<45` |
| `d<a` | Polar buuxa: masaafada iyo xagasha asalka | `3000<90` |
| lambar keliya | Masaafo toos ah: intaas oo ka fog barta saldhigga, xagga xarfaha | `1200` |
| `*x,y`, `@*dx,dy` | Kooxdhuraanta adduunka marka UCS la dejiyay | `*0,0` |

Marka UCS la dejiyo ({{cmd:UCS}}), `x,y`, `@dx,dy` iyo xagasha `d<a` waxaa lagu cabbiraa jihooyinka UCS. Eeg [Ku leexo muuqaalka oo isticmaal kooxdhuraantaada](topic:ucs-and-turned-view).

Ama guji naqshadda; object snaps iyo Ortho waxay ku shaqeeyaan gujinta.

Xeerarka:

- Koob ayaa kala saara X iyo Y. Tobannaanka waxaa loo isticmaalaa dhibic: `1250.75,300`.
- Qiimaha taban wuxuu u socdaa bidix iyo hoos: `@-600,0`.
- Ha qorin meel-bannaan: {{key:Space}} wuxuu diraa khad, sida {{key:Enter}}.
- Lambarrada waxay isticmaali karaan awood (exponents): `1e3` waa 1000.
- Halbeegyo ma qorno, ma jiro qoraalka fudud-iyo-inji. Qor lambarro fudud oo ku jira unugyada naqshadda.

## Barta ugu dambeysay

`@` wuxuu ka tirinayaa **barta ugu dambeysay ee aad siisay barta kasta**, amar kasta: guji, isku-xidh ama barta la qoray. Waa la xasuustaa intre amarrada, sidaas awgeed waxaad bilaabi kartaa khad cusub `@0,500` ka fog meeshii ugu dambeysay ee uu ku dhammaaday. Ka hor intaadan siin barta, `@` wuxuu ka tirinayaa 0,0.

Meelaha muhiimka ah:

- Ku {{cmd:COPY}}, koobiga ka dib kii ugu horreeyay barta ugu dambeysay waa barta koobigaas. `@600,0` laba jeer wuxuu meeleeyaa koobiyo 600 iyo 1200 ka fog asalka.
- Ka dib markaad dhigto cabbir, barta ugu dambeysay waa meesha aad khadka cabbirka ku dhigtay, ma aha dhammaadka cabbirka.

Marka shaki jiro, isticmaal barta buuxa, isku-xidh ama masaafo toos ah.

## Gelinta masaafada toosa

Lambar keliya waa masaafo ka bilaabanta **barta saldhigga** amarka (barta uu xadhigu ka bilaabmo) oo u socota xagga xarfaha:

1. Dhaqdhaq xarfaha jihada aad rabto.
2. Qor masaafada oo riix {{key:Enter}}.

Marka {{ui:Ortho}} la shido, jihada waxay u kala beddelaa toos bidix-midig ama sare-hoos, taasna waa habka ugu dhakhsaha badan ee loo sameeyo darbiyo xagal-qaayib ah. Haddii aanay jirin barta saldhiga, ama xarfaha ay si sax ah ugu jiraan saldhiga, lambarka waa la diidaa oo waxaa soo baxa "Waxaa loo baahan yahay barta ama furaha xulashada."

## Xagasha

- Darajooyin, lambar keliya ah: `30`, `-45`, `112.5`.
- Waxaa lagu cabbiraa iyada oo laga bilaabayo jihada X ee togan (midig) oo lagu wareegayo xagga soo horjeeda saacadda: 0 waa midig, 90 waa sare, 180 waa bidix, 270 ama -90 waa hoos.
- Halka xagasha la weydiiyo (jeexjeexa, xagasha qoraalka), waad guji kartaa: xagasha waxaa lagu cabbiraa barta saldhigga ilaa gujinta. Ka hor intaysan jirin barta saldhig, gujinta kowaad waa dejinaysaa, weydiintuna waxay weydiisaa barta labaad.

## Masaafooyin

Halka masaafo la weydiiyo (dhexdhexaad, offset, dherer qoraal, cabbirka tirinta):

- qor lambar togan, ama
- guji barta: masaafada ka barta saldhigga amarka ilaa iyada, ama
- guji laba barood marka barta saldhig aysan jirin: weydiintu waxay isbedeshaa `Specify second point`.

"Waxaa loo baahan yahay lambar togan ama laba barood." macnaheedu waa qiimaha lambar ma ahayn, ama wuu taban yahay.

## Xisaabta qiimaha la qoro

Meel kasta oo dherer, kooxdhuraan, xagal ama lambar la qoro (khadka amarka, gelinta firfircoon, sanduuqyada Properties iyo wada-hadallada), waxaad qori kartaa xisaab adigoo isticmaalaya `+`, `-`, `*`, `/` iyo xidhidhyo, halkii aad horay u xisaabin lahayd:

| Qor | Natiijada |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (naqshad feet iyo inji ah) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, unugyada naqshadda (marka unugyadeeda la dejiyo) |
| `@4+7/16,0` | barta 4.4375 midig ka mid ah tii ugu dambeysay |
| `360/7` | xagal 51.43 darajo |

- Jeex oo lagu qoro dherer weli qayb ka ah: `4-7/16` waa 4 7/16 iyo `24'-6"` waa 24 feet 6 inji. Si aad uga jarto ka dib calaamadda feet-ka, dhamee dhererka marka hore, `24'-0"-6"`, ama geli xisaabta xidhidh gudahooda jeex ay ku xigto space ku jirto, `(24' - 6")` (xidhidhka gudihiisa space waa space; meel kale waxay riixaysaa {{key:Enter}}).
- Lambar dherer lagu daro wuxuu ku jiraa unugyada naqshadda; isku-dhufashada ama qaybinta lambar wuxuu dhererka cabbir u beddelaa. Laba dherer isku dhufo waxay samaysaa aag, sidaas awgeed `2'*3'` waa la diidaa.
- `abs`, `round`, `ceil` iyo `floor` ayaa sidoo kale shaqeeya: `round(10/3)`.
- Xisaab aan la akhrin karin waa la diidaa, iyada oo lagu sheegayo meesha uu khaladku ku dhacay, tusaale ahaan "Xisaabtu way dhammaatay hore (jilaha 3): qiime ayaa maqan." Waxba looma akhrin sida 0. {{cmd:CAL}} wuxuu daabacaa qiimaha xisaabta.

## Gelinta firfircoon

{{ui:Dyn}} ({{key:F12}}, status bar-ka) wuxuu dhigaa qiimayaasha xarfaha agteeda inta amarku barta weydiinayo.

- Haddii aan barta saldhig weli jirin (barta kowaad ee khadka), laba goobood waa **X** iyo **Y**.
- Kadib, waa **masaafada** iyo **xagasha** barta ugu dambeysay.

Qorista weli waxay u gashaa khadka amarka; goobta xarfaha agteeda ayaa muujinaysa, xadhigna wuu raacaa.

1. Qor qiime: wuxuu galaa goobta la iftiimiyay.
2. Riix {{key:Tab}} (ama koob ka dib X). Qiimaha waa la xidhay (oo lagu muujiyay qaro), goobta xigta ayaa la iftiimiyay. Masaafo xidhan waxay ilaalisaa xadhigga dhererkaas inta aad mouse-ka ku dhajinayso.
3. Qor qiimaha labaad, ama kaliya dhig, oo riix {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} wuxuu sameeyaa 50 toos sare ee barta ugu dambeysay.

Riixida {{key:Enter}} ka dib hal qiime oo aan {{key:Tab}} lahayn waxay u shaqeysaa sida gelinta masaafada toosa. Feet iyo inji waxay ku shaqeeyaan goobaha sidoo kale (`12'6"`). Weydiinta masaafada iyo xagasha (raadiyaha goobo, jeexjeexa) iyaguna qiimahooda xarfaha agteeda ayay muujiyaan.

## Ikhtiyaarrada iyo qiimaha caadiga ah

- Ikhtiyaarradu waxay ku muuqdaan xidhidhyo laba-geesle ah. Qor xarfaha waaweyn ee ikhtiyaarka (`D` for `[Diameter]`, `CL` for `CLose`) oo riix {{key:Enter}}. Bilaabmooyinka dheer ee ereyga sidoo kale waa shaqeeyaan (`DIA`).
- Qiimaha caadiga ah wuxuu ku muuqdaa xidhidhyo xagal ah sida `<500>`. Riix {{key:Enter}} ama midig-guji si aad u isticmaasho.

## Qaababka kiiboodhka kale iyo keypad-ka

Magacyada amarrada, magacyada gaagaaban iyo xarfaha ikhtiyaarka waa xarfo Latin. Marka qaabka Giriigga, Cyrillic, Hebrew, Carabi, Faarisi, Thai ama Kuuriyada uu firfircoon yahay, ma u baahnid inaad beddesho qaabka: marka ereyga aad qortay aanu ahayn amar, magac gaagaaban ama ikhtiyaar sida uu yahay, CadCraft wuxuu akhrinayaa iyada oo loo eegayo furayaasha aad riixday. Furaha ku qoran `L` kiiboodhka Latin wali wuxuu bilaabaa `LINE`, furaha `C` wuxuu jawaabayaa `Close`, xarafka uu qaabku ku qoro kasta. Liiska amarrada ee u dhigma ee kor ku yaal khadka amarka ayaa raacaa isla xeerka. Qoraalka aad qorto meel uu amarku qoraal weydiinayo (waxa ku jira {{cmd:TEXT}}, magac) weligiis lama beddelo.

Qaababka uu furaha tobanaanka (keypad decimal) bixiyo koob, furahaas wuxuu qorayaa barta khadka amarka iyo sanduuqyada lambarka, sidaas awgeed `12.5` waxaa laga qori karaa keypad-ka. Furaha koobka ee kiiboodhka weyn wali wuxuu kala saaraa `x,y`.

Labadaba waa la damin karaa {{ui:Settings}} dhexdeeda: {{ui:Commands on a non-Latin keyboard layout}} iyo {{ui:Keypad decimal key}}.

## Muuqaalka kooxdhuraanta

Status bar-ku wuxuu muujiyaa X iyo Y ee xarfaha (UCS haddii la dejiyay), ka dib snaps iyo Ortho. Marka amarku barta saldhig leeyahay, wuxuu ku daraa `Δ` masaafada iyo xagasha ka barta, tusaale ahaan `Δ 1500 < 30°`: lambarrada aad u qori lahayd sidan `@1500<30`.

Isticmaal {{cmd:ID}} si aad u daabacdo kooxdhuraanta barta, iyo {{cmd:DIST}} si aad u cabbirto masaafada u dhexeysa labo barood.
