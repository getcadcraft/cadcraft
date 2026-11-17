---
title: Kthe pamjen dhe përdor koordinatat e tua (UCS)
summary: Kthe pamjen 90° ose në çdo kënd pa lëvizur asgjë në vizatim, dhe cakto një sistem koordinatash të përdoruesit (UCS) që pikat, ortho, gjurmimi polar, rrjeta dhe teksti i ri ndjekin boshtet e vetë ndërtesës.
keywords: ucs, sistem koordinatash i përdoruesit, plan, kthe pamjen, rrotullo pamjen, rrotullim pamjeje, ucs z, ucs 3point, ucs object, ucs world, ucs i emërtuar, ucsfollow, turnleft, turnright, turnworld, ndërtesë me kënd, rrjetë e rrotulluar
from: 6f152c65
---

## Çfarë do të mësosh

Si ta shikosh një vizatim të kthyer, që një ndërtesë e vizatuar me kënd të duket drejt në ekran, dhe si të shkruash pika përgjatë boshteve të saj. Asgjë në vizatim nuk lëviz ndërsa e bën këtë: objektet mbajnë koordinatat e tyre, kthimi nuk është një ndryshim, dhe vizatimi nuk shënohet si i ndryshuar.

## Kthe pamjen një çerek

1. Kliko {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}} ose {{ui:Turn view 90° right}}.

Vizatimi kthehet në ekran rreth mesit të zonës së vizatimit. Bëje përsëri për të vazhduar kthimin.

2. Kliko {{ui:View}} › {{ui:More}} › {{ui:Back to world}} për ta sheshuar përsëri.

Komandat pas tyre janë {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} dhe {{cmd:TURNWORLD}}. Për t'i dhënë një tast, shto një rresht si `TL=TURNLEFT` te aliaset e tua me {{cmd:ALIASEDIT}}.

## Vendose në linjë me një ndërtesë me kënd

1. Shkruaj `UCS` dhe shtyp {{key:Enter}}, pastaj `OB` (Objekt) dhe {{key:Enter}}.
2. Kliko një vijë muri pranë skajit që duhet të jetë origjina.

UCS tani fillon në atë skaj me boshtin X përgjatë murit, dhe pamja kthehet që muri të jetë i sheshtë në ekran. Ikona e boshtit në cepin e poshtëm të majtë tregon ku shikojnë boshtet e UCS.

3. Vizato si zakonisht. Me UCS të vendosur:
   - `x,y` dhe `@dx,dy` maten përgjatë boshteve të UCS; `d<a` mat këndin nga boshti X i UCS.
   - {{ui:Ortho}}, gjurmimi polar dhe rrjeta ndjekin boshtet e UCS, dhe kështu bën edhe kryqi.
   - Teksti i ri dhe paragrafët e rinj shkojnë përgjatë boshtit X të UCS; horizontalja dhe vertikalja e {{cmd:DIMLINEAR}} e ndjekin gjithashtu.
   - Koordinatat në shiritin e gjendjes dhe nga {{cmd:ID}} janë koordinata UCS.
4. Për të shkruar një pikë botërore ndërsa UCS është vendosur, vendos `*` përpara: `*0,0` ose `@*100,0`.
5. Shkruaj `UCS`, {{key:Enter}}, pastaj {{key:Enter}} përsëri për t'u kthyer te bota.

## Mënyra të tjera për të vendosur UCS

Te kërkesa {{cmd:UCS}}:

| Shkruan | Çfarë bën |
|---|---|
| një pikë | Një origjinë e re; pastaj kliko një pikë mbi boshtin e ri X, ose shtyp {{key:Enter}} për të mbajtur këndin |
| `Z` ([Rrotullo (Z)]) | Kthe UCS rreth origjinës me një kënd që shkruan (gradë, në drejtim të kundërt të akrepave të orës) ose zgjedh |
| `3` (3pikë) | Një origjinë, një pikë përgjatë boshtit X pozitiv, dhe një pikë në anën Y pozitive |
| `OB` (Objekt) | Nga një vijë, hark, rreth, segment polivije, tekst, referencë blloku, pikë ose vijë ndërtimi |
| `P` (Para) | UCS-ja para kësaj (të fundit dhjetë mbahen ndërsa vizatimi është i hapur) |
| `W` ([Bota (W)]) | Kthehu te bota |
| `NA` ([Me emër (NA)]) | `S` ruan UCS-në aktuale me një emër, `R` rikthen një, `D` fshin një, `?` i liston |

Çdo ndryshim e kthen pamjen që boshti i ri X i UCS të jetë i sheshtë. {{cmd:PLAN}} e kthen pamjen pa ndryshuar UCS-në: {{key:Enter}} për UCS-në aktuale, `U` për një të ruajtur, `W` për botën.

## Gjëra të dobishme

- Çdo pjesë e ekranit të ndarë mban kthimin e vet. UCS i përket vizatimit.
- Fletët punojnë në koordinata letre; vendos një UCS te skeda {{ui:Model}}, ose brenda një dritareje pamjeje.
- Dritaret e zgjedhjes të tërhequra në një pamje të kthyer zgjedhin atë që shtrihet brenda tyre në ekran.
- Rutinat LISP marrin pika në UCS nga `getpoint`, mund të lexojnë `UCSORG`, `UCSXDIR`, `UCSYDIR` dhe `VIEWTWIST`, dhe `trans` konverton midis botës, UCS-së dhe ekranit.

:::note
Një skedar i ruajtur mban UCS-në dhe kthimin e pamjes në një version të mëvonshëm; deri atëherë ato mbeten ndërsa vizatimi është i hapur.
:::
