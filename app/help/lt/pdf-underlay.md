---
title: PDF pagrindai ir PDF importas
summary: Padėkite PDF puslapį po brėžiniu, kad galėtumėte jį perbraižyti ir spausdinti, arba paverskite puslapio linijas ir tekstą brėžinio objektais.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, pagrindas, perbraižyti, importuoti pdf, nuskaitymas, aukšto planas, išblukinimas, iškarpa, sluoksniai, prilipimas, atverti pdf
from: aa301d0f
---

## Du būdai įkelti PDF puslapį

- **Prijungti** ({{cmd:PDFATTACH}}) palieka PDF kaip paveikslėlį po brėžiniu. Jį galite perbraižyti, prilipti prie jo linijų, išblukinti, iškirpti, ir jis spausdinamas kartu su lapu. Brėžinyje lieka tik failo pavadinimas.
- **Importuoti** ({{cmd:PDFIMPORT}}) paverčia puslapio linijas, kreives, užpildus ir tekstą įprastais brėžinio objektais, esančiais sluoksniuose, pavadintuose pagal PDF. Jie yra jūsų redaguojami, o PDF po to nebereikalingas.

Atidarant PDF su {{ui:Atverti}}, paklausiama, kurį iš šių dviejų norite.

## Prijungti puslapį

1. Įveskite `PDFATTACH` (arba `PDFATT`) ir pasirinkite PDF. Jei jame yra keli puslapiai, įveskite puslapio numerį.
2. Spustelėkite įterpimo tašką (apatinis kairysis puslapio kampas).
3. Paspauskite {{key:Enter}}, kad būtų tikras puslapio dydis, arba įveskite mastelį: brėžinio vienetų skaičius vienam PDF taškui (taškas yra 1/72 colio, todėl milimetrų brėžinyje tai yra 0.3528).
4. Paspauskite {{key:Enter}}, jei posūkio nereikia, arba įveskite kampą.

Puslapis yra objektas, panašus į bloko nuorodą: jį galima perkelti, pasukti, keisti jo mastelį, kopijuoti, trinti ir perkelti į sluoksnį. Išjungus jo sluoksnį, jis dingsta. Priartinus puslapis vėl nubraižomas ryškiai.

## Perbraižyti

Įjungus {{ui:Prilipimas}}, žymeklis prilimpa prie PDF pačių linijų: galinių taškų, vidurio taškų ir susikirtimų (ir {{ui:Artimiausias}}, kai šis prilipimas įjungtas). Tekstas, nubraižytas kaip puslapio raidės, neprilimpa.

## Koreguoti

- `PDFADJUST`: **Išblukinimas** (0–80 procentų), **Kontrastas** (0–100), **Vienspalvė** ir **Įjungti/išjungti**, kad paslėptumėte jį neištrindami.
- `PDFCLIP`: rodo tik puslapio stačiakampį ar daugiakampį; **Naikinti** pašalina iškarpą.
- `PDFLAYERS`: PDF gali turėti savo sluoksnius. Komanda juos išvardija; įveskite numerį, kad šiam pagrindui įjungtumėte arba išjungtumėte sluoksnį. Sluoksniai, kuriuos failas turi išjungtus, pradeda išjungti.

## Spausdinti ir įrašyti

{{cmd:PLOT}} spausdina puslapį kaip linijas, užpildus ir tekstą (todėl jis lieka ryškus ir su ieškoma teksto). PDF viduje esantys paveikslėliai ekrane rodomi, bet dar nespausdinami.

DWG arba DXF 2000 išsaugo pagrindą kaip nuorodą: failo pavadinimą, puslapį, vietą, mastelį, posūkį, iškarpą, išblukinimą ir kontrastą. Pats PDF brėžinyje nėra. Iš naujo atverkite brėžinį, įveskite `PDF` ir vėl pasirinkite failą; iki tol puslapiai rodomi kaip rėmeliai, o tikrą dydį įgyja tik tada. Senesnis DXF (R12) pagrindų neturi: išsaugo rėmelį ir pavadinimą. Kaip kitos programos skaito išsaugotą iškarpą ir mastelį, dar nepatikrinta.

## Importuoti puslapį

1. Įveskite `PDFIMPORT` (arba `PDFIM`) ir pasirinkite PDF ir puslapį.
2. Spustelėkite, kur turi būti puslapio apatinis kairysis kampas.
3. Paspauskite {{key:Enter}}, kad būtų tikras dydis, įveskite mastelį arba pasirinkite **Du taškai**: puslapis nubraižomas tikru dydžiu, tada spustelėkite du taškus, kurių atstumą žinote, ir įveskite tikrą atstumą; viskas bus pamasteliuota atitinkamai.

Linijos tampa linijomis ir polilinijomis, apskritimai ir lankai atpažįstami, užpildytos figūros tampa vientisomis brūkšniuotėmis, o tekstas tampa tekstu sluoksnyje, kurio pavadinimas baigiasi `-TEXT`. Tai vienas atšaukimo žingsnis. PDF paveikslėliai neimportuojami: vietoj to prijunkite puslapį. Nuskaitymas (puslapis, kuris yra tik paveikslėlis) neturi linijų, kurias būtų galima importuoti.

PDF failai skaitomi kaip nepatikimi: skriptai nevykdomi, o labai didelis puslapis nukerpamas ir apie tai pranešama.
