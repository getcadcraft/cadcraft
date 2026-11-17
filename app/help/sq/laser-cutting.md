---
title: Dërgo një vizatim te një lazer
summary: Hap panelin e Lazerit, zgjidh çfarë bën çdo shtresë (prerje, gërvishtje, gravim, mbushje, figurë), shiko paraprakisht lëvizjet e kokës, ruaj G-code laser-mode GRBL, ose dërgoje nga shfletuesi pasi të kornizosh punën.
keywords: lazer, prerës lazer, gravues lazer, GRBL, G-code, gcode, gravim, mbushje, dither, gravim figure, gërvishtje, prerje, Web Serial, kornizo punën, fuqi, shpejtësi, kalime, LASER, LASERCUT, CNC
from: 72b56db0
---

Paneli {{ui:Lazer}} i kthen shtresat e një vizatimi në një program për një lazer që punon me GRBL (shumicën e kontrolluesve hobi dhe të vegjël të diodave dhe CO2). Shkruaj `LASER` (ose `LASERCUT`) dhe shtyp {{key:Enter}}, ose zgjidh {{ui:Lazer…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}. Në stilet e shiritit është në menynë {{ui:Skedar}} dhe pranë {{ui:Printo}}. Paneli hapet mbi vizatim dhe mbetet i hapur ndërsa vizaton: pamja paraprake ndjek çdo ndryshim.

:::warning
Provo çdo cilësim mbi mbetje më parë, vish syze mbrojtëse që përshtaten me lazerin tënd, mbaje kapakun të mbyllur aty ku ka një, dhe mos e lër kurrë lazerin të punojë pa mbikëqyrje. Numrat me të cilët nis një shtresë janë vendmbajtës, jo rekomandime për asnjë material.
:::

## Çfarë dërgohet

Paneli lexon modelin (jo fletët), mbi shtresat që janë të ndezura dhe jo të ngrira:

- Vija, harqe, rrathë, polivija (segmentet harkore mbeten harqe), elipse dhe spline. Një formë që mbaron aty ku fillon konsiderohet e mbyllur.
- Blloqet çmontohen: një objekt në shtresën 0 brenda një blloku merr shtresën e referencës së bllokut.
- Një vijëzim dërgon kufirin e tij, kështu një logo e vijëzuar në një shtresë **Mbush** mbushet.
- Një figurë (`IMAGEATTACH`) gravohet në një shtresë të vendosur te **Gravo figurën**, kur shtrihet drejt (jo e rrotulluar ose e pjerrët) dhe skedari i saj është i hapur në CadCraft.
- Teksti, përmasat, udhëheqësit, pikat dhe vijat ndihmëse nuk dërgohen; paneli thotë sa prej tyre lanë jashtë. Për të djegur tekst, vizato shkronjat si forma ose vijëzoji ato.

Madhësitë dalin në milimetra nga njësitë e vizatimit (`UNITS`): një vizatim në inç shumëzohet me 25.4. Një vizatim pa njësi të vendosura dërgohet një njësi për një milimetër. Vendos shenjën te {{ui:Vetëm objektet e përzgjedhura}} për të dërguar një pjesë të vizatimit.

## Zgjidh çfarë bën çdo shtresë

Çdo shtresë me diçka mbi të është një rresht. {{ui:Bën}} e vendos në **Prerje**, **Gërvishtje**, **Gravo vijat**, **Mbush format**, **Gravo figurën** ose **Nuk dërgohet**, me një {{ui:Fuqia %}}, një {{ui:Shpejtësia mm/min}} dhe një numër {{ui:Kalime}}. Çdo ndryshim është një hap zhbërjeje dhe ruhet në vizatim: DWG (çdo version që CadCraft ruan) dhe DXF i mbajnë cilësimet, kështu vizatimi hapet me to herën tjetër. Programet e tjera e hapin skedarin si më parë; ata shohin një bllok të pashfrytëzuar të quajtur CADCRAFT_LASER (pastrimi i tij atje heq cilësimet).

- **Mbush** djeg brendësinë e formave të mbyllura me vija, {{ui:Hapësira e rreshtave}} larg njëra-tjetrës, me një {{ui:Kënd}}, në të dy drejtimet ose në një, me një overscan që koka të jetë me shpejtësi kur lazeri ndizet; kryq-vijëzimi shton një kalim të dytë me 90°. Një formë me vrimë mbetet e hapur te vrima.
- **Gravo figurën** e kthen një figurë në pika (Floyd–Steinberg, Atkinson, të renditura, ose thjesht e zezë dhe e bardhë në një prag) ose, me *Nivelet e gri*, në fuqi të ndryshueshme.
- Renditja: fillimisht figurat dhe mbushjet, pastaj gravimi i vijave, pastaj gërvishtjet, pastaj prerjet, që një pjesë e prerë të mos lëvizë ndërsa gravohet. Brenda një shtrese, rrugët shkojnë **nga brenda-jashtë** (një vrimë përpara pllakës ku ndodhet), më e afërta e radhës.

## Shiko paraprakisht, pastaj ruaj

Pamja paraprake vizaton atë që bën koka: vijat që digjen në ngjyrë, lëvizjet e shpejta në gri, dhe një kuti të gjelbër rreth gjithçkaje që digjet. Më poshtë janë madhësia, gjatësia e djegies dhe një vlerësim kohe (pa përshpejtim; një makinë reale merr më shumë kohë). {{ui:Ruaj G-code…}} shkruan G-code laser-mode të GRBL: `$32=1`, `M4` (ose `M3`) me vlera S, lëvizjet `G0` dhe `G1`, dhe `M5` në fund. X0 Y0 është këndi i poshtëm majtas i punës, përveç nëse zgjedh origjinën e vizatimit: vendose zerën e punës së makinës tënde atje.

## Dërgo nga shfletuesi

Në Chrome dhe Edge, {{ui:Lidh…}} të kërkon të zgjedhësh portën USB të lazerit. Asgjë nuk lidhet ose dërgohet deri sa shtyp një buton. Shtyp {{ui:Kornizo punën}} më parë: koka ndjek kutinë e punës me lazerin **fikur** (ose me fuqinë e ulët që vendos për një tregues), që të shohësh ku do të digjet. Vetëm atëherë ndizet {{ui:Dërgo punën}}, dhe fiket përsëri nëse ndryshon diçka. {{ui:Pauzë}} e mban kokën, {{ui:Ndalo}} gjithashtu e mban, rivendos kontrolluesin (lazeri fiket) dhe dërgon `M5`. Aty ku mungon Web Serial (Firefox, Safari, dhe CadCraft Studio, që ende nuk ka Web Serial) paneli ofron vetëm ruajtjen: ruaj G-code dhe dërgoje me programin e vetë lazerit tënd.

## Ende nuk është ndërtuar

Ende nuk është ndërtuar: formatet e kontrolluesve të tjerë (Ruida, lazerët Marlin, skedarët e prodhuesve), mbajtëset (tabs) dhe hyrjet e fillimit, zhvendosja e prerjes (kerf), bibliotekat e materialeve, boshtet rrotulluese dhe boshti Z, kalibrimi me kamerë, teksti si kontur.
