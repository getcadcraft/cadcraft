---
title: Suteikite komandos parinktims savo raides
summary: Atsakykite į komandos parinktis raidėmis, kurias pasirenkate, bet kuria kalba, iš vieno tekstinio failo, kurį galite redaguoti, importuoti ir eksportuoti.
keywords: parinkčių raidės, optionkeys, optkeys, parinkties raktas, raktas, perrašyti, atvaizdavimas, pritaikyti, savos raidės, polar, array, P, PO, kalba, versti parinktis, trumpa forma, importuoti, eksportuoti, dviprasmiška
from: 7c8328c6
---

## Ką sužinosite

Kaip pakeisti raides, kurias įvedate atsakydami į komandos parinktis. Pavyzdžiui, {{cmd:ARRAY}} klausia `[Stačiakampis (R)/Poliarinis (PO)]` ir priima `PO` poliariniam; galite padaryti, kad `P` ar kitos raidės veiktų taip pat, net jūsų kalba.

## Kaip atsakoma į parinktis

Kai komanda rodo parinktis laužtiniuose skliaustuose, didžiosios raidės yra tos, kurias reikia įvesti: `Poliarinis (PO)` yra `PO`, o `Baigti (X)` yra `X`.

Galite įvesti ir mažiau raidžių. Jei įvestis tinka tik vienai rodomai parinkčiai, CadCraft ją priima: su `[Stačiakampis (R)/Poliarinis (PO)]` vienas `P` reiškia Poliarinis. Jei tinka dviem, komandų eilutė jas įvardija ir klausia dar kartą:

```
C gali būti COUnt, COLumns. Įveskite daugiau raidžių.
```

Skaičiai niekada nespėjami, todėl įvestas atstumas ar kiekis visada skaitomas kaip skaičius.

## Pridėti savo raides

Kiekviena komanda išlaiko savas įtaisytąsias raides. Jūsų pridedamos raidės prideda prie jų, todėl jūsų sąraše yra tik tai, ką pakeitėte.

1. Atverkite {{ui:Parametrai}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Parinkčių raidės}} ir spustelėkite {{ui:Redaguoti…}}. Arba įveskite {{cmd:OPTIONKEYS}} ir paspauskite {{key:Enter}}.
2. Skiltyje {{ui:Komanda}} pasirinkite komandą, pavyzdžiui `ARRAY`. Sąraše yra kiekviena komanda, kuri prašo parinkčių, ir jis pradeda nuo komandos, kurią naudojote paskutinę.
3. Skiltyje {{ui:Parinktis}} pasirinkite parinktį. Kiekviena rodo savo įtaisytąsias raides laužtiniuose skliaustuose, pavyzdžiui `Poliarinis (PO)`.
4. Lauke {{ui:Jūsų raidės}} įveskite norimas raides, pavyzdžiui `P`, ir spustelėkite {{ui:Pridėti}}.
5. Parinktis dabar rodoma po {{ui:Jūsų raidės}} su savo įtaisytosiomis raidėmis ir jūsų raidėmis. Spustelėkite {{ui:Įrašyti}}.

Paleiskite {{cmd:ARRAY}}, pasirinkite objektą ir paspauskite {{key:Enter}}. Raginimas rodo jūsų raides po parinkties, `Poliarinis (P)`, ir `P` į jį atsako.

Norėdami pašalinti vieną, spustelėkite x eilutės gale ir {{ui:Įrašyti}}. Parinktis grįžta prie tik savo įtaisytųjų raidžių.

## Raidės, kurių negalite naudoti

Redaktorius atmeta raides, kurios paslėptų tai, ką komandų eilutė jau skaito, ir nurodo kodėl:

- kitos tos pačios komandos parinkties įtaisytosios raidės (`R` Poliarinis `ARRAY`, kur `R` yra Stačiakampis);
- objektų prilipimo žodis iš trijų ar daugiau raidžių, pavyzdžiui `END`, `MID` ar `CEN`, ir žodžiai `ALL` bei `LAST`;
- tos pačios raidės dviem skirtingoms tos komandos parinktims.

Kol kas nors sąraše rodoma raudonai, {{ui:Įrašyti}} išjungtas: pataisykite eilutę arba ją pašalinkite, ir jis vėl įsijungs. Raginimo įtaisytosios raidės visada laimi prieš jūsų, todėl jūsų sąrašas niekada neužkerta kelio įtaisytam atsakymui. Raidės, kurios sutampa su komandos pavadinimu, pavyzdžiui `L` ar `C`, yra leistinos: ties parinkties raginimu komandų eilutė skaito atsakymą, o ne paleidžia komandą.

Komandai rodomos parinktys ateina iš komandų, kurios dalijasi jos raginimais, todėl kartais komanda išvardija parinktį, kurios ji prašo tik kai kuriais atvejais.

## Vienas pasirinkimas kiekvienai komandai

Po {{ui:Komanda}} pasirinkite {{ui:Visos komandos}}. Tada parinktys yra visos parinktys, kurias turi bet kuri komanda, pavyzdžiui `Baigti (X)` ar `Anuliuoti (U)`. Raidės, kurias čia pridedate, atsako į tą parinktį bet kurioje komandoje, kuri ją siūlo. Komandai pridėtos raidės laimi prieš šias.

## Raidės jūsų kalba

Raidės gali būti iš bet kurios abėcėlės, todėl galite atsakyti į parinktis neperjungdami klaviatūros: pavyzdžiui, pridėkite `Ž` parinkčiai „Uždaryti“ po {{ui:Visos komandos}}, arba `Ą` parinkčiai „Poliarinis“ komandai `ARRAY`.

CadCraft pristatomas tik su anglų raidėmis. Jūsų sąrašas yra tai, kaip jūs, jūsų biuras ar žmonės, kalbantys jūsų kalba, nustato likusias, o {{ui:Eksportuoti}} sukuria failą, kurį galite perduoti.

## Redaguoti kaip tekstą

{{ui:Redaguoti kaip tekstą}} redaktoriuje rodo tą patį sąrašą kaip eilutes teksto, po vieną kiekvienai parinkčiai, ir tai taip pat yra tai, ką {{ui:Eksportuoti}} įrašo:

```
ARRAY.PO,  P
*.X,       Q
```

Kiekviena eilutė yra komanda, taškas, parinkties įtaisytosios raidės, kablelis ir jūsų raidės. Žvaigždutė vietoj komandos reiškia visas komandas. Eilutė, prasidedanti `;`, yra pastaba.

## Kas lieka tas pats

- Įtaisytosios raidės veikia kartu su jūsų.
- Rutinos ir įrankių juostos mygtukai toliau naudoja įtaisytąsias raides, todėl nieko, ką įkėlėte, nesugadinama. Norėdami patys įvesti įtaisytąsias raides ten, kur jūsų raidės trukdytų, pirma įrašykite pabraukimą: `_PO`.
- Komandos trumpasis pavadinimas yra kas kita: žr. [Redaguoti komandų slapyvardžius](topic:command-aliases).

## Eilutės, kurių CadCraft nepriima

Kai redaguojate kaip tekstą arba importuojate failą, redaktorius nurodo kiekvieną problemą su eilutės numeriu:

- komanda neegzistuoja (komandos slapyvardis tinka: `AR.PO` skaitoma kaip `ARRAY.PO`);
- eilutė neatitinka `COMMAND.OPTION, LETTERS`;
- raidėse yra tarpas ar ženklas (tik raidės ir skaitmenys, daugiausiai 16);
- tos pačios raidės atsako į dvi skirtingas tos komandos parinktis.

## Importas ir eksportas

{{ui:Eksportuoti}} įrašo jūsų raides į teksto failą, kad galėtumėte jį laikyti arba perduoti kam nors. {{ui:Importuoti…}} perskaito tokį failą. Abu yra redaktoriuje ir {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Parinkčių raidės}}.

Parametruose {{ui:Importuoti…}} pakeičia jūsų failą pasirinktu. Failas su eilute, kuri susiduria ar negali būti naudojama, nepriimamas; atverkite redaktorių ir importuokite ten, kad pamatytumėte eilutes. Redaktoriuje jis tik užpildo langelį: nieko nesikeičia, kol nespustelėsite {{ui:Įrašyti}}.

## Įkelti iš naujo ar pašalinti

Įveskite {{cmd:REINIT}} ir paspauskite {{key:Enter}}, kad vėl pritaikytumėte savo failą. Norėdami pašalinti raidę, ištrinkite jos eilutę ir spustelėkite {{ui:Įrašyti}}.

## Jūsų raidės seka jūsų paskyrą

Kai esate prisijungę prie getcadcraft.com, jūsų raidės saugomos su jūsų paskyra. Atverkite CadCraft kitoje naršyklėje ar kitame kompiuteryje su ta pačia paskyra – jos ateina savaime; komandų eilutėje rašoma `Option letters from your account`. Jei pakeitėte jas dviejose vietose, naujausia kopija laimi, o ta, kurią ji pakeitė, išsaugoma vieną kartą.

{{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Parinkčių raidės}} nurodo, kokioje būklėje jos yra. Atsijungę ar neprisijungę, jos lieka šioje naršyklėje ir nukeliauja į jūsų paskyrą kitą kartą, kai jas išsaugosite prisijungę.

Susiję: [Redaguoti komandų slapyvardžius](topic:command-aliases) · [CadCraft nustatymai](topic:settings) · [Komandos](topic:commands)
