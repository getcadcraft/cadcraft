---
title: Blokų atributai
summary: Peržiūrėkite ir keiskite reikšmes, kurias blokų nuoroda turi, pvz., elemento numerį ar gamintoją, ir išsaugokite jas kurdami kopiją.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, antraštės blokas, redaguoti vietoje, atributų redaktorius, attdef, apibrėžti atributą, bedit, blokų redaktorius, bclose, atributas, atributai, attrib, žymė, elemento numeris, reikšmė, nematomas, pastovus, blokas, ypatybės, sąrašas, įrangos žymė
from: 34d307c7
---

## Kas yra atributai

Atributas yra pavadinta reikšmė, kuri lydi blokų nuorodą: įrangos žymės elemento numeris, patalpos žymės pavadinimas, durų gaisrinis atsparumas. Bloko apibrėžime nurodyta, kokius atributus jis turi (kiekvienas turi **žymę**, **raginimą**, **numatytąją reikšmę** ir vietą, dydį bei kampą tekstui). Kiekviena bloko nuoroda turi savo reikšmes.

Kai kurie atributai yra **nematomi**: jie saugo duomenis, pvz., gamintoją ar modelio numerį, bet niekada nepiešiami. Kai kurie yra **pastovūs**: visoms nuorodoms vienodi, nustatyti bloko.

## Iš kur atsiranda atributai

- Atidarytų DWG ir DXF failų blokai išlaiko savo atributus su kiekvienos nuorodos reikšmėmis.
- Blokai, įkelti su {{cmd:INSERT}} ir parinktimi {{ui:File}}, išlaiko savo atributus. Žr. [Įterpti iš failo ar bibliotekos](topic:insert-from-file-and-library).
- Bibliotekos elementai įkeliami kaip blokai su atributais: matomas elemento numeris ir elemento duomenys, nematomi.
- Patys sukurti blokai: pirmiausia apibrėžkite atributus su {{cmd:ATTDEF}} (žemiau), tada pažymėkite juos kartu su kitais objektais kurdami bloką.

## Apibrėžti atributus savo blokams

1. Nubrėžkite bloko linijas, pvz., patalpos žymę.
2. Pasirinkite {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} arba įveskite `ATT` ir paspauskite {{key:Enter}}.
3. Istorijoje rodomi režimai (`Nematomas=Ne Pastovus=Ne Iš anksto nustatytas=Ne`). Įveskite `[Nematomas (I)]`, `[Pastovus (C)]` arba `[Iš anksto nustatytas (P)]`, kad perjungtumėte vieną, ir paspauskite {{key:Enter}}, kai viskas teisinga. Nematomos reikšmės išsaugomos, bet nepiešiamos; pastovi reikšmė visose nuorodose yra ta pati; iš anksto nustatytos neklausiama įterpiant bloką.
4. Įveskite žymę (pvz., `ROOM_NO`: didžiosiomis raidėmis, be tarpų), raginimą (`Patalpos numeris`) ir numatytąją reikšmę (`101`).
5. Spustelėkite, kur turi būti reikšmė, ir nurodykite aukštį bei pasukimą. Žymė rodoma brėžinyje.
6. Sukurkite bloką su {{cmd:BLOCK}}, pažymėdami linijas ir atributų apibrėžimus kartu. Nuoroda, kuri pakeičia juos, gauna numatytąsias reikšmes; kiekvienas naujas {{cmd:INSERT}} jų paklausia.

Pasirinkus atributo apibrėžimą, {{ui:Properties}} rodomi {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} ir režimai.

## Keisti bloką: bloko redaktorius

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) atidaro bloką atskirai: įveskite jo pavadinimą (arba pirmiausia pažymėkite nuorodą). Viršutinėje juostoje nurodoma, kurį bloką redaguojate. Piešite, trinate ir keičiate jo objektus įprastomis komandomis, taip pat pridedate ar keičiate atributų apibrėžimus. Tada spustelėkite {{ui:Save block}} (arba įveskite {{cmd:BCLOSE}} ir `S`): kiekviena nuoroda parodo pakeitimą, o vienas {{key:Mod+Z}} atšaukia viską. {{ui:Discard changes}} (`BCLOSE`, `D`) palieka bloką tokį, koks buvo.

Kai pridedate, pašalinate ar keičiate atributų apibrėžimus, įrašymas taip pat suderina kiekvieną nuorodą: įvestos reikšmės išsaugomos, naujas atributas gauna numatytąją reikšmę, pašalintas – išnyksta, o kiekvienas atributas grįžta į vietą, kurią nurodo apibrėžimas. Istorijoje nurodoma, kiek nuorodų atnaujinta.

## Redaguoti antraštės bloką vietoje (REFEDIT)

Antraštės blokas lape dažnai yra bloke. Norėdami pakeisti jo linijas ar tekstus, nepaliekant lapo:

1. Pažymėkite antraštės bloką, tada {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (arba įveskite {{cmd:REFEDIT}}).
2. Jo turinys tampa įprastais objektais toje pačioje vietoje; viskas kita išblukinama ir negali būti keičiama.
3. Keiskite, trinkite ar piešiekite: nauji objektai tampa bloko dalimi.
4. Viršutinėje juostoje spustelėkite {{ui:Save the block}} (arba įveskite {{cmd:REFCLOSE}} ir `S`). Kiekviena nuoroda parodo pakeitimą, o vienas {{key:Mod+Z}} atšaukia visą redagavimą. {{ui:Discard}} palieka bloką tokį, koks buvo.

Susietas brėžinys, dinaminis blokas arba nuoroda, kurios mastelis pagal plotį ir aukštį skiriasi, negali būti redaguojama vietoje: naudokite {{cmd:BEDIT}} (arba atidarykite susietą brėžinį).

:::note
Įrašykite arba atmeskite bloko redaktoriuje prieš įrašydami brėžinį: failas, įrašytas, kol redaktorius atviras, turi bloką tokį, koks buvo prieš tai.
:::

## Užpildyti reikšmes įterpiant bloką

1. Įveskite `I` ir paspauskite {{key:Enter}}, įveskite bloko pavadinimą ir paspauskite {{key:Enter}}.
2. Spustelėkite, kur jis turi būti.
3. CadCraft paklausia kiekvienos reikšmės, pvz., `Įveskite elemento numerį (ITEM) <>`. Įveskite reikšmę ir paspauskite {{key:Enter}}, arba paspauskite {{key:Enter}}, kad liktų kampiniuose skliaustuose rodoma numatytoji reikšmė.

Reikšmių, kurias blokas pažymi kaip iš anksto nustatytas, ir pastovių reikšmių neklausiama. Jos paima numatytąją reikšmę.

## Peržiūrėti ir keisti reikšmes

1. Spustelėkite bloko nuorodą.
2. Dešiniajame skydelyje, po {{ui:Attributes}}, kiekviena žymė turi savo reikšmę. Nematomos rodomos kaip `paslėpta`.
3. Spustelėkite reikšmę, įveskite naują ir paspauskite {{key:Enter}}.

Brėžinys iš karto rodo naują reikšmę. Kiekvienas pakeitimas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia.

**Atributų redaktorius.** Du kartus spustelėkite nuorodą su atributais (arba įveskite {{cmd:EATTEDIT}}): dialogo langas {{ui:Edit attributes}} išvardija kiekvieną žymę su raginimu ir reikšme. Įveskite naujas reikšmes; spustelėkite eilutę, kad pakeistumėte tik šios nuorodos atributo {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} ir {{ui:Invisible}}. {{ui:Apply}} palieka langą atvirą; {{ui:OK}} taiko ir uždaro. Kiekvienas {{ui:Apply}} arba {{ui:OK}} yra vienas atšaukimo žingsnis.

**Komandinėje eilutėje** {{cmd:ATTEDIT}} klausia kiekvienos reikšmės iš eilės: įveskite naują arba paspauskite {{key:Enter}}, kad liktų sena.

## Keisti atributų apibrėžimus (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) išvardija bloko atributus: keiskite žymę, raginimą ar numatytąją reikšmę, pažymėkite {{ui:Invisible}}, {{ui:Constant}} arba {{ui:Preset}}, ir perkelkite juos aukštyn ar žemyn (tokia tvarka klausiamos reikšmės). Kai pažymėtas {{ui:Update the references (values kept)}}, {{ui:Apply}} taip pat suderina kiekvieną nuorodą; pervadinta žymė išlaiko savo reikšmes. Kiekvienas {{ui:Apply}} yra vienas atšaukimo žingsnis.

{{cmd:ATTSYNC}} suderina nuorodas su jų bloko apibrėžimais rankiniu būdu: `S` pasirenka nuorodą, `N` įvardija bloką, `A` atlieka visus blokus. Reikšmės išsaugomos.

Bibliotekos elemento savo laukų (id, versija, licencija ir autorystė) reikšmės rodomos, bet negali būti redaguojamos, kad atnaujinimų tikrinimas veiktų. Jo elemento numerį ir kiekį galite keisti.

## Išvardyti juos

Pažymėkite nuorodas ir įveskite `LI` (dėl {{cmd:LIST}}). Istorijoje kiekvienas atributas rodomas kaip `ŽYMĖ = reikšmė`, su `(nematomas)` arba `(pastovus)`, kai tai taikoma.

## Perkėlimas, sukimas ir išardymas

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} ir {{cmd:MIRROR}} išlaiko reikšmes; tekstas juda kartu su bloku ir lieka įskaitomas.
- {{cmd:EXPLODE}} matomus atributus paverčia paprastu tekstu su reikšmėmis. Nematomi išmetami.

## Įrašymas

Įrašytas DWG ir įrašytas DXF failas išlaiko kiekvieną atributą: kiekvieno bloko apibrėžimus (taip pat nematomus, pastovius ir iš anksto nustatytus) ir kiekvienos nuorodos reikšmes. Kitos CAD programos skaito juos kaip įprastus bloko atributus.

DXF R12 formate reikšmė, ilgesnė nei 255 simboliai, sutrumpinama iki 255, ir istorijoje tai nurodoma.

## Dažniausios klaidos

- **Reikšmė nerodoma brėžinyje.** Ji nematoma arba tuščia. Nematomos reikšmės vis tiek rodomos dešiniajame skydelyje.
- **Įvesta reikšmė atsidūrė komandinėje eilutėje.** Pirmiausia spustelėkite reikšmės langelį dešiniajame skydelyje.
