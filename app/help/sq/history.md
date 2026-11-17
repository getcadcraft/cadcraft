---
title: Historiku: versionet dhe çfarë ndryshoi
summary: Shiko versionet e një vizatimi (kopjet që Studio mban kur ruan, dhe ato të cloud-it), hap ose rikthe një version, dhe krahaso dy versione me ndryshimet e shfaqura me ngjyra.
keywords: historiku, versionet, historiku i versioneve, rikthe, versioni i mëparshëm, zhbëj një ruajtje, krahaso, krahaso vizatimet, dwgcompare, ndryshimet, të shtuara, të hequra, të ndryshuara, snapshot, kopje rezervë, versionet në cloud
from: 141d37b3
---

## Çfarë do të bësh

Një shikim i një versioni më të hershëm të një vizatimi, dhe një listë e asaj që është ndryshe nga tani: çfarë u shtua, çfarë u hoq dhe çfarë u ndryshua, e shënuar me ngjyra në vizatim.

## Hap Historikun

Shkruaj `HISTORY` (ose `HIST`) dhe shtyp {{key:Enter}}, ose zgjidh {{ui:Historiku…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}. Paneli hapet pranë vizatimit dhe mbetet i hapur ndërsa punon, kështu mund ta lëvizësh dhe zmadhosh vizatimin me ngjyrat mbi të.

Historiku punon në CadCraft Studio. Në një shfletues, paneli vetëm e thotë këtë.

## Ku vijnë versionet

- **Në këtë kompjuter.** Çdo herë që hap një vizatim nga një skedar në Studio, dhe çdo herë që e ruan, Studio mban një kopje të skedarit në depozitën e vet në këtë kompjuter. Kopja e parë është {{ui:Ashtu si u hap}}: skedari siç ishte para ruajtjes së parë mbi të. Studio mban 25 kopjet më të reja të çdo vizatimi, dhe më të vjetrat shkojnë të parat kur të gjitha kopjet së bashku kalojnë 400 MB. Një ruajtje që nuk ndryshon asgjë nuk mban asnjë kopje. Asgjë nuk ngarkohet.
- **Në cloud.** Kur hap një vizatim nga skedarët e tu në cloud në Studio, paneli liston edhe {{ui:Në re}}: çdo version që mban cloud-i, me numrin e tij, kush e ruajti dhe shënimin. Paneli vetëm i lexon ato. CadCraft nuk i dërgon ende ruajtjet e veta në cloud, kështu këto janë versionet e ruajtura nga pajisje të tjera dhe nga uebi. Hyr përsëri në Studio nëse thotë se hyrja ka skaduar.

Një vizatim që nuk e ke ruajtur akoma nuk ka kopje: ruaje më parë.

## Hap ose rikthe një version

- {{ui:Hap}} e vendos atë version në një skedë të vetën. Vizatimi yt nuk preket.
- {{ui:Rikthe}} zëvendëson këtë vizatim me atë version. Pyet së pari. Studio mban një kopje të vizatimit siç është tani në Historik (e shënuar {{ui:Para rikthimit}}) përpara se ta bëjë këtë, dhe asgjë nuk shkruhet në skedar deri sa ta ruash. Rikthimi nuk zhbëhet me {{key:Mod+Z}}; përdor atë kopje.

## Krahaso

1. Kliko {{ui:Krahaso}} te një version. Ai krahasohet me {{ui:Vizatimi siç është tani}}; për ta krahasuar me një version tjetër, zgjidh atë te {{ui:Krahaso me}} më parë.
2. Lexo rezultatin nën listë: sa objekte u shtuan, u hoqën dhe u ndryshuan, dhe një listë e tyre. Kliko një element të listës për ta lëvizur pamjen te ai.
3. Në vizatim:
   - objektet **jeshile** u shtuan,
   - objektet **të kuqe** u hoqën (janë vetëm në versionin më të vjetër),
   - objektet **portokalli** u ndryshuan: forma e re është e plotë dhe ajo e vjetër me vija të ndërprera.
4. {{ui:Shfaq në vizatim}} i ndez dhe fik ngjyrat; {{ui:Hiq ngjyrat}} e heq rezultatin. Mbyllja e panelit i pastron edhe ato.

Lista thotë çfarë ndryshoi te një objekt i ndryshuar: tekstin e tij, nëse u zhvendos, formën, shtresën, ngjyrën, llojin e vijës ose trashësinë e vijës. Çdo fletë krahasohet më vete; ngjyrat shfaqen në fletën që është hapur.

:::note
Një vizatim nuk ka një numër të qëndrueshëm për çdo objekt, kështu CadCraft i përputh objektet sipas asaj që janë: i njëjti objekt në të dy anët është i pandryshuar; një objekt me të njëjtin lloj dhe shtresë, që shtrihet brenda madhësisë së vet të një objekti të vjetër, është i njëjti objekt, i ndryshuar; çfarë mbetet është i shtuar ose i hequr. Një objekt i zhvendosur shumë larg nga vendi i vet shfaqet si i hequr në një vend dhe si i shtuar në tjetrin. Një referencë bllokuese numëron përmbajtjen e bllokut të saj.
:::

## Gabimet e zakonshme

- **"Nuk ka kopje ende."** Studio mban një kopje në çdo hapje dhe ruajtje të një vizatimi që ka skedar në këtë kompjuter. Një vizatim i hapur nga një skedë shfletuesi, ose që nuk është ruajtur kurrë, nuk ka asnjë.
- **Lista e cloud-it mungon.** Shfaqet për një vizatim të hapur nga cloud-i në Studio; një skedar i hapur nga disku nuk është vizatim cloud.
- **Gjithçka duket e ndryshuar.** Dy versione të ruajtura nga programe të ndryshme e shkruajnë vizatimin në mënyra të ndryshme (emrat e blloqeve anonime, rrumbullakimi). Krahaso versionet e ruajtura nga CadCraft.
