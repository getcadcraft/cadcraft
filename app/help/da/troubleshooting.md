---
title: Fejlfinding
summary: Meddelelser, CadCraft viser, og problemer, du kan støde på, hver med årsag og løsning.
keywords: problem, fejl, virker ikke, meddelelse, kan ikke åbne, ukendt kommando, sker ingenting, hængt, taster virker ikke, tom, mangler, ret
from: 8299b222
---

## Åbning af filer

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| »CadCraft åbner DWG- og DXF-tegninger. "…" er hverken.« | Filen er ikke en `.dwg` eller `.dxf`. | Åbn selve tegningsfilen. En PDF kan hentes ind (Åbn spørger: importér eller vedhæft, se [PDF-underlag](topic:pdf-underlay)); billeder indsættes med `IMAGEATTACH`. |
| »Denne binære DXF slutter midt i et objekt: filen er afkortet eller beskadiget.« | Den binære DXF stopper, før den slutter. | Skriv RECOVER for at åbne det, der kan læses, eller bed om filen igen. |
| »Denne fil er ikke en læsbar DXF (forkert gruppekode på linje …).« | DXF'en er beskadiget, eller den er ikke rigtig en DXF. | Bed om filen igen, eller om en DWG. |
| »Denne tegning kunne ikke læses. Den kan være beskadiget, eller være gemt i en version, læseren ikke håndterer endnu (…).« | DWG-læseren kunne ikke læse den. | Bed om DWG'en gemt i en ældre version, eller om en DXF. |
| »Denne tegning er fra AutoCAD R11 / R12 (DWG AC1009), ældre end CadCraft læser …« | DWG-filer fra Release 12 og tidligere bruger et format, CadCraft ikke læser. | I programmet, der lavede den, gem den som DXF (enhver version) eller som en nyere DWG, og åbn den. CadCrafts egen Gem som tilbyder DXF R12 til programmer, der vil have det gamle format. |
| »Kunne ikke åbne …« efterfulgt af en netværksmeddelelse, ved den første DWG | DWG-læseren kunne ikke hentes: du er offline, og CadCraft er ikke gemt til offline brug, eller forbindelsen blev afbrudt. | Gå online og prøv igen, eller åbn en DXF. Klik på {{ui:Gem til offline brug}} og vent på »Klar til offline brug«, så DWG-filer åbnes offline næste gang. Se [Arbejde offline](common:offline). |
| Offline-knappen siger »Kunne ikke gemmes« | Nogle filer blev ikke hentet. | Kontrollér forbindelsen, og klik på knappen for at prøve igen. |
| Offline-knappen siger »Offline er ikke tilgængelig« | Private vinduer og nogle administrerede computere kan ikke gemme en offline-kopi. | Brug et almindeligt vindue, eller vær online. |
| CadCraft åbner ikke uden forbindelse | Den blev ikke gemt til offline brug i denne browser, eller browseren ryddede den. | Næste gang du er online, klik på {{ui:Gem til offline brug}} og vent på »Klar til offline brug«. |
| Tegningen åbnes, men dele mangler | Objekter, CadCraft endnu ikke kan tegne, eller lag, der er slukket eller frosset i filen. | Læs »Om denne fil« i venstre panel. Kontrollér panelet {{ui:Lag}}. |
| Tekst brydes over to linjer | CadCraft tegner tekst i en Helvetica-lignende skrifttype, som er bredere end nogle CAD-skrifttyper. | Forkort teksten i Egenskaber, eller accepter den ekstra linje. |
| En cirkel vises som en ellipse, eller spejlvendt tekst læses den rigtige vej | Objektet blev tegnet i et skråt plan, eller set nedefra, i programmet, der lavede filen. CadCraft viser det set oppefra, sådan som planvisningen i det program gør; tekst holdes læselig. | Intet at rette. For at se det på det andet programs måde, bed om tegningen fladgjort, eller med objekterne tegnet set oppefra. |
| En blok, cirkel eller målsætning står et andet sted end i programmet, der lavede filen | En tegningssituation, CadCraft læser forkert. | Fortæl os det på Discord, med filen hvis du kan dele den. |

## Kommandolinjen

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| »Ukendt kommando "…". Skriv HELP for listen.« | Ingen kommando eller alias med det navn. | Skriv `HELP`, eller se [Kommandoreference](topic:commands). Nogle kendte kommandoer er [ikke lavet endnu](topic:not-built-yet). |
| »Ingen sådan kommando« ved kommandolinjen, mens du skriver | Det, du skriver, matcher endnu ikke noget. | Skriv videre, eller kontrollér stavningen. |
| »Punkt eller valgmuligheds nøgleord kræves.« | Det, du skrev, er hverken et punkt eller en valgmulighed. | Kontrollér formatet: `x,y`, `@dx,dy`, `@d<a` eller et enkelt tal. Se [Indtastning af koordinater og afstande](topic:coordinate-entry). |
| »Kræver et positivt tal eller to punkter.« | En afstand var negativ eller ikke et tal. | Skriv et positivt tal, eller klik to punkter. |
| »Kræver en vinkel i grader eller to punkter.« | Vinklen var ikke et tal. | Skriv grader som et almindeligt tal. |
| »Kræver et tal.« | Der blev forventet et tal. | Skriv kun cifre. |
| »Ugyldigt valgmulighedsnøgleord.« | Bogstaverne matcher ikke en valgmulighed. | Skriv de store bogstaver, der vises i firkantede parenteser. |
| `*Cancel*` | Du trykkede {{key:Esc}}, eller {{key:Enter}} hvor et punkt var påkrævet. | Start kommandoen igen. |
| Skrivning når ikke kommandolinjen | En boks i et panel eller en dialog har markøren. | Tryk {{key:Enter}} eller {{key:Esc}}, eller klik på tegningen. |
| Kommandoen bruger objekter, du ikke valgte | De blev valgt, før du startede den. | Tryk {{key:Esc}} før kommandoen. |
| En linje gik et uventet sted hen | `x,y` er absolut. | Brug `@dx,dy` for relative punkter. |
| »Afslut eller annuller den aktuelle kommando først (Esc).« | Du trykkede {{key:Mod+S}}, mens en kommando kørte. | Tryk {{key:Esc}}, og gem derefter. |
| »Kunne ikke gemmes som DWG (AutoCAD 2000): … Prøv Gem som, og derefter DXF.« | Noget i tegningen kunne ikke skrives som DWG. | Tryk {{key:Mod+Shift+S}}, vælg {{ui:DXF R12}} og klik på {{ui:Gem}}. |
| »Ikke gemt.« | Du lukkede dialogen {{ui:Gem en kopi som}} med {{ui:Annuller}} eller {{key:Esc}}. | Tryk {{key:Mod+Shift+S}} igen, og klik på {{ui:Gem}}. |

## Redigering

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Et objekt kan ikke vælges | Dets lag er låst, slukket eller frosset; eller du er på et ark, og det er modellen inde i en viewport. | Lås laget op, eller gå til fanen {{ui:Model}}. |
| »Intet fundet der.« | Intet objekt under klikket. | Zoom ind, og klik på selve linjen. |
| »Intet krydser det objekt dér.« | {{cmd:TRIM}} fandt intet objekt, der krydser det stykke, du valgte. | Kontrollér, at skærelinjen virkelig krydser det. |
| »Kan ikke beskære det objekt.« | Beskær virker på linjer, buer, cirkler og polylinjer. | Eksplodér blokke først, eller slet og tegn igen. |
| »Ingen grænse i den retning.« | {{cmd:EXTEND}} fandt intet at møde. | Vælg tættere på den ende, der skal vokse. |
| »Kan ikke forskyde det objekt.« | Forskyd virker på linjer, buer, cirkler og polylinjer. | Eksplodér det først, eller tegn en parallel linje. |
| »Kan ikke forskyde så langt.« | Forskydningen ville vende formen på vrangen. | Brug en mindre afstand. |
| »Radius er for stor.« eller »Afstand er for stor.« | Afrundingen eller affasningen ville gå ud over enden af en linje. | Angiv en mindre radius med `R`, eller mindre afstande med `D`. |
| »Kun første eller sidste segment af en åben polylinje kan skæres tilbage.« | Hjørnet ville skære ind i midten af en polylinje. | Vælg to segmenter af polylinjen ved siden af hinanden, eller brug `P` for hvert hjørne. |
| »Vælg en anden, forskellig linje.« | Det andet valg var den samme linje, eller ikke en linje. | Vælg en anden linje. |
| »Kun polylinjer, blokreferencer og målsætninger eksploderes.« | Valget havde intet at eksplodere. | Vælg en polylinje, blokreference eller målsætning. |
| »Det er det aktuelle lag. Gør et andet lag aktuelt først.« | Du prøvede at slukke det aktuelle lag. | Klik på et andet lags navn, og slå derefter dette fra. |
| »Der findes allerede et lag ved navn …« | Lagnavne skal være unikke. | Vælg et andet navn. |
| »Intet at fortryde.« | Der er intet tilbage at fortryde, eller du åbnede eller startede en tegning (det rydder historikken). | — |

## Målsætninger og blokke

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Målsætningens tekst og pile er meget små eller store | Størrelser angives i tegningsenheder; den samlede skala passer ikke til tegningen. | Sæt {{cmd:DIMSCALE}} til plotskalaen; se [Indstil målsætningsstørrelser](topic:dimension-settings). |
| »Vælg et punkt inde i vinklen, du vil måle.« | Vinkelmålsætningens placering ligger på et ben. | Klik inde i vinklen. |
| »Linjerne er parallelle.« | Parallelle linjer har ingen vinkel mellem sig. | Vælg to linjer, der mødes. |
| »Vælg en lineær eller justeret målsætning.« | {{cmd:DIMCONTINUE}} eller {{cmd:DIMBASELINE}} skal have en at starte fra. | Vælg en lineær eller justeret målsætning. |
| »Denne tegning har endnu ingen blokke: F indsætter en fra en fil, L fra biblioteket …« | Tegningen har ingen blokke af sin egen. | Skriv `F` eller `L`, eller lav en blok med {{cmd:BLOCK}}. |
| »Ingen blok ved navn "…".« | Navnet er forkert. | Meddelelsen viser de blokke, der findes. |
| »Et blocknavn kan ikke starte med * eller bruge …« efterfulgt af en liste over tegn | Navnet har et tegn, som blokke ikke kan bruge. | Brug bogstaver, cifre, `-` og `_`. |
| »En blok kan ikke indeholde sig selv.« | Valget indeholder en reference til den blok, der laves. | Fjern den reference. |
| »Ingen objekter valgt; intet lavet.« | Du trykkede {{key:Enter}}, før du valgte. | Kør {{cmd:BLOCK}} igen, og vælg objekterne. |

## Ark og plot

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| »Viewports placeres på et layout. Åbn en layoutfane (eller lav en med LAYOUT) først.« | {{cmd:MVIEW}} på fanen {{ui:Model}}. | Klik først på en arkfane. |
| »Åbn layoutet med viewporten først.« | {{cmd:VPVIEW}} på fanen {{ui:Model}}. | Klik først på arkfanen. |
| En viewports skala ser ti gange forkert ud | Tegningsenhederne er forkerte. | Sæt {{ui:Enheder}} i {{ui:Aktuelle indstillinger}}. |
| »Der er endnu intet at plotte.« | Modellen er tom. | Tegn noget, eller åbn en tegning. |
| »Vælg vinduet, der skal plottes.« | {{ui:Et vindue…}} er valgt, og intet vindue blev valgt. | Klik på {{ui:Vælg}}, og vælg to hjørner. |
| »… større end papiret: kanterne skæres af.« | Området passer ikke i den skala. | Vælg en mindre skala, et større papir, eller {{ui:Tilpas til papir}}. |
| »Browseren blokerede den nye fane, så PDF'en blev hentet i stedet.« | Pop-ups er blokeret for siden. | Åbn den hentede PDF, eller tillad pop-ups for siden. |
| Tegn udskrives som »?« | PDF'ens skrifttyper har intet bogstav til dem (sjældne ideografer, hindi og andre skrifter, der kræver kompleks formning, …), eller den større skrifttype kunne ikke hentes (offline). Europæiske skriftsystemer, kyrillisk, græsk, hebraisk, arabisk, persisk, urdu, thai, kinesisk, japansk og koreansk udskrives som sig selv. | For arabisk, thai, kinesisk, japansk eller koreansk: plot igen med forbindelse. Andre skriftsystemer er ikke lavet endnu. |
| Konstruktionslinjer vises i PDF'en | Deres lag plottes. | Klik på lagets printerknap. |
| Alle linjer er lige tykke | Deres {{ui:Linjetykkelse}} er {{ui:Standard}}, så de udskrives med dialogens pennebredde. | Giv lagene eller objekterne en {{ui:Linjetykkelse}} i det højre panel, eller vælg en {{ui:Linjetykkelse}} i dialogen. For at se linjetykkelser på skærmen, tryk {{ui:LWT}} i statuslinjen. |

## Taster og skærm

| Symptom | Årsag | Løsning |
|---|---|---|
| F3, F7 eller F8 ændrer lydstyrken eller åbner Mission Control | Mac-funktionstaster. | Hold **fn** nede, eller brug knapperne i statuslinjen. Se [Taster, mus og trackpads](common:keys). |
| F7 spørger om caret-browsing | Firefox bruger selv F7. | Vælg Nej; brug knappen {{ui:Gitter}}. |
| {{key:Mod+N}} åbnede et browservindue | Browseren beholder den tast. | Klik på {{ui:Ny}}, eller skriv `NEW`. |
| {{key:Mod+A}} valgte kommandolinjens tekst | Kommandolinjen havde markøren. | Klik først på et objekt, eller skriv `ALL` ved en `Select objects`-prompt. |
| {{key:Delete}} sletter ikke | Kommandolinjen havde markøren. | Skriv `E` og tryk {{key:Enter}}. |
| Højreklik gør intet på en Mac-trackpad | Control-klik kan tælle som et almindeligt klik. | Klik med to fingre. |
| Intet panorerer på en trackpad | Der er ingen midterknap, og mellemrum panorerer ikke. | Stryg med to fingre: 2D-visningen panorerer (knib og musehjulet zoomer). Eller træk med højreklik holdt nede. |
| Det første {{key:Esc}} forlod fuldskærm | Browseren bruger Esc til at forlade fuldskærm. | Tryk {{key:Esc}} igen for at annullere kommandoen. |
| {{key:F1}} gør intet på en Mac | F1 er en lysstyrketast. | Hold **fn** nede, eller klik på {{ui:Help}}. |
| Skrivning går ind i hjælpens søgefelt | Hjælpepanelet har markøren. | Klik på tegningen. |
| Tegningen blev tom | Du har zoomet langt væk. | Klik på {{ui:Udstrækning}}, eller dobbeltklik på hjulet. |
| »Forlad siden?« når fanen lukkes | Der er ikke-gemte ændringer. | Bliv, gem med {{key:Mod+S}}, og luk derefter. |
