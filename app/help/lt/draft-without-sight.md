---
title: Braižymas be regėjimo
summary: Įjunkite Prieigą, ir CadCraft kiekvieną komandą ir rezultatą perskaitys per ekrano skaitytuvą, apibūdins brėžinį ir tai, kas yra šalia žymeklio, leis perkelti žymeklį klaviatūra, paleis garsą kiekvienam fiksavimo taškui ir rankenėlei ir priims komandas balsu, kai jūsų naršyklė tai gali padaryti jūsų kompiuteryje.
keywords: prieiga, ekrano skaitytuvas, aklas, silpnaregis, NVDA, VoiceOver, JAWS, Orca, klaviatūros žymeklis, komandos balsu, kalba, garsai, fiksavimo garsai, apibūdinti brėžinį, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Prieiga** leidžia braižyti nematant ekrano. Ji išjungta, kol ją įjungsite, kad niekas jos atsitiktinai nesuaktyvintų.

## Įjunkite ją

Atverkite **Parametrai** (krumpliaratis arba Ctrl+,), raskite **Braižymas be regėjimo** ir pasirinkite **Įjungta**. Arba įveskite `ACCESS` komandų eilutėje ir atsakykite `On`. Ši parinktis įsimenama šiame kompiuteryje.

Kai Prieiga įjungta:

- **Viskas, ką rodo komandų eilutė, perskaitoma** per ekrano skaitytuvą: tai, ką įvedėte, užklausa, atsakymas ir kiekviena klaida. CadCraft naudoja savo mandagius ir skubius tiesioginius regionus, todėl ekrano skaitytuvui, kuris skaito tiesioginius regionus, nieko papildomai nustatyti nereikia. Klaidos ir atšaukimai nutraukia kalbėjimą; visa kita laukia eilės.
- **Brėžinio sritis pasiekiama.** Spauskite Tab, kol išgirsite „Brėžinys“, arba iš komandų eilutės spauskite Shift+Tab. Tai sritis, kuri klavišus perduoda CadCraft.

## Klavišai brėžinyje

| Klavišas | Ką daro |
|---|---|
| Rodyklių klavišai | Perkelia klaviatūros žymeklį. Žingsnis yra apie šimtąją dalį to, ką rodo ekranas, suapvalintas iki 1, 2 arba 5. Shift perkelia dešimt kartų toliau, Ctrl – dešimtadalį. |
| Enter | Pasirenka tašką po žymekliu, lygiai taip kaip spustelėjimas. |
| Space | Paspaudžia Enter komandų eilutėje: baigia LINE, pasirenka numatytąjį. |
| Tab, Shift+Tab | Pereina prie kito arba ankstesnio fiksavimo taško šalia žymeklio, pirmiausia artimiausio. |
| G | Peršoka per pažymėtų objektų rankenėles. |
| D | Apibūdina brėžinį: kiek objektų, kokių, kokio dydžio, kas pažymėta. |
| W | Pasako, kur yra žymeklis ir kiek toli jis nuo paskutinio taško. |
| N | Pasako, kas yra šalia žymeklio, pirmiausia artimiausia, su atstumu ir puse. |
| S | Apibūdina pažymėtus objektus. |
| R | Pakartoja paskutinį pasakytą dalyką. |
| V | Įjungia arba išjungia balsą. |
| / | Pereina į komandų eilutę. |
| ? | Išvardija šiuos klavišus. |

Judant klavišais, sakoma, kur atsidūrėte. Kai komanda laukia taško, ji taip pat pasako, kiek toli ir kuria kryptimi esate nuo paskutinio taško, pavyzdžiui: „2400 nuo paskutinio taško, į dešinę, 0 laipsnių kampu“.

## Komandos

- {{cmd:ACCESS}} įjungia arba išjungia Prieigą, fiksavimo garsus ir balsą ir pasako būseną.
- {{cmd:DESCRIBE}} pasako, ką turi brėžinys.
- {{cmd:WHEREAMI}} pasako, kur yra žymeklis.
- {{cmd:NEARBY}} pasako, kas yra arti žymeklio.
- {{cmd:SAYSEL}} pasako, kas pažymėta, po vieną sakinį kiekvienam objektui.
- {{cmd:VOICE}} įjungia arba išjungia kalbamas komandas.

Šios komandos tik nuskaito brėžinį ir parodo atsakymą; jos nieko nekeičia.

## Fiksavimo ir rankenėlių garsai

Parametruose įjunkite **Fiksavimo ir rankenėlių garsus**. Kiekvienas fiksavimo tipas turi savo tonus ir garsą, todėl galite atskirti galinį tašką nuo vidurio taško, centro, sankirtos ir kitų; rankenėlė skamba dvigubu tekšnoju. Garsas pasisuka į kairę arba dešinę, sekdamas žymeklį per ekraną. Garsai sukuriami jūsų kompiuteryje; nieko neatsisiunčiama.

## Komandos balsu

Parametruose įjunkite **Komandas balsu**. Ištarkite komandos pavadinimą („line“, „circle“, „move“), tada ištarkite skaičius taip, kaip juos perskaitytumėte: „taškas trys šimtai, kablelis, keturi šimtai“, „atstumas tūkstantis du šimtai“, „kampas keturiasdešimt penki“. „Enter“, „cancel“, „undo“ ir „redo“ daro tai, ką sako. Išgirstas tekstas pakartojamas balsu, o frazė, kuri nėra komanda, pranešama, o ne spėjama.

**Kur atpažįstama kalba.** CadCraft neturi savo kalbos paslaugos ir jokio garso niekur nesiunčia. Ji prašo jūsų naršyklės atpažinti kalbą šiame kompiuteryje. Jei naršyklė tai gali, pasirinkimas yra **Šiame kompiuteryje**, ir joks garsas iš kompiuterio neišeina. Jei negali, balsas lieka išjungtas, nebent pasirinksite **Naršyklės internetinę paslaugą**, kuri leidžia naršyklei siųsti garsą jos gamintojo kalbos atpažinimo paslaugai. Prieš apsisprendžiant, Parametrai nurodo, kas taikoma.

## Ko dar nedaro

- Prieiga yra tik CadCraft. Kitos septynios programos seks, su tais pačiais klavišais ir garsais.
- Brėžinio tekstas (pastaba, bloko pavadinimas) perskaitomas taip, kaip užrašytas; jis niekada nepriimamas kaip nurodymas.
- Ji išbandyta dirbtiniais patikrinimais ir naršyklės testais; rankiniai patikrinimai su NVDA, VoiceOver ir aklu arba silpnaregiu testuotoju dar laukia. Jei ją išbandysite, praneškite, kas trūksta.
