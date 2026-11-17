---
title: Registracija več skeniranj v eno
summary: Postavite skeniranja, posneta z različnih položajev, v skupen koordinatni sistem s pari izbranih točk ali vnesenimi tarčami, jih izboljšajte z ICP, registracijo shranite kot projekt in registrirani oblak točk izvozite kot LAS ali E57. Ukaz je REGISTERSCANS.
keywords: registracija, registriranje, skeniranja, oblak točk, icp, iterativna najbližja točka, tarče, pari točk, togo preslikavanje, poravnava, združitev, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Kaj boste naredili

Več skeniranj istega prostora (vsako z lastnega položaja skenerja) se začne v lastnih koordinatah. Registrirajte jih: vsakemu skeniranju določite en položaj, da so vsa v enem koordinatnem sistemu, nato to shranite kot projekt in registrirani oblak točk zapišite v eno datoteko LAS ali E57.

## Postavitev skeniranj

1. Odprite pogovorno okno (vnesite `REGISTERSCANS` (ali `REGSCAN`)). {{ui:Dodaj skeniranja…}} sprejme datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ali XYZ, lahko pa jih tudi spustite na pogovorno okno. Skeniranja, ki uporabljajo različne enote, so zavrnjena z opombo: najprej eno pretvorite.
2. Izberite {{ui:Skeniranje za premik}} in {{ui:Postavi glede na}}. Slika prikazuje vsa skeniranja v prostoru v njihovem trenutnem stanju, vsako v svoji barvi: {{ui:Tloris}}, {{ui:Sprednji}} ali {{ui:Stran}}; povlecite za pomik, s kolescem pa povečate ali pomanjšate.
3. **Po parih točk.** Kliknite {{ui:Izberite par}}, nato točko na skeniranju, ki ga premikate, in nato isto mesto na drugem skeniranju (vogal, tarča, noga stebra). To naredite vsaj trikrat, s točkami, ki niso na isti premici in so razmeščene narazen. Kliknite {{ui:Postavi po parih}}: skeniranje se postavi z metodo najmanjših kvadratov, **Preostalo** pa kaže, za koliko vsak par še odstopa. Par z veliko številko je slabo izbrana točka: odstranite ga s križcem in znova postavite.
4. **Po tarčah.** Če so prave koordinate točke znane (zakoličene tarče), kliknite {{ui:Izberite, nato vnesite cilj}}, kliknite točko na njenem skeniranju in v vrstico vnesite X, Y in Z tarče. Pari in vneseni cilji se lahko prosto mešajo.

## Izboljšava z ICP

Pari dajo grobo postavitev. {{ui:Izboljšaj}} premakne skeniranje, dokler se njegove ploskve ne prilegajo ploskvam drugega skeniranja: najprej **točka proti točki**, nato **točka proti ravnini**. Tabela navaja vsak korak z napako in številom ujemajočih se točk; vrstica nad njo prikazuje padanje napake. {{ui:Ustavi}} konča zagon po trenutnem koraku in obdrži dosežen rezultat. {{ui:Razveljavi}} odstrani celoten zagon (ali zadnjo postavitev); {{ui:Ponastavi}} vrne skeniranje na koordinate iz datoteke.

Da bo delo hitro na prenosnem računalniku, ICP deluje na razredčenem deležu točk ({{ui:Uporabljene točke}}, od 5,000 do 60,000) in prezre ujemanja, ki so bolj oddaljena od {{ui:Največja razdalja ujemanja}} (privzeto 5 % velikosti skeniranja, ki se z ustalitvijo manjša). Najprej potrebuje grobo postavitev: skeniranja, ki se komaj prekrivajo, sporočijo, da jih ni mogoče ujemati. Ploskve, ki so samo ravne ali samo premočrtne, ne morejo popraviti položaja vzdolž same sebe; v tem primeru dodajte pare.

## Shranjevanje in izvoz

- {{ui:Shrani projekt}} zapiše majhno datoteko `.ccscans.json`: ime vsakega skeniranja, njegovo velikost in prstni odtis prvih 64 KB ter njegovo preslikavo. Ne vsebuje točk. {{ui:Odpri projekt…}} poišče datoteke skeniranj po teh sklicih (datoteke morajo biti najprej dodane) in vrne vse preslikave.
- {{ui:Izvozi LAS}} in {{ui:Izvozi E57}} zapišeta eno datoteko z vsemi skeniranji na njihovem registriranem mestu. Točke v izvirnikih se nikoli ne prepišejo; preslikava se uporabi med izvozom. Z vklopljenim {{ui:Preberi vse točke iz datotek}} se vsaka datoteka za vsako točko znova prebere (do 20 milijonov na skeniranje); izklopljeno pa se zapišejo samo točke, prikazane v pregledovalniku.
- {{ui:Pokaži registriran oblak}} (CadCraft) zapiše LAS in ga pripne pod risbo na njegove lastne koordinate, kot vsak oblak.

:::note
Nič ni naloženo. Registracija poteka v lastnih enotah datotek in ohranja milimetre: LAS se zapiše z merilom, ki ustreza (do 0.1 mm), E57 pa z dvojno natančnostjo. Koordinatni sistem se prenese v LAS le, če vsa skeniranja navajajo isto kodo EPSG. Zapisovalnik E57 je naš lastni; preverjen je tako, da se njegove datoteke znova preberejo s tem bralnikom in z libE57Format.
:::
