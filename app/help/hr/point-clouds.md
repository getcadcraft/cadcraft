---
title: Ucrtavanje izvedenog stanja preko oblaka točaka
summary: Priložite lasersko skeniranje (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) ispod crteža, izrežite tlocrtni isječak kroz njega i ucrtajte zidove, vrata i stupove uz hvatanje objekata na njegove točke.
keywords: oblak točaka, pointcloudattach, pcattach, pointcloud, pc, lasersko skeniranje, skeniranje, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izvedeno stanje, snimanje, isječak, rez tlocrta, čvor, hvatanje, ucrtavanje, postojeće stanje
from: b0e0aae5
---

## Što ćete izraditi

Izvedeni tlocrt etaže: zidovi skenirane zgrade ucrtani kao linije i polilinije točno na točkama skena.

## Priložite oblak točaka

1. Ako crtež nema zadane jedinice, prvo ih postavite (polje {{ui:Units}} na ploči {{ui:Properties}} ili {{cmd:UNITS}}): CadCraft pretvara oblak iz vlastitih jedinica u jedinice crteža.
2. Upišite {{cmd:POINTCLOUDATTACH}} (ili `PCATTACH`) i pritisnite {{key:Enter}}. Odaberite datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz` (tema o formatima oblaka točaka opisuje što svaki od njih donosi i što izvesti iz vlastitog softvera skenera). Datoteku možete otvoriti i pomoću {{ui:Open}}, povući je na stranicu ili poslati iz BIM preglednika pomoću {{ui:Ucrtaj u CadCraft}}.
3. `Donji lijevi kut oblaka`: pritisnite {{key:Enter}} da zadržite koordinate same datoteke (skeniranje registrirano u projektu poravnava se s crtežom) ili kliknite mjesto na kojem ide njegov donji lijevi kut.
4. Naredbeni redak prikazuje koliko se točaka vidi. Prikaz se zumira na oblak; on leži ispod linija crteža, a svaka se točka vidi odozgo.

## Izrežite tlocrtni isječak i ucrtajte

1. Upišite {{cmd:POINTCLOUD}} (ili `PC`), zatim `S` za {{ui:Isječak}}. Prikazuje se samo tanki pojas 1.2 m iznad najniže točke oblaka: zidovi, otvori vrata i stupovi čitaju se kao tlocrt.
2. `H` postavlja visinu presjeka, `T` njegovu debljinu (u jedinicama crteža). {{key:Enter}} završava naredbu.
3. Uključite hvatanje objekata ({{key:F3}}) s {{ui:Čvor}} među hvatanjima. Crtajte naredbom {{cmd:LINE}} ili {{cmd:PLINE}}: kursor se hvata za točke isječka, označene kao „Oblak točaka“. Vlastite krajnje točke, polovišta i središta crteža imaju prednost pred oblakom, pa zatvaranje polilinije pada na njezinu prvu točku.
4. Promijenite visinu presjeka za ucrtavanje druge etaže, zatim isključite isječak (ponovno `S`) da vidite cijeli oblak.

## Dodatne mogućnosti

U {{cmd:POINTCLOUD}}: `C` boji točke prema bojama datoteke, visini, intenzitetu, LiDAR klasi ili jednoj boji; `SI` postavlja veličinu točke; `V` sakriva ili prikazuje oblak; `Z` zumira na njega; `D` ga odvaja.

Kartica 3D također prikazuje oblak, s najnižom točkom na tlu i istim isječkom.

:::note
Oblak nije dio crteža: ne sprema se u DWG ili DXF, a poništavanje ga ne mijenja. Ponovno ga priložite kada kasnije otvorite crtež. Datoteke se čitaju na ovom računalu; ništa se ne učitava. Vrlo velika skeniranja ravnomjerno se prorjeđuju na 2 milijuna točaka. Datoteke E57 otvaraju se do 6 milijuna točaka i 512 MB zasad: veća skeniranja izvezite kao LAS ili LAZ.
:::

## Ispišite ga

{{cmd:PLOT}} ispisuje oblak zajedno s crtežom, ispod linija: u ispisu modela ({{ui:Sve}} uključuje područje oblaka) i u svakom viewportu layouta, u PDF-u, PNG-u, SVG-u i onome što šaljete pisaču. Ispisuje se ono što je na zaslonu: isječak ako je uključen, boje koje ste odabrali, a skriven ostaje ako ste ga sakrili. Na papiru točke postaju mali kvadratići, pri čemu u svakom prevladava najviša točka, a ispis zadržava najviše oko 400,000 njih (vrlo gusti oblak ispisuje se većim kvadratićima). Oblak se ispisuje samo u crtežu u koji je priložen; nikad se ne ispisuje u papirnom prostoru, nego samo kroz viewport.

## Više skeniranja

Skeniranja snimljena s različitih položaja mogu se registrirati u jedan okvir, dotjerati pomoću ICP-a i izvesti kao jedan LAS ili E57: vidi [Registriranje više skeniranja u jedno](topic:register-scans).
