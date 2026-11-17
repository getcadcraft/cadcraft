---
title: Gjurmo vijat e ndërtimit të përfunduar mbi një re pikash
summary: Bashkëngjit një skanim lazer (LAS, LAZ, E57, PLY, PCD, PTX, PTS ose XYZ) nën vizatim, pritni një prerje plani përmes tij dhe vizatoni mure, dyer dhe kolona me kapje objekti mbi pikat e tij.
keywords: re pikash, pointcloudattach, pcattach, pointcloud, pc, skanim lazer, skanim, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, siç është ndërtuar, siç u ndërtua, rilevim, prerje, prerje plani, nyja, kapje, gjurmo, kushtet ekzistuese
from: b0e0aae5
---

## Çfarë do të krijoni

Një plan kati siç është ndërtuar: muret e një ndërtese të skanuar të vizatuara si vija dhe polivija saktësisht mbi pikat e skanimit.

## Bashkëngjit resë

1. Vendosni njësitë e vizatimit së pari nëse nuk ka (kutia {{ui:Units}} në {{ui:Properties}}, ose {{cmd:UNITS}}): CadCraft e konverton resë nga njësitë e veta në ato të vizatimit.
2. Shkruani {{cmd:POINTCLOUDATTACH}} (ose `PCATTACH`) dhe shtypni {{key:Enter}}. Zgjidhni një skedar `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ose `.xyz` (tema mbi formatet e reve të pikave tregon çfarë sjell secili dhe çfarë të eksportohet nga programi i vetë skanerit). Mund ta hapni skedarin edhe me {{ui:Open}}, ta lëshoni në faqe, ose ta dërgoni nga {{ui:Gjurmo në CadCraft}} i shikuesit BIM.
3. `Qoshja e poshtme majtas e resë`: shtypni {{key:Enter}} për të mbajtur koordinatat e vetë skedarit (një skanim i regjistruar me projektin përputhet me vizatimin), ose klikoni aty ku do të vendoset qoshja e poshtme majtas.
4. Rreshti i komandës tregon sa pika shfaqen. Pamja zmadhohet te reja; ajo shtrihet nën vijat, me çdo pikë të shikuar nga lart.

## Pritni një prerje plani dhe gjurmo

1. Shkruani {{cmd:POINTCLOUD}} (ose `PC`), pastaj `[Prerje (S)]`. Vetëm një brez i hollë 1.2 m mbi pikën më të ulët të resë shfaqet: muret, hapjet e dyerve dhe kolonat lexohen si një plan kati.
2. `[Lartësia (H)]` vendos lartësinë e prerjes, `T` trashësinë (në njësi vizatimi). {{key:Enter}} mbyll komandën.
3. Ndizni kapjen e objektit ({{key:F3}}) me {{ui:Nyja}} mes kapjeve. Vizatoni me {{cmd:LINE}} ose {{cmd:PLINE}}: kursori kapet te pikat e prerjes, e etiketuar "Re pikash". Pikat fundore, mesët dhe qendrat e vizatimit kanë përparësi mbi resë, kështu që mbyllja e një polivije e kap pikën e saj të parë.
4. Ndryshoni lartësinë e prerjes për të gjurmuar një nivel tjetër, pastaj fikni prerjen (`[Prerje (S)]` përsëri) për të parë të gjithë resë.

## Opsione të tjera

Te {{cmd:POINTCLOUD}}: `[Ngjyra (C)]` ngjyros pikat sipas ngjyrave të skedarit, lartësisë, intensitetit, klasës LiDAR ose një ngjyre të vetme; `[Madhësia (SI)]` vendos madhësinë e pikës; `[Fshih/Shfaq (V)]` fsheh ose shfaq resë; `Z` zmadhon në të; `[Shkëput (D)]` e shkëput.

Skeda 3D gjithashtu e shfaq resë, me pikën e saj më të ulët në tokë, me të njëjtën prerje.

:::note
Reja nuk është pjesë e vizatimit: nuk ruhet në DWG ose DXF, dhe zhbërja nuk e ndryshon. Bashkëngjitni përsëri kur hapni vizatimin më vonë. Skedarët lexohen në këtë kompjuter; asgjë nuk ngarkohet. Skanimet shumë të mëdha hollohen në mënyrë të barabartë në 2 milionë pika. Skedarët E57 hapen deri në 6 milionë pika dhe 512 MB për tani: eksportoni skanimet më të mëdha si LAS ose LAZ.
:::

## Printoje

{{cmd:PLOT}} shtyp resë bashkë me vizatimin, nën vijat: në printimin e modelit ({{ui:Gjithçka}} përfshin zonën e resë) dhe në çdo dritare të fletës, në PDF, PNG, SVG dhe në ç'i dërgoni printerit. Printon atë që shihet në ekran: prerjen nëse është e ndezur, ngjyrat që keni zgjedhur, dhe fshihet nëse e keni fshehur. Në letër pikat bëhen katrorë të vegjël, me pikën më të lartë që fiton secilin; një printim mban deri rreth 400,000 prej tyre (një re shumë e dendur printohet me katrorë më të mëdhenj). Reja printohet vetëm në vizatimin ku është bashkëngjitur; nuk printohet kurrë vetë në hapësirën e letrës, vetëm përmes një dritareje.

## Disa skanime

Skanime të marra nga pozicione të ndryshme mund të regjistrohen në një kornizë të vetme, të rafinohen me ICP dhe të eksportohen si një LAS ose E57 i vetëm: shih [Regjistro disa skanime në një](topic:register-scans).
