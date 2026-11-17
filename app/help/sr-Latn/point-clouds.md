---
title: Trasiranje izvedenog stanja preko oblaka tačaka
summary: Priključite laserski sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) ispod crteža, napravite presek osnove kroz njega i crtajte zidove, vrata i stubove uz hvatanje za njegove tačke.
keywords: oblak tačaka, pointcloudattach, pcattach, pointcloud, pc, laserski sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izvedeno stanje, as-built, geodetsko snimanje, presek, presek osnove, čvor, hvatanje, trasiranje, postojeće stanje
from: b0e0aae5
---

## Šta ćete napraviti

Osnovu izvedenog stanja: zidovi skeniranog objekta nacrtani linijama i polilinijama tačno na tačkama skena.

## Priključivanje oblaka

1. Prvo podesite jedinice crteža ako ih nema (polje {{ui:Jedinice}} u {{ui:Svojstva}}, ili {{cmd:UNITS}}): CadCraft preračunava oblak iz njegovih jedinica u jedinice crteža.
2. Ukucajte {{cmd:POINTCLOUDATTACH}} (ili `PCATTACH`) i pritisnite {{key:Enter}}. Izaberite datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz` (tema o formatima oblaka tačaka kaže šta svaki donosi i šta izvesti iz sopstvenog softvera skenera). Datoteku možete otvoriti i sa {{ui:Otvori}}, prevući na stranicu ili poslati iz BIM pregledača preko {{ui:Ucrtaj u CadCraft}}.
3. `Donji levi ugao oblaka`: pritisnite {{key:Enter}} da zadržite koordinate datoteke (skeniranje registrovano na projekat se poklapa sa crtežom), ili kliknite mesto gde ide donji levi ugao.
4. Komandna linija kaže koliko tačaka se prikazuje. Prikaz se uvećava na oblak; on leži ispod linija crteža, a sve tačke su vidljive odozgo.

## Presecanje osnove i trasiranje

1. Ukucajte {{cmd:POINTCLOUD}} (ili `PC`), zatim `S` za {{ui:Presek}}. Vidi se samo tanak pojas 1.2 m iznad najniže tačke oblaka: zidovi, otvori vrata i stubovi izgledaju kao osnova sprata.
2. `H` postavlja visinu preseka, a `T` njegovu debljinu (u jedinicama crteža). {{key:Enter}} završava komandu.
3. Uključite hvatanje objekata ({{key:F3}}) sa {{ui:Čvor}} među hvatanjima. Crtajte sa {{cmd:LINE}} ili {{cmd:PLINE}}: kursor se hvata za tačke preseka, označene sa „Oblak tačaka“. Krajnje tačke, sredine i centri samog crteža imaju prednost nad oblakom, pa zatvaranje polilinije pada na njenu prvu tačku.
4. Promenite visinu preseka da biste trasirali drugi nivo, a zatim isključite presek (ponovo `S`) da vidite ceo oblak.

## Dodatne opcije

U {{cmd:POINTCLOUD}}: `C` boji tačke prema bojama datoteke, visini, intenzitetu, LiDAR klasi ili jednoj boji; `SI` postavlja veličinu tačke; `V` sakriva ili prikazuje oblak; `Z` uvećava prikaz na njega; `D` ga odvaja.

Kartica 3D takođe prikazuje oblak, sa najnižom tačkom na tlu i istim presekom.

:::note
Oblak nije deo crteža: ne čuva se u DWG ili DXF datoteci, a opoziv ga ne menja. Ponovo ga priključite kada kasnije otvorite crtež. Datoteke se čitaju na ovom računaru; ništa se ne otprema. Vrlo veliki skenovi se ravnomerno proređuju na 2 miliona tačaka. E57 datoteke se za sada otvaraju do 6 miliona tačaka i 512 MB: veće skenove izvezite kao LAS ili LAZ.
:::

## Štampanje

{{cmd:PLOT}} štampa oblak zajedno sa crtežom, ispod linija: u štampanju modela ({{ui:Sve}} obuhvata područje oblaka) i u svakom prozoru pogleda rasporeda, u PDF-u, PNG-u, SVG-u i šta god pošaljete štampaču. Štampa ono što je na ekranu: presek ako je uključen, boje koje ste izabrali i sakriveno ako ste ga sakrili. Na papiru tačke postaju mali kvadrati, a najviša tačka pobeđuje u svakom; štampanje zadržava najviše oko 400.000 tačaka (vrlo gust oblak se štampa većim kvadratima). Oblak se štampa samo u crtežu u koji je priključen; nikada se ne štampa u prostoru papira, već samo kroz prozor pogleda.

## Više skenova

Skenovi snimljeni sa različitih pozicija mogu se registrovati u jedan okvir, doterati ICP-om i izvesti kao jedan LAS ili E57: pogledajte [Registrujte više skenova u jedan](topic:register-scans).
