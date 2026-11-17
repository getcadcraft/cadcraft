---
title: Joonista koordinaatidega
summary: Joonista täpne põrandaplaani kontuur, sisestades absoluutseid, suhtelisi ja polaarkoordinaate ning kasutades otsest kauguse sisestust.
keywords: line, pline, murdjoon, koordinaadid, suhteline, polaar, absoluutne, otsene kaugus, @, punktide sisestamine, täpne, ortho
from: 19e82350
---

## Mida sa teed

L-kujulise ruumi kontuur mõõtmetega 6000 × 4500 ja 2000 × 1500 väljalõikega, joonistatud täpselt, ning 30-kraadise nurga all olev sein. Kasutad kõiki nelja punkti sisestamise viisi. Töötame millimeetrites: üks joonistusühik on üks millimeeter.

Kõigi vormingute kiirviide on jaotises [Koordinaatide ja kauguste sisestamine](topic:coordinate-entry).

## Enne alustamist

1. Ava CadCraft. Kui joonis on avatud, klõpsa kõigepealt {{ui:Uus}}.
2. Vajuta {{key:Esc}}, et midagi ei oleks valitud. Parem paneel näitab {{ui:Praegused sätted}}.
3. Määra {{ui:Ühikud}} väärtuseks {{ui:Millimeetrid}}. Midagi ei muutu suuruses; see ütleb ainult lehtedele ja väljatrükkidele, mida üks ühik tähendab.

## Absoluutkoordinaadid: esimene punkt

Absoluutkoordinaat on asukoht, mõõdetud nullpunktist, sisestatud kujul `x,y`.

1. Sisesta `L` ja vajuta {{key:Enter}}. Reale ilmub `Specify first point:`.
2. Sisesta `0,0` ja vajuta {{key:Enter}}.

Venitusjoon ulatub nüüd nullpunktist ristkursorini. Olekuribal olevad koordinaadid näitavad liikumise ajal kaugust ja nurka algpunktist.

## Suhtelised koordinaadid: @dx,dy

Suhteline koordinaat sisestatakse kujul `@dx,dy`: nii palju risti, nii palju üles, viimasest punktist. Negatiivsed arvud lähevad vasakule või alla.

3. Sisesta `@6000,0` ja vajuta {{key:Enter}}. 6000 pikkune joon läheb paremale.
4. Sisesta `@0,3000` ja vajuta {{key:Enter}}.
5. Sisesta `@-2000,0` ja vajuta {{key:Enter}}.
6. Sisesta `@0,1500` ja vajuta {{key:Enter}}.

Peaksid nägema nelja omavahel ühendatud joont, mis ronivad ruumi paremat külge mööda üles.

## Otsene kauguse sisestus: paljas arv

Kui sisestad ühe arvu, liigub CadCraft selle kauguse ristkursori suunas. Lülita sisse Ortho, et suund haakuks horisontaalselt või vertikaalselt.

7. Vajuta {{key:F8}} või klõpsa olekuribal nuppu {{ui:Ortho}}. Olekuribal on „Ortho sees“.
8. Liiguta ristkursor viimase punkti vasakule. Venitusjoon jääb horisontaalseks.
9. Sisesta `4000` ja vajuta {{key:Enter}}. Joon läheb 4000 võrra vasakule.
10. Liiguta ristkursor viimasest punktist allapoole.
11. Sisesta `4500` ja vajuta {{key:Enter}}. Oled tagasi algpunktis.
12. Vajuta tühjal reale {{key:Enter}}, et käsk lõpetada.

:::mac
F8 võib Macis juhtida meediamängimist. Hoia all **fn** ja vajuta F8, või klõpsa nupule {{ui:Ortho}}. Vaata [Klahvid, hiired ja puuteplaadid](common:keys).
:::

Nüüd on sul suletud L-kujuline kontuur, mis koosneb kuuest eraldi joonest.

13. Klõpsa {{ui:Ulatus}}, et näha kogu seda.

## Polaarkoordinaadid: @kaugus<nurk

Polaarkoordinaat sisestatakse kujul `@kaugus<nurk`. Nurgad on kraadides, mõõdetuna vastupäeva positiivsest X-suunast: 0 on paremal, 90 on üleval, 180 on vasakul, 270 (või -90) on all.

14. Sisesta `L` ja vajuta {{key:Enter}}.
15. Sisesta `6000,0` ja vajuta {{key:Enter}}, et alustada alumisest paremast nurgast.
16. Sisesta `@2500<-30` ja vajuta {{key:Enter}}. 2500 pikkune joon lahkub nurgast ja läheb alla ning paremale, 30 kraadi horisontaaljoonest allapoole.
17. Vajuta {{key:Enter}}, et käsk lõpetada.

Polaarkoordinaat ilma `@`-ta, nagu `2500<30`, mõõdetakse nullpunktist, mitte viimasest punktist.

## Sama kontuur ühe murdjoonena

Kuus eraldi joont sobivad paljudeks töödeks, kuid murdjoon on üks objekt: see nihutatakse, mõõdetakse ja valitakse tervikuna. Kasuta käsku {{cmd:PLINE}} samade sisenditega.

1. Sisesta `PL` ja vajuta {{key:Enter}}.
2. Sisesta `0,-6000` ja vajuta {{key:Enter}}, et alustada esimese kontuuri alt.
3. Sisesta `@6000,0`, seejärel vajuta {{key:Enter}}.
4. Sisesta `@0,3000`, seejärel vajuta {{key:Enter}}.
5. Sisesta `@-2000,0`, seejärel vajuta {{key:Enter}}.
6. Sisesta `@0,1500`, seejärel vajuta {{key:Enter}}.
7. Sisesta `@-4000,0`, seejärel vajuta {{key:Enter}}.
8. Sisesta `C` ja vajuta {{key:Enter}}. Murdjoon sulgub ja käsk lõpeb.
9. Klõpsa uuel kontuuril. Parem paneel näitab „Murdjoon“, oma {{ui:Tippe}}, {{ui:Pikkus}} ja kuna see on suletud, oma {{ui:Pindala}}.

Pindala peaks olema 24000000 (ruutmillimeetrit, mis on 24 ruutmeetrit).

## Valikud joonistamise ajal

- Käskudes {{cmd:LINE}} ja {{cmd:PLINE}} sisesta `U` ja vajuta {{key:Enter}}, et võtta viimane lõik tagasi, jäädes käsku.
- Käsus {{cmd:LINE}} sulgeb `C` joone esimese punkti juurde, kui on vähemalt kaks lõiku.
- Käsus {{cmd:PLINE}} lülitab `A` kaarlõikude režiimi (iga kaar jätkub sujuvalt eelmisest lõigust) ja `L` tagasi joonte juurde. Kaarerežiimis on sulgemisvalik `CL`.
- Käsus {{cmd:LINE}} alustab {{key:Enter}} vajutamine reale `Specify first point:` viimasest sinu antud punktist, nii et saad jätkata sealt, kus pooleli jäid.

## Levinud vead

- **Sisestasid `6000,0`, kui mõtlesid `@6000,0`.** Ilma `@`-ta mõõdetakse punkt nullpunktist, mitte viimasest punktist, nii et joon lendab ootamatusse kohta. CadCraftis on `x,y` alati absoluutne. Võta tagasi, vajutades `U` ja {{key:Enter}}.
- **Koma kirjutatud kümnendkohana.** Kümnendkohtades kasutatakse punkti: `1250.5`. Koma eraldab alati X ja Y.
- **Otsene kaugus läks valesti.** Paljas arv järgib ristkursorit. Liiguta ristkursor soovitud külge enne, kui vajutad {{key:Enter}}, ja joonte jaoks lülita sisse {{ui:Ortho}}.
- **„Point or option keyword required.“** Nõutav on punkt või valikuvõti. CadCraft ei saanud aru, mida sisestasid. Kontrolli, kas arvu sees on tühikuid või puudub koma, ja sisesta uuesti.
- **Jalad ja tollid.** CadCraft loeb ainult tavalisi arve. Sisesta `150` 12'-6" jaoks tollijoonisel või `12.5` jalgadejoonisel.
