---
title: "Dokumentai ir revizijos (saugykla)"
summary: Žingsnis po žingsnio vadovas vienam tikram darbui – projekto aplanko įdėjimas po kontrole, brėžinio paėmimas, pakeitimas, grąžinimas su pastaba, siuntimas peržiūrai, patvirtinimas ir išleidimas, istorijos ir naudojimo peržiūra, ką mato antras asmuo, kol failas užrakintas, ir kaip tai veikia su debesies aplankais.
keywords: saugykla, dokumentai, vadovas, pamoka, paimti, grąžinti, revizija, išleisti, patvirtinti, užrakinti, istorija, kur naudojama, debesies aplankas, projekto aplankas, dokumentų valdymas, pdm, du žmonės, bendras aplankas
from: 3829528d
---

## Ką darysite

Jūs esate Ana, dirbanti su Riverside clinic kartu su kolega Benu. Projekto brėžiniai yra viename aplanke, kurį abu pasiekiate (bendrame diske, sinchronizuojamame aplanke arba debesies aplanke). Pabaigoje vienas failas bus perėjęs nuo pirmos kopijos iki išleistos revizijos **A**, bus pakeistas dar kartą kaip **B.1**, pamatysite, kas ką darė, ir pamatysite, ką mato Benas, kai laikote failą.

Viskas laikoma paslėptame aplanke `.ccvault` šalia jūsų failų: jokio serverio, nieko neįkeliama (debesies aplankas yra išimtis, žr. paskutinį žingsnį). Visiems mygtukams ir taisyklėms vienoje vietoje žr. temą *Dokumentai: paėmimas, revizijos ir išleidimas*, kur ją turi jūsų programa.

## 1. Nustatykite projekto aplanką

1. Pasirinkite {{ui:Dokumentai…}} skirtuko **Rodinys** meniu {{ui:Daugiau}} arba įveskite `DOCUMENTS` (arba `DOCS`) ir paspauskite {{key:Enter}}.
2. Pasirinkite {{ui:Pasirinkite projekto aplanką}} ir išsirinkite aplanką, kuriame yra projekto brėžiniai. (Projektų aplankai veikia Studio ir naršyklėse, kurios gali atverti aplanką, pavyzdžiui Chrome ir Edge. Kitose naršyklėse skydelis apie tai praneša.)
3. Pasirinkite {{ui:Keisti}} šalia **Jūs:** ir įveskite savo vardą, `Ana` (jei paklausia, taip pat šio kompiuterio pavadinimą). Skydelyje dabar rašoma *Jūs: Ana ant* ir jūsų kompiuterio pavadinimas. Jūsų vardas bus prie visko, ką darote.
4. Pasirinkite {{ui:Sukurti saugyklą šiame aplanke}} ir įveskite projekto pavadinimą, `Riverside clinic`. Skydelyje rašoma *Saugykla pradėta projektui Riverside clinic.*

## 2. Įdėkite failą po kontrole

1. Atidarykite **Failai, nesantys saugykloje** ir pasirinkite {{ui:Pridėti}} šalia `plans/A-101.dxf`.
2. Jis atsiranda skyriuje **Failai saugykloje** revizijoje **A.1**, būsena **Vykdomas darbas**. A.1 yra pirmoji jo kopija: saugykla saugo kiekvienos revizijos kopiją.

## 3. Paimkite, pakeiskite, grąžinkite

1. Pasirinkite {{ui:Atverti}} šalia `plans/A-101.dxf`. Brėžinys atsidaro CadCraft, o skydelis užsidaro, kad matytumėte jį. Skydelis vis dar pasiekiamas vienu veiksmu: `DOCUMENTS`.
2. Vėl atidarykite skydelį ir pasirinkite {{ui:Paimti}}. Eilutėje dabar rašoma **Paimta jums**. Aplanke `.ccvault/locks` sukurtas užrakto failas; niekas kitas negali paimti šio failo, kol jūs jo negrąžinsite.
3. Nubrėžkite ką nors: pridėkite liniją, pajudinkite sieną. Nieko, ką darote, negalima išsaugoti virš saugyklos failo, nebent brėžinys paimtas jums; {{ui:Įrašyti kaip}} visada veikia tik jūsų kopijai.
4. Atidarykite skydelį, pasirinkite {{ui:Grąžinti}} ir įveskite, kas pasikeitė (`Moved the door`). Skydelis praneša *grąžinta kaip A.2*. Failas projekto aplanke dabar yra brėžinys, kurį atidarėte, o užrakto nebėra. Grąžinus be pakeitimų, revizija lieka ta pati.

Jei pakeičiate nuomonę, {{ui:Anuliuoti paėmimą}} grąžina failą be naujos revizijos.

## 4. Peržiūra ir išleidimas

1. Pasirinkite {{ui:Siųsti peržiūrai}}. Būsena tampa **Peržiūrai**, o failas tampa tik skaitomas.
2. Prieš tvirtinant pasirinkite {{ui:Projekto parametrai}} ir išvardykite, kas gali tvirtinti (po vieną vardą eilutėje), pavyzdžiui `Ben` ir `Carla`, ir pažymėkite taisyklę, kad tvirtintojas turi būti kitas nei autorius. Pasirinkite {{ui:Įrašyti parametrus}}. Dabar pati saugykla atmeta bet kurį kitą.
3. Benas (arba Carla) pasirenka {{ui:Patvirtinti}} ir įveda tvirtintojo vardą. Būsena tampa **Išleista**, o revizija – **A**, su *patvirtino* ir vardu. Išleistas failas yra tik skaitomas. {{ui:Grąžinti}} būtų grąžinęs jį į **Vykdomas darbas** su priežastimi.

Tvirtintojo vardas yra vardas, įvestas skydelyje; tai yra patvirtinusiojo įrašas, o ne tapatybės įrodymas.

## 5. Nauja revizija

1. Išleistame faile pasirinkite {{ui:Nauja revizija}}. Ją laikote kitai raidei.
2. Pakeiskite ją, tada {{ui:Grąžinti}}. Revizija yra **B.1**, vykdomas darbas. Išleiskite ją taip pat, ir ji tampa **B**. {{ui:Anuliuoti paėmimą}} prieš pirmą grąžinimą palieka ją **A**.

Revizijų raidės eina A, B … Z, AA, AB. Jei jūsų standartas kai kurias raides praleidžia, projekto nustatymas *Naudoti ASME Y14.35 seką* kitoms revizijoms praleidžia I, O, Q, S, X ir Z.

## 6. Pažiūrėkite, kas įvyko

Pasirinkite failo pavadinimą, kad atvertumėte jo detales:

- **{{ui:Istorija}}**: kiekvienas įvykis, naujausias pirmas, su tuo, kas, kuriuo kompiuteriu ir kada: *Grąžinta A.2* – Ana, *Išleista* – Benas ir t. t.
- **{{ui:Revizijos}}**: revizijų lentelė. {{ui:Atidaryti kopiją}} atveria reviziją kaip paprastą kopiją, kurios negalima perrašyti saugyklos failo; {{ui:Palyginti su}} išvardija, kas pridėta, pašalinta ir pakeista, palyginus su ankstesne revizija ar bet kuria kita.
- **{{ui:Naudoja}}**: brėžiniai, į kuriuos jis susieja (xref).
- **{{ui:Naudojamas}}**: {{ui:Naudojamas}} išvardija kiekvieną kitą saugyklos brėžinį, kuris susieja su šiuo: pakeiskite bazinį planą ir žinote, kuriuos lapus patikrinti.

## Revizija ant lapo

Atidarę brėžinį (ir turėdami jame išdėstymą), pasirinkite {{ui:Redakcijų blokas}}: išleistų revizijų lentelė nubraižoma viršutiniame dešiniajame lapo kampe. Pasirinkite {{ui:Užpildyti antraštės blokus}}, kad užpildytumėte antraštės bloko atributus, pažymėtus `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` arba `APPROVED_BY`, failo revizija, būsena, data ir tvirtintojas. Kai patvirtinate kitą išleidimą, redakcijų blokas atnaujinamas.

## 7. Ką mato Benas, kol jūs laikote failą

Dabar vėl paimkite failą ir paprašykite Beno atverti tą patį projekto aplanką savo kompiuteryje ir atidaryti skydelį. Failo eilutėje jis mato **Paėmė Ana** jūsų kompiuteryje **nuo** laiko, ir nėra mygtuko {{ui:Paimti}}. Jei jis vis tiek bandys, saugykla atmes: užraktas yra failas, kurio sistema du kartus nekurs, todėl du žmonės negali abu laikyti failo, net tą pačią sekundės dalį, kai aplankas yra diske Studio. (Naršyklėje aplankas leidžia tik maksimalias pastangas, ir skydelis tai nurodo skiltyje **Aplankas**.)

Jei Ana nėra ir Benui reikia failo, {{ui:Nutraukti paėmimą}} jį atlaisvina. Jis turi įvesti priežastį; ji eina į žurnalą kartu su tuo, kieno buvo paėmimas. Kai projekte nurodyti administratoriai, tik jie gali tai padaryti. Paėmimas, senesnis nei senumo riba (pagal nutylėjimą 14 dienų), pažymimas *seniai*. Nutraukus paėmimą, Anos vėlyvas grąžinimas atmetamas, todėl jūs du negalite perrašyti vienas kito.

## 8. Debesies aplankai

Debesies aplankas yra projekto aplankas, laikomas jūsų komandos debesies saugykloje, todėl komandai nereikia bendro disko. Studio, prisijungus prie savo CadCraft paskyros, skydelyje šalia {{ui:Pasirinkite projekto aplanką}} rodomas {{ui:Atverti debesies aplanką}}. Pasirinkite jį ir išsirinkite aplanką, rodomą kaip darbo sritis / aplankas. Darbo srities savininkas pirmiausia sukuria aplanką, o komandos debesies saugykla turi būti įjungta. Viskas aukščiau veikia taip pat; užraktą sukuria serveris, kuris griežtai veikia tarp žmonių. Jei nesate prisijungę, skydelis paprašo prisijungti. Įprastame naršyklės skirtuke debesies mygtukas nesiūlomas; naudokite Studio.

## Pabandykite

Atlikite aštuonis aukščiau nurodytus žingsnius su tikro failo kopija. Dviem žmonėms skirtiems žingsniams reikia kito žmogaus arba dviejų langų su dviem vardais. Jei bandote su tikru bendru aplanku, Bendruomenės bandymų puslapyje yra patikrinimas, kuris klausia būtent to, ir priima rezultatus.
