---
title: Ucrtaj stvarno stanje preko oblaka tačaka
summary: Priključi laserski sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) ispod crteža, zasijeci tlocrtni presjek kroz njega i crtaj zidove, vrata i stubove uz hvatanje za objekte na njegovim tačkama.
keywords: oblak tačaka, pointcloudattach, pcattach, pointcloud, pc, laserski sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, stvarno stanje, as built, geodetsko snimanje, presjek, tlocrtni presjek, čvor, hvatanje, ucrtavanje, postojeće stanje
from: b0e0aae5
---

## Šta ćete napraviti

Tlocrt stvarnog stanja: zidovi skeniranog objekta ucrtani kao linije i polilinije tačno na tačkama skena.

## Priključi oblak tačaka

1. Prvo podesite jedinice crteža ako ih nema (polje {{ui:Jedinice}} u {{ui:Svojstva}}, ili {{cmd:UNITS}}): CadCraft pretvara oblak iz njegovih jedinica u jedinice crteža.
2. Upiši {{cmd:POINTCLOUDATTACH}} (ili `PCATTACH`) i pritisni {{key:Enter}}. Odaberi datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz` (tema o formatima oblaka tačaka kaže šta svaki donosi i šta treba izvesti iz softvera skenera). Datoteku možete otvoriti i sa {{ui:Otvori}}, prevući je na stranicu ili poslati iz BIM pregledača preko {{ui:Prenesi u CadCraft}}.
3. `Donji lijevi ugao oblaka`: pritisni {{key:Enter}} da zadržiš koordinate same datoteke (skenirani objekat registrovan u projektu poravnat je s crtežom) ili klikni tamo gdje treba da bude donji lijevi ugao.
4. Komandna linija kaže koliko tačaka se prikazuje. Prikaz se zumira na oblak; on leži ispod linija crteža, a svaka tačka se vidi odozgo.

## Zasijeci tlocrtni presjek i ucrtaj

1. Upiši {{cmd:POINTCLOUD}} (ili `PC`), zatim `S` za [Presjek (S)]. Vidi se samo tanak sloj 1.2 m iznad najniže tačke oblaka: zidovi, otvori vrata i stubovi izgledaju kao tlocrt.
2. [Visina (H)] postavlja visinu presjeka, [Debljina (T)] njegovu debljinu (u jedinicama crteža). {{key:Enter}} završava komandu.
3. Uključi hvatanje za objekte ({{key:F3}}) sa {{ui:Čvor}} među hvatanjima. Crtaj sa {{cmd:LINE}} ili {{cmd:PLINE}}: kursor se hvata za tačke presjeka, označene kao "Oblak tačaka". Krajnje tačke, sredine i središta vlastitih objekata crteža imaju prednost nad oblakom, pa zatvaranje polilinije pada na njenu prvu tačku.
4. Promijeni visinu presjeka da ucrtaš drugi nivo, zatim isključi presjek (ponovo `S`) da vidiš cijeli oblak.

## Dodatne opcije

U {{cmd:POINTCLOUD}}: [Boje (C)] boji tačke prema bojama iz datoteke, visini, intenzitetu, LiDAR klasi ili jednoj boji; [Veličina tačke (SI)] postavlja veličinu tačaka; [Sakrij/prikaži (V)] sakriva ili prikazuje oblak; `Z` zumira na njega; [Odvoji (D)] ga odvaja.

Kartica 3D također prikazuje oblak, s najnižom tačkom na tlu, i isti presjek.

:::note
Oblak nije dio crteža: ne čuva se u DWG ni DXF, a radnja Poništi ga ne mijenja. Ponovo ga priključite kad kasnije otvorite crtež. Datoteke se čitaju na ovom računaru; ništa se ne šalje. Vrlo veliki skenovi se ravnomjerno proređuju na 2 miliona tačaka. Datoteke E57 se za sada otvaraju do 6 miliona tačaka i 512 MB: veće skenove izvezite kao LAS ili LAZ.
:::

## Štampaj

{{cmd:PLOT}} štampa oblak zajedno s crtežom, ispod linija: u štampi modela ({{ui:Sve}} uključuje područje oblaka) i u svakom prozoru izgleda, u PDF, PNG, SVG i onom što šaljete štampaču. Štampa ono što je na ekranu: presjek ako je uključen, boje koje ste odabrali, a skriveno ako ste ga sakrili. Na papiru tačke postaju mali kvadrati, a najviša tačka pobjeđuje u svakom; štampa zadržava najviše oko 400.000 njih (vrlo gust oblak se štampa većim kvadratima). Oblak se štampa samo u crtežu u koji je priključen; nikad se ne štampa u samom prostoru za papir, nego samo kroz prozor izgleda.

## Više skenova

Skenovi snimljeni s različitih pozicija mogu se registrovati u jedan okvir, dorediti ICP-om i izvesti kao jedan LAS ili E57: pogledajte [Registruj više skenova u jedan](topic:register-scans).
