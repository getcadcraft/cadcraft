---
title: Vizatimi pa shikim
summary: Ndize Qasjen dhe CadCraft lexon çdo komandë dhe rezultat nëpërmjet lexuesit të ekranit tuaj, përshkruan vizatimin dhe ç'ka pranë kursorit, lë të lëvizni kursorin me tastierë, luan një tingull për çdo kapje dhe dorëzim, dhe pranon komanda me zë aty ku shfletuesi juaj mund ta bëjë këtë në kompjuterin tuaj.
keywords: qasje, lexues ekrani, i verbër, shikim i dobët, NVDA, VoiceOver, JAWS, Orca, kursor me tastierë, komanda me zë, të folur, tinguj, tinguj kapjeje, përshkruaj vizatimin, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Qasja** ju lejon të vizatoni pa e parë ekranin. Është e fikur derisa ta ndizni, që askush ta marrë pa dashje.

## Ndizeni

Hapni **Cilësimet** (rrotën, ose Ctrl+,), gjeni **Vizatim pa shikim** dhe zgjidhni **Ndez**. Ose shkruani `ACCESS` në rreshtin e komandave dhe përgjigjuni `On`. Mbahet mend në këtë kompjuter.

Me Qasjen të ndezur:

- **Gjithçka që thotë rreshti i komandave lexohet** nga lexuesi juaj i ekranit: ç'shkruat, kërkesa që bën, përgjigjja dhe çdo gabim. CadCraft përdor zonat e veta të drejtpërdrejta, të qeta dhe urgjente, kështu që një lexues ekrani që lexon zona të drejtpërdrejta nuk kërkon konfigurim. Gabimet dhe anulimet ndërpresin; gjithçka tjetër pret radhën.
- **Zona e vizatimit është e arritshme.** Shtypni Tab derisa të dëgjoni "Drawing", ose shtypni Shift+Tab nga rreshti i komandave. Është një zonë që ia kalon tastet CadCraft.

## Tastet mbi vizatim

| Tasti | Çfarë bën |
|---|---|
| Tastet me shigjeta | Lëvizin kursorin me tastierë. Një hap është afërsisht një qindësh i asaj që tregon ekrani, i rrumbullakosur në 1, 2 ose 5. Shift e bën lëvizjen dhjetë herë më të gjatë, Ctrl një të dhjetën. |
| Enter | Zgjedh pikën nën kursor, saktësisht si një klikim. |
| Space | Shtyp Enter në rreshtin e komandave: përfundon LINE, merr parazgjedhjen. |
| Tab, Shift+Tab | Kalon te pika e kapjes pasuese ose e mëparshme pranë kursorit, më e afërta e para. |
| G | Kalon nëpër dorezat e objekteve të zgjedhura. |
| D | Përshkruan vizatimin: sa objekte, çfarë lloji, sa të mëdhenj, ç'është zgjedhur. |
| W | Thotë ku është kursori dhe sa larg është nga pika e fundit. |
| N | Thotë ç'ka pranë kursorit, më i afërti i pari, me distancën dhe anën. |
| S | Përshkruan objektet e zgjedhura. |
| R | Thotë përsëri gjënë e fundit. |
| V | Zëri aktiv ose jo. |
| / | Kalon te rreshti i komandave. |
| ? | Liston këta taste. |

Lëvizja me tastet thotë ku keni mbërritur. Kur një komandë pret një pikë, thotë gjithashtu sa larg dhe në cilën drejtim jeni nga pika e fundit, për shembull "2400 nga pika e fundit, djathtas, me 0 gradë".

## Komandat

- {{cmd:ACCESS}} ndez ose fik Qasjen, tingujt e kapjes dhe zërin, dhe thotë gjendjen.
- {{cmd:DESCRIBE}} thotë ç'mban vizatimi.
- {{cmd:WHEREAMI}} thotë ku është kursori.
- {{cmd:NEARBY}} thotë ç'ndodhet afër kursorit.
- {{cmd:SAYSEL}} thotë ç'është zgjedhur, një fjali për çdo objekt.
- {{cmd:VOICE}} ndez ose fik komandat e folura.

Këto pesë lexojnë vizatimin dhe shfaqin një përgjigje; nuk ndryshojnë asgjë.

## Tinguj për kapjet dhe dorezat

Ndizni **Tingujt e kapjes dhe dorezave** në Cilësimet. Çdo lloj kapjeje ka lartësinë dhe tingullin e vet, kështu që mund ta dalloni një skaj nga një mesi, një qendër, një kryqëzim dhe të tjerët, dhe një dorezë ka një tik të dyfishtë. Tingulli lëviz majtas ose djathtas për t'i ndjekur kursorin nëpër ekran. Tingujt krijohen në kompjuterin tuaj; asgjë nuk shkarkohet.

## Komandat me zë

Ndizni **Komandat me zë** në Cilësimet. Thoni emrin e një komande ("line", "circle", "move"), pastaj thoni numrat ashtu si i lexoni: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". "Enter", "cancel", "undo" dhe "redo" bëjnë atë që thonë. Ajo që u dëgjua kthehet me zë, dhe një frazë që nuk është komandë raportohet, nuk supozohet.

**Ku njihet të folurit.** CadCraft nuk ka shërbim të vetin për të folur dhe nuk dërgon audio askund. I kërkon shfletuesit tuaj të njohë të folurit në këtë kompjuter. Nëse shfletuesi mundet, zgjedhja është **Në këtë kompjuter** dhe asnjë audio nuk del prej tij. Nëse nuk mundet, zëri mbetet i fikur, përveç nëse zgjidhni **Shërbimi online i shfletuesit**, që e lejon shfletuesin të dërgojë audio te shërbimi i të folurit të prodhuesit të tij. Cilësimet tregon cili zbatohet para se të vendosni.

## Ç'nuk bën ende

- Vetëm CadCraft ka Qasje. Të tjerat shtatë aplikacione do të vijnë më pas, me të njëjtët taste dhe tinguj.
- Teksti në një vizatim (një shënim, emri i një blloku) lexohet ashtu siç është shkruar; nuk merret kurrë si udhëzim.
- Është provuar me kontrolle sintetike dhe me testet e shfletuesit; kontrollet me dorë me NVDA, VoiceOver dhe një provues i verbër ose me shikim të dobët janë ende për t'u bërë. Nëse e provoni, na tregoni çfarë mungon.
