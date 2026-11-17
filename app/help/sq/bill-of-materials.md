---
title: Listat e materialeve sipas zonës
summary: Shëno zona të vizatimit si zona dhe vendos një tabelë për çdo zonë që numëron blloqet brenda saj. Tabelat ndjekin vizatimin ndërsa punon, dhe ti zgjedh cilat kolona shfaq secila.
keywords: lista e materialeve, BOM, listë pjesësh, tabelë, zonë, sipërfaqe, numërim, atribut, kolona, numër artikulli, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Një **zonë** është një sipërfaqe e emërtuar e vizatimit. Një **tabelë e listës së materialeve** liston atë që ndodhet brenda një zone, ose në tërë vizatimin: çdo bllok me sasinë e tij dhe vlerat e atributeve të tij. Një vizatim mund të ketë sa zona dhe tabela të duhen, dhe një zonë mund të ketë disa tabela me kolona të ndryshme.

Mjetet janë te skeda Blloqe nën {{ui:Lista e materialeve}}, në menynë {{ui:Më shumë}} të grupit Blloqe, dhe mund të shkruhen.

## Bëj një zonë

Shkruaj {{cmd:BOMZONE}} dhe ose

- kliko dy kënde të kundërta për një drejtkëndësh,
- zgjidh {{ui:Shumëkëndësh}}, kliko çdo kënd dhe shtyp Enter për ta mbyllur, ose
- zgjidh {{ui:Objekti}} dhe zgjidh një polivijë të mbyllur, një rreth, një elips ose një spline të mbyllur. Konturi i tij kopjohet; objekti mbetet siç është.

Pastaj shkruaj emrin e zonës. Zona vizatohet si kontur me viza me emrin e saj mbi kënddin e sipërm të majtë, në shtresën `BOM-ZONES`, që nuk printohet. Ndiz printimin për atë shtresë nëse dëshiron zonat në letër.

Një zonë është një polivijë e zakonshme e mbyllur: zhvendose, shtrije ose tërhiq dorezat e saj, dhe emri i saj ndjek. Për të riemëruar një zonë, redakto tekstin e emrit, ose përdor {{cmd:BOMZONE}} dhe {{ui:Riemëro}}. {{ui:Zonat}} liston çdo zonë dhe sa tabela ka.

## Vendos një tabelë

Shkruaj {{cmd:BOMTABLE}} (ose {{cmd:BOM}}), zgjidh konturin ose emrin e zonës, jep lartësinë e tekstit dhe kliko aty ku shkon kënddi i sipërm i majtë i tabelës. Shtyp Enter në vend që të zgjedhësh një zonë, ose zgjidh {{ui:E tërë}}, për një tabelë të tërë vizatimit.

Një tabelë e re shfaq numrin e artikullit, sasinë, emrin e bllokut dhe një kolonë për çdo atribut që mbajnë blloqet (të parat gjashtë; të tjerat ofrohen të pashënuara). Blloqet me të njëjtin emër dhe të njëjtat vlera atributesh ndajnë një rresht.

## Çfarë llogaritet brenda

- Një bllok llogaritet në zonën që mban **pikën e vendosjes** të tij.
- Një vijë, hark, rreth, polivijë, elips, spline ose hatch llogaritet **e tërë** në zonën që mban mesin e shtrirjes së tij (për një vijë, mesin e saj). Gjatësia e tij nuk pritet në kufirin e zonës.
- Një pikë saktësisht mbi kufi është brenda.
- Zonat mund të mbivendosen. Çdo zonë llogaritet për vete, kështu që një objekt në mbivendosje është në të dy tabelat.

## Tabelat ndjekin vizatimin

Kur shton, zhvendos, kopjon ose fshin një bllok, redakton një atribut, ose ripërcakton ose zhvendos një zonë, çdo tabelë vizatohet përsëri në të njëjtin hap. Zhbërja merr mbrapsht redaktimin dhe ndryshimin e tabelës bashkë.

Për ta ndaluar një tabelë nga ndjekja, shëno {{ui:E ngrirë}} te cilësimet e saj. Një tabelë e ngrirë ndryshon vetëm kur redakton cilësimet e saj ose shkruan {{cmd:BOMUPDATE}}, që përditëson çdo tabelë tani.

## Zgjidh kolonat

Përzgjidh një tabelë dhe shkruaj {{cmd:BOMEDIT}}. Në dialog:

- **Kolonat**: shëno ato që duhen shfaqur (artikull, sasi, emër, shtresë, gjatësi, sipërfaqe, shënime dhe çdo atribut), shkruaj titullin tënd për çdo kolonë, dhe lëviz lart ose poshtë.
- {{ui:Grupo rreshtat sipas}}: emri i bllokut dhe vlerat e atributeve, vetëm emri i bllokut, shtresa, ose një atribut. Në një rresht të bashkuar, një vlerë që ndryshon midis blloqeve lexohet "ndryshon".
- {{ui:Rendit sipas}} çdo kolonë, në rritje ose në zbritje.
- {{ui:Titulli}}, {{ui:Shfaq titullin}} dhe {{ui:Rreshti i totaleve}}.
- {{ui:Numëro vijëzimet sipas shtresës}} shton një rresht për çdo shtresë, me numrin e objekteve, gjatësinë totale të tyre dhe, për format e mbyllura, sipërfaqen totale, në njësitë e vizatimit.
- **Shënimet**: shëno kolonën e Shënimeve, pastaj shkruaj një shënim për çdo rresht në tabelë, te tabela në fund të dialogut.

Çdo tabelë mban zgjedhjet e veta.

## Numrat e artikujve

Një rresht mban numrin e tij të artikullit për aq kohë sa është në tabelë. Një rresht i ri merr numrin e radhës së lirë, dhe një numër që është dhënë nuk përdoret përsëri, kështu që balonat e referencës dhe shënimet që citojnë një numër mbeten të sakta. {{ui:Rinumëro artikujt}} i numëron nga 1 sipas radhës së shfaqur.

Një rresht njihet nga ajo që grupon: ndrysho mënyrën e grupimit të rreshtave, ose ndrysho një vlerë atributi që përdor grupimi, dhe rreshti llogaritet si një i ri.

## Eksporti dhe programet e tjera

{{cmd:BOMEXPORT}}, ose {{ui:Eksporto CSV}} në dialog, ruan një tabelë si skedar .csv për një fletëllogaritëse.

Në një skedar DWG ose DXF një tabelë është një bllok i zakonshëm vijash dhe tekstesh, kështu që programet e tjera e shfaqin dhe e printojnë ashtu si është vizatuar. Aty nuk është objekt tabele, dhe nuk përditësohet në programet e tjera. Lidhja me zonën e saj mbahet në skedar si të dhëna shtesë që CadCraft i lexon përsëri, kështu që tabela është sërish e gjallë kur rihap vizatimin në CadCraft. Një DXF R12 i një vizatimi pa fletë nuk e mban cilësimin "nuk printohet" të shtresës së zonës.

Shpërbërja e një tabele e kthen atë në vija dhe tekst të lirë dhe e mbyll lidhjen.
