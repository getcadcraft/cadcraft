---
title: Kelių nuskaitymų sujungimas į vieną
summary: Sudėkite skirtingose vietose atliktus nuskaitymus į vieną koordinačių sistemą pagal pasirinktų taškų poras arba įvestus tikslus, patikslinkite juos ICP metodu, įrašykite sujungimą kaip projektą ir eksportuokite sujungtą debesį į LAS arba E57. Komanda – REGISTERSCANS.
keywords: sujungimas, registracija, nuskaitymai, taškų debesis, icp, iteratyvusis artimiausio taško metodas, tikslai, taškų poros, standusis pertvarkymas, lygiuoti, sulieti, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ką darysite

Keli to paties vietos nuskaitymai (kiekvienas iš savo skenerio padėties) iš pradžių turi savo koordinates. Sujunkite juos: kiekvienam nuskaitymui nustatykite po vieną padėtį, kad visi būtų vienoje koordinačių sistemoje, tada įrašykite tai kaip projektą ir išsaugokite sujungtą debesį viename LAS arba E57 faile.

## Sudėkite nuskaitymus

1. Atidarykite langą (įveskite `REGISTERSCANS` (arba `REGSCAN`)). {{ui:Pridėti nuskaitymus…}} priima LAS, LAZ, E57, PLY, PCD, PTX, PTS arba XYZ failus; taip pat failus galima nuvilkti į langą. Nuskaitymai su skirtingais vienetais atmetami su pastaba: pirmiausia vieną iš jų konvertuokite.
2. Pasirinkite {{ui:Nuskaitymas perkelti}} ir {{ui:Sudėti pagal}}. Paveiksle kiekvienas nuskaitymas rodomas dabartinėje padėtyje, kiekvienas skirtinga spalva: {{ui:Planas}}, {{ui:Priekis}} arba {{ui:Šonas}}. Vilkite, kad slinktumėte, sukite ratuką, kad keistumėte mastelį.
3. **Pagal taškų poras.** Spustelėkite {{ui:Pasirinkti porą}}, tada tašką perkeliamame nuskaitime, tada tą pačią vietą kitame nuskaitime (kampas, tikslas, kolonos pagrindas). Atlikite tai bent tris kartus, pasirinkdami taškus, kurie nėra vienoje tiesėje ir yra išsidėstę toliau vienas nuo kito. Spustelėkite {{ui:Dėti pagal poras}}: nuskaitymas sudedamas pagal mažiausių kvadratų metodą, o **Liko** rodo, kiek kiekviena pora dar nesutampa. Pora su dideliu skaičiumi yra blogai pasirinkta: pašalinkite ją spustelėdami kryželį ir sudėkite iš naujo.
4. **Pagal tikslus.** Jei žinomos taško tikrosios koordinatės (geodeziniai tikslai), spustelėkite {{ui:Pasirinkti, tada įvesti tikslą}}, spustelėkite tašką jo nuskaitime ir eilutėje įveskite tikslo X, Y ir Z. Poros ir įvesti tikslai gali būti maišomi laisvai.

## Patikslinkite ICP metodu

Poros duoda apytikslę padėtį. {{ui:Patikslinti}} perkelia nuskaitymą tol, kol jo paviršiai sutaps su kito nuskaitymo paviršiais: pirmiausia **taškas su tašku**, tada **taškas su plokštuma**. Lentelėje pateikiamas kiekvienas žingsnis su paklaida ir sutapusių taškų skaičiumi; virš jos esanti linija vaizduoja mažėjančią paklaidą. {{ui:Sustabdyti}} baigia vykdomą žingsnį ir palieka pasiektą rezultatą. {{ui:Anuliuoti}} atšaukia visą vykdymą (arba paskutinį sudėjimą); {{ui:Atstatyti}} grąžina nuskaitymą į jo failo koordinates.

Kad nešiojamajame kompiuteryje būtų greičiau, ICP veikia su dalimi taškų ({{ui:Naudojami taškai}}, nuo 5,000 iki 60,000) ir ignoruoja atitikimus, esančius toliau nei {{ui:Didžiausias atitikimo atstumas}} (pagal numatytuosius nustatymus 5 % nuskaitymo dydžio, mažėjančio, kai sprendimas stabilizuojasi). Pirmiausia reikia apytikslės padėties: nuskaitymai, kurie vos persidengia, praneša, kad jų negalima sutapatinti. Paviršiai, kurie yra tik plokšti arba tik tiesūs, negali nustatyti padėties išilgai savęs; tokiu atveju pridėkite poras.

## Įrašymas ir eksportas

- {{ui:Įrašyti projektą}} įrašo nedidelį failą `.ccscans.json`: kiekvieno nuskaitymo pavadinimą, dydį ir pirmųjų 64 KB kontrolinį pėdsaką kartu su jo transformacija. Taškų jame nėra. {{ui:Atidaryti projektą…}} suranda nuskaitymų failus pagal šias nuorodas (failai pirmiausia turi būti pridėti) ir atkuria visas transformacijas.
- {{ui:Eksportuoti LAS}} ir {{ui:Eksportuoti E57}} įrašo vieną failą, kuriame kiekvienas nuskaitymas yra savo sujungtoje vietoje. Originaliuose failuose taškai niekada nerašomi iš naujo; transformacija taikoma eksportuojant. Kai įjungta {{ui:Skaityti visus taškus iš failų}}, kiekvienas failas skaitomas iš naujo kiekvienam taškui (iki 20 milijonų kiekvienam nuskaitymui); kai išjungta, įrašomi tik peržiūros lange rodomi taškai.
- {{ui:Rodyti suvienodintą debesį}} (CadCraft) įrašo LAS failą ir pridedia jį prie brėžinio jo paties koordinatėmis, kaip ir bet kurį debesį.

:::note
Niekas nesiunčiama. Sujungimas atliekamas failų pačių vienetais ir išlaikomi milimetrai: LAS įrašomas su tinkamu masteliu (iki 0,1 mm), E57 – su dvigubo tikslumo reikšmėmis. Koordinačių sistema perkeliama į LAS tik tada, kai visi nuskaitymai nurodo tą patį EPSG kodą. E57 rašiklis yra mūsų pačių; jis tikrinamas perskaitant jo failus šiuo skaitytuvu ir su libE57Format.
:::
