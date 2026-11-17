---
title: Treguesi kërcen ose vonohet mbi vizatim
summary: Çfarë të bësh kur kryqëzorja nuk ndjek miun rrjedhshëm, në një kompjuter më të vjetër ose më të ngadaltë.
keywords: kërcim i kursorit, vonesë e treguesit, kryqëzore e ngadaltë, kursor i dridhur, kompjuter i vjetër, kartë grafike e vjetër, grafikë e integruar, përshpejtim me harduer, tregues më i qetë, laptop i ngadaltë
from: 39dc9057
---

CadCraft punon në shfletues (CadCraft Studio është gjithashtu një pamje në shfletues), kështu që asgjë në të nuk është ndërtuar për një kartë grafike ose një tjetër. Kryqëzorja vizatohet nga aplikacioni, që do të thotë se mund të lëvizë vetëm aq shpejt sa aplikacioni mund të vizatojë një kornizë.

## Lëre CadCraft të ulë të tjerat

1. Hap {{ui:Cilësimet}} (ingranazhi lart djathtas) dhe qëndro te skeda {{ui:CadCraft}}.
2. Zgjidh {{ui:Tregues më i qetë në kompjuterë më të ngadaltë}}.
3. Zgjidh {{ui:Aktiv}}.

Me këtë aktive, kursori i vetë kompjuterit përdoret në vend të kryqëzores së vizatuar dhe kutisë së zgjedhjes (edhe kryqëzorja në ekran të plotë), dhe objekti nën tregues ndriçon kur treguesi qëndron, jo ndërsa lëviz. Pikat e kapjes së objekteve, gjurmimi dhe shiriti elastik funksionojnë si më parë.

{{ui:Automatike}} është si nis CadCraft: vëzhgon sa zgjat çdo kornizë ndërsa lëviz treguesin dhe e ndez vetë kur mbeten të ngadalta për disa sekonda. E njofton një herë kur e bën këtë. {{ui:Fik}} e mban kryqëzoren e vizatuar pavarësisht nga shpejtësia.

## Nëse është ende i ngadaltë

- Kontrollo që përshpejtimi me harduer të jetë i aktivizuar në shfletuesin tënd: hap `chrome://gpu` (ose `edge://gpu`) në një skedë të re. Nëse rreshtat e parë thonë "Software only" ose "Disabled", shfletuesi po vizaton pa kartën grafike. Përditësimi i driver-it të grafikës shpesh e kthen.
- Mbyll skedat dhe programet e tjera të rënda dhe provo një dritare më të vogël të shfletuesit.
- Na thuaj përmes {{ui:Ndihmë}}, {{ui:Raporto një problem}}: thuaj nëse përdor shfletuesin ose CadCraft Studio, versionin e tij, dhe çfarë thotë faqja gpu.
