---
title: Vendos profile çeliku dhe pjesë standarde
summary: Vizato profile çeliku, prerje dhe elemente 3D nga tabelat e publikuara të profileve, vendos bulona, dado, rondele, kunja, rulmentë, çelësa dhe ingranazhe sipas standardeve të tyre, dhe listoji në një listë pjesësh.
keywords: çelik, profil, prerje, formë, formë W, flanxhë e gjerë, I-trarë, kanal, këndore, hss, tub, tubacion, ipe, hea, heb, upn, trarë, kolonë, element, kotë, aisc, en 10365, bulon, vidë, dado, rondele, kunjë, kunjë cilindrik, rulment, çelës, rrjedhë çelësi, ingranazh, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, pjesë standarde, listë pjesësh, listë materialesh, bom, steelmember, partslist
from: 547c1048
---

Skeda {{ui:Standard}} e bibliotekës ka dy lloje gjërash, të bëra këtu nga tabela të publikuara (asgjë nuk shkarkohet):

- **Profile çeliku**: 1,335 madhësi. W, S, C, L, HSS dhe Pipe nga AISC Shapes Database v16.0; IPE, HEA, HEB dhe UPN nga EN 10365:2017. DetailCraft përdor të njëjtën tabelë.
- **Pjesë standarde**: vida me kokë gjashtëkëndore (ISO 4017), bulona gjashtëkëndore (ISO 4014), dado gjashtëkëndore (ISO 4032), rondele të thjeshta (ISO 7089), bulona dhe dado gjashtëkëndore në inç (ASME B18.2.1 dhe B18.2.2), kunja paralele (ISO 2338), rulmentë me gropë të thellë (ISO 15), çelësa paralelë (DIN 6885-1) dhe ingranazhe cilindrike (module nga ISO 54).

Gjithçka këtu është e përbashkët nën CC0: përdore për çdo gjë, pa kërkuar kredit.

## Vendos një profil çeliku

1. Hap bibliotekën ({{ui:Biblioteka}} te grupi Blloqe, ose shkruaj `LIB`) dhe kliko skedën {{ui:Standard}}.
2. Zgjidh familjen në listën e parë, për shembull {{ui:Profile W}}. Shkruaj në kutinë e kërkimit për të ngushtuar madhësitë: `W12` shfaq çdo W12.
3. Te {{ui:Vendos si}}, zgjidh:
   - {{ui:Prerje}}: seksioni tërthor, me qendrën te pika e vendosjes.
   - {{ui:Kota}}: elementi i parë nga ana, për aq sa thotë {{ui:Gjatësia (mm)}}, nga mesi i skajit të majtë.
   - {{ui:Element 3D}}: një trup i ngurtë te skeda 3D (më poshtë).
4. Kliko {{ui:Vendos}} te kartela e madhësisë, pastaj kliko ku shkon, si për çdo artikull të bibliotekës.

Një prerje ose kotë bëhet bllok. Atributet e tij mbajnë madhësinë, tabelën nga vjen, gjatësinë (për një kotë) dhe një material që mund ta plotësosh.

:::note
Profilet S, kanalet dhe UPN vizatohen me flanxha paralele të trashësisë mesatare, dhe këndoret me qoshe katrore: flanxhat e vërteta janë me pjerrësi dhe qoshet janë të rrumbullakosura. W, IPE, HEA dhe HEB kanë rrumbullakimet e tyre të rrënjës, dhe HSS rrezet e qosheve.
:::

## Bëj një element 3D

Zgjidh {{ui:Element 3D}} dhe kliko {{ui:Vendos}}, ose shkruaj {{cmd:STEELMEMBER}} (`SMEMBER`) te rreshti i komandës:

1. Te `Section size`, shtyp {{key:Enter}} për madhësinë e shfaqur, ose shkruaj një, për shembull `HSS6x6x1/4` ose `IPE300`.
2. Kliko pikën e fillimit, pastaj pikën e fundit. Elementi shtrihet midis tyre, duke qëndruar mbi tokë.
3. Për një kolonë, shkruaj `C`, kliko pikën e bazës së saj dhe shkruaj lartësinë e saj.

Elementi është një trup i mbyllur i ngurtë te skeda 3D. Zhvendose ose kopjoje atje si çdo trup tjetër i ngurtë. {{key:Mod+Z}} e largon përsëri.

## Vendos një pjesë standarde

1. Te skeda {{ui:Standard}}, zgjidh familjen, për shembull {{ui:Vida gjashtëkëndore}}.
2. Për një vidë, bulon, kunj ose çelës, shkruaj {{ui:Gjatësia (mm)}} (inç për familjet në inç). Për një ingranazh, shkruaj {{ui:Dhëmbët}}, {{ui:Gjerësia e faqes (mm)}} dhe {{ui:Vrima (mm)}}. Lëre një kuti bosh për vlerën e zakonshme të shfaqur në të.
3. Kliko {{ui:Vendos}} te madhësia dhe kliko ku shkon.

Vidat, bulonat dhe kunjat vizatohen nga ana, me faqen mbajtëse të kokës te pika e vendosjes; dadot, rondelet, rulmentët dhe ingranazhet përballë; çelësat nga lart. Filetat vizatohen në mënyrën e zakonshme: rrënja si vijë e hollë, fundi i filetit si një e trashë. Ingranazhet vizatohen si rrethi i majës, rrethi i pjesëtimit dhe rrethi i rrënjës, jo dhëmb për dhëmb.

Blloku i çdo pjese mban llojin, standardin, madhësinë, gjatësinë dhe materialin si atribute, dhe peshën e tij nga forma nominale në çelik. Ndrysho materialin te paneli {{ui:Vetitë}}.

Të njëjtat pjesë janë në Bibliotekë edhe si artikuj, dhe PartCraft i hap si pjesë parametrike ({{ui:Pjesë standarde}} te grupi File i saj).

## Bëj një listë pjesësh

- Te biblioteka, kliko {{ui:Lista e pjesëve}}: çdo pjesë standarde dhe profil çeliku në vizatim, i grupuar sipas llojit, standardit, madhësisë, gjatësisë dhe materialit, me sasinë dhe numrat e artikujve. {{ui:Shkarko CSV}} e ruan për një fletëllogaritëse.
- Për ta vizatuar, shkruaj {{cmd:PARTSLIST}} (`PLIST`), kliko qoshen e sipërme majtas të tabelës, dhe shtyp {{key:Enter}} për lartësinë e zakonshme të tekstit ose shkruaj një.

Lista lexohet nga atributet e blloqeve, kështu që është ende e saktë pasi vizatimi të ruhet si DWG ose DXF dhe të hapet përsëri.

## Gabimet e zakonshme

- **"Nuk ka asnjë profil çeliku të quajtur …"**: shkruaj madhësinë ashtu si e liston skeda {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Elementi është te skeda 3D, jo në plan.** {{cmd:STEELMEMBER}} bën një trup të ngurtë; hap skedën 3D për ta parë. Për të shfaqur çelikun në plan, vendos edhe një {{ui:Prerje}} ose {{ui:Kota}}.
- **Një gjatësi jashtë kufijve.** Një bulon duhet të jetë më i gjatë se koka e tij, dhe një çelës më i gjatë se gjerësia e tij. Rreshti nën kartelat thotë cila vlerë u refuzua.
