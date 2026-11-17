---
title: Bhalisa izikena eziningi zibe nye
summary: Beka izikena ezithathwe ezindaweni ezahlukene endaweni eyodwa ngamapheya amaphoyinti akhethiwe noma izinhloso ezithayiphiwe, zithuthukise nge-ICP, londoloza ukubhalisa njengephrojekthi, bese uthumela ifu elibhalisiwe njenge-LAS noma i-E57. Umyalo yi-REGISTERSCANS.
keywords: bhalisa, ukubhalisa, izikena, ifu lamaphoyinti, icp, iterative closest point, izinhloso, amapheya amaphoyinti, rigid transform, qondanisa, hlanganisa, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Okuzokwenzeka

Izikena eziningana zendawo eyodwa (ngayinye ithathwe endaweni yayo yesikena) iqala ngezixhumanisi zayo. Zibhalise: nika ikena ngalinye ukubekwa okukodwa ukuze zonke zihlale esakhiweni esisodwa, bese uyilondoloza njengephrojekthi, bese ubhala ifu elibhalisiwe njengefayela elilodwa le-LAS noma i-E57.

## Beka izikena

1. Vula ingxoxo (thayipha `REGISTERSCANS` (noma `REGSCAN`)). {{ui:Engeza izikena…}} uthatha amafayela e-LAS, LAZ, E57, PLY, PCD, PTX, PTS noma XYZ, noma uwalahle engxoxweni. Izikena ezisebenzisa iyunithi ehlukile ziyenqatshwa ngesaziso: guqula eyodwa kuqala.
2. Khetha {{ui:Scan to move}} no-{{ui:Place against}}. Ipikha ibonisa wonke izikena esakhiweni njengoba zinjalo manje, ngombala owodwa ngamunye: {{ui:Plan}}, {{ui:Front}} noma {{ui:Side}}; hudula ukuze uhambise, sebenzisa iwili ukuze usondeze.
3. **Ngamapheya amaphoyinti.** Chofoza {{ui:Pick a pair}}, bese uchofoza iphoyinti eskenini okufanele lihanjiswe, bese indawo efanayo kwenye iskena (ikhona, isinhloso, unyawo wekholomu). Yenza lokhu okungenani kathathu, ngamaphoyinti angelona ugqinsi owodwa futhi ahlukaniswe kabanzi. Chofoza {{ui:Place by pairs}}: iskena libekwa ngokulinganisa okuncane kakhulu, futhi **Okuseleyo** ibonisa ukuthi ipheya ngayinye isasilahlekelwa kangakanani. Ipheya enenombolo enkulu iyisinqumo esibi: yisuse ngesiphambano bese ubeka futhi.
4. **Ngezinhloso.** Uma izixhumanisi zephoyinti ezingempela sezaziwa (izinhloso ezihlolisiwe), chofoza {{ui:Pick, then type target}}, chofoza iphoyinti eskenini lalo, bese uthayipha i-X, i-Y ne-Z yenhloso emgqeni. Amapheya nezinhloso ezithayiphiwe ayahlanganiswa ngokukhululeka.

## Thuthukisa nge-ICP

Amapheya anikeza ukubekwa okungaqondile. {{ui:Refine}} ihambisa iskena size izindawo zalo zihlale phezu kwezeskena elinye: kuqala **ngephoyinti kuya kephoyinti**, bese **ngephoyinti kuya kuphlane**. Ithebula libala isinyathelo ngasinye ngephutha lalo nenani lamaphoyinti ahambisana; umugqa ophezulu kwawo udweba ukwehla kwephutha. {{ui:Stop}} iqeda ukusebenza kwesinyathelo esisenziwayo bese igcina lokho okufinyelele kukho. {{ui:Undo}} ithatha ukusebenza kwonke (noma ukubekwa kokugcina) emuva; {{ui:Reset}} ibuyisela iskena ezixhumanisweni zefayela lalo.

Ukuze kube lula ekhompyutheni enelaptop, i-ICP isebenza ngengxenye ehliliwe yamaphoyinti ({{ui:Amaphoyinti asetshenzisiwe}}, 5,000 kuya ku-60,000) futhi ayinaki okuhambisana okukude kakhulu kune-{{ui:Ibanga elikhulu lokuhlangana}} (ngokuzenzakalelayo 5% wosayizi weskena, iyancipha lapho izinzile). Idinga ukubekwa okungaqondile kuqala: izikena ezihlangana kancane zibika ukuthi azikwazi ukuhlanganiswa. Izindawo ezibukeka zilingene noma ezimqondo kuphela azikwazi ukulungisa indawo yazo ngaphansi kwazo; engeza amapheya kulokhu.

## Londoloza nokuthumela

- {{ui:Save project}} ibhala ifayela elincane le-`.ccscans.json`: igama leskena ngalinye, usayizi kanye nesigxivizo sezigaba zalo zokuqala ezingama-64 KB, nokuguqulwa kwalo. Alinawo amaphoyinti. {{ui:Open project…}} ithola amafayela eskena ngalezo zinkomba (amafayela kumele afakwe kuqala) futhi ibuyisele wonke ukuguqulwa.
- {{ui:Export LAS}} no-{{ui:Export E57}} zibhala ifayela elilodwa elinazo zonke izikena endaweni yazo ebhalisiwe. Amaphoyinti awabhalwa kabusha emadwebeni wokuqala; ukuguqulwa kusetshenziswa ngesikhathi kuphuma. Uma i-{{ui:Funda wonke amaphoyinti kumafayela}} ivuliwe, ifayela ngalinye lifundwa kabusha ngephoyinti ngalinye (kuze kufike ezigidini ezingu-20 ngeskena); uma ivaliwe, kubhalwa kuphela amaphoyinti abonakala kuwo wokubuka.
- {{ui:Show registered cloud}} (CadCraft) ibhala i-LAS bese iyinamathisela ngaphansi komdwebo ezixhumanisweni zayo, njengalo naliphi ifu.

:::note
Akukho okulayishwa. Ukubhalisa kusebenza ezinyunithini zamafayela ngokwawo futhi kugcina amamilimitha: i-LAS ibhalwa ngesikali esilingana (kuze kufike ku-0.1 mm), i-E57 ngamanani amade. Uhlelo lokuhlanganisa lungena ku-LAS kuphela uma zonke izikena zibiza ikhodi efanayo ye-EPSG. Umbhali we-E57 ngowethu; uhlolwa ngokufunda amafayela awo kulesi sifundi nangelibE57Format.
:::
