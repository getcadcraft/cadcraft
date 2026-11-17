---
title: Odprite DWG, ga uredite in shranite kopijo
summary: Odprite risbo, ki vam jo je poslal sodelavec, preverite, kaj je prišlo noter, naredite spremembo in pošljite kopijo nazaj kot DWG ali DXF.
keywords: dwg, dxf, odpri, uvoz, izvoz, shrani, r12, obhod, svetovalec, xref, preveri risbo, shrani kot, shranjevanje dwg, oblika
from: 49de4bf6
---

## Kaj boste naredili

Odprli boste DWG od svetovalca, preverili, kaj je CadCraft lahko prikazal in česa ni mogel, dodali opombo, list izrisali v PDF in shranili kopijo za pošiljanje nazaj, kot DWG ali DXF.

## Odprite datoteko

1. Pritisnite {{key:Mod+O}} ali kliknite {{ui:Odpri}}.
2. Izberite datoteko `.dwg`.

Statusna vrstica prikaže „Branje …“, dokler se risba bere. Ko je končano, risba zapolni zaslon, zgodovina pa npr. zapiše „Odprto plan.dwg: 18.240 objektov na 64 slojih“, skupaj s časom, ki je bil potreben.

:::offline
Brez povezave ste. Če gumb {{ui:Shrani za delo brez povezave}} prikazuje „Pripravljeno za brez povezave“, se datoteke DWG odprejo normalno. Če ne in v tem zavihku še ni bila odprta nobena DWG, lahko odpiranje DWG ne uspe, ker se bralnik DWG CadCraft naloži s prvo DWG: odprite DXF ali pa ob naslednji povezavi shranite CadCraft za uporabo brez povezave. Glejte [Delo brez povezave](common:offline).
:::

## Preverite, kaj je prišlo noter

1. Oglejte si razdelek {{ui:Risba}} v levem podoknu: oblika in različica, enote, število objektov in slojev ter listi.
2. Preberite polje „O tej datoteki“ pod njim, če je prikazano.

Polje navaja:

- **Še ni prikazano:** objekte, ki jih CadCraft še ne zna narisati, po vrsti in številu. Izpuščeni so, ne ugibajo se.
- **Listi (postavitve) so prišli noter:** odprite jih z zavihki pod risbo.
- **Kote, ki jih je bilo mogoče prebrati samo tako, kot so narisane.**

3. Kliknite po zavihkih pod risbo, da si oglejte vsak list.
4. Preverite {{ui:Enote}} v {{ui:Trenutne nastavitve}} (nič izbrano, zavihek {{ui:Model}}). Če piše {{ui:Brez enot}}, vi pa veste, da je risba v milimetrih, jo nastavite, da merila lista in izrisa pravilno delujejo.

:::tip
Če pogrešate del risbe in ga ne vidite, preverite podokno {{ui:Sloji}}: sloj je morda v datoteki izklopljen ali zamrznjen. Kliknite njegovo ime, da ga naredite trenutnega; s tem se vklopi.
:::

## Naredite svojo spremembo

1. Naredite sloj za svoje opombe: kliknite {{ui:Nov sloj}}, vpišite `NOTES` in pritisnite {{key:Enter}}.
2. Vpišite `DT` in pritisnite {{key:Enter}}.
3. Kliknite, kjer naj bo opomba.
4. Vpišite višino besedila, ki ustreza risbi (glejte [Dodajte besedilo in oznake](topic:text)), in pritisnite {{key:Enter}}.
5. Pritisnite {{key:Enter}}, da ohranite zasuk 0.
6. Vpišite opombo in pritisnite {{key:Enter}}.
7. Za konec znova pritisnite {{key:Enter}}.

Spremembe uvoženih kot so v redu: takoj ko eno spremenite, jo CadCraft na novo nariše v svojem slogu.

## Izrišite list za pregled

1. Kliknite zavihek lista.
2. Pritisnite {{key:Mod+P}}.
3. Kliknite {{ui:Prenesi PDF}}.

Glejte [Izris v PDF](topic:plot-pdf).

## Shranite kopijo

1. Pritisnite {{key:Mod+S}} ali kliknite {{ui:Shrani}}.

Odprli ste DWG, zato brskalnik prenese `<ime>.dwg` v različici, v kateri je DWG prišel. Zgodovina zapiše npr. „Shranjena kopija kot Plan.dwg (DWG (AutoCAD 2018)).“ in na vrsticah pod tem našteje vse, kar se je na poti spremenilo.

2. Preberite te vrstice, preden pošljete datoteko. [Kaj DWG ohrani in kaj spremeni](topic:files#what-a-dwg-keeps-and-changes) razloži vsako od njih.

Vaša izvirna DWG nikoli ni spremenjena. Vsako shranjevanje je nov prenos.

## Shranite kot DWG ali DXF

Če želite izbrati obliko sami:

1. Pritisnite {{key:Mod+Shift+S}} ali kliknite {{ui:Shrani kot}}.

Odpre se pogovorno okno {{ui:Shrani kopijo kot}} s štirimi izbirami, vsaka z imenom datoteke, ki jo bo dala: {{ui:DWG}} s seznamom {{ui:Različica}}, {{ui:DXF R12}}, {{ui:DXF 2000}} in {{ui:DXF 2000 (binary)}}. Trenutna oblika in različica risbe sta že izbrani.

2. Kliknite želeno obliko. Za DWG izberite različico, ki jo uporablja drugi urad, ali starejšo: AutoCAD 2018, 2013, 2010, 2007, 2004 ali 2000.
3. Kliknite {{ui:Shrani}}.

Kopija se prenese. Od zdaj naprej {{key:Mod+S}} shrani to risbo v tej obliki, prav tako pa se nove risbe v tem brskalniku začnejo v njej. {{ui:Prekliči}} ali {{key:Esc}} ne shrani ničesar, zgodovina pa zapiše „Ni shranjeno.“

Katero izbrati:

- **DWG** ohrani največ: liste z njihovimi pogleni okni, prave kote, vzorce šrafur, imena slojev in blokov, kakor ste jih vpisali, ter večvrstično besedilo kot večvrstično besedilo. Različica AutoCAD 2000 se odpre v največ programih; 2004 in novejši ohranijo tudi prave barve.
- **DXF 2000** je besedilna datoteka, ki ohrani skoraj vse, kar ohrani DWG: vsak list kot postavitev s pogleni okni, prave kote, vzorce šrafur, prave barve, debeline črt, tipe črt in imena, kakor ste jih vpisali. Odpre se v AutoCAD 2000 in novejših ter v večini programov CAD. Večkratne vodilke postanejo črte, puščice in besedilo, ki jih narišejo. DXF, odprt v različici 2000 ali novejši, se shrani kot DXF 2000.
- **DXF 2000 (binary)** vsebuje isto kot DXF 2000 v dvojiški obliki zapisa: manjša datoteka, ki ohrani vsako število natančno. Dvojiške datoteke DXF iz drugih programov se odprejo kot besedilne, risba, odprta iz dvojiške datoteke DXF, pa se shrani nazaj kot dvojiška.
- **DXF R12** se odpre v skoraj vsakem programu CAD. Ohrani prvi list s pogleni okni in druge liste CadCraft. Poenostavi novejše stvari, kot so večvrstično besedilo in šrafure.

## Kaj bo videl drugi urad

V DWG:

- Črte, loki, krožnice, elipse, polilinije, besedilo, večvrstično besedilo, bloki z atributi, polna polnila, vzorci šrafur in sloji, kot jih vidite vi.
- Prave kote: drugi program jih ponovno izmeri, ko jih raztegnete.
- Vsak list s svojim papirjem in pogledi.
- Večkratne vodilke kot večkratne vodilke. V različici AutoCAD 2000 se prave barve spremenijo v najbližjo standardno barvo.

V DXF R12:

- Črte, loki, krožnice, polilinije, besedilo, sklici na bloke in kote, kot jih vidite vi. Kote ostanejo prave kote.
- Imena slojev z velikimi črkami, presledki pa se spremenijo v `_`.
- Prvi list kot papirni prostor risbe, s pogledi. Nadaljnji listi pridejo kot bloki z imeni `CCLAYOUT_1` in tako naprej; če potrebujejo vsak list kot postavitev, jim pošljite tudi PDF vsakega lista.
- Večvrstično besedilo kot ločene vrstice, elipse kot polilinije, šrafure kot obrisi.

Ne glede na obliko pa so stvari, ki so bile ob odpiranju DWG označene kot „Še ni prikazano“, **ne** v kopiji, razen če zgodovina navaja, da so bile ohranjene: objekti OLE v DWG in njena 3D telesa v prostoru modela se zapišejo nazaj, ko shranite kot DWG. Povejte jim in pošljite tudi PDF.

## Pogoste napake

- **„CadCraft odpira risbe DWG in DXF.“** Datoteka ima drugo končnico. Preverite, da je `.dwg` ali `.dxf`.
- **„Te risbe ni bilo mogoče prebrati.“** DWG je poškodovan ali v različici, ki je bralnik ne obravnava. Zahtevajte DXF ali DWG, shranjen v starejši različici.
- **„Ta dvojiška datoteka DXF se konča sredi objekta.“** Datoteka je prekinjena ali poškodovana. Vpišite RECOVER, da odprete, kar je mogoče prebrati, ali zahtevajte datoteko znova.
- **Shranjena datoteka se imenuje `ime (1).dwg` ali `ime (1).dxf`.** Brskalnik to naredi, ker je datoteka z istim imenom že v mapi.
- **Imajo starejši program, ki ne more odpreti DWG.** Shranite kot DWG z {{ui:Različica}} {{ui:AutoCAD 2000}} ali kot {{ui:DXF R12}}: skoraj vsak program CAD ju odpre.
- **Manjkajo deli risbe.** Povezane risbe (xref) se ne naložijo, dokler ne izberete njihovih datotek ({{cmd:XREF}}, `R`), slike pa se prikažejo kot okvirji z imeni datotek.
