---
title: Tipkovnica i miš
summary: Svaka tipka, radnja miša i tipka naredbenog retka u aplikaciji za crtanje CadCraft, onako kako ih kod obrađuje.
keywords: keyboard, tipkovnica, prečaci, shortcuts, tipke, miš, mouse, kotačić, wheel, pomicanje, pan, zumiranje, desni klik, srednja tipka, f3, f7, f8, ctrl, tipka Command, hotkeys, kopiraj, izreži, zalijepi, dupliciraj, međuspremnik, odaberi sve
from: a2608a29
---

Prečaci su prikazani za vaše računalo. Na Macu svaki prečac {{key:Mod}} koristi tipku Command, a radi i tipka Control. Kako se pišu tipke i kako koristiti F-tipke na Macu opisano je u [Tipke, miševi i trackpadovi](common:keys).

## Upisivanje naredbi

| Tipka | Što radi |
|---|---|
| Bilo koje slovo, znamenka ili simbol | Ide u naredbeni redak, gdje god je pokazivač, osim ako okvir u panelu ima kursor |
| {{key:Enter}} | Šalje što ste upisali. Na praznom upitu: ponavlja zadnju naredbu, završava naredbu, završava odabir ili prihvaća zadanu vrijednost u `<…>` |
| {{key:Space}} | Isto što i {{key:Enter}}, osim dok CadCraft traži tekst (tekst, nazivi blokova, tekst kote), gdje upisuje razmak |
| {{key:Esc}} | Otkazuje naredbu. Bez pokrenute naredbe: odustaje od pomicanja ručke ili okvira odabira, pa briše odabir |
| {{key:Tab}} | Prihvaća predloženu naredbu prikazanu desno od naredbenog retka. Bez upisanog teksta i s pokazivačem nad preklapajućim objektima: označava sljedeći objekt tamo (klik za odabir) |
| {{key:Up}} {{key:Down}} | Prolazi kroz retke koje ste prije upisali (zadnjih 100) |

## Crtanje i uređivanje

| Tipka | Što radi |
|---|---|
| {{key:Mod+Z}} | Poništava zadnju naredbu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponavlja |
| {{key:Mod+A}} | Odabire svaki objekt koji možete uređivati na otvorenoj kartici ({{cmd:SELECTALL}}). Ako ste nešto upisali u naredbeni redak, odabire taj tekst |
| {{key:Delete}} | Briše odabrane objekte ({{cmd:ERASE}}), osim ako ste nešto upisali u naredbeni redak |
| {{key:Backspace}} | Briše odabrane objekte kad naredbeni redak nema kursor; u naredbenom retku briše ono što ste upisali |
| {{key:Esc}} | Bez pokrenute naredbe: briše odabir ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Sprema kopiju u formatu crteža (DWG ili DXF) |
| {{key:Mod+Shift+S}} | Spremi kao: odaberite DWG ili DXF, pa spremite kopiju |
| {{key:Mod+O}} | Otvara DWG ili DXF |
| {{key:Mod+P}} | Ispis u PDF |

Poništavanje, ponavljanje, odabir svega i ispis ne rade dok je naredba pokrenuta: prvo pritisnite {{key:Esc}}.

## Kopiranje, rezanje i lijepljenje

| Tipka | Što radi |
|---|---|
| {{key:Mod+C}} | Kopira odabir u međuspremnik ({{cmd:COPYCLIP}}). Ništa nije odabrano: CadCraft traži objekte |
| {{key:Mod+X}} | Izrezuje: kopira odabir, pa ga briše ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Zalijepi: kopija prati pokazivač; kliknite ili upišite točku da je spustite ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Zalijepi na isto mjesto: na koordinate s kojih je kopirano ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliciraj: kopija odabira kreće s pokazivačem; kliknite da je spustite, {{key:Esc}} ne ostavlja ništa ({{cmd:DUPLICATE}}) |

Iste radnje su u grupi {{ui:Uređivanje}} na alatnoj traci ({{ui:Kopiraj}}, {{ui:Zalijepi}}) i u njezinom izborniku {{ui:Više}}. Dok druga naredba radi, dovršite je ili prvo pritisnite {{key:Esc}}; ponovni pritisak {{key:Mod+V}} ili {{key:Mod+D}} dok kopija prati pokazivač kreće ispočetka. Kad ste nešto upisali u naredbeni redak, ili naredba traži tekst, ove tipke kopiraju, režu i lijepe taj tekst. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

## Prekidači

| Tipka | Prekidač | Gumb na statusnoj traci |
|---|---|---|
| {{key:F3}} | Hvatanje objekata uključeno ili isključeno | {{ui:Hvatanje}} |
| {{key:F7}} | Mreža uključena ili isključena | {{ui:Mreža}} |
| {{key:F8}} | Orto uključen ili isključen | {{ui:Orto}} |
| {{key:F10}} | Polarno praćenje uključeno ili isključeno | {{ui:Polarno}} |
| {{key:F11}} | Praćenje hvatanja objekata uključeno ili isključeno | {{ui:Praćenje}} |
| {{key:F12}} | Dinamički unos uključen ili isključen | {{ui:Dyn}} |

:::mac
Na Macu su F3, F7 i F8 obično tipke Mission Control i medija. Držite **fn** s njima ili uključite standardne funkcijske tipke u Postavkama sustava, kako je opisano u [Tipke, miševi i trackpadovi](common:keys). Gumbi na statusnoj traci uvijek rade.
:::

:::firefox
F7 u Firefoxu može tražiti i uključivanje caret browsinga. Odaberite **Ne** i koristite gumb {{ui:Mreža}} ako to stalno traži.
:::

## Pomoć

| Tipka | Što radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara ovu pomoć uz crtež. Radi i dok je naredba pokrenuta i nikad ne dolazi do naredbenog retka. |
| {{key:Esc}} | Kad je kursor u panelu pomoći: briše pretragu ili zatvara panel |

Gumb {{ui:Pomoć}} na traci na vrhu radi isto što i {{key:F1}}. Dok upisujete u okvir za pretragu pomoći, ništa ne dolazi do naredbenog retka. Kliknite na crtež da tipke vratite CadCraftu; panel ostaje otvoren uz njega.

:::mac
Na Macu tipkovnici držite **fn** i pritisnite F1, ili kliknite {{ui:Pomoć}}.
:::

## Ekran

| Tipka | Što radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Mijenja redom normalno, cijeli zaslon i cijeli zaslon sa sakrivenim trakama. Ova tipka je Control na svakom računalu, i na Macu. |
| {{key:Left}} {{key:Right}} | Kad je kartica ispod crteža aktivna: prethodna ili sljedeća kartica |

Na cijelom zaslonu preglednik može prvi {{key:Esc}} iskoristiti za izlazak iz cijelog zaslona. Pritisnite {{key:Esc}} opet da otkažete naredbu.

## Dijaloški okviri

| Tipka | Što radi |
|---|---|
| {{key:Esc}} | Zatvara dijaloški okvir ({{ui:Ispis u PDF}}, ili pitanje poput "Nespremljene promjene", gdje znači {{ui:Odustani}}) |
| {{key:Tab}} | Prelazi između postavki i gumba dijaloškog okvira |

Dok je dijaloški okvir otvoren, tipke crteža su isključene.

## Polja na panelu

U okviru na desnoj ili lijevoj ploči:

| Tipka | Što radi |
|---|---|
| {{key:Enter}} | Primjenjuje vrijednost i izlazi iz okvira |
| {{key:Esc}} | Vraća staru vrijednost i izlazi iz okvira |
| {{key:Tab}} | Primjenjuje i prelazi na sljedeći okvir |

Dok okvir ima kursor, slova se upisuju u njega, a ne u naredbeni redak.

## Miš

| Radnja | Što radi |
|---|---|
| Klik | Odabire točku kad naredba traži točku; odabire objekt kad traži objekte; inače odabire objekt ili ručku |
| Shift+klik | Uklanja odabrani objekt iz odabira (uz {{ui:Klik na objekte}} postavljeno na {{ui:Zamjenjuje odabir}} u [Postavkama](topic:settings): dodaje ga). Dok odabirete točku: zanemaruje hvatanje objekata za taj klik |
| Klik na prazno, pa opet klik | Okvir odabira: slijeva nadesno je prozor, zdesna nalijevo presijecanje |
| Povlačenje po praznom | Lasso: ako prvo idete udesno, to je prozor, ako prvo ulijevo, presijecanje; {{key:Space}} dok povlačite mijenja prozor, presijecanje i ogradu; {{key:Esc}} ga odbacuje (LASSOMODE 0 ili Postavke vraćaju pravokutnik) |
| Povlačenje kroz dijelove u TRIM ili EXTEND | Skraćuje (ili produžuje) svaki dio koji put prelazi; držite {{key:Shift}} za drugu radnju |
| Povlačenje ručke | Pomiče ručku (ili kliknite ručku, pa kliknite gdje ide) |
| Dvostruki klik na tekst | Odabire ga i postavlja kursor u njegov okvir {{ui:Tekst}} na desnoj ploči |
| Desni klik | {{key:Enter}}. Tijekom pomicanja ručke ili okvira odabira: otkazuje ga |
| Povlačenje desnom tipkom | Pomiče prikaz |
| Kotačić | Zumira prema i od križića |
| Povlačenje kotačićem (srednja tipka) | Pomiče prikaz |
| Dvostruki klik na kotačić | Zumira na cijeli crtež (opseg) |
| Ispuštanje DWG ili DXF datoteke na crtež | Otvara je |

Na trackpadu ili zaslonu osjetljivom na dodir pogledajte [Miš, trackpad i dodir](topic:mouse-trackpad-touch).

## Tipke koje preglednik zadržava

{{key:Mod+N}}, {{key:Mod+W}} i {{key:Mod+T}} uvijek pripadaju pregledniku. CadCraft ih ne koristi: upotrijebite {{ui:Nova}} ili upišite `NEW` za novi crtež. Međuspremnik aplikacije CadCraft je vlastiti: {{key:Mod+C}} i {{key:Mod+V}} kopiraju objekte između CadCraft crteža i kartica, a ne prema drugim programima ili iz njih.

:::mac
Ako {{key:Mod+Y}} otvara povijest preglednika umjesto ponavljanja, upotrijebite {{key:Mod+Shift+Z}} ili gumb {{ui:Ponovi}}.
:::

## Gdje je naredba Pomakni

Pomakni je naredba `MOVE` (tipka {{key:M}}): odaberite objekte, pa baznu točku i drugu točku ili upišite udaljenost. `ALIGN` i `DISTRIBUTE` također postoje. BimCraft koristi ista imena za isti posao na elementima zgrade, ali njegova tipka {{key:M}} je naredba mjerenja (Measure), a njegov Pomakni je {{key:Shift+M}}.
