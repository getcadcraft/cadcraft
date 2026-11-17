---
title: Naqshadaha skaanka ah iyo raadinta
summary: Keen xaashi skaanka ah, u dhig miisaan oo geesood ka dhig, nadiifi, jar qaybo ka mid ah, ka tirtir qaybo, ku qabo khadadka oo u beddel khadad iyo qaansooyin.
keywords: skaan, naqshad skaanka ah, raster, tiff, jpeg, png, miisaan, isku hagaaji, deskew, despeckle, threshold, madow iyo cad, jar, tirtir, raadin, vectorize, snap, qaansooyin, xarriijin, naqshado duug ah, scanattach, scantrace
from: 36227e5b
---

## Xaashi warqad ah ilaa walxaha naqshadda

Naqshad skaanka ah waa sawir. CadCraft wuxuu hayaa sawirka aad siisay oo aan waligiis beddelin: tallaabo kasta oo nadiifinta ah wuxuu sameeyaa sawir cusub, oo mid kasta waa hal tallaabo oo ka noqod ah, {{cmd:SCANINFO}} wuxuu liisteeyaa faylka asalka ah iyo tallaabooyinka la qaaday ka dib. Waxba looma soo dirin, waxbana looma qiyaaso moodel tababaran: nadiifinta iyo raadintu waa habeyn sawir oo caadi ah, waxayna ku socdaan kombiyuutarkaaga.

1. **Geli.** {{cmd:SCANATTACH}} wuxuu akhrinayaa PNG, JPEG, TIFF (hal bog, ama dhammaan bogagga faylka bogag badan) ama bog PDF ah oo sawir ah. Wuxuu weydiinayaa bogga, geeska hoose-bidix iyo ballaca. Bogga PDF wuxuu sidoo kale weydiinayaa inta pikseel ee inch kasta lagu rasmeynayo bogga.
2. **Miisaan u dhig.** {{cmd:SCANSCALE}}: dooro laba dhibic skaanka, ka dibna ku qor masaafada dhabta ah ee u dhexaysa. Xaashiga waxaa lagu miisaaneeyaa dhibcaha koowaad.
3. **Isku hagaaji.** {{cmd:SCANALIGN}}: dooro laba dhibic skaanka iyo laba meel oo ay u dhigmaan; xaashiga ayaa guurta oo leexda si uu ugu habboonaado, iyo sidoo kale miisaanka wuu beddelaa haddii aadan ku jawaabin Maya.
4. **Geesood ka dhig.** {{cmd:SCANDESKEW}} wuxuu cabbiraa xagalka khadadka dheer ee xaashigu ku yaallo, wuxuuna muujiyaa, iyo sida uu u hubo. Aqbal, ama ku qor kaaga, xaashina waa la leexinayaa. Xaashi khadad dheer oo yar leh waxay heshaa digniin: hubi xagalka ka hor intaadan aqbalin.
5. **Nadiifi.** {{cmd:SCANCLEAN}} wuxuu xaashiga ka dhigaa madow iyo cad (Auto wuxuu marka hore siman yeelaa warqadda; Adaptive wuxuu si dhow u raacaa isbeddelada warqadda; Level waa hal tiro oo xaashi oo dhan); wuxuuna ka saaraa dhibco ilaa cabbirka aad dejisay.
6. **Jar oo tirtir.** {{cmd:SCANCROP}} wuxuu ilaaliyaa daaqad. {{cmd:SCANERASE}} wuxuu tirtiraa laydh, poligon ama laasoo (riix oo jiid): xabbo calaamadeed, qoraallo, wareega kafeega.

Sawirka nadiifsan ayaa ah waxa DWG la kaydiyay ku hayso (IMAGE iyo IMAGEDEF, faylka sawirka oo ku yaal naqshadda agtiisa, sida sawir kasta oo kale).

## Khadadka skaanka la xidhiidh

Marka {{cmd:RASTERSNAP}} la shido (caadi ahaan), dhibcaha xidhiidhka (object snaps) waxay sidoo kale helaan khadadka skaanka madow iyo cad: dhamaadka khadadka, dhexdooda, geesaha iyo isgoysyada, oo lagu muujiyo calaamadaha snap-ka caadiga ah. Qaybta xaashiga ee ku hoos taal mu'ushka ayaa la raadiyaa markaad dhaqdhaqdo; si ka weyn u weynee ilaa pikseel kasta uu noqdo dhowr pikseel oo shaashad ah. Khad ka dheer qaybta la raadinayo waxaa lagu raacaa ilaa dhamaadkiisa.

## Raadinta

{{cmd:SCANTRACE}} wuxuu khadadka xaashiga u beddelaa khadad iyo qaansooyin layer cusub (SCAN-TRACE) ah, hal tallaabo oo ka noqod ah, iyadoo skaanku weli hoosteeda yaal. Waxaad dejisaa:

- **Dulqaadka:** inta ay khad ama qaanso uga fogaan karto khadadka skaanka, unugyada naqshadda ahaan (warbixintu sidoo kale wuxuu siinayaa pikseel). Dulqaad adag wuxuu raacaa jilaa kasta; mid dhaqsi ahi wuxuu sameeyaa qaybo yar oo toosan.
- **Daaqadda:** geesaha xaashiga, ama xaashi oo dhan.
- **Qaansooyinka:** xidhan wuxuu sameeyaa khadad kaliya.
- **Hadhaagii:** wixii raadintu iska tagtay waxaa lagu muujiyaa sanduuqyo layer ah oo la damin karo, ama lama muujin.

Raadintu wuxuu helaa dhexda xariijin kasta, wuu raacaa, wuxuu ku habeeyaa khadad toos ah iyo qaansooyin wareeg ah, wuxuu isku xidhaa socodyada loo jarey marka khad kale gooyey, khadadka ku dhow sinaadka iyo dhuumashada wuxuu u dhigaa sinaad iyo dhuumasho sax ah, wuxuuna xidhaa geeska. **Qoraalka iyo xariijinta waxay hadhaan raster:** qaybaha qiyaasta xarfaha waa la dhigaa, bundalyada khadadka gaagaaban ee isbarbar ah waxaa loo qaadaa xariijin, waana la dhigaa.

Marka uu dhammeeyo wuxuu sheegaa inta khad iyo qaanso ah ee sameeyey, dulqaadka, iyo inta qaybood ee uu raster ku tegey. **Taasi waa wixii pikseelku siiyey dulqaadkaas, mana aha sheeg in natiijadu sax tahay.** Isbarbar dhig xaashiga: raadintu waxay kari kartaa khad hoos u dhacday, labo khad oo aad isu dhow ah ayay isku xidhi kartaa, ama khad ku dhigi kartaa meel uu wax kaliya dhibic ku yaal. Marka hore nadiifi skaanka (toosan, madow iyo cad, dhibcaha la tirtiray) natiijadu aad bay u wanaagsan tahay.

## Waxa aanu akhrin

TIFF faylal ku kaydsan qaybo (tiles), BigTIFF, TIFF oo leh JPEG ama deflate, kood fax Group 3, iyo midabyo ku kaydsan dhoobo gooni ah waa la diidaa iyada oo fariin lagu sheegayo; mar kale ku kaydi iyaga oo ah strips oo leh LZW, PackBits, Group 4 ama aan wax lagu cadaynin. Faylalka PNG ee interlaced sidoo kale waa la diidaa. Faylal ka weyn 128 MB ama 100 milyan pikseel waa la diidaa, daaqadda raadintuna waxay hayn kartaa ugu badnaan 64 milyan pikseel.
