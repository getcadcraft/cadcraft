---
title: Kontrollo pikat as-built
summary: Lexo pikat që ekipi i matjes ka matur dhe krahasoi me pikat dhe blloqet e vizatimit: brenda ose jashtë një tolerance, të pamatura, shtesë — të shënuara në vizatim dhe të shkruara si raport CSV.
keywords: as built, as-built, asbuilt, matje, stacion total, vendosje, vendos në terren, skedar pikash, csv, txt, pnezd, penzd, xyz, tolerancë, devijim, kontroll, krahaso, exportpoints, pika vendosjeje
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) është gjysma tjetër e {{cmd:EXPORTPOINTS}}: eksporton pikat e vizatimit për terren, ekipi i vendos ato dhe mat çfarë është ndërtuar, dhe ASBUILT krahason skedarin e tyre me vizatimin.

1. Shkruaj {{cmd:ASBUILT}} dhe përzgjidh të njëjtat pika dhe blloqe që eksportove (Enter merr çdo POINT, si EXPORTPOINTS).
2. **Çifto pikat as-built sipas** **Numrit** (ekipi mbajti numrat e pikave të tua: jep numrin e parë nga i cili eksportove) ose **Më e afërta** (ata i numëruan matjet e tyre: çdo pikë projekti merr më të afërtën).
3. Jep njësitë dhe koordinatat e skedarit ashtu siç i eksportove (Vizatim, Metra ose Këmbë; Botërore ose UCS), dhe **tolerancën** në njësitë e vizatimit.
4. Zgjidh skedarin CSV ose TXT të ekipit. CadCraft e lexon ashtu si e lexon CivilCraft: presje, tab, pikëpresje ose hapësira, një rresht titujsh që emërton kolonat, ose PNEZD sipas numrit të kolonave.

Vija e komandës tregon sa pika u çiftuan, sa janë brenda tolerancës, jashtë saj, të pamatura dhe shtesë, dhe distancën më të madhe. **T'i shënoj në vizatim?** Po i vendos në shtresën **AS-BUILT** si një hap zhbërjeje të vetëm: një pikë për çdo matje, numri dhe distanca e saj pranë, dhe një vijë e kuqe nga pika e projektit te çdo matje jashtë tolerancës. Shkarkohet një raport CSV me çdo pikë: koordinatat e projektit dhe as-built, diferencat në lindje, veri dhe lartësi, dhe rezultati.

Shih gjithashtu [Pikat për programe BIM](topic:points-for-bim).
