---
title: Įkelti programas (APPLOAD)
summary: Įkelkite LISP rutinas ir jų dialogų failus, iškelkite juos, įkelkite vėl iš istorijos ir laikykite naudojamas paleisties rinkinyje.
keywords: appload, ap, įkelti programą, lisp, lsp, dcl, rutina, paleisties rinkinys, iškelti, istorija, nuleisti, įkelti, tinkinti, tvarkyti
from: 89e0ee95
---

## Ką sužinosite

Kaip įkelti LISP rutiną (`.lsp` failą), kad jos komandos veiktų CadCraft, kaip ją iškelti ir kaip nustatyti, kad ji būtų įkeliama kiekvieną kartą paleidus CadCraft.

## Įkelkite rutiną

1. Atidarykite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Įkelti programą…}}, arba įveskite {{cmd:APPLOAD}} (arba `AP`) ir paspauskite {{key:Enter}}.
2. Spustelėkite {{ui:Įkelti failą…}} ir pasirinkite vieną ar kelis `.lsp` failus. Rutina, kuri atidaro dialogą, paprastai pateikiama su `.dcl` failu: pasirinkite ir jį.
3. Dialogas parodo, ką sukūrė kiekvienas failas, pavyzdžiui: „Įkelta delblocks.lsp: 1 komanda, DELBLOCKS.“
4. Spustelėkite {{ui:Uždaryti}}, įveskite rutinos komandą ir paspauskite {{key:Enter}}.

Taip pat galite užtempti `.lsp` ir `.dcl` failus ant brėžinio arba ant dialogo {{ui:Įkelti programas}}: jie įkeliami iš karto.

Failas nuskaitomas čia, jūsų naršyklėje. Nieko neįkeliama į tinklą.

:::tip
Tuščioje komandų eilutėje paspauskite {{key:Enter}}, kad rutinos komanda vėl būtų paleista, kaip ir bet kuri kita komanda. Jūsų komandų pseudonimai taip pat gali ją pasiekti: žr. „Redaguoti komandų pseudonimus“.
:::

## Iškelkite rutiną

Dialoge {{ui:Įkelti programas}}, skyriuje {{ui:Įkeltos programos}}, spustelėkite šalia failo esantį {{ui:Iškelti}}. Jo sukurtos komandos išnyksta, kol vėl jo neįkelsite.

## Įkelkite rutiną kiekvieną kartą paleidus CadCraft

1. Įkelkite rutiną.
2. Skyriuje {{ui:Įkeltos programos}} spustelėkite šalia jos esantį {{ui:Pridėti į paleisties rinkinį}}.

Nuo dabar ji įkeliama pati, kaskart paleidus CadCraft šioje naršyklėje. Kad tai sustabdytumėte, po {{ui:Paleisties rinkinys}} spustelėkite šalia jos esantį {{ui:Šalinti}}.

Paleisties rinkinys saugo kiekvieno failo kopiją šios naršyklės saugykloje. Jei pakeisite rutiną, įkelkite naująjį failą ir vėl jį pridėkite.

## Įkelkite acad.lsp ir acaddoc.lsp iš palaikymo aplanko (Studio)

CadCraft Studio dialoge {{ui:Įkelti programas}}, skiltyje {{ui:Palaikymo aplankas}}, pasirenkamas aplankas jūsų kompiuteryje. Spustelėkite {{ui:Pasirinkti aplanką…}}. Paleidus CadCraft, iš to aplanko nuskaitomi `acad.lsp`, paskui `acaddoc.lsp` (nepriklausomai nuo pavadinimų rašybos), įkeliami, o tada įkeliamas paleisties rinkinys. `acaddoc.lsp` nuskaitomas iš naujo kiekvieną kartą atidarius naują brėžinio kortelę. Kitų aplanko failų neskaitoma, o failas, didesnis nei 2 MB, praleidžiamas su pranešimu.

Jei failas apibrėžia funkciją pavadinimu `S::STARTUP`, ji paleidžiama vieną kartą, įkėlus failus (taip pat po paleisties rinkinio). {{ui:Įkelti dabar}} daro tą patį pagal prašymą; {{ui:Išvalyti}} pamiršta aplanką.

Naršyklėje puslapis negali išsaugoti aplanko, todėl palaikymo aplanko nėra: naudokite aukščiau aprašytą paleisties rinkinį. Sukompiliuoti `.fas` ir `.vlx` failai bei vietinės programos ir toliau atmetami.

## Įkelkite failą iš istorijos

{{ui:Istorija}} išvardija failus, kuriuos įkėlėte šioje naršyklėje, naujausi – pirmi. Spustelėkite šalia vieno esantį {{ui:Įkelti}}, kad jį įkeltumėte dar kartą, neieškodami kompiuteryje.

## Failai, kurių CadCraft negali įkelti

| Failas | Kas tai | Ką daryti |
|---|---|---|
| `.fas`, `.vlx` | sukompiliuotas arba apsaugotas LISP | vietoj jo įkelkite `.lsp` šaltinį |
| `.arx`, `.crx`, `.dbx` | vietinės Windows programos | šių CadCraft paleisti nėra galimybės |
| `.dvb` | VBA projektas | šių CadCraft paleisti nėra galimybės |
| `.craft`, `.lua`, `.py` | CraftScript scenarijai | atidarykite juos PartCraft Script darbo srityje |

Dialogas {{ui:Įkelti programas}} pasirinkus failą nurodo, kuris tai iš šių.

## Sustabdykite rutiną

Paspauskite {{key:Esc}}. Rutinos užklausų metu {{key:Esc}} ją atšaukia taip, kaip rutina numato (vykdomas jos pačios valymas). Jei ji užimta ir nieko neklausia, {{key:Esc}} ją visiškai sustabdo ir apie tai praneša; įkeltos rutinos lieka įkeltos.

:::note
Viskas, ką rutina pakeičia brėžinyje, yra vienas žingsnis: vienas {{key:Mod+Z}} atšaukia visa.
:::
