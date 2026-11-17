---
title: Delo z eno risbo skupaj z Live TeamWork
summary: Kaj se v CadCraftu spremeni med sejo Live TeamWork v CadCraft Studiu: kazalci in izbori drugih ljudi, objekti, ki jih nekdo ureja, zaklepi gostitelja, vaša razveljavitev ter pridružitev iz brskalnika v istem omrežju.
keywords: v živo, live teamwork, studio v živo, skupaj, sodelovanje, sodelovalno urejanje, seja, deli v živo, pridruži se, kazalec, zadržano, urejanje, zaklep, livelock, liveunlock, livehold, zadrži sloj, zadrži območje, ključavnica, razveljavi, gostitelj, pomočnik, ista datoteka, veliko ljudi, počasno, omejitev, kdo je spremenil, nedavne spremembe, dnevnik urejanj
from: 0497d2a3
---

## Kaj se boste naučili

Kaj vidite in kaj se zgodi z vašimi urejanji, ko več ljudi dela na isti risbi hkrati. CadCraft Studio zažene in pridruži sejo Live TeamWork (Deli v živo, Pridruži se); ta stran govori o samo risbi.

## Vsi risejo hkrati

Risajte in urejajte kakor običajno. Vaša urejanja se prikažejo takoj, tudi preden jih imajo drugi, njihova pa se na vašem zaslonu prikažejo malo za tem, ko jih naredijo. Vsi ukazi delujejo: risanje, urejanje, sloji, bloki, listi, kote, omejitve.

Dva lahko spremenita isti objekt. Če spremenite različne stvari, na primer barvo in končno točko ene črte, sta obe spremembi ohranjeni. Če spremenite isto stvar, zmaga poznejša sprememba.

Kar ostane samo vaše: trenutni sloj, barva in višina besedila za nove objekte, nastavitve kotiranja, vaš pogled, razdeljeni zaslon in UCS. Risba je skupna; kako si jo ogledujete, ni.

## Drugi ljudje na vaši risbi

- **Kazalci:** kazalec vsake osebe je prikazan z njenim imenom v njeni barvi, skupaj z ukazom, ki ga izvaja. Vidite kazalce ljudi, ki delajo blizu tega, kar je na vašem zaslonu.
- **Izbori:** kar je nekdo izbral, je obrobljeno v njegovi barvi.
- **Urejanje:** objekt, ki ga je nekdo izbral, ima oznako, na primer „Ana ureja“. Še vedno lahko spremenite njegovo barvo ali ga premaknete, vendar ga ne morete izbrisati, razstaviti ali ponovno vnesti, dokler ga ne izpustijo. Ko ga izberete, vam pove, kdo ga ima.
- **Kdo je spremenil zadnje:** izberete en objekt, ki ga je v tej seji spremenil nekdo drug, in ukazna vrstica pove, kdo in kaj je bila sprememba („Ben je nazadnje spremenil to: CIRCLE.“). Podokno Live v Studiu našteje vsako nedavno urejanje pod {{ui:Nedavne spremembe}}. Nič od tega se ne shrani v risbo: traja, dokler traja seja.

## Zadržite sloj ali območje, medtem ko delate tam

Na veliki risbi z več ljudmi povejte, kateri del je zdaj vaš:

1. Vtipkajte `LIVEHOLD` in pritisnite {{key:Enter}}.
2. Izberite `L` in vtipkajte ime sloja ({{key:Enter}} ohrani trenutni sloj) ali izberite `A` in kliknite dva vogala območja.
3. Urejanja drugih ljudi na tem sloju ali objektov na tem območju so vrnjena nazaj in obveščeni so, da delate tam. Vaše območje vidite kot črtkan okvir; drugi ga vidijo v vaši barvi z vašim imenom, sloji, ki jih zadržite, pa so našteti zgoraj levo v njihovi risbi.
4. `LIVEHOLD`, nato `R`, sprosti vse, kar zadržite. Zapustitev seje to sprosti prav tako.

Vsak v seji lahko zadrži, tudi gostitelj; zaklepi gostitelja veljajo še vedno. Zadržanje se nikoli ne shrani v datoteko.

## Ko je urejanje vrnjeno nazaj

Gostiteljeva kopija risbe preveri vsako urejanje. Nekatera ne morejo noter, CadCraft pa jih vrne nazaj na vaš zaslon in v ukazni vrstici pove, zakaj, na primer:

- nekdo je izbrisal objekt ali sloj ali blok, ki ga potrebuje, tik pred vami;
- nekdo ureja ta objekt ali zadržuje njegov sloj ali območje, v katerem je;
- gostitelj ga je zaklenil;
- blok, ki ga postavljate, je bil očiščen, ali pa sloj, ki ga brišete, še ima objekte.

## Razveljavitev razveljavi vaše delo

{{key:Mod+Z}} in {{ui:Razveljavi}} razveljavita vaš zadnji ukaz v celoti in pustita delo drugih pri miru. Ko je nekdo od tedaj spremenil isto stvar, se nič ne razveljavi in ukazna vrstica pove, kdo je spremenil. {{key:Mod+Y}} uveljavi.

## Zaklepi (gostitelj)

Gostitelj lahko zaščiti objekte ali celoten sloj, da jih nihče ne spremeni, vključno z gostiteljem, dokler jih ne odklene:

1. Izberite objekte, nato vtipkajte `LIVELOCK` in pritisnite {{key:Enter}}. Ali vtipkajte `LIVELOCK`, ko nič ni izbrano, in izberite `L`, da zaklenete sloj po imenu: objekti, dodani temu sloju pozneje, so prav tako zaklenjeni.
2. Zaklenjeni objekti so narisani črtkano z oznako „Zaklenil gostitelj“ na zaslonu vseh.
3. `LIVEUNLOCK` jih odklene na isti način.

Zaklepi pripadajo seji: končajo se, ko se seja konča, in se nikoli ne shranijo v datoteko.

## Pridružitev z isto datoteko

Če ste odprli prav tisto datoteko, ki jo je odprl gostitelj (iz deljene mape ali iste kopije), se pridružite iz svojega okna CadCrafta v Studiu: odprite podokno {{ui:Koristna}} in uporabite {{ui:Pridruži se tukaj}} z gostiteljevo kodo. Potujejo samo spremembe, narejene od trenutka, ko je gostitelj odprl datoteko, zato je velika risba takoj pripravljena. Če je vaša datoteka druga, gostiteljeva risba na vašem zaslonu nadomesti njen prikaz (vaša datoteka ostane, kakršna je). To deluje le, dokler je vaša risba nespremenjena, odkar ste jo odprli.

## Pomočniki v živi seji

Pomočnik, povezan z vašim oknom CadCrafta (glejte pomoč o delu s pomočniki z umetno inteligenco), se pridruži seji kot svoj udeleženec, vsem prikazan kot „Pomočnik (prek <vaše ime>)“. Gostitelj ga spusti noter kakor osebo; pomočnik gostitelja se pridruži takoj. Njegove spremembe imajo svojo razveljavitev: vaš {{key:Mod+Z}} razveljavi vaše delo, razveljavitev pomočnika pa razveljavi le njegovo. Iz seje odide, ko ga prekinete ali zapustite, in v seji lahko dela le, dokler lahko vi urejate.

## Pridružitev iz brskalnika

Sodelavec brez Studia lahko z telefonom, tablico ali računalnikom v istem omrežju optično prebere sliko z gostiteljevo kodo. CadCraft se odpre v brskalniku, na ukazni vrstici vpraša vaše ime in se napolni z gostiteljevo risbo, ko vas gostitelj spusti noter. Vabilo po povezavi omogoči pridružitev iz drugega omrežja: gostitelj potrebuje sedež Team Cloud Plan za aplikacijo, vsi drugi se pridružijo brezplačno, povezava pa deluje le, dokler je gostiteljeva seja odprta.

## Veliko ljudi na eni risbi

Vsako urejanje gre vsem v seji, zato več ljudi pomeni, da vsaka sprememba dlje traja, da doseže vsakega od njih, počasnejši prenosniki in povezave pa zaostanejo prvi. Običajna velikost seje je 20 ljudi; gostitelj lahko za eno sejo dovoli več (glejte pomoč o skupnem delu v živo). Če se risba zdi počasna pri mnogih ljudeh, pomagajo manj ljudi, manj tistih, ki urejajo hkrati, ali boljša povezava.

## Ko se seja konča

Risbo shrani le gostitelj. Ko gostitelj konča sejo, vsi drugi obdržijo neshranjeno kopijo: shranite jo, če jo želite obdržati.

:::note
Nekaj, kar je bilo vrnjeno nazaj, je na vašem zaslonu narisano čez objekte okoli, dokler ne znova odprete risbe. Šrafure in zapolnjeni objekti, ki se prekrivajo, so lahko videti drugače kot pri gostiteljevi kopiji; sama risba je ista.
:::
