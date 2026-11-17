---
title: "Dokumenti in revizije (trezor)"
summary: "Korak za korakom skozi eno pravo delo: projektno mapo postavite pod nadzor, risbo izposodite, spremenite, vrnete z opombo, pošljete v pregled, odobrite in izdate, si ogledate zgodovino in uporabo, kaj vidi druga oseba, medtem ko je datoteka zaklenjena, in kako deluje z oblačnimi mapami."
keywords: trezor, dokumenti, vodnik, učbenik, izposoja, vrnitev, revizija, izdaja, odobritev, zaklep, zgodovina, oblačna mapa, projektna mapa, upravljanje dokumentov, pdm, dve osebi, deljena mapa
from: 3829528d
---

## Kaj boste naredili

Ste Ana in delate na Riverside Clinic s sodelavcem Benom. Risbe projekta so v eni mapi, do katere oba dostopata (deljen pogon, sinhronizirana mapa ali oblačna mapa). Na koncu bo ena datoteka šla od prve kopije do izdane revizije **A**, nato spremenjena kot **B.1**; videli boste, kdo je kaj naredil, in kaj vidi Ben, medtem ko vi držite datoteko.

Vse je shranjeno v skriti mapi `.ccvault` poleg vaših datotek: brez strežnika, nič se ne naloži (oblačna mapa je izjema, glejte zadnji korak). Za vsak gumb in pravilo na enem mestu glejte temo *Dokumenti: izposoja, revizije in izdaja*, kjer jo ima vaša aplikacija.

## 1. Postavite projektno mapo

1. Izberite {{ui:Dokumenti…}} v meniju {{ui:Več}} zavihka **Ogled** ali vnesite `DOCUMENTS` (ali `DOCS`) in pritisnite {{key:Enter}}.
2. Izberite {{ui:Izberite projektno mapo}} in izberite mapo, ki hrani risbe projekta. (Projektne mape delujejo v Studiu in v brskalnikih, ki lahko odprejo mapo, kot sta Chrome in Edge. V drugih brskalnikih to panel pove.)
3. Izberite {{ui:Spremeni}} poleg **Vi:** in vnesite svoje ime, `Ana` (če vpraša, še ime tega računalnika). Panel zdaj pravi *Vi: Ana na* in vaš računalnik. Vaše ime gre na vse, kar naredite.
4. Izberite {{ui:Ustvari trezor v tej mapi}} in vnesite ime projekta, `Riverside clinic`. Panel pravi *Trezor je začet za Riverside clinic.*

## 2. Spravite datoteko pod nadzor

1. Odprite **Datoteke, ki niso v trezorju** in izberite {{ui:Dodaj (A)}} poleg `plans/A-101.dxf`.
2. Pojavi se pod **Datoteke v trezorju** v reviziji **A.1**, stanje **V delu**. A.1 je njena prva kopija; trezor hrani kopijo vsake revizije.

## 3. Izposodite, spremenite, vrnite

1. Izberite {{ui:Odpri}} poleg `plans/A-101.dxf`. Risba se odpre v CadCraft in panel se zapre, da lahko vidite. Panel je še vedno en ukaz stran: `DOCUMENTS`.
2. Ponovno odprite panel in izberite {{ui:Izposodi}}. Vrstica zdaj pravi **Izposojeno vam**. Zaklepna datoteka v `.ccvault/locks` je bila ustvarjena; nihče drug te datoteke ne more izposoditi, dokler je ne vrnete.
3. Narišite nekaj: dodajte črto, premaknite steno. Nič, kar naredite, ne more biti shranjeno čez datoteko trezorja, razen če je risba izposojena vam; Shrani kot vedno deluje za vašo kopijo.
4. Odprite panel, izberite {{ui:Vrni}} in vnesite, kaj se je spremenilo (`Premaknjena vrata`). Panel pravi *vrnjeno kot A.2*. Datoteka v projektni mapi je zdaj risba, ki ste jo imeli odprto, zaklep pa je izginil. Vrnitev brez spremembe ohrani revizijo.

Če si premislite, {{ui:Prekliči izposojo}} vrne datoteko brez nove revizije.

## 4. Pregled in izdaja

1. Izberite {{ui:Pošlji v pregled}}. Stanje postane **V pregledu** in datoteka je samo za branje.
2. Preden odobrite, izberite {{ui:Nastavitve projekta}} in navedite, kdo lahko odobri (eno ime v vrstici), na primer `Ben` in `Carla`, ter označite pravilo, da mora odobritelj biti nekdo drug kot avtor. Izberite {{ui:Shrani nastavitve}}. Zdaj trezor sam zavrne vsakogar drugega.
3. Ben (ali Carla) izbere {{ui:Odobri}} in vnese ime odobritelja. Stanje postane **Izdano**, revizija pa **A**, z *odobritelj:* in imenom. Izdana datoteka je samo za branje. {{ui:Vrni v popravek}} bi jo vrnil v **V delu**, z razlogom.

Ime odobritelja je ime, vneseno v panel; je zapis, kdo je odobril, ne dokaz identitete.

## 5. Nova revizija

1. Pri izdani datoteki izberite {{ui:Nova revizija}}. Držite jo za naslednjo črko.
2. Spremenite jo, nato {{ui:Vrni}}. Revizija je **B.1**, v delu. Izdajte jo enako in postane **B**. {{ui:Prekliči izposojo}} pred prvo vrnitvijo jo pusti pri **A**.

Črke revizij tečejo A, B … Z, AA, AB. Če vaš standard nekatere črke izpusti, nastavitev projekta *Uporabi zaporedje ASME Y14.35* za naslednje revizije preskoči I, O, Q, S, X in Z.

## 6. Oglejte si, kaj se je zgodilo

Izberite ime datoteke, da odprete njene podrobnosti:

- **{{ui:Zgodovina}}**: vsak dogodek, najnovejši najprej, s tem, kdo, kateri računalnik in kdaj: *Vrnjeno A.2* od Ane, *Izdano* od Bena in tako naprej.
- **{{ui:Revizije}}**: tabela revizij. {{ui:Odpri kopijo}} odpre revizijo kot navadno kopijo, ki ne more prepisati datoteke trezorja; {{ui:Primerjaj z}} našteje, kaj je bilo dodano, odstranjeno in spremenjeno glede na prejšnjo revizijo ali katero koli drugo.
- **{{ui:Uporablja}}**: risbe, na katere se povezuje (zunanji sklici).
- **{{ui:Uporablja jo}}**: našteje vsako drugo risbo v trezorju, ki se povezuje nanjo: če spremenite osnovni tloris, veste, katere liste preveriti.

## Revizija na listu

Ko je risba odprta (in ima v njej postavitev), izberite {{ui:Blok revizij}}: tabela izdanih revizij se nariše v zgornjem desnem kotu lista. Izberite {{ui:Izpolni glave risb}}, da izpolnite atribute glave risbe, označene z `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ali `APPROVED_BY`, z revizijo, stanjem, datumom in odobriteljem datoteke. Ko odobrite naslednjo izdajo, se blok revizij posodobi.

## 7. Kaj vidi Ben, medtem ko vi držite datoteko

Zdaj datoteko znova izposodite in prosite Bena, naj na svojem računalniku odpre isto projektno mapo in odpre panel. Pri vrstici datoteke vidi **Izposojeno: Ana, na** vašem računalniku **od** časa, gumba {{ui:Izposodi}} pa ni. Če vseeno poskusi, trezor zavrne: zaklep je datoteka, ki je sistem ne ustvari dvakrat, zato dve osebi ne moreta obe držati datoteke, tudi v isti sekundi, kadar je mapa na disku v Studiu. (V brskalniku mapa omogoča le približno zaščito, panel pa to pove pod **Mapa**.)

Če je Ana odsotna in Ben potrebuje datoteko, {{ui:Prekini izposojo}} jo sprosti. Vnesti mora razlog; ta gre v dnevnik skupaj s tem, čigava izposoja je bila. Ko projekt našteva skrbnike, lahko to storijo samo oni. Izposoja, starejša od meje zastaranja (privzeto 14 dni), je označena *dolgo časa*. Po prekinitvi je Anina pozna vrnitev zavrnjena, zato si drug drugega ne moreta prepisati.

## 8. Oblačne mape

Oblačna mapa je projektna mapa, shranjena v oblačni shrambi vaše ekipe, zato ekipa ne potrebuje deljenega pogona. V Studiu, prijavljeni v svoj račun CadCraft, panel prikaže {{ui:Odprite mapo v oblaku}} poleg {{ui:Izberite projektno mapo}}. Izberite jo in izberite mapo, navedeno kot delovni prostor / mapa. Lastnik delovnega prostora mapo najprej ustvari, oblačna shramba ekipe pa mora biti v veljavi. Vse zgoraj deluje enako; strežnik ustvari zaklep, ki je strog med osebami. Če niste prijavljeni, panel to pove in vas pozove k prijavi. V navadnem zavihku brskalnika gumb za oblak ni ponujen; uporabite Studio.

## Poskusite

Naredite osem korakov zgoraj s kopijo prave datoteke. Za korake z dvema osebama potrebujete drugo osebo ali dve okni z dvema imenoma. Če poskusite s pravo deljeno mapo, stran za preizkušanje skupnosti navaja preverjanje, ki to natanko sprašuje, in sprejema rezultate.
