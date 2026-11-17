---
title: Tastatura i miš
summary: Svaki taster, radnja mišem i taster komandne linije u aplikaciji za crtanje CadCraft, onako kako ih kod obrađuje.
keywords: tastatura, prečice, tasteri, miš, točkić, pomeranje, zumiranje, desni klik, srednje dugme, f3, f7, f8, ctrl, taster za komandu, kopiraj, iseci, nalepi, dupliraj, međuspremnik, izaberi sve
from: a2608a29
---

Prečice su prikazane za vaš računar. Na Mac-u, svaka prečica {{key:Mod}} ispod koristi taster Command, a radi i taster Control. Kako se tasteri pišu i kako koristiti F-tastere na Mac-u, opisano je u [Tasteri, miševi i trackpad-ovi](common:keys).

## Ukucavanje komandi

| Taster | Šta radi |
|---|---|
| Bilo koje slovo, cifra ili simbol | Ide u komandnu liniju, gde god da je pokazivač, osim ako polje u panelu ima kursor |
| {{key:Enter}} | Šalje ono što ste ukucali. Na praznom upitu: ponavlja poslednju komandu, završava komandu, završava izbor, ili prihvata podrazumevanu vrednost u `<…>` |
| {{key:Space}} | Isto kao {{key:Enter}}, osim dok CadCraft traži tekst (tekst, nazive blokova, tekst kote), gde unosi razmak |
| {{key:Esc}} | Otkazuje komandu. Kada nijedna komanda nije pokrenuta: otkazuje pomeranje hvataljke ili okvir izbora, pa briše izbor |
| {{key:Tab}} | Prihvata predloženu komandu prikazanu desno od komandne linije. Kada ništa nije ukucano i pokazivač je nad preklopljenim objektima: ističe sledeći od njih (kliknite da ga izaberete) |
| {{key:Up}} {{key:Down}} | Prelazi kroz linije koje ste ranije ukucali (poslednjih 100) |

## Crtanje i uređivanje

| Taster | Šta radi |
|---|---|
| {{key:Mod+Z}} | Opozovi poslednju komandu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:Mod+A}} | Bira svaki objekat koji možete menjati na otvorenoj kartici ({{cmd:SELECTALL}}). Ako ste nešto ukucali u komandnu liniju, bira taj tekst umesto toga |
| {{key:Delete}} | Briše izabrane objekte ({{cmd:ERASE}}), osim ako ste nešto ukucali u komandnu liniju |
| {{key:Backspace}} | Briše izabrane objekte kada komandna linija nema kursor; u komandnoj liniji briše ono što ste ukucali |
| {{key:Esc}} | Kada nijedna komanda nije pokrenuta: briše izbor ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Čuva kopiju u formatu crteža (DWG ili DXF) |
| {{key:Mod+Shift+S}} | Sačuvaj kao: izaberite DWG ili DXF, pa sačuvajte kopiju |
| {{key:Mod+O}} | Otvara DWG ili DXF |
| {{key:Mod+P}} | Štampaj u PDF |

Opozovi, ponovi, izaberi sve i štampanje ne rade dok je komanda pokrenuta: prvo pritisnite {{key:Esc}}.

## Kopiranje, sečenje i lepljenje

| Taster | Šta radi |
|---|---|
| {{key:Mod+C}} | Kopira izbor u međuspremnik ({{cmd:COPYCLIP}}). Ako ništa nije izabrano: CadCraft traži objekte |
| {{key:Mod+X}} | Iseci: kopira izbor, pa ga briše ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Nalepi: kopija prati pokazivač; kliknite, ili ukucajte tačku, da je spustite ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Nalepi na mestu: na koordinatama sa kojih je kopirano ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliraj: kopija izbora se pomera sa pokazivačem; kliknite da je spustite, {{key:Esc}} ne ostavlja ništa ({{cmd:DUPLICATE}}) |

Iste radnje su u grupi {{ui:Uređivanje}} na traci sa alatkama ({{ui:Kopiraj}}, {{ui:Nalepi}}) i u njenom meniju {{ui:Više}}. Dok radi druga komanda, završite je ili prvo pritisnite {{key:Esc}}; ponovno pritiskanje {{key:Mod+V}} ili {{key:Mod+D}} dok kopija prati pokazivač počinje ispočetka. Kada ste nešto ukucali u komandnu liniju, ili komanda traži tekst, ovi tasteri umesto toga kopiraju, seku i lepe taj tekst. Pogledajte [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

## Prekidači

| Taster | Prekidač | Dugme na statusnoj traci |
|---|---|---|
| {{key:F3}} | Hvatanje za objekte uključeno ili isključeno | {{ui:Hvatanje}} |
| {{key:F7}} | Mreža uključena ili isključena | {{ui:Mreža}} |
| {{key:F8}} | Ortogonalno uključeno ili isključeno | {{ui:Ortogonalno}} |
| {{key:F10}} | Polarno praćenje uključeno ili isključeno | {{ui:Polarno}} |
| {{key:F11}} | Praćenje hvatanja za objekte uključeno ili isključeno | {{ui:Praćenje}} |
| {{key:F12}} | Dinamički unos uključen ili isključen | {{ui:Dinam}} |

:::mac
Na Mac-u su F3, F7 i F8 obično tasteri za Mission Control i medijske funkcije. Držite **fn** uz njih, ili uključite standardne funkcijske tastere u Podešavanjima sistema, kao što je opisano u [Tasteri, miševi i trackpad-ovi](common:keys). Dugmad na statusnoj traci uvek rade.
:::

:::firefox
F7 u Firefox-u može takođe da pita da uključi pregledanje sa kursorom. Izaberite **Ne**, i koristite dugme {{ui:Mreža}} ako i dalje pita.
:::

## Pomoć

| Taster | Šta radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara ovu pomoć, pored crteža. Radi i dok je komanda pokrenuta, i nikad ne stiže do komandne linije. |
| {{key:Esc}} | Kada je kursor u panelu pomoći: briše pretragu ili zatvara panel |

Dugme {{ui:Pomoć}} na traci na vrhu radi isto što i {{key:F1}}. Dok kucate u polje za pretragu pomoći, ništa ne stiže do komandne linije. Kliknite na crtež da vratite tastere CadCraft-u; panel ostaje otvoren pored njega.

:::mac
Na Mac tastaturi držite **fn** i pritisnite F1, ili kliknite {{ui:Pomoć}}.
:::

## Ekran

| Taster | Šta radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Menja redom: normalno, ceo ekran i ceo ekran sa skrivenim trakama. Ovo koristi taster Control na svakom računaru, uključujući Mac. |
| {{key:Left}} {{key:Right}} | Kada je kartica ispod crteža u fokusu: prethodna ili sledeća kartica |

U celom ekranu pregledač može prvi {{key:Esc}} da iskoristi za izlazak iz celog ekrana. Pritisnite {{key:Esc}} ponovo da otkažete komandu.

## Dijalozi

| Taster | Šta radi |
|---|---|
| {{key:Esc}} | Zatvara dijalog ({{ui:Štampaj u PDF}}, ili pitanje kao što je „Nesačuvane izmene“, gde znači {{ui:Otkaži}}) |
| {{key:Tab}} | Pomera između podešavanja i dugmadi dijaloga |

Dok je dijalog otvoren, tasteri crteža su isključeni.

## Polja u panelu

U polju u desnom ili levom panelu:

| Taster | Šta radi |
|---|---|
| {{key:Enter}} | Primenjuje vrednost i napušta polje |
| {{key:Esc}} | Vraća staru vrednost i napušta polje |
| {{key:Tab}} | Primenjuje i prelazi na sledeće polje |

Dok polje ima kursor, slova se upisuju u njega, a ne u komandnu liniju.

## Miš

| Radnja | Šta radi |
|---|---|
| Klik | Bira tačku kada komanda to traži; bira objekat kada traži objekte; inače bira objekat ili hvataljku |
| Shift+klik | Uklanja izabrani objekat iz izbora (sa {{ui:Klikanje na objekte}} podešenim na {{ui:Zamenjuje izbor}} u [Podešavanjima](topic:settings): dodaje ga). Dok bira tačku: zanemaruje hvatanje za objekte za taj klik |
| Klik na prazno, pa ponovo klik | Okvir izbora: sleva nadesno je prozor, zdesna nalevo ukrštanje |
| Prevlačenje po praznom | Omča: prvo udesno je prozor, prvo ulevo ukrštanje; {{key:Space}} dok vučete menja redom prozor, ukrštanje i ogradu; {{key:Esc}} je odbacuje (LASSOMODE 0, ili Podešavanja, ponovo je pretvara u pravougaonik) |
| Prevlačenje kroz delove u TRIM ili EXTEND | Seče (ili produžava) svaki deo koji putanja pređe; držite {{key:Shift}} za drugu radnju |
| Prevlačenje hvataljke | Pomera hvataljku (ili kliknite hvataljku, pa kliknite gde ide) |
| Dvostruki klik na tekst | Bira ga i stavlja kursor u njegovo polje {{ui:Tekst}} u desnom panelu |
| Desni klik | Enter. Tokom pomeranja hvataljke ili okvira izbora: otkazuje ga |
| Prevlačenje desnim dugmetom | Pomera pogled |
| Točkić | Zumira napred i nazad oko krstića |
| Prevlačenje točkićem (srednje dugme) | Pomera pogled |
| Dvostruki klik na točkić | Zumira na ceo crtež (granice) |
| Prevlačenje DWG ili DXF na crtež | Otvara ga |

Za trackpad ili ekran osetljiv na dodir pogledajte [Miš, trackpad i dodir](topic:mouse-trackpad-touch).

## Tasteri koje pregledač zadržava

{{key:Mod+N}}, {{key:Mod+W}} i {{key:Mod+T}} uvek pripadaju pregledaču. CadCraft ih ne koristi: za novi crtež koristite {{ui:Novo}} ili ukucajte `NEW`. Međuspremnik CadCraft-a je sopstveni: {{key:Mod+C}} i {{key:Mod+V}} kopiraju objekte između CadCraft crteža i kartica, a ne ka drugim programima ili iz njih.

:::mac
Ako {{key:Mod+Y}} otvara istoriju pregledača umesto ponovnog izvođenja, koristite {{key:Mod+Shift+Z}} ili dugme {{ui:Ponovi}}.
:::

## Gde se nalazi Premesti

Premesti je komanda `MOVE` (taster {{key:M}}): izaberite objekte, pa osnovnu tačku i drugu tačku ili ukucanu razdaljinu. Tu su i `ALIGN` i `DISTRIBUTE`. BimCraft koristi ista imena za iste poslove na elementima zgrade, ali njegov {{key:M}} je Izmeri: njegovo Premesti je {{key:Shift+M}}.
