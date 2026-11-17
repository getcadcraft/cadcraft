---
title: Paveikslėliai brėžinyje
summary: Įdėkite PNG arba JPEG paveikslėlį, iškirpkite jį į stačiakampį arba daugiakampį, parodykite DWG naudojamus paveikslėlius ir atspausdinkite juos ryškiai.
keywords: pastearea, parea, nukopijuota sritis, kopijuota sritis, markupcraft, tikras dydis, realus dydis, uždėjimas, overlay, ole, ole2frame, įterptas objektas, įklijuoti paveikslėlį, įklijuoti ekrano nuotrauką, ctrl+v, iškarpinės paveikslėlis, ekrano nuotrauka, paveikslėlis, vaizdas, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logotipas, nuotrauka, rastras, imagedef, xref, spausdinimas, plot, pdf, raiška
from: 4025ac97
---

## Ką sukursite

Įmonės logotipą, įdėtą į antraštės bloką, iškirptą iki norimos dalies, ir PDF, kuriame jis spausdinamas savo raiška.

## Įdėkite paveikslėlį

1. Įveskite {{cmd:IMAGEATTACH}} (arba `IAT`) ir paspauskite {{key:Enter}}. Pasirinkite PNG arba JPEG failą.
2. `Specify the lower-left corner`: spustelėkite arba įveskite tašką.
3. `Specify its width`: plotis brėžinio vienetais. {{key:Enter}} palieka siūlomą plotį: vienas vienetas vienam pikseliui arba plotį, kurį šiam failui nurodėte paskutinį kartą (užklausa nurodo, kuris).
4. `Specify its rotation angle`: {{key:Enter}}, jei pasukimo nereikia.

Paveikslėlis yra vienas objektas: pažymėkite jį pagal rėmelį ir perkelkite, kopijuokite, sukite, keiskite mastelį ar ištrinkite kaip bet kurį bloką.

:::note
Paveikslėlio failas lieka kartu su brėžiniu, kol jis atidarytas. Įrašytas DWG nurodo failo pavadinimą, kaip ir kitos programos; jame nėra pikselių. Laikykite paveikslėlį šalia brėžinio.
:::

## Įklijuokite ekrano nuotrauką arba nukopijuotą paveikslėlį

1. Nukopijuokite paveikslėlį (ekrano nuotrauką su {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=jūsų ekrano nuotraukų įrankis}} arba Kopijuoti vaizdą kitoje programoje ar naršyklėje).
2. Nukreipkite žymeklį į vietą brėžinyje, kur jis turi būti, ir paspauskite {{key:Mod+V}}.

Paveikslėlio apatinis kairysis kampas nusileidžia ties žymekliu (arba vaizdo viduryje), 40 % tiek pločio, kiek matote; perkelkite, keiskite mastelį ir iškirpkite jį kaip bet kurį paveikslėlį. Jo pavadinimas – brėžinio pavadinimas su `-picture-1.png` (tada `-2`, …), ir istorijoje tai nurodoma. {{ui:Redaguoti}} › {{ui:Daugiau}} › {{ui:Įklijuoti paveikslėlį}} daro tą patį iš meniu (naršyklė gali paklausti pirmiau).

DWG išsaugo tik paveikslėlio failo pavadinimą, todėl įrašant brėžinį paveikslėlis taip pat įrašomas kaip atskiras failas. Laikykite abu toje pačioje aplanke: brėžinys rodo paveikslėlį iš ten. Naršyklėje tai yra antras atsisiuntimas, o istorijoje tai nurodoma. Jei iškarpinėje yra tik CadCraft objektai, {{key:Mod+V}} įklijuoja juos, kaip anksčiau.

## Įklijuokite sritį, nukopijuotą MarkupCraft programoje

{{ui:Kopijuoti sritį}} MarkupCraft programoje nukopijuoja dalį lapo kaip paveikslėlį, kuris žino savo dydį. CadCraft jį įklijuoja tokio dydžio.

1. MarkupCraft programoje nukopijuokite sritį (stačiakampį, apskritimą arba laisvos formos figūrą; {{ui:Kopijuoti kaip uždėklą}}, jei norite matyti savo brėžinį per ją).
2. CadCraft programoje paspauskite {{key:Mod+V}}, arba įveskite {{cmd:PASTEAREA}} (arba `PAREA`), arba pasirinkite {{ui:Redaguoti}} › {{ui:Daugiau}} › {{ui:Įklijuoti nukopijuotą sritį}}.
3. `Specify the lower-left corner of the copied area`: spustelėkite arba įveskite tašką. Rėmelis, kurio dydis lygus nukopijuotai sričiai, seka žymeklį.

Kaip jis išeina dydžiu:

- **Lapas turėjo brėžinio mastelį:** tikru dydžiu, brėžinio vienetais (2 m laiptų 1:50 detalė yra 2 m ilgio metrų brėžinyje, 78.74 colio colių brėžinyje). Daugiau nieko neklausiama.
- **Lapas neturėjo mastelio:** CadCraft praneša jo dydį popieriuje ir paklausia mastelio: įveskite `100` 1:100 lapui, paspauskite {{key:Enter}} popieriaus dydžiui arba įveskite `P`, spustelėkite du taškus įklijuotame paveikslėlyje ir įveskite, kiek jie iš tikrųjų nutolę (kaip daro {{cmd:SCANSCALE}}). Apatinis kairysis kampas lieka ten, kur padėjote.

Brėžinys be vienetų priima milimetrus, kaip ir PDF pagrindas. Uždėklas išlaiko savo skaidrų popierių ir prasideda tiek išblukęs, kiek buvo nukopijuotas; už apskritimo ar laisvos formos figūros taip pat skaidru. Įklijuota sritis yra paveikslėlis kaip bet kuris kitas: perkelkite, sukite, keiskite mastelį, iškirpkite ar ištrinkite, o visas įklijavimas yra vienas atšaukimo žingsnis. Įrašytas kaip DWG, ji yra IMAGE su savo išblukimu ir skaidrumu.

{{key:Mod+V}} įklijuoja sritį, kai iškarpinėje esantis paveikslėlis yra tos srities, arba kai sritis nukopijuota po to, ką nukopijavote CadCraft programoje (ir per paskutines 6 valandas). Kitu atveju įklijuoja kaip anksčiau. {{cmd:PASTEAREA}} įklijuoja paskutinę nukopijuotą sritį bet kada.

## Parodykite DWG naudojamus paveikslėlius

DWG saugo tik tai, kur buvo paveikslėliai, todėl CadCraft rodo kiekvieną kaip rėmelį su failo pavadinimu.

1. Įveskite {{cmd:IMAGE}} (arba `IM`). Komandų eilutėje išvardijamas kiekvienas paveikslėlio failas ir ar jis rodomas.
2. Pasirinkite failus (keletą iš karto). Failas, kurio pavadinime yra brėžinio nurodytas pavadinimas, taip pat tinka, nes eksportai dažnai prideda projekto priešdėlį.

## Iškirpkite paveikslėlį

1. Įveskite {{cmd:IMAGECLIP}} (arba `ICL`) ir pažymėkite paveikslėlį.
2. Pasirinkite `R` ir spustelėkite du kampus arba `P` ir spustelėkite daugiakampio taškus, tada {{key:Enter}}. `D` pašalina iškirpimą.

## Paveikslėlių spausdinimas

Paveikslėliai į PDF patenka kaip paveikslėliai, savo raiška ir po linijomis. {{ui:Spausdinti}} dialoge {{ui:Paveikslėliai}} gali apriboti juos iki 600, 300 arba 150 dpi, kad failas būtų mažesnis. JPEG patenka toks, koks yra.

## Kas kur įrašoma

| Formatas | Paveikslėliai |
|---|---|
| DWG (kiekviena versija) | Kaip paveikslėliai (IMAGE), su jų iškirpimu |
| DXF | Kaip jų rėmeliai su failo pavadinimu; įrašymas apie tai praneša |

## Kitų programų objektai (OLE)

Brėžinyje gali būti kitos programos sukurti objektai, pavyzdžiui paveikslėlis iš piešimo programos arba skaičiuoklės diapazonas (OLE objektai). CadCraft jų nepaleidžia ir neredaguoja bei negali įterpti naujų. Ką ji daro:

- **DXF** atveju OLE objektas atsidaro kaip rėmelis. Jei objektas išsaugojo savo paveikslėlį ir tas paveikslėlis yra bitmapas, paveikslėlis nupieštas rėmelyje; kitaip rėmelis turi etiketę su objekto tipu, pavyzdžiui „Microsoft Excel Worksheet (OLE)“. Rėmelį galite perkelti, kopijuoti ir ištrinti kaip bloką. {{cmd:SAVEAS}} į DXF 2000 jį vėl įrašo kaip OLE objektą, su nepakitusiais duomenimis.
- **DWG** atveju objektai išlaikomi ir įrašant kaip DWG grąžinami baitas po baito, bet **nerodomi**: DWG išlaiko objekto vietą savo duomenyse, o CadCraft jos dar neskaito. Istorijoje nurodoma, kiek jų išlaikyta. Įveskite {{cmd:OLELIST}}, kad pamatytumėte, kas jie yra (tipas, dydis, ar kiekvienas išsaugojo paveikslėlį), ir kad įdėtumėte paveikslėlio kopiją, kur norite: **Vieta** paprašo numerio, apatinio kairiojo kampo ir pločio ir nupiešia rėmelį su paveikslėliu viduje. Ta kopija yra rėmelis, kurį galite perkelti ar ištrinti; pats objektas lieka brėžinyje ir vis tiek įrašomas, kai įrašote.
- Objektas, atėjęs iš DXF, įrašomas DWG tik kaip rėmelis ir etiketė; istorijoje tai nurodoma. Įrašykite kaip DXF 2000, kad išlaikytumėte patį objektą.
- Metafailai (kuriuos įrašo daugelis programų) nenupiešiami: vietoj jų rodomas rėmelis ir etiketė.

## Dažnos klaidos

| Ką matote | Kodėl | Sprendimas |
|---|---|---|
| Rėmelis su failo pavadinimu | CadCraft neturi failo | {{cmd:IMAGE}}, tada pasirinkite failą |
| „That is not a picture“ | Pasirinktas objektas nėra paveikslėlis | Pasirinkite paveikslėlio rėmelį |
