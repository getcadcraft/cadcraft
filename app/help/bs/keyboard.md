---
title: Tastatura i miš
summary: Svaka tipka, radnja mišem i tipka u komandnoj liniji u aplikaciji za crtanje CadCraft, onako kako ih kod obrađuje.
keywords: tastatura, prečice, tipke, miš, točkić, pomjeranje pogleda, zumiranje, desni klik, srednje dugme, f3, f7, f8, ctrl, tipka command, prečice tastature, kopiranje, izrezivanje, lijepljenje, dupliciranje, međuspremnik, odaberi sve
from: a2608a29
---

Prečice su prikazane za vaš računar. Na Macu, svaka prečica {{key:Mod}} ispod koristi tipku Command, a tipka Control takođe radi. Kako se tipke pišu, i kako koristiti F-tipke na Macu, opisano je u [Tipke, miševi i tačpedi](common:keys).

## Upisivanje komandi

| Tipka | Šta radi |
|---|---|
| Bilo koje slovo, cifra ili simbol | Ide u komandnu liniju, gdje god da je pokazivač, osim ako box u panelu ima kursor |
| {{key:Enter}} | Šalje ono što ste upisali. Na praznom upitu: ponavlja posljednju komandu, završava komandu, završava odabir, ili prihvata podrazumijevanu vrijednost u `<…>` |
| {{key:Space}} | Isto kao {{key:Enter}}, osim dok CadCraft traži tekst (tekst, nazivi blokova, tekst kote), gdje upisuje razmak |
| {{key:Esc}} | Otkazuje komandu. Bez pokrenute komande: otkazuje pomjeranje hvatišta ili okvir odabira, zatim briše odabir |
| {{key:Tab}} | Prihvata predloženu komandu prikazanu desno od komandne linije. Kad ništa nije upisano i pokazivač je iznad preklopljenih objekata: označava sljedeći od njih (kliknite da ga odaberete) |
| {{key:Up}} {{key:Down}} | Prolazi kroz linije koje ste ranije upisali (posljednjih 100) |

## Crtanje i uređivanje

| Tipka | Šta radi |
|---|---|
| {{key:Mod+Z}} | Poništava posljednju komandu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponavlja |
| {{key:Mod+A}} | Odabire svaki objekat koji možete uređivati na otvorenoj kartici ({{cmd:SELECTALL}}). Ako ste nešto upisali u komandnu liniju, odabire taj tekst |
| {{key:Delete}} | Briše odabrane objekte ({{cmd:ERASE}}), osim ako ste nešto upisali u komandnu liniju |
| {{key:Backspace}} | Briše odabrane objekte kad komandna linija nema kursor; u komandnoj liniji briše ono što ste upisali |
| {{key:Esc}} | Bez pokrenute komande: briše odabir ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Spašava kopiju u formatu crteža (DWG ili DXF) |
| {{key:Mod+Shift+S}} | Spašava kao: odaberite DWG ili DXF, pa spasite kopiju |
| {{key:Mod+O}} | Otvara DWG ili DXF |
| {{key:Mod+P}} | Ispisuje u PDF |

Poništavanje, ponavljanje, odabir svega i ispis ne rade dok komanda radi: prvo pritisnite {{key:Esc}}.

## Kopiranje, izrezivanje i lijepljenje

| Tipka | Šta radi |
|---|---|
| {{key:Mod+C}} | Kopira odabir u međuspremnik ({{cmd:COPYCLIP}}). Ništa nije odabrano: CadCraft traži objekte |
| {{key:Mod+X}} | Izrezuje: kopira odabir, pa ga briše ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Lijepi: kopija prati kursor; kliknite, ili upišite tačku, da je spustite ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Lijepi na mjestu: na koordinatama s kojih je kopirano ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliciraj: kopija odabira se pomjera sa pokazivačem; kliknite da je spustite, {{key:Esc}} ne ostavlja ništa ({{cmd:DUPLICATE}}) |

Iste radnje su u grupi {{ui:Uređivanje}} na traci sa alatima ({{ui:Kopiraj}}, {{ui:Zalijepi}}) i u meniju {{ui:Više}}. Dok druga komanda radi, završite je ili prvo pritisnite {{key:Esc}}; ponovno pritiskanje {{key:Mod+V}} ili {{key:Mod+D}} dok kopija prati kursor kreće ispočetka. Kad ste nešto upisali u komandnu liniju, ili komanda traži tekst, ove tipke kopiraju, izrezuju i lijepe taj tekst. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

## Prekidači

| Tipka | Prekidač | Dugme statusne trake |
|---|---|---|
| {{key:F3}} | Hvatanje objekata uključeno ili isključeno | {{ui:Hvatanje}} |
| {{key:F7}} | Mreža uključena ili isključena | {{ui:Mreža}} |
| {{key:F8}} | Ortogonalno uključeno ili isključeno | {{ui:Ortogonalno}} |
| {{key:F10}} | Polarno praćenje uključeno ili isključeno | {{ui:Polar}} |
| {{key:F11}} | Praćenje hvatanja objekata uključeno ili isključeno | {{ui:Prati}} |
| {{key:F12}} | Dinamički unos uključen ili isključen | {{ui:Dyn}} |

:::mac
Na Macu, F3, F7 i F8 su obično Mission Control i tipke za medije. Držite **fn** uz njih, ili uključite standardne F-tipke u Postavkama sistema, kako je opisano u [Tipke, miševi i tačpedi](common:keys). Dugmad statusne trake uvijek rade.
:::

:::firefox
F7 u Firefoxu takođe može pitati da uključite caret browsing. Izaberite **No**, a koristite dugme {{ui:Mreža}} ako i dalje pita.
:::

## Pomoć

| Tipka | Šta radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara ovu pomoć, uz crtež. Radi i dok komanda radi, i nikad ne ide u komandnu liniju. |
| {{key:Esc}} | Kad je kursor u panelu pomoći: briše pretragu, ili zatvara panel |

Dugme {{ui:Pomoć}} u traci na vrhu radi isto što i {{key:F1}}. Dok kucate u polje za pretragu pomoći, ništa ne ide u komandnu liniju. Kliknite na crtež da vratite tipke CadCraftu; panel ostaje otvoren uz njega.

:::mac
Na Mac tastaturi, držite **fn** i pritisnite F1, ili kliknite {{ui:Pomoć}}.
:::

## Ekran

| Tipka | Šta radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Prelazi kroz normalan prikaz, puni ekran i puni ekran sa sakrivenim trakama. Koristi tipku Control na svakom računaru, uključujući Mac. |
| {{key:Left}} {{key:Right}} | Kad je tab ispod crteža aktivan: prethodni ili sljedeći tab |

Na punom ekranu, pregledač može koristiti prvi {{key:Esc}} da izađe iz punog ekrana. Pritisnite {{key:Esc}} ponovo da otkažete komandu.

## Dijalozi

| Tipka | Šta radi |
|---|---|
| {{key:Esc}} | Zatvara dijalog ({{ui:Štampaj u PDF}}, ili pitanje kao "Nesačuvane promjene", gdje znači {{ui:Otkaži}}) |
| {{key:Tab}} | Prelazi između postavki i dugmadi dijaloga |

Dok je dijalog otvoren, tipke crteža su isključene.

## Polja u panelu

U polju u desnom ili lijevom panelu:

| Tipka | Šta radi |
|---|---|
| {{key:Enter}} | Primjenjuje vrijednost i izlazi iz polja |
| {{key:Esc}} | Vraća staru vrijednost i izlazi iz polja |
| {{key:Tab}} | Primjenjuje i prelazi na sljedeće polje |

Dok polje ima kursor, slova se upisuju u njega, a ne u komandnu liniju.

## Miš

| Radnja | Šta radi |
|---|---|
| Klik | Zadaje tačku kad komanda traži tačku; odabire objekat kad traži objekte; inače odabire objekat ili hvatište |
| Shift+klik | Uklanja odabran objekat iz odabira (uz {{ui:Klikanje na objekte}} postavljeno na {{ui:Zamjenjuje odabir}} u [Postavkama](topic:settings): dodaje ga). Dok zadaje tačku: ignoriše hvatanje objekata za taj klik |
| Klik na prazan prostor, pa ponovo klik | Okvir odabira: s lijeva na desno je prozor, s desna na lijevo ukrštanje |
| Prevlačenje po praznom prostoru | Lasso: ako prvo idete udesno, to je prozor, ako ulijevo, ukrštanje; {{key:Space}} dok prevlačite ciklično mijenja prozor, ukrštanje i ogradu; {{key:Esc}} ga odbacuje (LASSOMODE 0, ili Postavke, vraća pravougaonik) |
| Prevlačenje kroz dijelove u TRIM ili EXTEND | Skraćuje (ili produžava) svaki dio koji put pređe; držite {{key:Shift}} za drugu opciju |
| Prevlačenje hvatišta | Pomjera hvatište (ili kliknite hvatište, pa kliknite gdje ide) |
| Dvaput klik na tekst | Odabire ga i stavlja kursor u njegov box {{ui:Tekst}} u desnom panelu |
| Desni klik | Enter. Tokom pomjeranja hvatišta ili okvira odabira: otkazuje ga |
| Prevlačenje desnim dugmetom | Pomjera pogled |
| Točkić | Uvećava i umanjuje oko krstića |
| Prevlačenje točkićem (srednje dugme) | Pomjera pogled |
| Dvaput klik na točkić | Uvećava na cijeli crtež (granice) |
| Prevlačenje DWG ili DXF na crtež | Otvara ga |

Na tačpedu ili ekranu osjetljivom na dodir, vidi [Miš, tačped i dodir](topic:mouse-trackpad-touch).

## Tipke koje pregledač zadržava

{{key:Mod+N}}, {{key:Mod+W}} i {{key:Mod+T}} uvijek pripadaju pregledaču. CadCraft ih ne koristi: koristite {{ui:Nova}} ili upišite `NEW` za novi crtež. Međuspremnik CadCrafta je njegov: {{key:Mod+C}} i {{key:Mod+V}} kopiraju objekte između CadCraft crteža i kartica, ne prema drugim programima niti iz njih.

:::mac
Ako {{key:Mod+Y}} otvori historiju pregledača umjesto ponavljanja, koristite {{key:Mod+Shift+Z}} ili dugme {{ui:Ponovi}}.
:::

## Gdje je Pomjeri

Pomjeri je komanda `MOVE` (tipka {{key:M}}): odaberite objekte, pa baznu tačku i drugu tačku ili upisanu udaljenost. Tu su i `ALIGN` i `DISTRIBUTE`. BimCraft koristi ista imena za iste poslove na elementima zgrade, ali njegova {{key:M}} je Mjerenje: njegovo Pomjeri je {{key:Shift+M}}.
